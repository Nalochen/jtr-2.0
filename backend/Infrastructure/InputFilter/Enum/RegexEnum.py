from enum import Enum


class RegexEnum(Enum):
    """
    Enum for regex patterns
    """

    EMAIL = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

    IPV4_ADDRESS = r'^(?:\d{1,3}\.){3}\d{1,3}$'
    IPV6_ADDRESS = r'^\[?([a-fA-F0-9:]+:+)+[a-fA-F0-9]+\]?$'

    ISO_DATE = r'^\d{4}-\d{2}-\d{2}$'
    ISO_DATETIME = r'^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$'

    PHONE_NUMBER = r'^\+?[\d\s\-()]{7,}$'

    POSTAL_CODE = r'^\d{4,10}$'

    URL = r'^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$'
