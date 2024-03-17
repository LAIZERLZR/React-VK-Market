import React from 'react';
import { useSelector } from 'react-redux';
import cls from './TotalSummary.module.css';
import { getTotalSummary } from '../../store/selectors/getTotalSummary';
import { Group, Title } from '@vkontakte/vkui';

const TotalSummary: React.FC = () => {
  const total: number = useSelector(getTotalSummary);

  return (
    <Group className={cls.total}>
      <Title level="2">Итого</Title>
      <p className={cls.total_price}>{total} ₽</p>
    </Group>
  );
};

export default TotalSummary;
