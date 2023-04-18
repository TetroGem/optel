# Optel
### *TypeScript library for type-safe assigning and merging objects*
*This library is still in development, some features may not work as expected and be subject to change.*
<br>
<hr>

Optel currently has two functions:
- optel.assign\<T, S>(target: T, ...sources: S[])
  - Assigns all properties from the sources to the target, and returns void. Does the same as Object.assign(), but also asserts the new type for the target.
- optel.merge\<S>(...sources: S[])
  - Merges all properties from the sources into a new object, and returns the new object. Does not mutate any of the given source objects.

<br>

View the code examples on [playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBBMMCmAbOAzKERwOSIqp4DcAUGQPSVwDySacAhgM4vKwtwwAWy3ATzD8IGZgDsEAIwBWyAMbwmGFFGZtgAc3HBxmuMBhl5EcSyVwAvHADemCBABccAIxwAvuUJoAdKxZa4gAUTAA0tnBSTFDOAER8qKgQcADu0KgAJrEeAJTkcAXM5NQFAHoA-BQl9ESpwIlwHNhqwGIsEACuUPL8MELIXNH8HeL+gUxSqL3JvL3RmshGJmbwUlYRGA7Obp5k3qh+GtpBUuF2m07cUB387jlVNDWMANbiEClcKXySYNjCsMABswoPw3nAknoOAgkMBTExUMZTOY4PJnOcHOVnOIOiApBxwlEYnBzFBdPp3Os7IS4gkktldstkRk0fZLtjcfjItFMcSYKS9B5Kazth5yIz4PxrPsfCAOAsgvJwhk8lQaIUKg86Ax0Cl6uh4e04CAmLoYCbJCNYZI+sIuLxsB1NDxoTArQafB7EStMCyLlicXi1AAfXn88lCv1weJoOmir3IzS+jH+jlqCnWGy7aVjY4YcKaFWFTDFNUa1VwD0+aAokFMFBwS2mQS21LfI1ysnx+DOjPCqO0iD0sVI+DAJMQHnswOCjMMkdwGTraWyqDyvNwAslotl6rauoNcyIOACTqYbC4CAANw4KVJroFtYyplQAjgv0QHFdA0rXbgzxZj7Pq+kZTlC6YbFsrhxtmRzBM8ZxckSABMuQkHAJS8MAXBYZgujIHs2qHAExzwRBlwoXc6E0Jh2FcG8RjlpWUgdKOo5cOYepwJe8LABk3DJB07DcHwuCsMSnTdAMv7oL2kY7MO3q4LJkEUeoKIjl4hE5sEqDhCAhaFKgW5wDujx7gayQ8GJLAdGAkCwPYajaWSlDtF08hkmeOAoqg-gGCsTDiD0LCOBQ8i+WwcAAAodJMwDyLYZBFuK1yKNAQRJUWhRgLFqDxX2oFQKEmVZW+uX5dSoZksVRY5LY7hkA1xgRVwUWktx9Y2CV6krKlMDpd1RY5XFCUgQG+KDdl7V1vwlUktV3V1ZmjWak86DyIF6jEdayTDXlCXvv8X5cKIzA+f4v6SNY4jICk0XlfIQQuOE0aJIOKowdtQTiAhkZIQS0RxGkUCZPSKrlmt+7oPRzBvXdJ4dPxW2BEjvzAB1-CHZ+gIsL+yTXbd0XTSgT0vQOsQfVpsFBBAv0qahBFEERgQ0whlWxMDoMMxDe66g08JJPDp79Q2QnhX5ujmIFwVqW5kksD+4pvkK7Oc1kcZKwAjusN13TFI1BP9-Yxu9mlM9pQRgOEmvgyUlYjFMkWzK+VnXm+xOY382NSUrai9qr6Tq3O3pcATese4bZMmxTZu+BbRXEnkQA)

(These will also be listed directly on this README as text in the future)
