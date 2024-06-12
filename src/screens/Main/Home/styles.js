import { StyleSheet } from 'react-native';
import COLORS from '../../../config/colors';
import { FontSize } from '../../../config/fonts';

const styles = StyleSheet.create({
    containerBase: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.light_700,
    },
    listInnerContainer: {
        marginTop: 15,
        height: '100%',
        paddingBottom: 50,
    },
    flatList: {
        flexGrow: 1,
    },
    noDataContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyImage: {
        width: 50,
        height: 50,
    },
    actionTaken: {
        marginTop: 8,
    },
    textContainer: {
        fontSize: FontSize.ftSize_15,
        color: COLORS.dark_800,
    },
});

export default styles;
