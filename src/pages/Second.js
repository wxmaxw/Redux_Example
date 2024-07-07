import React from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";


const Second = () => {

    const list = useSelector(s=> s.nameList);
    const myUsername = useSelector(s=> s.userName);

    return(
        <SafeAreaView>
            <Text style={{fontSize:30}}>Second</Text>
            <Text style={{fontSize:30}}>UserName: {myUsername}</Text>
            <FlatList
            keyExtractor={(_,index) => index.toString()}
            data={list}
            renderItem={({item}) => <Text> {item} </Text>}
            />
        </SafeAreaView>
    );
};

export default Second;