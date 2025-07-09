import { StyleSheet, Dimensions } from 'react-native';

const { width,height } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  formWrapper: {
    margin:height*0.25,
    width: width * 0.85,
    alignSelf: 'center',
  },
  bottomTextView:{
    marginTop:height*0.04,
    alignSelf:'center'
  },
  bottomText:{
    fontSize:width*0.043
  },
  touchComponent:{
    marginTop:height*0.01
  },
  button: {
    width: '100%',
    paddingVertical: 8,
    marginTop: 20,
  },
  buttonText:{
    fontSize:width*0.045
  }
});
