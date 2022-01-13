import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
         alignItems: 'flex-end'
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      //alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height:'80%',
      width:'95%',
      position:'relative'
    },
    imgContainer:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
      marginBottom:10
    },
    img:{
      width:200,
      height:200
    },
    closIcon:{
      position:'absolute',
      top:10,
      right:10
    }
  });

  export default styles
  