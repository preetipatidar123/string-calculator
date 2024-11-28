import { calculator } from "../StringCalculator/stringCalculator";

describe('String Calculator', () => {
    it('Return 0 for empty string', () => {
      expect(calculator("")).toBe(0);
    });

    it('return the same number for a single number', () => {
        expect(calculator("1")).toBe(1);
      });

      it(' return the sum for two numbers', () => {
        expect(calculator("1,2")).toBe(3);
      });
      it('it should handle any number of inputs', () => {
        expect(calculator("1,2,3,4")).toBe(10);
      });
      it('it will handle newlines as delimiters', () => {
        expect(calculator("1\n2,3")).toBe(6);
      });
      it("it support custom delimiters", () => {
        expect(calculator("//;\n1;2")).toBe(3);
      });
    
      it("it will throw an erorr for negative numbers", () => {
        expect(() => calculator("1,-2,3")).toThrow("negative numbers not allowed -2");
      });
    
      it(" list all negative numbers in the exception message", () => {
        expect(() => calculator("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
      });
      
  });