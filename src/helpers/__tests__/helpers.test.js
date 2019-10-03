import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it('can multiply two integers', () => {
    expect(helpers.multiply(2, 3)).toBe(6);
    expect(helpers.multiply(150, 70)).toBe(10500);
  })
  it('returns null when given non-numerical input', () => {
    expect(() => helpers.multiply("1", "2").toThrow())
  })
  it('can multiply an arbitrary number of numbers', () => {
    expect(helpers.multiply(2, 3, 4)).toBe(24)
    expect(helpers.multiply(2, 3, 4, 5, 6)).toBe(720)
  })
  it('can multiply two floats', () => {
    expect(helpers.multiply(4.56, 7.12)).toBe(32.4672)
  })
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });

  // write more tests! <===========================================
});
