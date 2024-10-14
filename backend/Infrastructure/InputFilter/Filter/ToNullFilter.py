from typing import Any, Optional

from Infrastructure.InputFilter.Filter.BaseFilter import BaseFilter


class ToNullFilter(BaseFilter):
    """Filter, that transforms the value to None if it is an empty string or None."""

    def apply(self, value: Any) -> Optional[Any]:
        return None if value in ('', None) else value
