const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('Judy', 10, 'judy@test.com', 'UofU');

    expect(intern.school).toEqual(expect.any(String));
});

test('runs getSchool function', () => {
    const intern = new Intern('Judy', 10, 'judy@test.com', 'UofU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gives intern role', () => {
    const intern = new Intern('Judy', 10, 'judy@test.com', 'UofU');

    expect(intern.getRole()).toEqual('Intern');
});