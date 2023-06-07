import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-label',
  templateUrl: 'label.component.html',
  styleUrls: ['label.component.scss']
})

export class LabelComponent {
  @Input() labelText: string = '';
  @Input() tooltipText: string = '';
  @Input() asterisk: boolean = false;
  @Input() tooltip: boolean = false;
}
