import * as moment from 'moment';

export const getDateFormat = date => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
