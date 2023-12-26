import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  TextStyle,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../Colors/Colors';

interface Button {
  title: string;
  onPress: () => void;
  btnStyle?: ViewStyle;
  textStyle?: TextStyle;
  viewBg?: ViewStyle;
}

const GradientButton: React.FC<Button> = ({
  title,
  buttonType,
  onPress,
  btnStyle,
  textStyle,
  viewBg,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[btnStyle]}>
      <LinearGradient
        colors={[color.lightOrange, color.orange]}
        useAngle={true}
        angle={170}
        style={[styles.bgGradient, viewBg]}>
        <Text style={[styles.textStyle, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bgTouchableOpacity: {
    flex: 1,
    height: 50,
    // alignSelf: 'center',
    borderRadius: 100,
  },
  shadow:
    Platform.OS == 'ios'
      ? {
          shadowOffset: {width: 0, height: 5},
          shadowColor: 'black',
          shadowOpacity: 0.25,
        }
      : {
          elevation: 7,
          shadowRadius: 5,
          backgroundColor: '#FFF', // invisible color
        },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 24,
    color: 'white',
  },
  bgText: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 100,
    // flex: 1,
  },
  bgGradient: {
    // flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 100,
  },
});

export default GradientButton;