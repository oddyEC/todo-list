import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStrike]'
})
export class StrikeDirective implements OnInit {
  @Input() appStrike: boolean = false;

  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.textDecoration = 
    this.appStrike ? 'line-through' : 'none';
  }

  @HostListener('mouseenter')
  addLine(){
    this.elementRef.nativeElement.style.textDecoration = 'line-through';
  }
  @HostListener('mouseleave')
  removeLine(){
    this.elementRef.nativeElement.style.textDecoration = 'none';
      }
}
