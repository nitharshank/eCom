import { StyleSheet, Platform } from 'react-native';
import COLORS from '../../config/colors';
import { FontSize } from '../../config/fonts';

const styles = StyleSheet.create({
  shadowCardContainer: {
    overflow: 'hidden',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  shadowCard: {
    flexDirection: 'column',
    padding: 15,
    borderRadius: 8,
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    shadowColor:
      Platform.OS === 'ios' ? COLORS.card_shadow_color_ios : COLORS.card_shadow_color_android,
    shadowOffset: { width: 1, height: 1 },
  },
  productTitle: {
    textAlign: 'left',
    color: COLORS.dark_900,
    fontSize: FontSize.ftSize_16
  },
  productDescription: {
    textAlign: 'left',
    marginTop: 5,
    color: COLORS.dark_900,
    fontSize: FontSize.ftSize_12
  },
  iconInnerConatiner: {
    height: 230,
    marginTop: 5,
    resizeMode: 'contain',
  },
});

export default styles;
