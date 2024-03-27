import {ImageSourcePropType} from 'react-native';

interface User {
  name: string;
  profile: ImageSourcePropType;
}
export const user: User = {
  name: 'tugane',
  profile: require('../assets/images/avatar.jpeg'),
};

export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Squats',
  },
  {
    id: 2,
    name: 'Pushup',
  },
  {
    id: 3,
    name: 'Jumping',
  },
  {
    id: 4,
    name: 'Squats',
  },
];
