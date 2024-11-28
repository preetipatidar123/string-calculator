import { calculator } from "../StringCalculator/stringCalculator";

describe('String Calculator', () => {
    it('Return 0 for empty string', () => {
      expect(calculator("")).toBe(0);
    });
  });