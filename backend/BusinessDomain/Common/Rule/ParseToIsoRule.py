from datetime import datetime


class ParseIsoDateRule:

    @staticmethod
    def applies(dateStr: str) -> datetime:

        return datetime.fromisoformat(dateStr) if dateStr else None
