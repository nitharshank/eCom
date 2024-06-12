import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ProductCardView = ({ product, productClick }) => {

  return (
    <View style={styles.shadowCardContainer}>
      <TouchableWithoutFeedback onPress={() => productClick(product)}>
        <View style={styles.shadowCard}>
          <Text style={styles.productTitle}>{product?.title}</Text>
          <Text style={styles.productDescription} numberOfLines={1}>{product?.description}</Text>
          <Image style={styles.iconInnerConatiner} source={{ uri: product?.thumbnail }} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

ProductCardView.propTypes = {
  product: PropTypes.object,
  productClick: PropTypes.func,
};

export default ProductCardView;
