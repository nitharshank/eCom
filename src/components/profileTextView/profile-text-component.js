import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import COLORS from '../../config/colors';
import styles from './styles';

const ProfileTextView = ({ itemObj }) => {

  return (
    <View style={styles.detailContainer}>
      <Icon name={itemObj.image} size={20} color={COLORS.grey} />
      <Text style={styles.textContainer}>{itemObj.label}</Text>
      <Text style={styles.textValueContainer}>{itemObj?.textValue} </Text>
    </View>
  );
};

ProfileTextView.propTypes = {
  itemObj: PropTypes.object,
};

export default ProfileTextView;
