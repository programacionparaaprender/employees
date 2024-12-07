import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformatfire',
  standalone: true,
})
export class DateFormatFirePipe implements PipeTransform {
  transform(timestamp: { seconds: number; nanoseconds: number }): string {
    if (!timestamp) return '';
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
}