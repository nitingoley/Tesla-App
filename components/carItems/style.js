import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height: '100%'
      },
      titles:
      {
         width: '100%',
         alignItems: 'center',
         marginTop: '30%'
      },
       title:{
        fontSize: 40 ,
        fontWeight: '500',
   
       } ,
       subtitle:{
        fontSize: 16,

       }, 
       Image: {
        width: '100%',
        height: '100%',
        shadowColor:'gray',
        resizeMode: 'cover',
        position: 'absolute'
       },
       buttonContainer:{ 
        position:'absolute',
        bottom: 50,
        width: '100%'
       },
       tagLineCta:{
        textDecorationLine:'underline'
       }
    
});


export default styles;