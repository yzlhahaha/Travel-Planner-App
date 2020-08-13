import { get_image } from '../src/client/js/app'

describe('Test "get_image()" should exist', () => {
    test('It should return true', async() => {
        expect(get_image).toBeDefined();
    });
});

describe('Test "get_image()" should be a function', () => {
    test('It should be correctly set up as a function', async() => {
        expect(typeof get_image).toBe("function");
    });
});