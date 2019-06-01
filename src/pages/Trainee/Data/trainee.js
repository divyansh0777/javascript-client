import * as moment from 'moment';

export const getDateFormat = () => moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
