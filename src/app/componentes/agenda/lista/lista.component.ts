import { Component, Output } from '@angular/core';
import { Contacto } from '../../../interfaces/agenda';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  contacto: Contacto = {
    id: 0,
    nombre: '',
    apellidos: '',
    direccion: '',
    email: '',
    tlf: ''
  }

  contactos: Contacto[] = [
    {
      id: 1,
      nombre: 'María',
      apellidos: 'Muñoz',
      direccion: 'Mandarinas 14',
      email: 'mariamunoz@gmail.com',
      tlf: '542 12 23 54'
    },
    {
      id: 2,
      nombre: 'Benito',
      apellidos: 'Pérez',
      direccion: 'Aguacates 33',
      email: 'benitoperez@hotmail.com',
      tlf: '931 83 71 33'
    },
    {
      id: 3,
      nombre: 'Mercedes',
      apellidos: 'Jumilla',
      direccion: 'Platanos 41',
      email: 'merecedesjumilla@yahoo.es',
      tlf: '737 18 29 34'
    },
    {
      id: 4,
      nombre: 'Rodolfo',
      apellidos: 'López',
      direccion: 'Limones 12',
      email: 'rodolfolopez@outlook.es',
      tlf: '931 82 14 33'
    }
  ]

  @Output() mensajeEvento = new EventEmitter<Contacto>();
  enviarContacto(value: Contacto) {
    this.mensajeEvento.emit(value);
  }

  verFormulario = false;

  mostrarFormulario() {
    this.verFormulario = !this.verFormulario;
    this.contacto.id = this.contactos.length + 1;
  }

  borrar(dato:number){
    for(let x = 0; x < this.contactos.length;x++){
      if(dato == this.contactos[x].id){
        this.contactos.splice(x,1);
        this.actualizarListado();
        return;
      }
    }
  }

  actualizarListado() {
    for(let x = 0; x < this.contactos.length;x++){
      this.contactos[x].id = x + 1;
    }
  }

  agregar() {
    for(let x = 0; x < this.contactos.length;x++){
      if(this.contacto.id == this.contactos[x].id) {
        alert("ID ya en uso!")
        return
      }
    }

    this.contactos.push(
      {
        id: this.contacto.id,
        nombre: this.contacto.nombre,
        apellidos: this.contacto.apellidos,
        direccion: this.contacto.direccion,
        email:  this.contacto.email,
        tlf: this.contacto.tlf
      }
    );

    this.contacto.nombre = '';
    this.contacto.apellidos = '';
    this.contacto.direccion = '';
    this.contacto.email = '';
    this.contacto.tlf = '';

    this.mostrarFormulario();

  }

  seleccionar(receta: Contacto) {
    this.mostrarFormulario();

    this.contacto.id = receta.id;
    this.contacto.nombre = receta.nombre;
    this.contacto.apellidos = receta.apellidos;
    this.contacto.direccion = receta.direccion;
    this.contacto.email = receta.email;
    this.contacto.tlf = receta.tlf;

  }

  modificar() {
    for (let x = 0; x < this.contactos.length; x++) {
      if (this.contactos[x].id == this.contacto.id) {
        this.contactos[x].nombre = this.contacto.nombre
        this.contactos[x].apellidos = this.contacto.apellidos
        this.contactos[x].direccion = this.contacto.direccion
        this.contactos[x].email = this.contacto.email
        this.contactos[x].tlf = this.contacto.tlf
        return
      }

    }
  }

}
