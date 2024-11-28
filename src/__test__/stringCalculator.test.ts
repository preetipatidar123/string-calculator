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
      
  });