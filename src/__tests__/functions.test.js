const functions = require ('../functions')

test('function add should add two numbers', () => {
    expect(functions.add(1, 2)).toBe(3)
})

test('function add should return ad number', () => {
    expect(functions.add(7, 9)).not.toBeNaN()
})

test('reference types are special', () => {
    expect([234]).toEqual([234])
}) //pass

// test('reference types are special', () => {
//     expect([234]).toBe([234])
// })//fail //toEqual for arrays and objects preferable to toBe

test('sayHello returns hello', () => {
    expect(functions.sayHello()).toBe('hello')
})

test('object assignment should add correct properties and values', () => {
    const data = {
        name: 'Andrew',
    }

    data.age = 33;
    data.favorites = {
        food: 'pizza',
    }

    expect(data).toEqual({
        name: 'Andrew',
        age: 33,
        favorites: {
            food: 'pizza'
        }
    })
})

test('user name should contain Leanne', async () => {
    expect.assertions(1);

    const data = await functions.getUser();

    expect(data.name).toEqual('Leanne Graham')
    // expect(functions.getUser())
})


let bankAccount = {
    balance: 1000,
    depositMoney(amount) {
        this.balance += amount;
        return this.balance
    },
    withdrawMoney(amount) {
        this.balance -= amount;
    },

};

describe('Bank Account methods and properties', () => {
    beforeEach(() => {
        bankAccount.balance = 1000
    })

    test('initial balance should be 1000', () => {
        expect(bankAccount.balance).toBe(1000)
    })

    test('depositing 9000 should update balance to 10000', () => {
        expect(bankAccount.depositMoney(9000)).toBe(10000)
    })
})