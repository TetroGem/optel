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

Both of these functions simply wrap Object.assign(), adding no extra functionality during runtime. All other changes are purely on the type-level.

<br>

View the code examples on [playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzhMMCmAbOBfOAzKCEOAchXQxIG4AoGgenrgHlVM4BDAZy7Vi7gwAFmkEBPMKIh5OAO2QAjAFZoAxvA550UTj2ABzWcFn64wGDVURZXDXAC8ifBAgAuOAEYctcpgB03FwGsgAUHAA0TgocUO4ARCIYGBBwAO7QGAAmcTgAlLRwhZy0jIUAegD8dKWsFGnASXB8hDrAMlwQAK5QqqIwEmgCMaKdsoHBHAoYfSnCfTH6aBZWNvAKDk54Lu5e2D5sGAF6hiEKkUhbboJQnaLYudVMtewA1rIQqQKpIvJghJKwYCDThQUTvODJEx8ZCoYDWDgYSzWWxwVTuC4uCruWSdEAKPiRaKxOC2KDGUy4RxIInxRLJHJ7JGrOCZdHOK44vEEuBErEkmBkkw4DYYq67WgrFGiRy+Q4gPiLEKqSKZfIMJhFSqPFgHeqNBEdOAgDjGGAm+SjOHyfqSATCQidfRCGEwK0GvwepkovBsy7Y3H4nQAH35gopIvZtMw9O8Xvg+l9mP9XJ0lMQjNlRyCJzwkX0aqK+BKGq16rgHr80FRoI46Dglus4ltaR+RoV5LjcGdVMjcAS0YgDIlyPgwETED5nMDwqpjMl8CUG0z8qgitzcHzxcLpZqutSDSwthQcDEXXwhGIEAAbnxUmTXUKa5lrBgxHA-ig+K7BhXOy82U+L5vn6cBTtCaaijssaZuMJwvOcPIxO4ABMeRUHApTCMAAjYfgxhoDQMHHKE8GbNscCofcGFMFhOECO8FhlhWCidKOo4CLYB5wFeCLAJkggpJ0vCCCIxDcCSXQ9IMnZYD2IHip2xByeRlG6KiI77BQWbBCEGCRCABZFBgW5wDuTy6gaKRCOJXCdGAkCwM4OiwUYJj0B03SqOS55EKiGCBGYqwcLIvRcK4dCqP5PBwAACp0UzAKoiA0IW843Oo0AhClhZFGA8UYIlvZgVA4TZTl775YVNKhuSpWFrk6Y0NgEVRQIMVkjxdYIGV6mrOlMCZT1hZ5QlSUgcVdXle+HW1qI1WkrVPUNQgzXNWWzxYKowW6Nm1opCNBVJR+ALfgI0icH5gSdvIjiyGgqSxZVqghB4kT9kkg5qkRu0hLICEgchhJIX26RQFkDJqute5cQxnAfQ9p6dAJO3BMjfzAJ1ojHV+QJcJ2KS3fdsUzegL1vXSn2af4LkhBA-0qWhhEHNpJx01EwNxKD4OM1DdT7vq8MnmeA31sJkUBcYtjBaFakeVJXC-vO74RtVnMZNksZKwAjhsd0PXFo0hIDfYU3EX3MzTYCRFrkOlBWozTNFcxvtZN7TRjs3TZ+gLSUrOg9qrXMa3OI4krrRPtR7pPG+99Lm1pNMlSS+RAA)

(These will also be listed directly on this README as text in the future)
