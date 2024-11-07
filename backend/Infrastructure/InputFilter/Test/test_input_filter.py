import unittest

from Infrastructure.InputFilter.Exception.ValidationError import ValidationError
from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Validator.InArrayValidator import InArrayValidator
from Infrastructure.InputFilter.Validator.LengthValidator import LengthValidator
from Infrastructure.InputFilter.Validator.RegexValidator import RegexValidator


class TestInputFilter(unittest.TestCase):
    def setUp(self):
        """Set up a basic InputFilter instance for testing"""
        self.inputFilter = InputFilter()
        self.inputFilter.add('age', required=True, filters=[ToIntFilter()])
        self.inputFilter.add(
            'name', required=True, validators=[
                LengthValidator(minLength=3)])
        self.inputFilter.add(
            'gender', required=False, validators=[
                InArrayValidator(haystack=['male', 'female', 'other'])])
        self.inputFilter.add('email', required=False, validators=[
            RegexValidator(pattern=r'^[\w\.-]+@[\w\.-]+\.\w+$')])

    def test_required_field_validation(self):
        """Test validation of required fields"""
        with self.assertRaises(ValidationError):
            self.inputFilter.validateData({'age': None, 'name': 'John'})

        with self.assertRaises(ValidationError):
            self.inputFilter.validateData({'age': 25, 'name': None})

    def test_length_validation(self):
        """Test length validation"""
        with self.assertRaises(ValidationError):
            self.inputFilter.validateData({'age': 25, 'name': 'Jo'})

    def test_successful_validation(self):
        """Test successful validation"""
        data = {
            'age': '40',
            'name': 'Alice',
            'gender': 'female',
            'email': 'alice@example.com'}
        validatedData = self.inputFilter.validateData(data)

        self.assertEqual(validatedData['age'], 40)
        self.assertEqual(validatedData['name'], 'Alice')
        self.assertEqual(validatedData['gender'], 'female')
        self.assertEqual(validatedData['email'], 'alice@example.com')

    def test_null_filter(self):
        """Test that ToNullFilter transforms empty string to None"""
        self.inputFilter.add(
            'optional_field',
            required=False,
            filters=[
                ToNullFilter()])
        validatedData = self.inputFilter.validateData(
            {'age': 25, 'name': 'test', 'optional_field': ''})
        self.assertIsNone(validatedData['optional_field'])

    def test_invalid_gender(self):
        """Test validation for invalid gender"""
        with self.assertRaises(ValidationError):
            self.inputFilter.validateData(
                {'age': 25, 'name': 'Alice', 'gender': 'unknown'})

    def test_invalid_email_format(self):
        """Test validation for invalid email format"""
        with self.assertRaises(ValidationError):
            self.inputFilter.validateData(
                {'age': 25, 'name': 'Alice', 'email': 'invalid_email'})

    def test_valid_email(self):
        """Test successful validation of a valid email format"""
        data = {'age': '30', 'name': 'Alice', 'email': 'alice@example.com'}
        validatedData = self.inputFilter.validateData(data)
        self.assertEqual(validatedData['email'], 'alice@example.com')

    def test_successful_optional_gender(self):
        """Test that optional field validation works"""
        data = {'age': '30', 'name': 'Alice'}
        validatedData = self.inputFilter.validateData(data)
        self.assertIsNone(validatedData.get('gender'))  # gender is optional

    def test_string_trim_filter(self):
        """Test that StringTrimFilter trims whitespace"""
        self.inputFilter.add(
            'trimmed_field',
            required=False,
            filters=[
                StringTrimFilter()])
        validatedData = self.inputFilter.validateData(
            {'age': 25, 'name': 'test', 'trimmed_field': '   Hello World   '})
        self.assertEqual(validatedData['trimmed_field'], 'Hello World')
