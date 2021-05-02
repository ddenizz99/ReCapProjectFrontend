import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'hideCarPipe'
})
export class HideCarPipePipe implements PipeTransform {

  transform(value: CarDetailDto[], car: CarDetailDto): CarDetailDto[] {
    if (car) {
      let item = value.find(c => c.carId === car.carId);
      if (item) {
        value.splice(value.indexOf(item),1);
      }
    }
    return value;
  }

}
