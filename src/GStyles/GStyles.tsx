import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {color} from '../Colors/Colors';
// import {fontFamily, fontSize} from '../assets/Fonts';
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export const gStyles = StyleSheet.create({
  vwMain: {
    flex: 1,
    backgroundColor: color.textBlack,
    // paddingTop: 30,
  },
  vwWhite: {
    flex: 1,
    backgroundColor: color.white,
  },
  btnPadding: {
    paddingVertical: 8,
    paddingRight: 8,
  },
  btnLeftPadding: {
    paddingVertical: 8,
    paddingLeft: 8,
  },
  imgBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  vwLine: {
    height: 1,
    backgroundColor: color.lightGrey,
    marginHorizontal: 0,
  },
  vwThickLine: {
    width: '100%',
    height: 7,
    backgroundColor: color.lightGrey,
  },
  headerTitleStyle: {
    fontWeight: '700',
    fontSize: 24,
    color: color.textBlack,
    bottom: 10,
  },
  descStyle: {
    fontWeight: '400',
    fontSize: 16,
    color: color.lightBlack,
    textAlign: 'center',
  },
  imgFlag: {
    marginLeft: 14,
    width: 26,
    height: 26,
  },
});

export const wp = (width: number) => {
  return PixelRatio.roundToNearestPixel((screenWidth * width) / 100);
};

export const hp = (height: number) => {
  return PixelRatio.roundToNearestPixel((screenHeight * height) / 100);
};
