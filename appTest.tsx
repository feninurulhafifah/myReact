import { Text, View, Button, Alert, TextInput } from "react-native";

function App(){
    return (
        <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <MyComponent/>
        </View>
    );
}

const MyComponent = () => {
    return(
        <View style = {{width: '100%', padding: 20}}>
            <Text
            style = {{fontSize:20, fontWeight:'bold', textAlign: 'center', marginBottom:15}}>Halo Ini Text</Text>
            <Button title="Ini Button" onPress={() =>
            Alert.alert('Tombol Ditekan')} color="blue"/>
            <TextInput placeholder="Ini Text Input. Masukkan text disini"
            style={{textAlign:'center', height:40, borderColor: 'gray', borderWidth:1, marginTop:10, paddingHorizontal:10, fontSize:5}}/>
        </View>
    )
}

export default App;