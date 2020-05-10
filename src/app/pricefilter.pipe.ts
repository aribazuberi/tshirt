import { Pipe, PipeTransform } from '@angular/core';
import { TProduct } from './TProduct';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(value:TProduct[], args:string): unknown {
    if(!args){
      return value;
    }

    return value.filter(item => item.productPrice>Number(args));
  }

}
