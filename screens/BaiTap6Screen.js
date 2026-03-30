import React, { createContext, useContext, useState } from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const UserContext = createContext();

function Header() {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerTitle}>Header Component</Text>
      <UserProfile />
    </View>
  );
}

function UserProfile() {
  const { userName } = useContext(UserContext);

  return (
    <View style={styles.profileBox}>
      <Text style={styles.profileLabel}>Tên người dùng từ Context:</Text>
      <Text style={styles.profileName}>
        {userName.trim() ? userName : "Chưa nhập tên"}
      </Text>
    </View>
  );
}

export default function BaiTap6Screen() {
  const [userName, setUserName] = useState("");

  const handleClear = () => {
    setUserName("");
    Alert.alert("Thông báo", "Đã xóa tên người dùng.");
  };

  return (
    <UserContext.Provider value={{ userName }}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

        <Text style={styles.title}>useContext - Global Profile</Text>
        <Text style={styles.subtitle}>
          Nhập tên ở component cha và hiển thị ở component con sâu bên trong mà
          không cần truyền props.
        </Text>

        <View style={styles.card}>
          <Text style={styles.inputLabel}>Nhập tên người dùng:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ví dụ: Phạm Tấn Đạt"
            placeholderTextColor="#94A3B8"
            value={userName}
            onChangeText={setUserName}
          />

          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClear}
            activeOpacity={0.85}
          >
            <Text style={styles.clearButtonText}>Xóa tên</Text>
          </TouchableOpacity>
        </View>

        <Header />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#CBD5E1",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: "#E2E8F0",
    marginBottom: 10,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#0F172A",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 14,
  },
  clearButton: {
    backgroundColor: "#EF4444",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  headerBox: {
    backgroundColor: "#1E293B",
    borderRadius: 18,
    padding: 18,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
    textAlign: "center",
  },
  profileBox: {
    backgroundColor: "#0F172A",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#334155",
  },
  profileLabel: {
    color: "#CBD5E1",
    fontSize: 15,
    marginBottom: 8,
  },
  profileName: {
    color: "#22C55E",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});