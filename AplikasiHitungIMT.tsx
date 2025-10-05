import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [imt, setImt] = useState(null);
  const [pesan, setPesan] = useState('');

  const hitungIMT = () => {
    const beratNum = parseFloat(berat);
    const tinggiNum = parseFloat(tinggi) / 100; // konversi cm ke meter

    if (!beratNum || !tinggiNum) {
      alert('Mohon isi berat dan tinggi dengan benar!');
      return;
    }

    const hasilIMT = beratNum / (tinggiNum * tinggiNum);
    setImt(hasilIMT.toFixed(2));

    // Tentukan kategori dan pesan motivasi
    let kategori = '';
    if (hasilIMT < 18.5) kategori = 'Kurus 😔 - Tambah asupan bergizi!';
    else if (hasilIMT >= 18.5 && hasilIMT < 25)
      kategori = 'Normal 😄 - Pertahankan gaya hidup sehat!';
    else if (hasilIMT >= 25 && hasilIMT < 30)
      kategori = 'Gemuk 😅 - Mulai olahraga rutin!';
    else kategori = 'Obesitas ⚠️ - Segera konsultasi kesehatan.';

    setPesan(kategori);
  };

  const resetForm = () => {
    setBerat('');
    setTinggi('');
    setImt(null);
    setPesan('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💪 BMI CHECKER </Text>
      <Text style={styles.subHeader}>Hitung Indeks Massa Tubuhmu!</Text>

      <TextInput
        style={styles.input}
        placeholder="Berat badan (kg)"
        keyboardType="numeric"
        value={berat}
        onChangeText={setBerat}
      />

      <TextInput
        style={styles.input}
        placeholder="Tinggi badan (cm)"
        keyboardType="numeric"
        value={tinggi}
        onChangeText={setTinggi}
      />

      <TouchableOpacity style={styles.button} onPress={hitungIMT}>
        <Text style={styles.buttonText}>Hitung Sekarang</Text>
      </TouchableOpacity>

      {imt && (
        <View style={styles.resultCard}>
          <Text style={styles.resultText}>IMT Kamu: {imt}</Text>
          <Text style={styles.message}>{pesan}</Text>

          <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
            <Text style={styles.resetText}>Hitung Ulang</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007ACC',
  },
  subHeader: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
  },
  input: {
    width: '85%',
    backgroundColor: '#fff',
    borderColor: '#007ACC',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007ACC',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultCard: {
    backgroundColor: '#DFF6FF',
    borderRadius: 15,
    padding: 20,
    marginTop: 30,
    width: '85%',
    alignItems: 'center',
    elevation: 3,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004466',
  },
  message: {
    fontSize: 16,
    color: '#004466',
    textAlign: 'center',
    marginTop: 10,
  },
  resetButton: {
    marginTop: 15,
    backgroundColor: '#FF6666',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  resetText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
