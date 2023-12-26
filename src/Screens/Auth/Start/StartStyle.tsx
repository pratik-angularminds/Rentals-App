import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  sectionContainer: {
    alignSelf: 'center',
    gap: 15,
    top: 10,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    height: '100%',
    resizeMode: 'stretch',
    width: '100%',
  },
  linearGradient: {
    position: 'absolute',
    flex: 1,
    padding: 20,
    borderRadius: 5,
    top: 0,
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
