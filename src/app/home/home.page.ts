import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nombre!: string;
  apellido!: string;
  fechanacimiento!: string;
  
  eventos = [
    { tipo: 'Concierto', precio: 10000 },
    { tipo: 'Exhibicion', precio: 50000 },
    { tipo: 'Torneo', precio: 30000 }
  ];

  entrada = [
    { tipo: 'normal', suma: 10000 },
    { tipo: 'premium', suma: 50000 },
    { tipo: 'vip', suma: 30000 }
  ];

  numentradas!: number;

  selectedEvent!: string;
  precio!: number;

  alertButtons: string[] = ['Ok']

  constructor(
    private router: Router
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state
    console.log('state: ' + JSON.stringify(state))
    if(state){
      this.nombre = state['nombre']
    }
  }

  ngOnInit() {
  }

  clean(){
    this.nombre = '';
    this.apellido = '';
    this.fechanacimiento = '';

  }

  eventoSeleccion(evento: string){
    const eventoEncontrado = this.eventos.find(e => e.tipo === evento);
    if (eventoEncontrado) {
      this.precio = eventoEncontrado.precio;
    } else {
      this.precio = 0;  
    }
  }

  entradaSeleccion(entrada: string){
    const entradaEncontrada = this.entrada.find(e => e.tipo === entrada);
    if (entradaEncontrada) {
      this.precio = this.precio+entradaEncontrada.suma;
    } else {
      this.precio = this.precio;  
    }
  }

  getAlertMessage() {
    const total = this.precio * this.numentradas;
    return `
      El valor único es de $${this.precio}
      El valor total es de $${total}
    `;
  }
}