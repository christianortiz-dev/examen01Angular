import { Contacto } from './../../interfaces/agenda';
import { Component } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [ListaComponent, DetalleComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  contacto: Contacto = {
    id: 0,
    nombre: 'Selecciona',
    apellidos: ' un contacto',
    direccion: '',
    email: '',
    tlf: ''
  }

  recibirContacto(dato: Contacto) {
    this.contacto  = dato;
  }
}
