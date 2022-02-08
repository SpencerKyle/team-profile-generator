const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('Bob', 50, 'Bob@tom.com', 'bobtom100');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineers github', () => {
    const engineer = new Engineer('Bob', 50, 'Bob@tom.com', 'bobtom100');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets engineer role', () => {
    const engineer = new Engineer('Bob', 50, 'Bob@tom.com', 'bobtom100');

    expect(engineer.getRole()).toEqual('Engineer');
});