from typing import Any, Optional

from Infrastructure.InputFilter.Filter.BaseFilter import BaseFilter


class ToIntFilter(BaseFilter):
    """Filter, that transforms the value to an Integer."""

    def apply(self, value: Any) -> Optional[int]:
        try:
            return int(value)

        except (ValueError, TypeError):
            return None
