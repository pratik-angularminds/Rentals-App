/* eslint-disable react-native/no-inline-styles */
import {styles} from './StartStyle';
import {gStyles} from '../../../GStyles/GStyles';
import React, {useState} from 'react';
import {images} from '../../../assets';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientButton from '../../../Components/Buttons/GradientButton';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../../Colors/Colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StartView = ({navigation}) => {
  const [heights, setHeights] = useState(0);
  return (
    <SafeAreaView>
      <View
        style={styles.sectionContainer}
        onLayout={e => {
          setHeights(e.nativeEvent.layout.height);
        }}>
        <Image source={require('../../../assets/Images/Image.png')} />
        <Image source={require('../../../assets/Images/Image-1.png')} />
        <Image source={require('../../../assets/Images/Image-2.png')} />
        <Image source={require('../../../assets/Images/Image-3.png')} />
        <Image source={require('../../../assets/Images/Image-4.png')} />
        <Image source={require('../../../assets/Images/Image-5.png')} />
        <Image source={require('../../../assets/Images/Image-6.png')} />
        <Image source={require('../../../assets/Images/Image-7.png')} />
        <Image source={require('.../../../assets/Images/Image-8.png')} />
        <LinearGradient
          colors={['transparent', 'white']}
          style={styles.overlay}
          start={{x: 0, y: 0.2}}
          end={{x: 0, y: 0.6}}
        />
        <View
          style={{
            width: '100%',
            bottom: 160,
            alignSelf:'center',
            position: 'absolute',
            alignItems: 'center',
          }}>
          <Text style={gStyles.headerTitleStyle}>New Place, New Home!</Text>
          <Text style={gStyles.descStyle}>
            Are you ready to uproot and start over in a new area? Rentals will
            help you on your journey!
          </Text>
        </View>
        <GradientButton
          btnStyle={{position: 'absolute', left: 20, right: 20, bottom: 90}}
          title="Log in"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 30,
            borderColor: color.lightGrey,
            borderWidth: 1,
            borderRadius: 100,
            alignItems: 'center',
          }}>
          <Text style={{marginVertical: 12}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartView;
