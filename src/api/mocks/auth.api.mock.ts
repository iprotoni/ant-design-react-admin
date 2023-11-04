import { httpApiMock } from '@app/api/mocks/http.api.mock';
import { AuthData } from '@app/api/auth.api';
import { initValues } from '@app/components/auth/LoginForm/LoginForm';

const avatarImg = 'https://avatars.githubusercontent.com/u/1109591?v=4';

httpApiMock.onPost('login').reply((config) => {
  const data: AuthData = JSON.parse(config.data || '');
  if (data.password === initValues.password) {
    return [
      200,
      {
        token: 'bearerToken',
        user: {
          id: 1,
          firstName: 'Frank',
          lastName: 'Yan',
          imgUrl: avatarImg,
          userName: '@yantao0527',
          email: {
            name: 'frankyan.work@gmail.com',
            verified: false,
          },
          phone: {
            number: '+18143519459',
            verified: true,
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
        },
      },
    ];
  } else return [401, { message: 'Invalid Credentials' }];
});

httpApiMock.onPost('signUp').reply(200);

httpApiMock.onPost('forgotPassword').reply(200);

httpApiMock.onPost('verifySecurityCode').reply(200);

httpApiMock.onPost('setNewPassword').reply(200);
