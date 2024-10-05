import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Text, Alert } from 'react-native';

export default function QuadraticSolver() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleSolve = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      Alert.alert('Error', 'Please enter valid numbers for a, b, and c');
      return;
    }

    const delta = bNum * bNum - 4 * aNum * cNum;
    if (delta < 0) {
      setResult('No real roots');
    } else if (delta === 0) {
      const root = -bNum / (2 * aNum);
      setResult(`One real root: x = ${root}`);
    } else {
      const root1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
      setResult(`Two real roots: x1 = ${root1}, x2 = ${root2}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập c"
        keyboardType="numeric"
        value={c}
        onChangeText={setC}
        placeholderTextColor="#999"
      />
      <Button title="Giải" onPress={handleSolve} color="#007BFF" />
      {result && (
        <Text style={styles.result}>
          {result}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // Nền trắng
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '600',
    color: '#333333', // Màu văn bản đậm
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC', // Màu đường viền nhạt
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: '#333333', // Màu chữ nhập liệu
    backgroundColor: '#F9F9F9', // Màu nền ô nhập liệu
  },
  result: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#007BFF', // Màu kết quả xanh lam
  },
});
