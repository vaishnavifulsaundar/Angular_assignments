import { pipe } from 'rxjs';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('create an instance', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform value to "Prime" if it is a prime number', () => {
    const pipe = new MarvellousChkPipe();
    const transformed = pipe.transform(7, 'Prime');
    expect(transformed).toBe('Prime');
  });

  it('should transform value to "Not Prime" if it is not a prime number', () => {
    const pipe = new MarvellousChkPipe();
    const transformed = pipe.transform(10, 'Prime');
    expect(transformed).toBe('Not Prime');
  });

  it('should transform value to "Perfect" if it is a perfect number', () => {
    const pipe = new MarvellousChkPipe();
    const transformed = pipe.transform(6, 'Perfect');
    expect(transformed).toBe('Perfect');
  });


  it('should transform value to "Not Perfect" if it is not a perfect number', () => {
    const pipe = new MarvellousChkPipe();
    const transformed = pipe.transform(4, 'Perfect');
    expect(transformed).toBe('Not Perfect');
  });


  it('should transform value to "Even" if it is an even number', () => {
    const pipe = new MarvellousChkPipe();
    const transformed = pipe.transform(4, 'Even');
    expect(transformed).toBe('Even');
  });

  it('should transform value to "Odd" if it is an odd number', () => {
    const pipe = new MarvellousChkPipe();
    const transformed = pipe.transform(7, 'Even');
    expect(transformed).toBe('Odd');
  });

  it('should return "Invalid Parameter" if an invalid parameter is provided', () => {
    const pipe = new MarvellousChkPipe();
    const transformed = pipe.transform(5, 'Invalid');
    expect(transformed).toBe('Invalid Parameter');
  });

});
