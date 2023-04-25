import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele :ElementRef) { }

  @HostListener('mousemove') onmousemove()
  {
  this.setcolor('red');
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('black');
    this.settext('white');
  }


  setcolor(color:string){
    this.ele.nativeElement.style.background =color
  }

  settext(color:string){
    this.ele.nativeElement.style.color =color
  }

}
