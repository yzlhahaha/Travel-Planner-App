import { clickevent } from '../src/client/js/app'

describe('Test "clickevent()" should exist', () => {
    test('It should return true', async() => {
        expect(clickevent).toBeDefined();
    });
});

describe('Test "clickevent()" should be a function', () => {
    test('It should be correctly set up as a function', async() => {
        expect(typeof clickevent).toBe("function");
    });
});