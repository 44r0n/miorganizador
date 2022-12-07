import { Maybe } from 'utils/index';


describe('Maybe', () => {

	describe('Constructor methods', () => {
		it('should return hasValue equal to false when value is undefined', () => {
			const maybe = Maybe.fromValue(undefined);

			expect(maybe.hasValue).toBeFalsy();
		});

		it('should return hasValue equal to false when value is null', () => {
			const maybe = Maybe.fromValue(null);

			expect(maybe.hasValue).toBeFalsy();
		});

		it('should return hasValue equal to true when value is valid zero', () => {
			const maybe = Maybe.fromValue(0);

			expect(maybe.hasValue).toBeTruthy();
		});

		it('should return hasValue equal to true when value is valid empty text', () => {
			const maybe = Maybe.fromValue('');

			expect(maybe.hasValue).toBeTruthy();
		});

		it('should return hasValue equal to true when value is valid', () => {
			const maybe = Maybe.fromValue(5);

			expect(maybe.hasValue).toBeTruthy();
		});
	});

	describe('get Value', () => {
		it('should return hasValue equal to false when value is undefined', () => {
			const maybe = Maybe.fromValue(undefined);

			expect(maybe.hasValue).toBeFalsy();
		});

		it('should return hasValue equal to false when value is null', () => {
			const maybe = Maybe.fromValue(null);

			expect(maybe.hasValue).toBeFalsy();
		});

		it('should return the valid value', () => {
			const maybe = Maybe.fromValue(5);

			expect(maybe.hasValue).toBeTruthy();
			if (maybe.hasValue)
				expect(maybe.value).toEqual(5);
		});
	});
});