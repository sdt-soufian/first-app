import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  myLimit: number = 0;
  transform(value: any, index?: number): any {
    if(!value){
      return null;
    }
    this.myLimit = (index) ? index : 20; 
    return value.slice(0, this.myLimit) + '...';
  }

}
