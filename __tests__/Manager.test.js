const Manager = require('../lib/Manager');

test('creates the manager object',() => {
    const manager = new Manager('Deb', 99, 'debster@.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('runs getOfficeNumber function', () => {
    const manager = new Manager('Deb', 99, 'debster@.com', 1);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('gives manager role', () => {
    const manager = new Manager('Deb', 99, 'debster@.com', 1);

    expect(manager.getRole()).toEqual('Manager');
});