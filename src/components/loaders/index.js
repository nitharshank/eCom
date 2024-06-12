import React from 'react';
import { View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import PropTypes from 'prop-types';
import { COLORS } from './../../config/colors';
import { useLoader } from './../../provider/LoaderProvider';
import styles from './styles';

const Loader = ({ showLoader = false, color = COLORS.blue }) => {
  const { isShowLoader } = useLoader();
  if (!isShowLoader) {return null;}
  return (
    <View style={styles.loaderContainer}>
      <BallIndicator style={styles.loader} color={color} />
    </View>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  showLoader: PropTypes.bool,
};

export default Loader;
