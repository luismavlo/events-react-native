import { StyleSheet } from 'react-native';


export const globalColors = {
  primary: '#041b3c',
  secondary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',

  background: '#fff',
};



export const globalStyles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },


  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },

  titulo: {
    textAlign:'center',
    fontSize:18,
    marginTop:12,
    marginBottom:20
  },

  containerForm: {
    flex:1,
    padding:35
  },

  inputGroup: {
    flex: 1,
    height: "15%",
    width: "90%",
    marginBottom: 10,
    borderRadius: 25,
    paddingLeft: 20,
    color: "grey",
  },

});