import * as moment from 'moment';

export const getDateFormat = date => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
export const isDateAfter = (after, before) => moment(moment(after).format('YYYY-MM-DD')).isAfter(before);
