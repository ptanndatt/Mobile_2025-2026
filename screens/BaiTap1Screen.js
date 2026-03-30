import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function BaiTap1Screen() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertToCelsius = () => {
    if (fahrenheit.trim() === "") {
      Alert.alert("Thông báo", "Vui lòng nhập Fahrenheit");
      return;
    }

    const f = parseFloat(fahrenheit);

    if (isNaN(f)) {
      Alert.alert("Thông báo", "Fahrenheit không hợp lệ");
      return;
    }

    const c = ((f - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
  };

  const convertToFahrenheit = () => {
    if (celsius.trim() === "") {
      Alert.alert("Thông báo", "Vui lòng nhập Celsius");
      return;
    }

    const c = parseFloat(celsius);

    if (isNaN(c)) {
      Alert.alert("Thông báo", "Celsius không hợp lệ");
      return;
    }

    const f = (c * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
  };

  const clearAll = () => {
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chuyển đổi nhiệt độ</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Fahrenheit</Text>
        <TextInput
          style={styles.input}
          value={fahrenheit}
          onChangeText={setFahrenheit}
          placeholder="Nhập Fahrenheit"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Celsius</Text>
        <TextInput
          style={styles.input}
          value={celsius}
          onChangeText={setCelsius}
          placeholder="Nhập Celsius"
          keyboardType="numeric"
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={convertToCelsius}>
            <Text style={styles.buttonText}>Convert to Celsius</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={convertToFahrenheit}>
            <Text style={styles.buttonText}>Convert to Fahrenheit</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0B4F6C",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#B7D5E5",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 17,
    backgroundColor: "#FAFCFF",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#118AB2",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  clearButton: {
    marginTop: 14,
    backgroundColor: "#EF476F",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
