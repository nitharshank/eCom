import {StyleSheet} from 'react-native';
import { Constant } from '../../common/constant';
import COLORS from '../../config/colors';
import { FontSize } from '../../config/fonts';
import { RGB } from './../../config/colors';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
},
baseContainer: {
    width: Constant.SCREEN_WIDTH,
    paddingHorizontal: 50,
    // marginTop: 150,
},
logoContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 35
},
logoImageContainer: {
    width: 140,
    height: 140,
},
loginBtn: {
    height: 45,
    marginBottom: 10,
    backgroundColor: COLORS.blue,
},
loginBtnText: {
    fontSize: FontSize.ftSize_15,
},
hintLabelStyle: {
    color: COLORS.blue,
    fontWeight: 'normal',
    fontSize: FontSize.ftSize_13,
},
textInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
},
container: {
    alignItems: "center",
    paddingTop: 70,
},
image: {
    height: 160,
    width: 170
},
title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "red"
},
inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
},
input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 7
},
rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8
},
switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center"

},
rememberText: {
    fontSize: 13
},
forgetText: {
    fontSize: 11,
    color: "red"
},
button: {
    backgroundColor: "red",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
},
buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
},
buttonView: {
    width: "100%",
    paddingHorizontal: 50
},
optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6
},
mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23
},
icons: {
    width: 40,
    height: 40,
},
footerText: {
    textAlign: "center",
    color: "gray",
},
forgotPasswordText: {
    marginTop: -10,
    textAlign: "center",
    color: "red",
},
signup: {
    color: COLORS.blue,
    fontSize: 14
},

loaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    elevation: 999,
    backgroundColor: `rgba(${RGB.black}, ${RGB.black}, ${RGB.black}, 0.4)`,
  },
  loader: {
    marginTop: -150,
  }
});

export default styles;
