import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'carFilterPipe'
})
export class CarFilterPipePipe implements PipeTransform {

  transform(value: CarDetailDto[], colorName: string, brandName: string): CarDetailDto[] {
    colorName = colorName ? colorName.toLocaleLowerCase() : "";
    brandName = brandName ? brandName.toLocaleLowerCase() : "";
    return (colorName || brandName) ? value
    .filter((c:CarDetailDto) => c.brandName.toLocaleLowerCase().indexOf(brandName) !== -1 && c.colorName.toLocaleLowerCase().indexOf(colorName) !== -1) : value;

  }

}
