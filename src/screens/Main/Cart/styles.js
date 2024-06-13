import { StyleSheet } from 'react-native';
import COLORS from '../../../config/colors';
import { FontSize } from '../../../config/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
    },
    imageContainer: {
        width: 100,
        height: 100,
    },
    detailContainer: {
        flex: 2,
        justifyContent: 'center',
        height: 100,
    },
    priceContainer: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'

    },
    itemImage: {
        width: 100,
        height: 100,
        overflow: 'hidden',
    },
    productTitle: {
        textAlign: 'left',
        color: COLORS.dark_900,
        fontSize: FontSize.ftSize_15
    },
    quantityText: {
        textAlign: 'left',
        color: COLORS.dark_900,
        fontSize: FontSize.ftSize_12,
        marginTop: 5,
    },
    deleteText: {
        textAlign: 'left',
        color: COLORS.red,
        fontSize: FontSize.ftSize_12,
        marginTop: 5,
    },
});

export default styles;
