import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";

function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Tab</Text>
      <Text style={styles.subtitle}>Đây là nội dung của tab Home</Text>
    </View>
  );
}

function TabDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Tab</Text>
      <Text style={styles.subtitle}>Đây là nội dung của tab Detail</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BaiTap10Screen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0B4F6C",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#118AB2",
        tabBarInactiveTintColor: "#64748B",
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          paddingTop: 6,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={TabHomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="DetailTab"
        component={TabDetailScreen}
        options={{ title: "Detail" }}
      />
    </Tab.Navigator>
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#0B4F6C",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    color: "#555",
    textAlign: "center",
  },
});