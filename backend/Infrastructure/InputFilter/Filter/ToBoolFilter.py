from typing import Any, Optional

from Infrastructure.InputFilter.Filter.BaseFilter import BaseFilter


class ToBoolFilter(BaseFilter):
    """Filter, that transforms the value to a boolean."""

    def apply(self, value: Any) -> Optional[bool]:
        try:
            return bool(value)

        except (ValueError, TypeError):
            return None
