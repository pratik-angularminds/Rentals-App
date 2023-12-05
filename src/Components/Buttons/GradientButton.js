import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {lightOrange, orange} from '../../Colors/Colors';
import LinearGradient from 'react-native-linear-gradient';

export default GradientButton = props => {
  return (
    <LinearGradient
      colors={[lightOrange, orange]}
      style={styles.linearGradient}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
