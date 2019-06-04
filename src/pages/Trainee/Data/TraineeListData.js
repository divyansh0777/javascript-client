import { getDateFormat } from './trainee';

export const traineeTableId = '01';

export const traineeTableColumns = [

  {
    field: 'email',
    label: 'Email',
    align: 'center',
  },
  {
    field: 'profession',
    label: 'Profession',
    align: 'center',
  },
  {
    field: 'age',
    label: 'Age',
    align: 'center',
  },
  {
    field: 'id',
    label: 'Id',
    align: 'center',
  },
  {
    field: 'team',
    label: 'Team',
    align: 'center',
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
    profession: 'Wicket Keeper, Former Capt.',
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
  {
    currentDateTime: getDateFormat(new Date()),
    email: 'yuvi@gmail.com',
    id: '54783bd83645h45hf7937830',
    src: '/images/cricketers/yuvraj-singh.jpg',
    name: 'Yuvraj Singh',
    age: '48',
    profession: 'Batsman',
    team: 'India',
  },
  {
    currentDateTime: getDateFormat(new Date()),
    email: 'virat@gmail.com',
    id: '54737ft5ab0fl9673n7f95hd730',
    src: '/images/cricketers/virat-kohli.jpeg',
    name: 'Virat Kohli',
    age: '40',
    profession: 'Batsman',
    team: 'India',
  },
];
