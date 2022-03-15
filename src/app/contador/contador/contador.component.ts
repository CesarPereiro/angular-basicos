import { Component } from "@angular/core";
@Component({
    selector:'app-contador',
    template:`
        <h1>{{title}}</h1>
        <span>{{base}}</span>
        <br>
        <span>{{numero}}</span>
        <button (click)="computar(base)">+</button>
        <button (click)="computar(-base)">-</button>
    `
})
export class ContadorComponent{
    title: string = 'Contador App';
    base: number=5;
    numero: number= 0;
    computar(valor:number){
      this.numero+=valor;
    }
}