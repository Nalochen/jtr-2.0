import json
from dataclasses import asdict, is_dataclass
from datetime import datetime
from decimal import Decimal

from sqlalchemy import Row
from sqlalchemy.exc import OperationalError


class CustomJSONEncoder(json.JSONEncoder):
    """Custom JSON encoder that handles serialization of datetime and Decimal objects"""

    def default(self, obj) -> str | float | dict:
        """Custom JSON encoder"""

        if is_dataclass(obj):
            return asdict(obj)

        elif obj is None:
            return {}

        elif isinstance(obj, datetime):
            return obj.isoformat()

        elif isinstance(obj, Decimal):
            return float(obj)

        elif isinstance(obj, OperationalError):
            return str(obj)

        elif isinstance(obj, Row):
            return dict(obj._mapping)

        return super().default(obj)
