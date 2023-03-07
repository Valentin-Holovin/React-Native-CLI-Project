import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

type DateTime = string | Date | number | Dayjs;

dayjs.extend(relativeTime);

export const getRelativeTime = (date: DateTime) => dayjs(date)
  .fromNow();
