// import { Directive } from '@angular/core';
// import { Directive, ElementRef } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  // constructor() { }
  // constructor(el: ElementRef) {
  //   el.nativeElement.style.backgroundColor = 'yellow';
  // }
  constructor(private el: ElementRef) { }

  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('yellow');
    // this.highlight(this.highlightColor || 'red');
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
