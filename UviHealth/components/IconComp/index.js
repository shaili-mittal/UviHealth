import React from 'react';
import {View,Text,Image} from 'react-native';

 const IconComp =({allAwardings}) => {
    return(
        <View style ={{marginLeft:10,flexDirection:'row',flexWrap:'wrap',width:'90%'}}>
        {allAwardings.slice(0,5).map((item,index)=>
          <View key = {index} style={{flexDirection:'row',marginRight:10}} numberOfLines={2}>
            <Image source = {{uri:item.static_icon_url}}
                   style ={{width:20,height:20}}
                   resizeMode = "contain"/>
            <Text  numberOfLines ={1}>{item.count}</Text>
          </View>
        )}
        </View>
    )
 }

 export default IconComp