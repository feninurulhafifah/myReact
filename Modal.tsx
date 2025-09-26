import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
    >
      {/* Tombol utama lebar penuh */}
      <View style={{ width: '100%' }}>
        <Button title="Tutup" onPress={() => setVisible(true)} />
      </View>

      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              width: '100%', // modal isi menyesuaikan lebar parent
            }}
          >
            <Text
              style={{ fontSize: 15, marginBottom: 20, textAlign: 'center' }}
            >
              Anda Yakin Akan Keluar ?
            </Text>

            {/* Tombol tutup lebar penuh */}
            <View style={{ width: '100%' }}>
              <Button title="YA" onPress={() => setVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
