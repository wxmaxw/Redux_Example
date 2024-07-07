import React, { useState } from "react";
import { Text, SafeAreaView, TextInput, Button, View } from "react-native";

import { useDispatch } from "react-redux";

const Primary = () => {
    const [text, setText] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();


    const handleAdd = () => {
        console.log(text);
        dispatch({type: "ADD_NAME", payload: {name: text}});
    };

    const handleClean =() => {
        dispatch({type: "CLEAN_LIST"});
    };
   
    const handleSaveUsername =() => {
        dispatch({type: "SET_USERNAME", payload: {username}});
    };


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 30 }}>Primary</Text>
            <View style={style}>
                <TextInput
                    value={text}
                    onChangeText={setText} // Corrected prop
                    placeholder="İsim giriniz..."
                />
            </View>
            <View style={style}>
                <TextInput
                    value={username}
                    onChangeText={setUsername} // Corrected prop
                    placeholder="Kullanıcı ismi giriniz..."
                />
            </View>
            <Button title="Kullanıcı İsmi Kaydet" onPress={handleSaveUsername} />
            <Button title="Ekle" onPress={handleAdd} />
            <Button title="Temizle" onPress={handleClean} />
        </SafeAreaView>
    );
};

export default Primary;

const style = {
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderColor: "#e0e0e0",
}