/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../../assets';
import {bindActionCreators} from 'redux';
import { actionCreators } from '../../../action';
import { connect } from 'react-redux';

const LoginView = (props: any) => {
  // Use effects
  useEffect(() => {
    // Navigation setup
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
        //   style={gStyles.btnPadding}
          //   activeOpacity={opacity}
          onPress={() => {
            props.navigation.pop();
          }}>
          <Image source={images.back_arrow} />
        </TouchableOpacity>
      ),
      headerShown: true,
      headerTransparent: true,
    });
    // ======================================================
  });

  return (
    <SafeAreaView>
      <View>
        <Text>Welcome Back!</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => {
    return { state };
  };
const mapStateToDispatch = (dispatch: any) =>
bindActionCreators(actionCreators, dispatch);
export default connect(mapStateToProps, mapStateToDispatch)(LoginView);