import React, { useState,useEffect } from "react";
import { Modal, Text, Pressable, View,Image,FlatList,SafeAreaView } from "react-native";
import axios from 'axios';
import styles from "./style";

const ImageDetail = ({isVisible,thumbnail,onClose,itemdata,title}) =>{
  const[item,setItem] = useState([]);

  useEffect(() =>{
    axios.get(`https://www.reddit.com/${itemdata?.permalink}/.json`).then((res)=>{
        const getObj = res?.data;
        const getChild = getObj[1]?.data?.children;
        setItem(getChild);
    },err => {
        setError(err);
    })
},[])

    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection:'row'}}>
              <View style={{width:'90%'}}>
                <Text style={{fontWeight:'bold'}}>{title}</Text>
              </View>
            <Pressable style = {styles.closIcon} onPress={onClose}>
              <Text style = {{fontSize:20}}>X</Text>
            </Pressable>
          </View>
          <View style={styles.imgContainer}>
            <Image 
                source = {{uri:thumbnail}}
                style ={styles.img}
                resizeMode = "contain">
            </Image>
          </View>
          <View>
          <FlatList
              data = {item}
              renderItem = {({item})=><CommentSection comment = {item.data} indentation ={0}/>}
              keyExtractor = {(_, index) => index}
            ></FlatList>
          </View>
          </View>
        </View>
      </Modal>
    )
}

const CommentSection = ({comment,indentation}) =>{
  const {body,replies} = comment;
  const hasReplies = replies;
  return(
    <View >
      <Text style={{marginLeft:(indentation*10)}}>{body}</Text>
      <Text>{hasReplies && replies?.data?.children &&
        replies?.data?.children?.map((d,i)=>
          <CommentSection key ={i} comment = {d.data} indentation = {indentation+1}/>
      )}</Text>
    </View>
  )
}

export default ImageDetail;