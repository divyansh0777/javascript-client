import { getDateFormat } from './trainee';

export const traineeTableId = '01';

export const traineeTableColumns = [

  {
    field: 'email',
    label: 'Email',
    align: 'centre',
  },
  {
    field: 'profession',
    label: 'Profession',
    align: 'centre',
  },
  {
    field: 'age',
    label: 'Age',
    align: 'centre',
  },
  {
    field: 'id',
    label: 'Id',
    align: 'centre',
  },
  {
    field: 'team',
    label: 'Team',
    align: 'centre',
  },
];

export const traineeListData = [
  {
    currentDateTime: getDateFormat(new Date()),
    email: 'sachin@gmail.com',
    id: '232ddf3sr4er52re4wd3fd234',
    src: '/images/cricketers/sachin_tendulkar.jpeg',
    name: 'Sachin Tendulkar',
    age: '45',
    profession: 'Batsman',
    team: 'India',
  },
  {
    currentDateTime: getDateFormat(new Date()),
    email: 'msd@gmail.com',
    id: '54783bd836e39vcj4365ne30',
    src: '/images/cricketers/MSD.jpg',
    name: 'Mahendra Singh Dhoni',
    profession: 'WC, Ex Captain',
    age: '40',
    team: 'India',
  },
  {
    currentDateTime: getDateFormat(new Date()),
    email: 'guatam@gmail.com',
    id: '54783bd83645h457f95hd730',
    src: '/images/cricketers/Gautam-Gambhir.jpg',
    name: 'Gautam Gambhir',
    age: '40',
    profession: 'Batsman',
    team: 'India',
  },
];
