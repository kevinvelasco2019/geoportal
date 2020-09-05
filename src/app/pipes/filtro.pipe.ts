import { Pipe, PipeTransform } from '@angular/core';
import { Establecimiento } from './../interfaces/establecimiento';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: Establecimiento[], texto: string): Establecimiento[] {
    if (texto.length === 0){
      return arreglo;
    }
    texto = texto.toLocaleLowerCase();
    return arreglo.filter(local => {
      return local.tienda_nom.toLocaleLowerCase().includes(texto)
      || local.tienda_pag.toLocaleLowerCase().includes(texto)
      || local.tienda_sec.toLocaleLowerCase().includes(texto)
      || local.tienda_dir.toLocaleLowerCase().includes(texto);
    });
  }
}
