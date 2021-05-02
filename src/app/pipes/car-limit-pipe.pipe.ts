import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'carLimitPipe'
})
export class CarLimitPipePipe implements PipeTransform {

  transform(value: CarDetailDto[], limit: number): CarDetailDto[] {
    limit = limit ? limit : 0;
    return limit ? value.slice(0,limit) : value;
  }

}
