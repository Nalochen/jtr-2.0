from dataclasses import dataclass

from DataDomain.Database.Enum import UserLanguageTypesEnum


@dataclass
class UpdateUserLanguageCommand:

    userId: int
    language: UserLanguageTypesEnum
