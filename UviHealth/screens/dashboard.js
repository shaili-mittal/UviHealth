import React, { useEffect,useState} from 'react';
import {
        FlatList,
        SafeAreaView,
        Platform,
        StatusBar
       }
from 'react-native';
import axios from 'axios';
import CardComp from '../components/CardComp';

const Dashboard = () =>{

    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() =>{
        axios.get('https://www.reddit.com/.json').then((res)=>{
            const getChildArr = res?.data?.data?.children;
            setItems(getChildArr);
        },err => {
            setError(err);
        })
    },[])

    return(
        <SafeAreaView style={{backgroundColor:'#D0D0D0', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <FlatList
                data = {items}
                renderItem = {({item})=><CardComp itemdata ={item?.data} />}
                keyExtractor = {(_, index) => index}
             ></FlatList>
        </SafeAreaView>
    )
}

export default Dashboard;