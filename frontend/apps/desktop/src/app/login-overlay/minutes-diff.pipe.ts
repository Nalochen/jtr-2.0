import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment-timezone';

@Pipe({
  standalone: true,
  name: 'minutesDiff',
})
export class MinutesDiffPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public transform(value: string | undefined, ...args: unknown[]) {
    if (!value) {
      return 0;
    }

    const utcTime = moment.utc(value, 'YYYY-MM-DD HH:mm:ss');
    const berlinTime = moment.tz('Europe/Berlin');

    const berlinTimeFromUtc = utcTime.clone().tz('Europe/Berlin');
    const timeDifference = berlinTimeFromUtc.diff(berlinTime);

    return Math.floor(moment.duration(timeDifference).asMinutes());
  }
}
