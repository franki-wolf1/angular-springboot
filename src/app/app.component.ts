import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { MaterialModule } from './material.module';
 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
import { environment } from '../environments/emviroment';
import { AngularFireModule } from '@angular/fire/compat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MaterialModule, 
    AngularFirestoreModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'inter-ruta-passengers';

  constructor() {}

  ngOnInit() { 
    AngularFireModule.initializeApp(environment.firebase);
  }
}
