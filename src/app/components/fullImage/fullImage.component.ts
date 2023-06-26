import {ChangeDetectorRef, Component, EventEmitter, Inject, Input} from '@angular/core'
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {animate, AnimationEvent, transition, trigger, style} from "@angular/animations";
import {DomHandler} from "primeng/dom";
import {ZIndexUtils} from "primeng/utils";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'full-image',
  templateUrl: 'fullImage.component.html',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.7)', opacity: 0 }),
        animate('{{showTransitionParams}}')
      ]),
      transition('visible => void', [
        animate('{{hideTransitionParams}}', style({ transform: 'scale(0.7)', opacity: 0 }))
      ])
    ])
  ],
})

export class FullImageComponent {
  _src: string = ''
  _alt: string = 'No image'

  maskVisible: boolean = true;
  previewVisible: boolean =  true;
  rotate: number = 0;
  scale: number = 1;
  previewClick: boolean = false;
  container: HTMLElement | null;
  wrapper: HTMLElement | null;

  showTransitionOptions: string = '150ms cubic-bezier(0, 0, 0.2, 1)';
  hideTransitionOptions: string = '150ms cubic-bezier(0, 0, 0.2, 1)';
  onHide: EventEmitter<any> = new EventEmitter();
  onShow: EventEmitter<any> = new EventEmitter();
  appendTo: any;

  constructor(public dynamicDialogConfig: DynamicDialogConfig,
              private cd: ChangeDetectorRef,
              private config: PrimeNGConfig,
              public ref: DynamicDialogRef) {
    this._src = dynamicDialogConfig.data.src;
    this._alt = dynamicDialogConfig.data.alt;
  }

  rotateRight() {
    this.rotate += 90;
    this.previewClick = true;
  }

  rotateLeft() {
    this.rotate -= 90;
    this.previewClick = true;
  }

  zoomIn() {
    this.scale = this.scale + 0.1;
    this.previewClick = true;
  }

  zoomOut() {
    this.scale = this.scale - 0.1;
    this.previewClick = true;
  }

  zoomOutDisabled() {
    return +this.scale.toFixed(1) <= 0.5
  }

  zoomInDisabled() {
    return +this.scale.toFixed(1) >= 1.5;
  }

  onAnimationStart(event: AnimationEvent) {
    switch(event.toState) {
      case 'visible':
        this.container = event.element;
        this.wrapper = (this.container as HTMLElement).parentElement;
        this.appendContainer();
        this.moveOnTop();
        break;

      case 'void':
        DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
        break;
    }
  }

  onAnimationEnd(event: AnimationEvent) {
    switch(event.toState) {
      case 'void':
        ZIndexUtils.clear(this.container);
        this.maskVisible = false;
        this.container = null;
        this.wrapper = null;
        this.cd.markForCheck();
        this.onHide.emit({});
        break;
      case 'visible':
        this.onShow.emit({});
        break;
    }
  }

  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === 'body')
        document.body.appendChild(<HTMLElement>this.wrapper);
      else
        DomHandler.appendChild(this.wrapper, this.appendTo);
    }
  }

  moveOnTop() {
    ZIndexUtils.set('modal', this.container, this.config.zIndex.modal);
    (this.wrapper as HTMLElement).style.zIndex = String(parseInt((this.container as HTMLElement).style.zIndex, 10) - 1);
  }

  imagePreviewStyle() {
    return {transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ')'};
  }

  onPreviewImageClick() {
    this.previewClick = true;
  }

  closeDialog() {
    this.ref.close("Window closed")
  }

  protected readonly console = console;
}
