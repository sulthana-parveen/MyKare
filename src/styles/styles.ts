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
   formWrapper1:{
    margin:height*0.08,
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
    width: width*0.5,
    paddingVertical: height*0.007,
    marginTop: height*0.03,
    alignSelf:'center'
  },
  buttonText:{
    fontSize:width*0.045
  },
  welcomeText:{
    alignSelf:'center',
    fontSize:width*0.065,
    fontWeight:'600'
  },
  subText:{
    fontSize:width*0.05,
    marginVertical:height*0.015
  },
  countryText:{
    alignSelf:'center',
    fontSize:width*0.05,
    marginVertical:height*0.015
  },
  userText:{
    fontSize:width*0.04,
    marginVertical:height*0.01
  },
  input: {
    width:width*0.85,
    marginBottom:height*0.03,
  },
 title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  touchButton:{
     width: width*0.5,
    paddingVertical: height*0.007,
    marginTop:height*0.02,
    alignSelf:'center',
    backgroundColor:'lightgrey',
    height:height*0.06,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:width*0.06
  }
});
