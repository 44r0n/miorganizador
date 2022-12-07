import { Result } from 'utils/index';


describe('Result', () => {

	describe('ok values', () => {
		it('should return isOk for a ok contructor', () => {
			const result = Result.ok();

			expect(result.ok).toBeTruthy();
		});

		it('should return the ok value when isOk', () => {
			const result = Result.ok(5);

			expect(result.ok).toBeTruthy();
			if(result.ok)
				expect(result.value).toEqual(5);
		});
	});

	describe('error values', () => {
		it('should return isOk false for a error constructor', () => {
			const result = Result.error();

			expect(result.ok).toBeFalsy();
		});

		it('should resturn the error value when is not ok', () => {
			const result = Result.error('error message');

			expect(result.ok).toBeFalsy();
			if(result.ok === false)
				expect(result.error).toEqual('error message');
		});
	});
});