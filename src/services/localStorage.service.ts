import { UserModel } from '@app/domain/UserModel';
const avatarImg = 'https://avatars.githubusercontent.com/u/1109591?v=4';

const testUser = {
  id: 1,
  firstName: 'Frank',
  lastName: 'Yan',
  imgUrl: avatarImg,
  userName: '@yantao0527',
  email: {
    name: 'frankyan.work@gmail.com',
    verified: true,
  },
  phone: {
    number: '+18143519459',
    verified: false,
  },
  sex: 'male',
  birthday: '09/18/1980',
  lang: 'en',
  country: '',
  city: '',
  address1: '',
  zipcode: '',
  website: '',
  socials: {
    twitter: '',
    facebook: '',
    linkedin: '',
  },
};

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
  return localStorage.getItem('accessToken') || 'bearerToken';
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
