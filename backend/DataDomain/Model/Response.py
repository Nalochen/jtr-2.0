import json
from typing import Any

from flask import Response as FlaskResponse

from DataDomain.Model import CustomJSONEncoder


class Response(FlaskResponse):
    """Custom Response class that handles JSON serialization"""

    def __init__(self, response: Any = None, status=200, **kwargs):
        """Custom Response constructor"""

        jsonData = json.dumps(response, cls=CustomJSONEncoder)

        super().__init__(
            response=jsonData,
            status=status,
            mimetype='application/json',
            **kwargs)
