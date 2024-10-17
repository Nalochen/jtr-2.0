
from flask import Blueprint

from ExternalApi.System.Handler.GetSwaggerFileHandler import GetSwaggerFileHandler


system = Blueprint('system', __name__)


@system.route('/get-swagger-file', methods=['GET'])
def getSwagger(): return GetSwaggerFileHandler().handle()
