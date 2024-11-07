# InputFilter

The `InputFilter` class is used to validate and filter input data in Flask applications. 
It provides a modular way to clean and ensure that incoming data meets expected format 
and type requirements before being processed.

## Usage

### Definition

```python
from Infrastructure.InputFilter.InputFilter import InputFilter
from Infrastructure.InputFilter.Filter.ToIntFilter import ToIntFilter
from Infrastructure.InputFilter.Filter.ToNullFilter import ToNullFilter
from Infrastructure.InputFilter.Filter.StringTrimFilter import StringTrimFilter
from Infrastructure.InputFilter.Validator.RegexValidator import RegexValidator

class UpdateZipcodeInputFilter(InputFilter):
    def __init__(self):
        super().__init__()

        self.add(
            'id',
            required=True,
            filters=[ToIntFilter(), ToNullFilter()]
        )

        self.add(
            'zipcode',
            required=True,
            filters=[StringTrimFilter()],
            validators=[RegexValidator(r'^[0-9]{5}$')]
        )
```

### Usage

```python
from flask import Flask, g

app = Flask(__name__)

@app.route('/update-zipcode', methods=['POST'])
@UpdateZipcodeInputFilter().validate()
def updateZipcode():
    data = g.validatedData

    # Do something with validatedData
    id = data.get('id')
```
