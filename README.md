# Optel

### _TypeScript library for type-safe assigning and merging objects_

_This library is still in development, some features may not work as expected and be subject to change._
<br>

<hr>

## Examples

View the code examples on [playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzhMMCmAbOBfOAzKCEOAchXQxIG4AoGgenrgHlVM4BDAZy7Vi7gwAFmkEBPMKIh5OAO2QAjAFZoAxvA550UTj2ABzWcFn64wGDVURZXDXAC8ifBAgAuOAEYctcpgB03FwGsgAUHAA0TgocUO4ARCIYGBBwAO7QGAAmcTgAlLRwhZy0jIUAegD8dKWsFGnASXB8hDrAMlwQAK5QqqIwEmgCMaKdsoHBHAoYfSnCfTH6aBZWNvAKDk54Lu5e2D5sGAF6hiEKkUhbboJQnaLYudVMtewA1rIQqQKpIvJghJKwYCDThQUTvODJEx8ZCoYDWDgYSzWWxwVTuC4uCruWSdEAKPiRaKxOC2KDGUy4RxIInxRLJHJ7JGrOCZdHOK44vEEuBErEkmBkkw4DYYq67WgrFGiRy+Q4gPiLEKqSKZfIMJhFSqPFgHeqNBEdOAgDjGGAm+SjOHyfqSATCQidfRCGEwK0GvwepkovBsy7Y3H4nQAH35gopIvZtMw9O8Xvg+l9mP9XJ0lMQjNlRyCJzwkX0aqK+BKGq16rgHr80FRoI46Dglus4ltaR+RoV5LjcGdVMjcAS0YgDIlyPgwETED5nMDwqpjMl8CUG0z8qgitzcHzxcLpZqutSDSwthQcDEXXwhGIEAAbnxUmTXUKa5lrBgxHA-ig+K7BhXOy82U+L5vn6cBTtCaaijssaZuMJwvOcPIxO4ABMeRUHApTCMAAjYfgxhoDQMHHKE8GbNscCofcGFMFhOECO8FhlhWCidKOo4CLYB5wFeCLAJkggpJ0vCCCIxDcCSXQ9IMnZYD2IHip2xByeRlG6KiI77BQWbBCEGCRCABZFBgW5wDuTy6gaKRCOJXCdGAkCwM4OiwUYJj0B03SqOS55EKiGCBGYqwcLIvRcK4dCqP5PBwAACp0UzAKoiA0IW843Oo0AhClhZFGA8UYIlvZgVA4TZTl775YVNKhuSpWFrk6Y0NgEVRQIMVkjxdYIGV6mrOlMCZT1hZ5QlSUgcVdXle+HW1qI1WkrVPUNQgzXNWWzxYKowW6Nm1opCNBVJR+ALfgI0icH5gSdvIjiyGgqSxZVqghB4kT9kkg5qkRu0hLICEgchhJIX26RQFkDJqute5cQxnAfQ9p6dAJO3BMjfzAJ1ojHV+QJcJ2KS3fdsUzegL1vXSn2af4LkhBA-0qWhhEHNpJx01EwNxKD4OM1DdT7vq8MnmeA31sJkUBcYtjBaFakeVJXC-vO74RtVnMZNksZKwAjhsd0PXFo0hIDfYU3EX3MzTYCRFrkOlBWozTNFcxvtZN7TRjs3TZ+gLSUrOg9qrXMa3OI4krrRPtR7pPG+99Lm1pNMlSS+RAA)

(These will also be listed directly on this README as text in the future)

<hr>

## Functions

<!-- INSERT GENERATED DOCS START -->

### `entries` (function)

This function is a wrapper for Object.entries(), providing additional type information and no extra implementation

**Parameters:**

- object (`O`) - The object to get the entries of

**returns:** [key: string, value: unknown][]

### `assignDefined` (function)

Assigns all keys of source objects that do not have their value set to undefined to the target object
It does not return the target object, but instead asserts its type. To create a new object, use `optel.mergeDefined()`.

**Parameters:**

- target (`T`) - The object to assign to
- sources (`AssertDefinedAssignableTo<T, S>`) - The objects to get assigned values from

**returns:** void

### `mergeDefined` (function)

Creates a new object with all of its keys assigned to their respective values from the source objects, only being
assigned if that value is not undefined.
This function creates a new object and returns it, not modifying any of the source objects.
To modify an existing target object instead, use `optel.assignDefined()`.

**Parameters:**

- sources (`AssertDefinedAssignableTo<{}, S>`) - The objects to get assigned values from

**returns:** ReduceImpl<S, {}, HOTDefinedAssign>

### `assign` (function)

This function is a wrapper for Object.assign(), providing additional type information and no extra implementation.
It does not return the target object, but instead asserts its type. To create a new object, use `optel.merge()`.

**Parameters:**

- target (`T`) - The object to assign to
- sources (`AssertAssignableTo<T, S>`) - The objects to get assigned values from

**returns:** void

### `merge` (function)

This function is a wrapper for Object.assign(), providing additional type information and no extra implementation.
This function creates a new object and returns it, not modifying any of the source objects.
To modify an existing target object instead, use `optel.assign()`.

**Parameters:**

- sources (`AssertAssignableTo<{}, S>`) - The objects to get assigned values from

**returns:** ReduceImpl<S, {}, HOTAssign>

### `pick` (function)

Creates a copy of the given object with only the specified keys included

**Parameters:**

- object (`O`) - The object to pick keys from
- keys (`K`) - The keys to be picked and included on the new object

**returns:** OptelPick<O, K>

### `omit` (function)

Creates a copy of the given object with the specified keys removed

**Parameters:**

- object (`O`) - The object to pick keys from
- keys (`K`) - The keys to be picked and included on the new object

**returns:** OptelOmit<O, K>

### `keyOf` (function)

This function returns the first key (as given by Object.entries()) that contains the given value

**Parameters:**

- object (`O`) - The object to search for the value within
- value (`V`) - The value to search for

**returns:** OptelKeyOf<O, V>

### `allKeysOf` (function)

This function returns an array of keys that contain the given value

**Parameters:**

- object (`O`) - The object to search for the value within
- value (`V`) - The value to search for

**returns:** OptelKeyOf<O, V>[]

### `unlock` (function)

Returns this object, but with its type changed to allow for any key to be used to index it, with its value set to unknown.
This function does nothing else except return the same object passed to it with additional type information.

**Parameters:**

- object (`O`) - The object to unlock

**returns:** OptelUnlocked<O>

### `fromEntries` (function)

This function is a wrapper for Object.fromEntries(), providing additional type information and no extra implementation.

**Parameters:**

- sources - The entries to create an object from
- entries (`O`)

**returns:** OptelFromEntries<O>

<hr>

## Types

### `OptelPick` (type)

### `OptelOmit` (type)

### `OptelKeyOf` (type)

### `OptelUnlocked` (type)

### `OptelFromEntries` (type)

<!-- INSERT GENERATED DOCS END -->

<br>
