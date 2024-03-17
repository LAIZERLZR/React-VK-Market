import React, { useEffect } from 'react';
import ProductCard from './ProductCard/ProductCard';
import { fetchProducts } from '../../store/api/productApi';
import { AppDispatch, useAppDispatch, useAppSelector } from '../../store/store';
import cls from './ProductList.module.css';
import { Item } from '../../store/types/types';
import Loader from '../Loader/Loader';
import { getCartProducts } from '../../store/selectors/getCartProducts';
import { getProductLoader } from '../../store/selectors/getProductLoader';
import { CardGrid, Div, Group } from '@vkontakte/vkui';

const ProductList: React.FC = () => {
  const productLoading = useAppSelector(getProductLoader);
  const products = useAppSelector(getCartProducts);
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (productLoading) {
    return (
      <Div className={cls.product_list_container_loader}>
        <Loader />
      </Div>
    );
  }

  return (
    <Group>
      <CardGrid size="l">
        {products.map((product: Item) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardGrid>
    </Group>
  );
};

export default ProductList;
