from DataDomain.Database.Model import Teams


class GetTeamByEscapedNameRule:

    @staticmethod
    def get(escapedName: str) -> Teams | None:

        return Teams.query.filter_by(escaped_name=escapedName).first()
