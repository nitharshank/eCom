import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { fetchProductList } from '../../../api/api-service';
import ProductCardView from '../../../components/productCard/product-card-view';
import { Screens } from '../../../config';
import styles from './styles';

export default function HomeScreen({ navigation: { navigate } }) {
  const [products, setProducts] = useState([]);

  const onPressProduct = async (product) => {
    navigate(Screens.DetailsScreen, { productId: product?.product?.id });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await fetchProductList(dataSuccess, dataError);
    };

    const dataSuccess = (products) => {
      setProducts(products);
    }

    const dataError = (error) => {
      // TODO show error
    }

    fetchProducts();
  }, []);


  return (
    <View style={styles.containerBase}>
      {products.length > 0 ?
        <View style={styles.listContainer}>
          <View style={styles.listInnerContainer}>
            <FlatList
              contentContainerStyle={styles.flatList}
              data={products}
              renderItem={({ item }) => (
                <ProductCardView
                  product={item}
                  productClick={onPressProduct}
                />
              )}
            />
          </View>
        </View> : null}

    </View>
  );
}
