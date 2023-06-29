import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ng-doc-docs',
  template: `
    <ng-doc-root>
      <ng-doc-navbar [leftContent]="leftContent">
        <ng-template #leftContent>
          <h3 style="margin: 0">MyAwesomeDoc</h3>
        </ng-template>
      </ng-doc-navbar>
      <ng-doc-sidebar></ng-doc-sidebar>
      <router-outlet></router-outlet>
    </ng-doc-root>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent {}
