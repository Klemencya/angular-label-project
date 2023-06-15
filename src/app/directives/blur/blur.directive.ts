import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: '[blurDirective]'
})

export class BlurDirective {
  @Input() blur = false

  constructor(private el: ElementRef) {}
  ngOnChanges(){
    if (this.blur) {
      this.el.nativeElement.style.filter = 'blur(4px)';
    } else {
      this.el.nativeElement.style.filter = 'blur(0)';
    }
  }
}
