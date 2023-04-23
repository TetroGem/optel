# Optel

### _TypeScript library for making usage of objects more type-safe_

_This library is still in development, some features may not work as expected and be subject to change._
<br>

<hr>

## Examples

View the code examples on [playground](https://www.typescriptlang.org/play?target=9#code/JYWwDg9gTgLgBAbzhMMCmAbOBfOAzKCEOAchXQxIG4AoGgenrgHlVM4BDAZy7Vi7gwAFmkEBPMKIh5OAO2QAjAFZoAxvA550UTj2ABzWcFn64wGDVURZXDXAC8ifBAgAuOAEYctcpgB03FwGsgAUHAA0TgocUO4ARCIYGBBwAO7QGAAmcTgAlLRwhZy0jIUAegD8dKWsFGnASXB8hDrAMlwQAK5QqqIwEmgCMaKdsoHBHAoYfSnCfTH6aBZWNvAKDk54Lu5e2D5sGAF6hiEKkUhbboJQnaLYudVMtewA1rIQqQKpIvJghJKwYCDThQUTvODJEx8ZCoYDWDgYSzWWxwVTuC4uCruWSdEAKPiRaKxOC2KDGUy4RxIInxRLJHJ7JGrOCZdHOK44vEEuBErEkmBkkw4DYYq67WgrFGiRy+Q4gPiLEKqSKZfIMJhFSqPFgHNLWEgaJIfXRBQzkuCQPRTMRwUaZNB4YxoTJwABuCNuAhgKXtjtkzuQ-q4TJRAGE2Zdsbj8ToAD78wUUkXs2mYeneEPwAAiEcxUa5OkpiEZsqOptCociWbV6p1dVSDSwCI6cBAHGMMHb8lGcPk-UkXqEhE6+iEMJgvebfmnmfwuY50eh8dJ5qLotTRoZEuR8H0875nJjwqpJYOZeCWYdTsyITwkX0aqK+BKGq1tenfmgqNBHHQtqM1jiAOaQ-K2CrkrOY5UimcAJGmEBbrOwD7vmR5roykrwEoGylvKUCKnecAPi+T5vjUuoNo0tgoHAYhdPghDEBArp8KkZITkKP6ZNYGA2n8KB8BOgwfrOLxslxPE2pGcCHtCa4weKNCluMJwvOcPIxO4ABMeRUHApTCMAAhGfgTpKWeKmhGpmzbHAOn3PpTCGcZAjvBY77TgonTwOYZgCLYjZugiwAut6tq8IIIjENwJJdD0gyzlg0HSYpmGtsm0n2boqI7vsFDnicGCRCAj5FBgJFwGRTy6s2KRCDFXCdGAkCwM4OiWeS9AdN0qjmgQRCohggRmKsHCyL0XCuHQqhDTwcAAAqdFMwCqIgNBPphNzqNAITrU+RRgEtGArTBslQOEe37RaR0nTSCbkhdT65MWNDYNNs0CPNZLun+CCXTlqxbd6UC7VdhSHctq3SWdj1g38wA-aId0riYsOFM9CBvW9tbPFgqhjSawSCCkEPHat-EAkJAjSJwg2BLO8iOP6qQLTdqghB4kRwZuarKccoSyOpmWEppsHpFAWQMjW5H1oFbmcEaLN0Z0xOE4Yqvw4jFr-IJQLBmlKRM2gLNfQjv5oBzXN0ghvMWfzIQQELtn2bb+WWQ76l3XE4uS7p2q4-UjQIskSv0WFnQRTNw3GLYY0Tdl3XxVwIlpWAyZez72QZmlACOGzM6zkMhFpVvwXErv+O7YCRDn0tMB+ozTHNcw2vVLHa2bf4U7rCVpTo0EZxkWcYTuJL58bC3febxelzzeWV-b50knXdbsPjvwrS8cgukQvkvGgYgCP1THKGoMD66P8DJbZnMacS3P0jXnQAB7uAKtzZ6PKsymeYCbyEMBIgkEuCQIBRISBqlKJqKoaVXQ4TPLvGAACgEgLATECBFVyhVBxrqN4HwvigT-qofeO8dCIPQC6feh9WwcBtPLfEkU+BoFnCza+YoRb32tnEJ+r9rgfxHsyZ+GxgEuBINlEREAxHxhIOA7czIbQ-3ykQl4IRUiRGfpAjUWDZwAC94H5UQao9RaCoAYNrNA-2up9AI2BPiGA2ggLAi2DoLyDQYAAFpjD4FGOoXsF9mRoFkAKPWzBlAZRvhwjcj84A5xfm-G4dw5EonPgAUSCWSYEjhQkqHUH4QJwTBghHyRkrg2TNFgy1AbA4aSCkCEUf4YpesinpJCcocpV1KmjzQM-Dg4Bpg1JKRsAA2kMiRoDPAAF1IijPAbPekUy4CjNic-cZ780ATImdlTCST4DnwAGKMQGXrDY2Sz5+GPkcwp3TelgH6S0wY7T9qdOZLKA5RBLl1PHP4C59yuAhA-NcvpaAPmPNItgmWa8CZ+hdN8X8cAqECDbqIDgJJJC9UdKtd0GBbgp1HlQ5geBsnhPYXfKJCEeE7AAAyf2ZJhIlbCdiRNglwilnhqW4Bitshmi4oAAGkD76P8PivAIRhXZMiB4B4UCnkwNHtYNA-KFFfMOMKpUO5xWeClVosF3KCyKs+cpJI+qCWioPgSjVkrME6o8gEWQoURARSof+PxqICYMIjgGBswgLT-2emNHeIBzAhAeGlM69LlV+GUaasQ5rlCRDOoq0F2iDb+nDaWKNdK42BgVQfJNlVwXVTqOvBWLZG4QGIXIRQOTAEKxDuaXyYUGHGHtM-T15gxxjRtFij+IRQQwG6EYIUow8GpHkG0GSEB4BcDRW0IEqpZxluIZMaY4b1yeCZQ-clMS4l8MSQu2QyRiEBnqYcRdKiz3LrQGUq1ya8XvFHQANQ9NKf8h6SHnJcDe-N+6R2yCfdil9Z7nR+GiDor9VVV54wJrVOA9U7XTFbJ0DAE5blSBkHMEkvTRAIpGk0X5yAdA9kAgi2cVggXPw+cM0ZHAxExRIDRuA0iFDjI8As6j4ytIbK2blUjRBUPPzTWeH5tT-nTjI-xkF4GKhAA)

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
- entries (`T`)

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
