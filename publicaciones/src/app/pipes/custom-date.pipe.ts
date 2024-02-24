import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: any, formato: string = 'dd/MM/yyyy'): any {
    return this.datePipe.transform(value, formato);
  }
}
