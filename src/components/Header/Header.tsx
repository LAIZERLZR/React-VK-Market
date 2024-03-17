import React from 'react';
import cls from './Header.module.css';
import { Icon56LogoVkColor } from '@vkontakte/icons';
import { Title } from '@vkontakte/vkui';

const Header: React.FC = () => {
  return (
    <header className={cls.header}>
      <Icon56LogoVkColor />
      <Title style={{ color: 'white' }} level="1">
        React VK Market
      </Title>
    </header>
  );
};

export default Header;
