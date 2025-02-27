from BusinessDomain.User.Repository import UserRepository
from BusinessDomain.User.Rule.tools import getJwtIdentity
from BusinessDomain.User.UseCase.QueryHandler.Query import GetUserDetailsQuery
from BusinessDomain.User.UseCase.QueryHandler.Result import GetUserDetailsResult
from BusinessDomain.User.UseCase.QueryHandler.Result.GetUserDetailsResult import (
    TeamResult,
)


class GetUserDetailsQueryHandler:

    @staticmethod
    def execute(query: GetUserDetailsQuery) -> GetUserDetailsResult:

        if query.escapedUsername:
            user = UserRepository.getUserByUsername(query.escapedUsername)

        else:
            user = getJwtIdentity()

        profileOfCurrentUser = getJwtIdentity() is not None and (getJwtIdentity(
        ).escaped_username == query.escapedUsername or query.escapedUsername is None)

        return GetUserDetailsResult(
            id=user.id,
            birthdate=user.birthdate if user.birthdate_visibility or profileOfCurrentUser else None,
            createdAt=user.created_at,
            city=user.city if user.city_visibility or profileOfCurrentUser else None,
            email=user.email,
            isBirthdateVisible=user.birthdate_visibility,
            isCityVisible=user.city_visibility,
            isDeleted=user.is_deleted,
            isNameVisible=user.name_visibility,
            name=user.name if user.name_visibility or profileOfCurrentUser else None,
            pictureUrl=user.picture_url,
            pronouns=user.pronouns,
            teams=[
                TeamResult(
                    id=team.id,
                    escapedName=team.escaped_name,
                    logoUrl=team.logo_url,
                    name=team.name,
                ) for team in user.teams if not team.is_deleted],
            updatedAt=user.updated_at,
            username=user.username,
        )
