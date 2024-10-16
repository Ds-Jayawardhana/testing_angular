import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolsComponent } from './components/rols/rols.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RolsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testing_angular';
}
