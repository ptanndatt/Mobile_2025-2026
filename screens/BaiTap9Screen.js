import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HomeNavScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>
        Nhấn nút để điều hướng sang màn hình Detail
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("DetailScreen", {
            message: "Xin chào từ Home truyền sang Detail",
          })
        }
      >
        <Text style={styles.buttonText}>Đi tới Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailNavScreen({ route, navigation }) {
  const message = route.params?.message || "Không có dữ liệu";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Text style={styles.messageText}>{message}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Quay lại Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function BaiTap9Screen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0B4F6C" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="HomeNav"
        component={HomeNavScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailNavScreen}
        options={{ title: "Detail" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0B4F6C",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 24,
  },
  messageText: {
    fontSize: 18,
    color: "#222",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 26,
  },
  button: {
    backgroundColor: "#118AB2",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});