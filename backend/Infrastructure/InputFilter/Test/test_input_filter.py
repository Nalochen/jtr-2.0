import unittest

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.LengthValidator import LengthValidator


class TestInputFilter(unittest.TestCase):
    def setUp(self):
        """Set up a basic InputFilter instance for testing."""

        self.inputFilter = InputFilter()
        self.inputFilter.add('age', required=True, filters=[ToIntFilter()])
        self.inputFilter.add(
            'name', required=True, validators=[
                LengthValidator(
                    minLength=3)])

    def test_required_field_validation(self):
        """Test validation of required fields."""

        with self.assertRaises(ValidationError):
            self.inputFilter.validateData({'age': None, 'name': 'John'})

        with self.assertRaises(ValidationError):
            self.inputFilter.validateData({'age': 25, 'name': None})

    def test_length_validation(self):
        """Test length validation."""

        with self.assertRaises(ValidationError):
            self.inputFilter.validateData({'age': 25, 'name': 'Jo'})

    def test_successful_validation(self):
        """Test successful validation."""

        data = {'age': '40', 'name': 'Alice'}

        validatedData = self.inputFilter.validateData(data)

        self.assertEqual(validatedData['age'], 40)
        self.assertEqual(validatedData['name'], 'Alice')
