import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultPipe();
    expect(pipe).toBeTruthy();
  });

  it('should  return true if multiplication is right',()=>{
    let multpipe =new MyMultPipe();
    expect(multpipe.transform(10,20)).toEqual(200);
  })

  
});
