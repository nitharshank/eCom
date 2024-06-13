import { StyleSheet } from 'react-native';
import COLORS from '../../../../config/colors';
import { FontSize } from '../../../../config/fonts';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        height: 200,
        marginTop: 30
    },
    leftArrow: {
        justifyContent: 'center',
        width: 40,
        height: 200
    },
    imageContainer: {
        flex: 1,
        height: 200,
        borderColor: COLORS.grey,
       justifyContent: 'center',
      //  alignItems: 'center',
        borderWidth: 1,
    },
    rightArrow: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: 40,
        height: 200
    },
    imageInnerConatiner: {
        height: 200,
        marginTop: 5,
        resizeMode: 'contain',
    },
    textContainer: {
        padding: 20,
        flexDirection: 'column',
        marginTop: 30
    },
    productName: {
        textAlign: 'left',
        color: COLORS.dark_900,
        fontSize: FontSize.ftSize_18,
        marginLeft: 40,
      },
      productDescription: {
        textAlign: 'left',
        color: COLORS.dark_900,
        fontSize: FontSize.ftSize_13,
        marginLeft: 40,
        marginTop: 5,
      },
      priceContainer: {
        padding: 10,
        paddingHorizontal: 60,
        flexDirection: 'row',
    },
    priceLabel: {
        flex: 1,
    },
    priceValue: {
        flex: 1,
        textAlign: 'right',
        color: COLORS.dark_900,
    },
    productText: {
        textAlign: 'left',
        color: COLORS.dark_900,
        fontSize: FontSize.ftSize_14,
      },
});

export default styles;
