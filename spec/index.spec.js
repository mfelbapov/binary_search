import jasmine from "jasmine";
import { binary }  from "../src/index"

describe("Binary Search Algorithm", () => {
  it("Should return true", () => {
    expect(true).toBe(true);
  });

  it("Should return -1 if array is empty", () => {
    expect(binary([], 6)).toEqual(-1)
  });

  it("Should return an index in array of size one, of number we are looking for", () => {
    expect(binary([1], 1)).toEqual(0);
  });

  it("Should return an index of -1 if the element does not exist", () => {
    expect(binary([1], 6)).toEqual(-1);
  });

  it("Should return an index in array of size two, of number we are looking for", () => {
    expect(binary([4, 5], 4)).toEqual(0);
  })

  it("Should return an index in array of size two, of number we are looking for", () => {
    expect(binary([6, 7], 7)).toEqual(1);
  })

  it("Should return an index in array of odd size 5, and number in on pivot", () => {
    expect(binary([1, 2, 4, 6, 7], 4)).toEqual(2)
  })

  it("Should return an index in array of odd size 5, and number in lower half", () => {
    expect(binary([1, 2, 4, 6, 7], 2)).toEqual(1);
  })

  it("Should return an index in array of odd size 5, and number in upper half", () => {
    expect(binary([1, 2, 4, 6, 7], 6)).toEqual(3);
  })

  it("Should return an index in array of even size 6 , and nuber is in lower half", () => {
    expect(binary([1, 2, 4, 6, 7, 8], 4)).toEqual(2);
  })

  it("Should return an index in array of any size, of number we are looking for", () => {
    expect(binary([1, 2, 4, 6, 7, 8], 7)).toEqual(4);
  })
})
