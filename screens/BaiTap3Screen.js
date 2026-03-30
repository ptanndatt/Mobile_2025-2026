import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function BaiTap3Screen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = isDarkMode
    ? {
        background: "#121212",
        card: "#1E1E1E",
        text: "#FFFFFF",
        subText: "#CFCFCF",
        button: "#FFD166",
        buttonText: "#121212",
        border: "#2C2C2C",
      }
    : {
        background: "#F4F8FB",
        card: "#FFFFFF",
        text: "#0B4F6C",
        subText: "#555555",
        button: "#118AB2",
        buttonText: "#FFFFFF",
        border: "#D6E4EC",
      };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />

      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          },
        ]}
      >
        <Text style={[styles.title, { color: theme.text }]}>
          Theme Switcher
        </Text>

        <Text style={[styles.description, { color: theme.subText }]}>
          Nhấn nút bên dưới để thay đổi giao diện giữa chế độ sáng và chế độ
          tối.
        </Text>

        <View style={styles.statusBox}>
          <Text style={[styles.statusLabel, { color: theme.subText }]}>
            Trạng thái hiện tại:
          </Text>
          <Text style={[styles.statusValue, { color: theme.text }]}>
            {isDarkMode ? "Chế độ tối" : "Chế độ sáng"}
          </Text>
        </View>

        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#B7D5E5", true: "#81B29A" }}
          thumbColor={isDarkMode ? "#FFD166" : "#FFFFFF"}
          style={styles.switch}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.button }]}
          onPress={toggleTheme}
          activeOpacity={0.85}
        >
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>
            {isDarkMode ? "Chế độ sáng" : "Chế độ tối"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    borderRadius: 22,
    padding: 24,
    borderWidth: 1,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 14,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 24,
  },
  statusBox: {
    alignItems: "center",
    marginBottom: 20,
  },
  statusLabel: {
    fontSize: 16,
    marginBottom: 6,
  },
  statusValue: {
    fontSize: 22,
    fontWeight: "bold",
  },
  switch: {
    marginBottom: 22,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
