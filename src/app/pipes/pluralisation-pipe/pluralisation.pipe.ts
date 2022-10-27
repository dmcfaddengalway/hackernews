import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralisation',
  pure: true
})
export class PluralisationPipe implements PipeTransform {
  transform(field: number, type: string): string {
    if (type === 'score') {
      if (field > 0) {
        let st = field === 1 ? 'point' : 'points';
        return `${field} ${st}`;
      }

      return 'discuss';
    }

    if (type === 'comments') {
      if (field > 0) {
        let st = field === 1 ? 'comment' : 'comments';
        return `${field} ${st}`;
      }

      return 'discuss';
    }
  }
}
