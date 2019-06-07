import { getDateFormat } from './trainee';

export const traineeTableId = '01';

export const traineeTableColumns = [
  {
    field: 'name',
    label: 'Name',
    align: 'center',
  },
  {
    field: 'email',
    label: 'Email',
    align: 'center',
    format: value => value && value.toUpperCase(),
  },
  {
    field: 'profession',
    label: 'Profession',
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
  {
    field: 'createdAt',
    label: 'CreatedAt',
    align: 'center',
  },
];

export const traineeListData = [
  {
    createdAt: getDateFormat('2019-02-10T18:15:11.778Z'),
    email: 'sachin@gmail.com',
    id: '232ddf3sr4er52re4wd3fd234',
    src: '/images/cricketers/sachin_tendulkar.jpeg',
    name: 'Sachin Tendulkar',
    profession: 'Batsman',
    team: 'India',
  },
  {
    createdAt: getDateFormat('2019-02-12T18:15:11.778Z'),
    email: 'msd@gmail.com',
    id: '54783bd836e39vcj4365ne30',
    src: '/images/cricketers/MSD.jpg',
    name: 'Mahendra Singh Dhoni',
    profession: 'Wicket Keeper, Former Capt.',
    team: 'India',
  },
  {
    createdAt: getDateFormat('2019-02-13T18:15:11.778Z'),
    email: 'guatam@gmail.com',
    id: '54783bd83645h457f95hd730',
    src: '/images/cricketers/Gautam-Gambhir.jpg',
    name: 'Gautam Gambhir',
    profession: 'Batsman',
    team: 'India',
  },
  {
    createdAt: getDateFormat('2019-02-14T18:15:11.778Z'),
    email: 'yuvi@gmail.com',
    id: '54783bd83645h45hf7937830',
    src: '/images/cricketers/yuvraj-singh.jpg',
    name: 'Yuvraj Singh',
    profession: 'Batsman',
    team: 'India',
  },
  {
    createdAt: getDateFormat('2019-02-15T18:15:11.778Z'),
    email: 'virat@gmail.com',
    id: '54737ft5ab0fl9673n7f95hd730',
    src: '/images/cricketers/virat-kohli.jpeg',
    name: 'Virat Kohli',
    profession: 'Batsman',
    team: 'India',
  },
];
