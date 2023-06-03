import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAddPipe();
    expect(pipe).toBeTruthy();
  });

  it('should  return true if addition is right',()=>{
    let addpipe =new MyAddPipe();
    expect(addpipe.transform(10,20)).toEqual(30);
  })

});
