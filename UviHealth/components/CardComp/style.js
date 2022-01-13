import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginBottom:5,
        backgroundColor:'#fff'
    },
    rowContainer:{
        flexDirection:'row'
    },
    btnContainer:{
        width:80,
        borderRadius:20,
        alignSelf:'flex-end',
        backgroundColor:'#0079D3',
        height:40,
    },
    title:{
        fontWeight:'bold',
        marginTop:10
    },
    imgContainer:{
        alignSelf:'center',
        marginTop:10
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    webview:{
        flex:1
    },
    link:{
        textDecorationLine:'underline',
        textDecorationColor:'blue'
    },
    imgStyle:{
        width:30,
        height:30
    },
    commentContainer:{
        width:20,
        height:20,
        marginRight:10
    }
});
export default style;