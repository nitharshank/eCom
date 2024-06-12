import { StyleSheet } from 'react-native';
import COLORS from '../../../config/colors';
import { FontSize } from '../../../config/fonts';

const styles = StyleSheet.create({
    containerBase: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    profileImage: {
        marginTop: 60,
        marginBottom: 60,
        width: 120,
        height: 120,
        borderRadius: 130 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: COLORS.white,
        backgroundColor: COLORS.light_800,
    },
    footer: {
        marginTop: 60,
    },
    logoutBtn: {
        width: '100%',
        height: 45,
        backgroundColor: COLORS.blue,
    },
    logoutBtnText: {
        fontSize: FontSize.ftSize_15,
    },
});

export default styles;
