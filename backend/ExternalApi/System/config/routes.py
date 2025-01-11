from flask import Blueprint

from DataDomain.Model import Response
from ExternalApi.System.Handler import GetSwaggerFileHandler

system = Blueprint('system', __name__)


@system.route('/get-swagger-file', methods=['GET'])
def getSwagger() -> Response: return GetSwaggerFileHandler().handle()
