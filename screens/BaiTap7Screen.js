import React, { useMemo, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const randomNumbers = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000)
);

export default function BaiTap7Screen() {
  const [searchValue, setSearchValue] = useState("");
  const [isDark, setIsDark] = useState(false);

  const threshold = Number(searchValue) || 0;

  const filteredNumbers = useMemo(() => {
    console.log("Đang lọc danh sách...");
    return randomNumbers.filter((num) => num > threshold);
  }, [threshold]);

  const theme = isDark
    ? {
        background: "#020617",
        card: "#1E293B",
        text: "#FFFFFF",
        subText: "#CBD5E1",
        input: "#0F172A",
      }
    : {
        background: "#E0F2FE",
        card: "#FFFFFF",
        text: "#0F172A",
        subText: "#475569",
        input: "#F8FAFC",
      };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />

      <Text style={[styles.title, { color: theme.text }]}>
        useMemo - Search Filter
      </Text>

      <Text style={[styles.subtitle, { color: theme.subText }]}>
        Lọc danh sách số lớn hơn giá trị nhập vào. Khi đổi màu giao diện thì hàm
        lọc không chạy lại nếu giá trị tìm kiếm không đổi.
      </Text>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.input,
              color: theme.text,
              borderColor: "#94A3B8",
            },
          ]}
          placeholder="Nhập số cần lọc..."
          placeholderTextColor="#94A3B8"
          keyboardType="numeric"
          value={searchValue}
          onChangeText={setSearchValue}
        />

        <TouchableOpacity
          style={styles.themeButton}
          onPress={() => setIsDark((prev) => !prev)}
          activeOpacity={0.85}
        >
          <Text style={styles.themeButtonText}>Đổi màu giao diện</Text>
        </TouchableOpacity>

        <Text style={[styles.resultText, { color: theme.text }]}>
          Giá trị lọc: {threshold}
        </Text>
        <Text style={[styles.resultText, { color: theme.text }]}>
          Số phần tử tìm được: {filteredNumbers.length}
        </Text>
      </View>

      <FlatList
        data={filteredNumbers.slice(0, 80)}
        keyExtractor={(item, index) => `${item}-${index}`}
        numColumns={4}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={[styles.numberBox, { backgroundColor: theme.card }]}>
            <Text style={[styles.numberText, { color: theme.text }]}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 18,
  },
  card: {
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 14,
  },
  themeButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: "center",
    marginBottom: 14,
  },
  themeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  listContainer: {
    paddingBottom: 24,
  },
  numberBox: {
    flex: 1,
    margin: 6,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 70,
  },
  numberText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});