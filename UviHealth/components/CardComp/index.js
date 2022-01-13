import React,{useState} from 'react';
import {View,Text,Image,Pressable,Linking} from 'react-native';
import { Button, NativeBaseProvider } from "native-base";
import style from './style';
import IconComp from '../IconComp/index';
import ImageDetail from '../ImageDetail';
import { Video } from 'expo-av';

 const CardComp =({itemdata}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [status, setStatus] = React.useState({});
    const video = React.useRef(null);

     const {thumbnail,
        title,
        thumbnail_height,
        thumbnail_width,
        subreddit_name_prefixed,
        author_fullname,
        all_awardings,
        post_hint,
        num_comments,
        url_overridden_by_dest,
        secure_media,
        preview
    } = itemdata;

    const openLink = () =>{
        Linking.openURL(url_overridden_by_dest)
    }

    const videoUrl = post_hint == "hosted:video" ? secure_media?.reddit_video?.scrubber_media_url : preview?.reddit_video_preview?.scrubber_media_url
    return (
        <View style ={style.container}>
            <View style={style.rowContainer}>
                <Text style={style.title}>{subreddit_name_prefixed}</Text>
                <NativeBaseProvider>
                    <Button 
                    onPress={() => console.log("Clicked")}
                    style={style.btnContainer}>
                    Join
                    </Button>
                </NativeBaseProvider>
            </View>
            <View style={[style.rowContainer,{marginTop:5}]}>
                <Text>Posted by {author_fullname}</Text>
                <IconComp allAwardings ={all_awardings}/>
            </View>
            <View >
                <Text style={style.title} numberOfLines={2}>{title}</Text>
            </View>
            {post_hint == "image"?
            <Pressable style ={style.imgContainer} onPress = {()=>setModalVisible(true)}>
                <Image source = {{uri:thumbnail}}
                    style ={{width:thumbnail_width,height:thumbnail_height}}
                    resizeMode = "contain">
                 </Image>
            </Pressable>:null}

            {post_hint == ("hosted:video"||"rich:video")?(
            <View style ={style.imgContainer}>
            <Video
                ref={video}
                style={style.video}
                source={{ uri: videoUrl}}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            </View>):null}

            {post_hint == "link"?(
                <Pressable onPress = {openLink} style={{marginTop:10}}>
                    <Text style={style.link}>{url_overridden_by_dest}</Text> 
                </Pressable>
            ):null}

            <View style = {[style.rowContainer,{marginTop:10}]}>

            <View style = {[style.rowContainer,{marginTop:10}]}>
                <Image source = {require('../../assets/Comment.png')}
                       style ={style.commentContainer}
                       resizeMode = "contain"></Image>
                <Text>{num_comments}</Text>
                <Text style={{paddingLeft:5}}>Comments</Text>
            </View>

            <View style = {[style.rowContainer,{marginTop:10}]}>
                <Image source = {require('../../assets/share.png')}
                 style ={style.imgStyle}
                 resizeMode = "contain"></Image>
                <Text style={{paddingLeft:5,justifyContent:'center'}}>Share</Text>
            </View>

            <View style = {[style.rowContainer,{marginTop:10}]}>
                <Image source = {require('../../assets/saveImg.png')}
                 style ={style.imgStyle}
                 resizeMode = "contain"></Image>
                <Text style={{paddingLeft:5,justifyContent:'center'}}>Save</Text>
            </View>
            </View>

            {modalVisible && (
                <ImageDetail 
                    isVisible = {modalVisible}
                    thumbnail ={thumbnail}
                    onClose = {()=>setModalVisible(false)}
                    itemdata = {itemdata}
                    title = {title}
                ></ImageDetail>
            )}
         </View>
    );
  }

  export default CardComp;