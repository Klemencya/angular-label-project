import {Directive, ElementRef, Input, Renderer2, TemplateRef, ViewChild, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[blurDirective]'
})

export class BlurDirective {
  private _blur: boolean

  constructor(private el: ElementRef,
              private template: TemplateRef<any>,
              private container: ViewContainerRef,
              private renderer: Renderer2) {}

  @Input()
  public set blurDirective(blurStatus: boolean) {
    this._blur = blurStatus;

    this.container.clear()
    this.container.insert(this.template.createEmbeddedView(null))
    const element = (this.container.get(0) as any).rootNodes[0]
      // const div = this.renderer.createElement('div');
      // this.renderer.setStyle(div, 'filter', 'blur(5px)');
      // this.renderer.appendChild(div, this.template.elementRef.nativeElement);
      // this.renderer.appendChild(this.el.nativeElement, div);

    let height = element.offsetHeight;
    let width = element.offsetWidth;

    if (this._blur) {

      const blurDiv = this.renderer.createElement('div');
      this.renderer.setStyle(blurDiv, 'backdrop-filter', 'blur(5px)');
      this.renderer.setStyle(blurDiv, 'pointerEvents', 'none');
      this.renderer.setStyle(blurDiv, 'position', 'absolute');
      this.renderer.setStyle(blurDiv, 'height', `100%`);
      this.renderer.setStyle(blurDiv, 'width', `100%`);
      this.renderer.setStyle(blurDiv, 'top', `0`);
      this.renderer.setStyle(blurDiv, 'left', `0`);

      const loaderDiv = this.renderer.createElement('div');
      this.renderer.setStyle(loaderDiv, 'z-index', `1`);
      this.renderer.addClass(loaderDiv, 'loader');

      this.renderer.appendChild(element, loaderDiv);
      this.renderer.appendChild(element, blurDiv);
      // this.renderer.appendChild(element, this.template.elementRef.nativeElement);
      // console.log(this.container.element.nativeElement)
      // console.log(this.template.elementRef.nativeElement)
      // this.renderer.setStyle(this.template.elementRef.nativeElement, 'filter', 'blur(5px)')
    } else {
      this.renderer.setStyle(element, 'filter', 'blur(0)');
      this.renderer.setStyle(element, 'pointerEvents', 'auto');
      // this.renderer.appendChild(element, this.template.elementRef.nativeElement);
      // this.container.clear()
      // this.container.createEmbeddedView(this.template)
    }

    // if (this._blur) {
      // this.el.nativeElement.style.filter = 'blur(4px)';
      // this.el.nativeElement.style.pointerEvents = 'none';
    // } else {
      // this.el.nativeElement.style.filter = 'blur(0)';
      // this.el.nativeElement.style.pointerEvents = 'auto';
    // }
  }
  public get blurDirective() {
    return this._blur
  }
}
