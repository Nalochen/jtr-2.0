from typing import Any

from flask import Response as FlaskResponse, jsonify


class Response(FlaskResponse):
    """Custom Response class that handles JSON serialization."""

    def __init__(self, response: Any = None, status=200, **kwargs):
        jsonData = jsonify(response).get_data(as_text=True)

        super().__init__(
            response=jsonData,
            status=status,
            mimetype='application/json',
            **kwargs)
