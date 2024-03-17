import React from 'react';
import cls from './Header.module.css';
import { Icon56LogoVkColor } from '@vkontakte/icons';

const Header: React.FC = () => {
  return (
    <header className={cls.header}>
      <Icon56LogoVkColor />
      <h1>React VK Market</h1>
    </header>
  );
};

export default Header;
