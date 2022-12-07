type None = { hasValue: false; };
type Some<Data> = { hasValue: true; value: Data };

type Maybe<Data> = None | Some<Data>;

/**
 * Encapsulates a value in a Maybe type.
 * @param value The value for create the Maybe type.
 * @returns The value encapsulated in the Maybe type in form { hasValue: true, value}
 */
export function some<Data>(value: Data): Maybe<Data> {
	if (value === undefined || value === null) {
		throw Error('Provided value must not be empty');
	}

	return { hasValue: true, value };
}

/**
 * Creates a none Maybe type.
 * @returns The none value encapsulated in the Maybe type in form { hasValue: false }
 */
export function none<Data>(): Maybe<Data> {
	return { hasValue: false };
}

/**
 * Encapsulates the value in a Maybe type. If the value is undefined or null it returns a none Maybe type.
 * @param value The value for crate a Maybe type.
 * @returns The value encapsulated in Maybe if it is not undefined or null. Or none value encapsulated in Maybe otherwise.
 */
export function fromValue<Data>(value: Data | undefined | null): Maybe<Data> {
	return value === undefined || value === null ? none() : some(value);
}