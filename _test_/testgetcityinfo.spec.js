import { get_city_info } from '../src/client/js/app'

describe('Test "get_city_info()" should exist', () => {
    test('It should return true', async() => {
        expect(get_city_info).toBeDefined();
    });
});

describe('Test "get_city_info()" should be a function', () => {
    test('It should be correctly set up as a function', async() => {
        expect(typeof get_city_info).toBe("function");
    });
});