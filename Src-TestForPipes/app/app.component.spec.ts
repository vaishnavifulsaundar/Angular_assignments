import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'assign'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('assign');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('assign app is running!');
//   });



describe('CountCapital', () => {
  it('should return the correct count of capital letters', () => {
    const appComponent = new AppComponent();
    const str = "vAISHNAVI";
    const count = appComponent.CountCapital(str);
    expect(count).toBe(8);
  });


});

  describe('CheckPassword',()=>{

    it('should return 1 if password in correct format',()=>{
      const appComponent = new AppComponent();
      const pass = "VAish27*";
      const result = appComponent.CheckPassword(pass);
      expect(result).toBe(true);
    })
  })

  describe('ArrayAddition should return true if addition is right',()=>{

    it('ArrayAddition',()=>{
      const appComponent = new AppComponent();
      const Arr =[10,20,30,40,50];
      const result = appComponent.ArrayAddition(Arr);
      expect(result).toBe(150);
    })

    it('ArrayAddition should return 0 if the array is empty', () => {
      const appComponent = new AppComponent();
      const emptyArr:any[] = [];
      const result = appComponent.ArrayAddition(emptyArr);
      expect(result).toBe(0);
    });
  })

 



