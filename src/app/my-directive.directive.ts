import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elet: ElementRef) { }
  @HostListener('blur') onBlur(){
    let val: string = this.elet.nativeElement.value;
    this.elet.nativeElement.value = val.toUpperCase();
  }
  @HostListener('focus') onFocus(){
    console.log('On Focus')
  }

}
