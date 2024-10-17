import os
from typing import List

import yaml
from collections import defaultdict

from flask import Blueprint

from DataDomain.Model.Response import Response


externalApiFolder = Blueprint(
    'external_api',
    __name__,
    static_folder=os.path.join(
        '/app/ExternalApi')
    )


class GetSwaggerFileHandler:
    """Handler for getting swagger file."""

    def handle(self) -> Response:
        """Get swagger file."""

        yamlFiles = []

        for root, dirs, files in os.walk(externalApiFolder.static_folder):
            for file in files:
                if file.endswith('.yaml'):
                    yamlFiles.append(os.path.join(root, file))

        yamlUrls = [os.path.abspath(file) for file in yamlFiles]

        return Response(
            response=self.__mergeYamlFiles(yamlUrls),
            status=200,
        )

    def __mergeYamlFiles(self, yamlFilePaths: List[str]) -> dict:
        """Merge multiple yaml files into a single dictionary."""

        merged_data = {
            'openapi': '3.0.0',
            'info': {
                'title': 'JTR API',
                'version': '1.0.0'
            },
            'paths': defaultdict(dict)
        }

        """Merge the paths from each file"""

        for file_path in yamlFilePaths:
            with open(file_path, 'r') as file:
                data = yaml.safe_load(file)

                for path, path_data in data.get('paths', {}).items():
                    if path in merged_data['paths']:

                        merged_data['paths'][path].update(path_data)

                    else:
                        merged_data['paths'][path] = path_data

        """Convert the defaultdict to a regular dict"""

        merged_data['paths'] = dict(merged_data['paths'])

        return merged_data
