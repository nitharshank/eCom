import { StyleSheet, Platform } from 'react-native';
import COLORS from '../../config/colors';
import { FontSize } from '../../config/fonts';

const styles = StyleSheet.create({
  detailContainer: {
    width: '80%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'left',
    justifyContent: 'left',
  },
  textContainer: {
    marginLeft: 12,
    marginRight: 10,
    textAlignVertical: 'center',
    fontSize: FontSize.ftSize_15,
    color: COLORS.grey,
  },
  textValueContainer: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: FontSize.ftSize_15,
    color: COLORS.grey,
  },
});

export default styles;
