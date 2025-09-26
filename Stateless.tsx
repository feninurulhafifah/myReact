import React from 'react';
import { Text, View } from 'react-native';

// Komponen Stateless
const Greeting = ({ name }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          fontSize: 20,
          color: 'blue',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Halo, saya {name}
      </Text>
    </View>
  );
};

// Pemakaian
export default function App() {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Greeting name="Yulhan Wahyudin" />
    </View>
  );
}
