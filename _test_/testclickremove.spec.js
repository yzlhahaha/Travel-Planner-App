import { clickremove } from '../src/client/js/app'

describe('Test "clickremove()" should exist', () => {
    test('It should return true', async() => {
        expect(clickremove).toBeDefined();
    });
});

describe('Test "clickremove()" should be a function', () => {
    test('It should be correctly set up as a function', async() => {
        expect(typeof clickremove).toBe("function");
    });
});