import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { HeaderComponent } from './componentes/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgendaComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen01Angular';
}
