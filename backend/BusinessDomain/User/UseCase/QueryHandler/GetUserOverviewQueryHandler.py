from typing import List

from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.UseCase.QueryHandler.Result.GetUserOverviewResult import (
    GetUserOverviewResult,
)


class GetUserOverviewQueryHandler:

    @staticmethod
    def execute() -> List[GetUserOverviewResult]:

        users = UserRepository.all()

        if not users:
            return []

        return [GetUserOverviewResult(
            id=user.id,
            birthdate=user.birthdate if user.birthdate_visibility else None,
            city=user.city if user.city_visibility else None,
            email=user.email,
            name=user.name if user.name_visibility else None,
            picture=user.picture,
            pronouns=user.pronouns,
            username=user.username
        ) for user in users]
