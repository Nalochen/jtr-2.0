import os
from flask_mail import Mail


class MailConfig:
    """Mail configuration"""

    MAIL_SERVER = os.getenv('MAIL_SERVER')
    MAIL_PORT = int(os.getenv('MAIL_PORT'))
    MAIL_USE_TLS = bool(os.getenv('MAIL_USE_TLS'))
    MAIL_USE_SSL = bool(os.getenv('MAIL_USE_SSL'))
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = os.getenv('MAIL_DEFAULT_SENDER')


mail = Mail()
mail.state = MailConfig()
