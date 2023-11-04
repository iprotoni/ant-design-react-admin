import React from 'react';
import * as S from './References.styles';
import { FacebookOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

export const References: React.FC = () => {
  return (
    <S.ReferencesWrapper>
      <S.Text>
        Made by{' '}
        <a href="https://github.com/yantao0527" target="_blank" rel="noreferrer">
        yantao0527{' '}
        </a>
        in 2023
      </S.Text>
    </S.ReferencesWrapper>
  );
};
