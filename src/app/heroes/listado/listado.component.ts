import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  heroes: string[]=["s", "i", "s","a" ];
  heroeBorrado:string[]=[];
  borrar(){




    
    const hB=this.heroes.shift();
    if(hB)
    this.heroeBorrado.push(hB)
  }
}
