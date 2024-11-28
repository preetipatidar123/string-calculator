import { calculator } from "../StringCalculator/stringCalculator";

describe('String Calculator', () => {
    it('Return 0 for empty string', () => {
      expect(calculator("")).toBe(0);
    });

    it('return the same number for a single number', () => {
        expect(calculator("1")).toBe(1);
      });
  });