from typing import Any


class BaseFilter:
    """BaseFilter-Class. Every filter should inherit from it"""

    def apply(self, value: Any) -> Any:
        raise NotImplementedError("Filter apply method must be implemented")
