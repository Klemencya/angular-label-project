import {Component, Input} from '@angular/core'

/**
 * Этот компонент отвечает за создание подписей к различным полям
 */
@Component({
  selector: 'app-label',
  templateUrl: 'label.component.html',
  styleUrls: ['label.component.scss']
})

export class LabelComponent {
  /**
   * Текст, который будет отображаться в label
   */
  @Input() labelText: string = '';
  /**
   * Текст, который будет отображаться в тултипе
   */
  @Input() tooltipText: string = '';
  @Input() asterisk: boolean = false;
  @Input() tooltip: boolean = false;
}
