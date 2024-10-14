from Infrastructure.InputFilter.Filter.BaseFilter import BaseFilter


class StringTrimFilter(BaseFilter):
    """Filter, that removes leading and trailing whitespaces from a string."""

    def apply(self, value: str) -> str:
        return value.strip() if isinstance(value, str) else value
