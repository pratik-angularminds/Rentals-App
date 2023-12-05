import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';

function App(): JSX.Element {
  const [heights, setHeights] = useState(0);
  return (
    <SafeAreaView>
      <View
        style={styles.sectionContainer}
        onLayout={e => {
          setHeights(e.nativeEvent.layout.height);
        }}>
        <Image source={require('./assets/Image.png')} />
        <Image source={require('./assets/Image-1.png')} />
        <Image source={require('./assets/Image-2.png')} />
        <Image source={require('./assets/Image-3.png')} />
        <Image source={require('./assets/Image-4.png')} />
        <Image source={require('./assets/Image-5.png')} />
        <Image source={require('./assets/Image-6.png')} />
        <Image source={require('./assets/Image-7.png')} />
        <Image source={require('./assets/Image-8.png')} />
      </View>
      <Image
        source={require('./assets/Overlay.png')}
        style={{...styles.overlay}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    gap: 15,
    top: 10,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    height: '85%',
    resizeMode: 'stretch',
    width: '100%',
  },
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
  sectionTitle: {
    gap: 15,
    flexWrap: 'wrap',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
