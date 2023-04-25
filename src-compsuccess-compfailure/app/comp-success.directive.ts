import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ele:ElementRef) {
   
   }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('green');
    this.settext('white');
  }


  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('black');
  }
     setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  }

  settext(color:string){
    this.ele.nativeElement.style.color =color
  }
}


