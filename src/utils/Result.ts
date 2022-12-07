type ErrorResult<E> = { ok: false; error: E };
type Value<Data> = { ok: true; value: Data };

export type Result<Data = void, E = void> = ErrorResult<E> | Value<Data>;

/**
 * Creates an ok Result from the given value. The value can be anything or empty.
 * @param value An ok Result of the provided value.
 */
 export function ok(): Result;
 export function ok<Data>(value: Data): Result<Data>;
 export function ok<Data>(value?: Data): Result<Data> {
	return { ok: true, value };
}

/**
 * Creates an error Result with the given error. The error can be anything or empty.
 * @param error An error Result with the provided error.
 */
export function error(): Result;
export function error<E>(error: E): Result<never, E>;
export function error<E>(error?: E): Result<never, E>{
	return { ok: false, error };
}

export default Result;