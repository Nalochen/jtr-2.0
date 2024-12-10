import json
from datetime import datetime
from decimal import Decimal

from sqlalchemy.exc import OperationalError


class CustomJSONEncoder(json.JSONEncoder):
    """Custom JSON encoder that handles serialization of datetime and Decimal objects"""

    def default(self, obj) -> str | float:
        """Custom JSON encoder"""

        if obj is None:
            return {}

        elif isinstance(obj, datetime):
            return obj.isoformat()

        elif isinstance(obj, Decimal):
            return float(obj)

        elif isinstance(obj, OperationalError):
            return str(obj)

        return super().default(obj)
