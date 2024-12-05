from typing import Any, Optional

from Infrastructure.InputFilter.Filter.BaseFilter import BaseFilter


class ToStrFilter(BaseFilter):
    """Filter, that transforms the value to a string"""

    def apply(self, value: Any) -> Optional[str]:
        try:
            return str(value)

        except (ValueError, TypeError):
            return None
