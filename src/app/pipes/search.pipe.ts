import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {


  transform(lista: any[], texto: string): any[] {
    //si no hay nada escrito aparece toda la lista
    if (!texto) return lista
    //si hay escrito devuelve el nombre
    return lista.filter(game => game.name.toUpperCase().includes(texto.toUpperCase()))
  }
}
