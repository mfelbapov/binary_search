import jasmine from "jasmine";
import { binary }  from "../src/index"

describe("Binary Search Algorithm", () => {
  it("Should return true", () => {
    expect(true).toBe(true);
  });

  it("Should throw an error if array is empty", () => {
    expect(() => binary([])).toThrow(new Error("Array needs to have at least element"))
  })

  
})
