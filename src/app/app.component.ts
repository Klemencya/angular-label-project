import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-label-project';
  current_blur = false;
  pictures = ['/assets/picture1.jpeg',
                      '/assets/picture2.jpeg',
                      '/assets/picture3.jpeg']
}
