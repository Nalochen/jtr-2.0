from DataDomain.Database.Repository.TournamentRepository import TournamentRepository
from DataDomain.Model.Response import Response


class GetTournamentDetailsHandler:
    """Handler for getting tournament details."""

    def handle(self, tournamentId: int) -> Response:
        """Get tournament details by id."""

        tournament = TournamentRepository.getTournamentDetails(tournamentId)

        if tournament is None:
            return Response(status=404, response='Tournament not found')

        responseData = {
            'id': tournament['id'],
            'name': tournament['name'],
            'accommodation': tournament['accommodation'],
            'additionalInformation': tournament['additionalInformation'],
            'address': tournament['address'],
            'arrivalTime': tournament['arrivalTime'],
            'contacts': tournament['contacts'],
            'costs': tournament['costs'],
            'createdAt': tournament['createdAt'],
            'date': tournament['date'],
            'deadlines': tournament['deadlines'],
            'food': tournament['food'],
            'houseRules': tournament['houseRules'],
            'location': tournament['location'],
            'organizer': tournament['organizer'],
            'pompfCheck': tournament['pompfCheck'],
            'possibleSpace': tournament['possibleSpace'],
            'registrationOpenAt': tournament['registrationOpenAt'],
            'registrationProcedure': tournament['registrationProcedure'],
            'schedule': tournament['schedule'],
            'shoes': tournament['shoes'],
            'status': tournament['status'],
            'teamCount': tournament['teamCount'],
            'teams': tournament['teams'],
            'tournamentSystem': tournament['tournamentSystem'],
            'updatedAt': tournament['updatedAt']
        }

        return Response(
            response=responseData,
            status=200,
        )
