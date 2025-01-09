from flask_inputfilter import InputFilter
from flask_inputfilter.Filter import ToIntegerFilter
from flask_inputfilter.Validator import InEnumValidator, IsIntegerValidator

from DataDomain.Database.Enum.UserRoleTypesEnum import UserRoleTypesEnum


class UpdateMembershipInputFilter(InputFilter):
    """The input filter for the update-membership route"""

    def __init__(self):
        """Initializes the UpdateMembershipInputFilter"""

        super().__init__()

        self.add(
            'teamId',
            required=True,
            filters=[ToIntegerFilter()],
            validators=[
                IsIntegerValidator()
            ]
        )

        self.add(
            'userId',
            required=True,
            filters=[ToIntegerFilter()],
            validators=[
                IsIntegerValidator()
            ]
        )

        self.add(
            'userRole',
            required=True,
            validators=[InEnumValidator(UserRoleTypesEnum)]
        )
