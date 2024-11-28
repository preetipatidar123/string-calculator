
export const calculator = (numbers: string): number => {
    // if(!numbers){
    //     return 0
    // }
    // return 1; 

    if (!numbers) return 0;
    const nums = numbers.split(',').map(Number);
     return nums.reduce((sum, num) => sum + num, 0);

  };
  