import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './component/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[SidenavComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Personal_Brand_app');
}
