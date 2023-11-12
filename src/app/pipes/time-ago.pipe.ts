import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    if (!value) return '';

    if (typeof value === 'string') {
      // If the input is a string, attempt to parse it as a Date
      value = new Date(value);
    }

    if (!(value instanceof Date) || isNaN(value.getTime())) {
      return 'Invalid Date';
    }

    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - value.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    if (seconds < 60) {
      return seconds === 1 ? '1 second ago' : seconds + ' seconds ago';
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return minutes === 1 ? '1 minute ago' : minutes + ' minutes ago';
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return hours === 1 ? '1 hour ago' : hours + ' hours ago';
    }

    const days = Math.floor(hours / 24);
    if (days < 30) {
      return days === 1 ? '1 day ago' : days + ' days ago';
    }

    const months = Math.floor(days / 30);
    return months === 1 ? '1 month ago' : months + ' months ago';
  }
}
