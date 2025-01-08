from flask import Blueprint

from DataDomain.Model.Response import Response
from ExternalApi.System.Handler.GetSwaggerFileHandler import GetSwaggerFileHandler

system = Blueprint('system', __name__)


@system.route('/get-swagger-file', methods=['GET'])
def getSwagger() -> Response: return GetSwaggerFileHandler().handle()
