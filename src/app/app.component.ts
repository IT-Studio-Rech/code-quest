import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeadlineComponent} from "./shared/ui/component/headline/headline.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeadlineComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-quest';
}
