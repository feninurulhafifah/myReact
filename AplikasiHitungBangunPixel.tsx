import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'; // Ini akan di-resolve ke react-native-web di web environment setelah instalasi

const App: React.FC = () => {
  const [sisi, setSisi] = useState<string>('');
  const [luas, setLuas] = useState<number | null>(null);

  const hitungLuas = (): void => {
    const sisiNum = parseFloat(sisi);
    if (isNaN(sisiNum) || sisiNum <= 0) {
      Alert.alert('ERROR', 'Masukkan angka positif!');
      return;
    }
    const hasil = sisiNum * sisiNum;
    setLuas(hasil);
  };

  const reset = (): void => {
    setSisi('');
    setLuas(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header Pixel Style */}
        <View style={styles.header}>
          <Text style={styles.title}>🟥 KALKULATOR LUAS PERSEGI</Text>
        </View>

        {/* Input Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>PANJANG SISI:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={sisi}
            onChangeText={setSisi}
            placeholder="0"
            placeholderTextColor="#888"
          />
          <Text style={styles.unit}>cm</Text>
        </View>

        {/* Pixel Grid Display */}
        <View style={styles.gridContainer}>
          {[1, 2, 3, 4].map((row) => (
            <View key={row} style={styles.gridRow}>
              {[1, 2, 3, 4].map((col) => (
                <View key={col} style={styles.pixel} />
              ))}
            </View>
          ))}
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={hitungLuas}>
            <Text style={styles.buttonText}>HITUNG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={reset}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableOpacity>
        </View>

        {/* Result Display */}
        {luas !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>HASIL:</Text>
            <Text style={styles.result}>{luas} cm²</Text>
            <View style={styles.pixelLine} />
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 PIXEL CALC</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const PIXEL_SIZE = 16;
const BORDER_WIDTH = 2;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2d2d2d',
  },
  container: {
    flex: 1,
    padding: PIXEL_SIZE,
    backgroundColor: '#1a1a1a',
  },
  header: {
    borderWidth: BORDER_WIDTH,
    borderColor: '#ff6b6b',
    padding: PIXEL_SIZE,
    marginBottom: PIXEL_SIZE * 2,
    backgroundColor: '#333',
  },
  title: {
    fontSize: PIXEL_SIZE,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontWeight: 'bold' as const,
    color: '#ff6b6b',
    textAlign: 'center',
    letterSpacing: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: BORDER_WIDTH,
    borderColor: '#4ecdc4',
    padding: PIXEL_SIZE,
    marginBottom: PIXEL_SIZE * 2,
    backgroundColor: '#333',
  },
  label: {
    fontSize: PIXEL_SIZE,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: '#4ecdc4',
    marginRight: PIXEL_SIZE,
  },
  input: {
    flex: 1,
    borderWidth: BORDER_WIDTH,
    borderColor: '#888',
    padding: PIXEL_SIZE / 2,
    fontSize: PIXEL_SIZE,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: '#fff',
    backgroundColor: '#222',
    minWidth: PIXEL_SIZE * 4,
    textAlign: 'center',
  },
  unit: {
    fontSize: PIXEL_SIZE,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: '#888',
    marginLeft: PIXEL_SIZE,
  },
  gridContainer: {
    alignSelf: 'center',
    borderWidth: BORDER_WIDTH,
    borderColor: '#ffd93d',
    padding: PIXEL_SIZE / 2,
    marginBottom: PIXEL_SIZE * 2,
    backgroundColor: '#333',
  },
  gridRow: {
    flexDirection: 'row',
  },
  pixel: {
    width: PIXEL_SIZE,
    height: PIXEL_SIZE,
    backgroundColor: '#ffd93d',
    margin: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: PIXEL_SIZE * 2,
  },
  button: {
    flex: 1,
    borderWidth: BORDER_WIDTH,
    borderColor: '#6c5ce7',
    padding: PIXEL_SIZE,
    marginHorizontal: PIXEL_SIZE / 2,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  resetButton: {
    borderColor: '#fd79a8',
  },
  buttonText: {
    fontSize: PIXEL_SIZE,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontWeight: 'bold' as const,
    color: '#6c5ce7',
  },
  resultContainer: {
    borderWidth: BORDER_WIDTH,
    borderColor: '#00b894',
    padding: PIXEL_SIZE,
    marginBottom: PIXEL_SIZE * 2,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: PIXEL_SIZE,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: '#00b894',
    marginBottom: PIXEL_SIZE / 2,
  },
  result: {
    fontSize: PIXEL_SIZE * 1.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontWeight: 'bold' as const,
    color: '#00b894',
  },
  pixelLine: {
    width: '80%',
    height: BORDER_WIDTH,
    backgroundColor: '#00b894',
    marginTop: PIXEL_SIZE,
  },
  footer: {
    borderTopWidth: BORDER_WIDTH,
    borderTopColor: '#888',
    paddingTop: PIXEL_SIZE,
    alignItems: 'center',
  },
  footerText: {
    fontSize: PIXEL_SIZE - 2,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: '#888',
  },
});

export default App;
