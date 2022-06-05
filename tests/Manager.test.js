var Manager = require('../lib/Manager');

test("Constructs phone number", () => {
    var numberTest = 100;
    var x = new Manager('Jackson', 1, "jdreffs@email.com", numberTest);
    expect(x.phoneNumber).toBe(numberTest);
});

test('roleReturn() returns Manager ', () => {
    var managerTest = "Manager";
    var x = new Manager('Sydney', 1, "srosenkrantz@email.com", 100);
    expect(x.roleReturn()).toBe(managerTest);
});

test('retreives phone number from phoneNumberReturn()', () => {
    var phoneNumberTest = 100;
    var x = new Manager('Ashlyn', 1, "akarguth@email.com", phoneNumberTest);
    expect(x.phoneNumberReturn()).toBe(phoneNumberTest);
});