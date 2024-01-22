import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { MaterialModule } from './material.module';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'inter-ruta-passengers';
}
