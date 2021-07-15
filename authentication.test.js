describe("Authentication test", () => {
    const authetication = require('./authentication')

    test('return false for incorrect username and password', () => {
        expect(authetication('random', 'random')).toBe(false);
    })

    test('return false for null username and password', () => {
        expect(authetication(null, null)).toBe(false);
    })

    test('return false for undefined username and password', () => {
        expect(authetication()).toBe(false);
    })

    test('return false for correct username and wrong password', () => {
        expect(authetication('Kelvin', 'random')).toBe(false);
    })

    test('return false for wrong username and correct password', () => {
        expect(authetication('random', 'Password')).toBe(false);
    })

    test('return true for correct username and password', () => {
        expect(authetication('Kelvin', 'Password')).toBe(true);
    })
})