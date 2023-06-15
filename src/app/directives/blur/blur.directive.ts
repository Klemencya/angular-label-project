import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: '[blurDirective]'
})

export class BlurDirective {
  @Input()
  public get blur() {
    return this._blur
  }
  public set blur(arg: boolean) {
    this._blur = arg
    if (this._blur) {
      this.el.nativeElement.style.filter = 'blur(4px)';
      this.el.nativeElement.style.pointerEvents = 'none';
    } else {
      this.el.nativeElement.style.filter = 'blur(0)';
      this.el.nativeElement.style.pointerEvents = 'auto';
    }
  }
  private _blur: boolean
  constructor(private el: ElementRef) {}
}
