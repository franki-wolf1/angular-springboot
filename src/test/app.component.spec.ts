import { TestBed, ComponentFixture } from '@angular/core/testing'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';  
import { environment } from '../environments/emviroment';
import { AppComponent } from '../app/app.component';
import { MaterialModule } from '../app/material.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [AngularFirestoreModule, AngularFireModule, MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });

  test('should have a title', () => {
    expect(component.title).toBeDefined();
    expect(component.title).toBe('inter-ruta-passengers');
  });

  test('should initialize AngularFireModule with environment.firebase', () => {
    expect(() => AngularFireModule.initializeApp(environment.firebase)).not.toThrowError();
  });

  test('debe hacer mach con snapshot', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const compiler = fixture.nativeElement as HTMLElement;
    expect( compiler ).toMatchSnapshot();
  })

  // Add more test cases as needed
});
