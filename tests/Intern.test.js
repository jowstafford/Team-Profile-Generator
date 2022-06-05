var Intern = require('../lib/Intern');

test('retrieves school from results', () => {
    var schoolTest = "UTA";
    var x = new Intern('Ben', 1, "bsmith@email.com", schoolTest);
    expect(x.school).toBe(schoolTest);
});

test('roleReturn returns "Intern"', () => {
    var internTest = 'Intern';
    var x = new Intern("Harrison", 1, 'hmaxwell@email.com', internTest);
    expect(x.roleReturn()).toBe(internTest);
});

test('retrieves school from schoolReturn()', () => {
    var schoolTest2 = "UTA";
    var x = new Intern("Lauren", 1, "lbrown.email.com", schoolTest2);
    expect(x.schoolReturn()).toBe(schoolTest2);
});