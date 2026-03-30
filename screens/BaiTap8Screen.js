import { memo, useCallback, useState } from "react";
import {
    Alert,
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const DATA = Array.from({ length: 20 }, (_, index) => ({
  id: (index + 1).toString(),
  title: `Mục số ${index + 1}`,
}));

const Item = memo(function Item({ item, onPressItem }) {
  console.log("Render Item...", item.id);

  return (
    <TouchableOpacity
      style={styles.itemBox}
      onPress={() => onPressItem(item)}
      activeOpacity={0.85}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSub}>Nhấn để xem thông tin</Text>
    </TouchableOpacity>
  );
});

export default function BaiTap8Screen() {
  const [count, setCount] = useState(0);

  const onPressItem = useCallback((item) => {
    Alert.alert("Bạn đã chọn", item.title);
  }, []);

  const renderItem = useCallback(
    ({ item }) => <Item item={item} onPressItem={onPressItem} />,
    [onPressItem],
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

      <Text style={styles.title}>useCallback - FlatList Optimization</Text>
      <Text style={styles.subtitle}>
        Tăng state khác để kiểm tra danh sách item không bị render lại không cần
        thiết.
      </Text>

      <View style={styles.counterBox}>
        <Text style={styles.counterText}>Biến đếm hiện tại: {count}</Text>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => setCount((prev) => prev + 1)}
          activeOpacity={0.85}
        >
          <Text style={styles.counterButtonText}>Tăng biến đếm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 16,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#CBD5E1",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 18,
  },
  counterBox: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 18,
    marginBottom: 16,
  },
  counterText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  counterButton: {
    backgroundColor: "#22C55E",
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: "center",
  },
  counterButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemBox: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  itemTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemSub: {
    color: "#CBD5E1",
    fontSize: 14,
  },
});
