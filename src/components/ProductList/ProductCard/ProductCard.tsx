import React, { useMemo, useCallback } from 'react';
import { addItem, checkItem, minusItem, removeItem } from '../../../store/slice/cart.slice';
import cls from './ProductCard.module.css';
import { Item } from '../../../store/types/types';
import { AppDispatch, useAppDispatch, useAppSelector } from '../../../store/store';
import { Card, Checkbox, Div, IconButton, Text, Title } from '@vkontakte/vkui';

import {
  Icon24DeleteOutline,
  Icon28AddCircleOutline,
  Icon28RemoveCircleOutline,
} from '@vkontakte/icons';
import { getCartProducts } from '../../../store/selectors/getCartProducts';

interface ProductCardProps {
  product: Item;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, price, description, amount, image } = product;
  const total_price = price * amount;

  const dispatch: AppDispatch = useAppDispatch();
  const products = useAppSelector(getCartProducts);

  const handleIncrement = useCallback(() => {
    const index = products.findIndex((item: Item) => item.id === product.id);

    if (amount <= 9) {
      dispatch(addItem(index));
    }
  }, [dispatch, amount, products, product]);

  const handleDecrement = useCallback(() => {
    const index = products.findIndex((item: Item) => item.id === product.id);

    if (amount > 1) {
      dispatch(minusItem(index));
    }
  }, [dispatch, amount, products, product]);

  const handleRemove = useCallback(() => {
    const index = products.findIndex((item: Item) => item.id === product.id);

    if (index !== -1) {
      dispatch(removeItem(index));
    }
  }, [dispatch, products, product]);

  const handleChecked = useCallback(() => {
    const index = products.findIndex((item: Item) => item.id === product.id);
    dispatch(checkItem(index));
  }, [dispatch, products, product]);

  const memoizedComponent = useMemo(
    () => (
      <Card mode="shadow" className={cls.product_card}>
        <Checkbox onClick={handleChecked} checked={product.checked} />
        <Div className={cls.product_img_container}>
          <img src={image} alt={title} className={cls.product_img} />
        </Div>

        <Div>
          <Title level="3">{title}</Title>
          <p className={cls.product_description}>{description}</p>
        </Div>

        <Div className={cls.product_controls}>
          <p className={cls.product_price}>{Math.round(total_price)} ₽!</p>

          <Div className={cls.product_counter}>
            <IconButton
              onClick={handleDecrement}
              label="уменьшить количество на 1"
              disabled={amount < 2}>
              <Icon28RemoveCircleOutline height={36} width={36} color="#008cff" />
            </IconButton>

            <Text weight="2">{amount}</Text>

            <IconButton onClick={handleIncrement} label="увеличить количество на 1">
              <Icon28AddCircleOutline height={36} width={36} color="#008cff" />
            </IconButton>
          </Div>

          <IconButton onClick={handleRemove} label="удалить" className={cls.product_delete}>
            <Icon24DeleteOutline color="red" />
          </IconButton>
        </Div>
      </Card>
    ),
    [product, products],
  );
  return memoizedComponent;
};

export default ProductCard;
