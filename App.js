import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

import BaiTap10Screen from "./screens/BaiTap10Screen";
import BaiTap11Screen from "./screens/BaiTap11Screen";
import BaiTap12Screen from "./screens/BaiTap12Screen";
import BaiTap13Screen from "./screens/BaiTap13Screen";
import BaiTap14Screen from "./screens/BaiTap14Screen";
import BaiTap1Screen from "./screens/BaiTap1Screen";
import BaiTap2Screen from "./screens/BaiTap2Screen";
import BaiTap3Screen from "./screens/BaiTap3Screen";
import BaiTap4Screen from "./screens/BaiTap4Screen";
import BaiTap5Screen from "./screens/BaiTap5Screen";
import BaiTap6Screen from "./screens/BaiTap6Screen";
import BaiTap7Screen from "./screens/BaiTap7Screen";
import BaiTap8Screen from "./screens/BaiTap8Screen";
import BaiTap9Screen from "./screens/BaiTap9Screen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0B4F6C",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: "#F4F8FB",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang Chủ" }}
        />
        <Stack.Screen
          name="BaiTap1"
          component={BaiTap1Screen}
          options={{ title: "Bài Tập 1" }}
        />
        <Stack.Screen
          name="BaiTap2"
          component={BaiTap2Screen}
          options={{ title: "Bài Tập 2" }}
        />
        <Stack.Screen
          name="BaiTap3"
          component={BaiTap3Screen}
          options={{ title: "Bài Tập 3" }}
        />
        <Stack.Screen
          name="BaiTap4"
          component={BaiTap4Screen}
          options={{ title: "Bài Tập 4" }}
        />
        <Stack.Screen
          name="BaiTap5"
          component={BaiTap5Screen}
          options={{ title: "Bài Tập 5" }}
        />
        <Stack.Screen
          name="BaiTap6"
          component={BaiTap6Screen}
          options={{ title: "Bài Tập 6" }}
        />
        <Stack.Screen
          name="BaiTap7"
          component={BaiTap7Screen}
          options={{ title: "Bài Tập 7" }}
        />
        <Stack.Screen
          name="BaiTap8"
          component={BaiTap8Screen}
          options={{ title: "Bài Tập 8" }}
        />
        <Stack.Screen
          name="BaiTap9"
          component={BaiTap9Screen}
          options={{ title: "Bài Tập 9" }}
        />
        <Stack.Screen
          name="BaiTap10"
          component={BaiTap10Screen}
          options={{ title: "Bài Tập 10" }}
        />
        <Stack.Screen
          name="BaiTap11"
          component={BaiTap11Screen}
          options={{ title: "Bài Tập 11:Redux Legacy" }}
        />
        <Stack.Screen
          name="BaiTap12"
          component={BaiTap12Screen}
          options={{ title: "Bài Tập 12:Redux Toolkit" }}
        />
        <Stack.Screen
          name="BaiTap13"
          component={BaiTap13Screen}
          options={{ title: "Bài Tập 13:QL Danh Sách" }}
        />
          <Stack.Screen
          name="BaiTap14"
          component={BaiTap14Screen}
          options={{ title: "Bài Tập 14:QL Người Dùng" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
