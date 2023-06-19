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

      console.log(this.container.element)
    if (this._blur) {
      this.renderer.setStyle(element, 'filter', 'blur(5px)');
      this.renderer.setStyle(element, 'pointerEvents', 'none');
      const div = this.renderer.createElement('div');
      this.renderer.addClass(div, 'loader');
      this.renderer.appendChild(element, div);
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
