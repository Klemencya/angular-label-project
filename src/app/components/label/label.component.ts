import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-label',
  templateUrl: 'label.component.html'
})
export class LabelComponent {
  @Input() label_text: string;
  @Input() asterisk: boolean;
  @Input() tooltip: boolean;
}
