import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-label',
  templateUrl: 'label.component.html'
})
export class LabelComponent {
  @Input() labelText: string = '';
  @Input() tooltipText: string = '';
  @Input() asterisk: boolean = false;
  @Input() tooltip: boolean = false;
}
