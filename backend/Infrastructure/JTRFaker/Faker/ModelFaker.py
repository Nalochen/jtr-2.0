import json
import random
import traceback
from typing import List, Union, Optional, Dict, Any

from sqlalchemy import ColumnDefault, Table, desc, Column
from sqlalchemy.orm import ColumnProperty

from Infrastructure.JTRFaker.Enum.ModelColumnTypesEnum import ModelColumnTypesEnum
from Infrastructure.JTRFaker.fake import fake
from DataDomain.Database.db import db


class ModelFaker:
    """
    The ModelFaker class is a utility class that helps in generating fake data for a given SQLAlchemy model.
    It uses the faker library to generate fake data based on the column types of the model.
    It also handles relationships between models and can generate data for many-to-many relationships.
    """

    def __init__(self, model: Union[Table, ColumnProperty]) -> None:
        """
        Initializes the ModelFaker instance with the given SQLAlchemy model.
        """

        self.model = model
        self.fake = fake

    def create(self, amount: int = 1) -> None:
        """
        Creates the specified amount of fake data entries for the model.
        It handles exceptions and rolls back the session in case of any errors.
        """

        if not isinstance(amount, int):
            amount = 1

        try:
            for _ in range(amount):
                data = {}

                for column in self.__getTableColumns():
                    if self.__isPrimaryKeyOrHasDefaultValue(column):
                        continue

                    data[column.name] = self._generateFakeData(column)

                if self.__isManyToManyRelationTable():
                    db.session.execute(self.model.insert().values(**data))

                else:
                    db.session.add(self.model(**data))


            db.session.commit()

        except Exception as e:
            db.session.rollback()
            print(f"Failed to commit: {e} {traceback.format_exc()}")

    def _generateFakeData(
            self, column: Column) -> Optional[Union[str, int, bool, None]]:
        """
        Generates fake data for a given column based on its type.
        It handles Enum, String, Integer, Boolean, DateTime, and Date column types.
        """

        columnType = column.type

        if column.doc:
            return f'{self._generateJsonData(column.doc)}'

        # Enum has to be the first type to check, or otherwise it
        # uses the options of the corresponding type of the enum options
        if isinstance(columnType, ModelColumnTypesEnum.ENUM.value):
            return random.choice(columnType.enums)

        elif column.foreign_keys:
            return self.__handleRelationship(column)

        elif isinstance(columnType, ModelColumnTypesEnum.STRING.value):
            return self.fake.word()

        elif isinstance(columnType, ModelColumnTypesEnum.INTEGER.value):
            return self.fake.random_int(min=1, max=100)

        elif isinstance(columnType, ModelColumnTypesEnum.BOOLEAN.value):
            return self.fake.boolean()

        elif isinstance(columnType, (ModelColumnTypesEnum.DATETIME.value, ModelColumnTypesEnum.DATE.value)):
            return self.fake.date()

        return None

    def __handleRelationship(self, column: Column) -> Optional[int]:
        """
        Handles the relationship of a column with another model.
        It creates a fake data entry for the parent model and returns its id.
        """

        parentModel = self.__getRelatedClass(column)

        ModelFaker(parentModel).create()

        parentData = db.session.query(
            parentModel
        ).order_by(
            desc(parentModel.c.created_at)
        ).first()

        return parentData.id if parentData else None

    def __isManyToManyRelationTable(self) -> bool:
        """
        Checks if the model is a many-to-many relationship table.
        """

        return not hasattr(
            self.model,
            '__table__') and not hasattr(
            self.model,
            '__mapper__')

    def __isPrimaryKeyOrHasDefaultValue(self, column: Column) -> bool:
        """
        Checks if a column is a primary key or has a default value.
        """

        return ((column.primary_key and not column.foreign_keys) or (
            isinstance(column.default, ColumnDefault) and column.default.arg is not None) or
                column.nullable is not None and column.nullable is True)

    def __getTableColumns(self) -> List[Column]:
        """
        Returns the columns of the model's table.
        """

        return self.model.columns if self.__isManyToManyRelationTable(
        ) else self.model.__table__.columns

    def __getRelatedClass(self, column: Column) -> Table:
        """
        Returns the related class of a column if it has a relationship with another model.
        """

        if not self.__isManyToManyRelationTable(
        ) and column.name in self.model.__mapper__.relationships.keys():
            return self.model.__mapper__.relationships[column.key].mapper.class_

        fk = list(column.foreign_keys)[0]

        return fk.column.table

    def _generateJsonData(self, docstring: str) -> Dict[str, Any]:
        """
        Generates JSON data based on the provided docstring.
        """

        json_structure = json.loads(docstring)

        return self._populateJsonStructure(json_structure)

    def _populateJsonStructure(self, structure: Union[Dict[str, Any], List[Any]]) -> Any:
        """
        Populates the JSON structure with fake data based on the defined schema.
        """

        if isinstance(structure, dict):
            populated_data = {}

            for key, value in structure.items():

                if isinstance(value, dict):
                    populated_data[key] = self._populateJsonStructure(value)
                elif value == 'datetime':
                    populated_data[key] = self.fake.date_time()
                elif value == 'date':
                    populated_data[key] = self.fake.date()
                else:
                    populated_data[key] = self.fake.word()

            return populated_data

        elif isinstance(structure, list):
            return [self.fake.word() for _ in range(len(structure))]

        return structure
