import { useReducer, useState } from "react";
import {
    Alert,
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload.title,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item,
      );

    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}

export default function BaiTap5Screen() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    const trimmed = todoText.trim();

    if (!trimmed) {
      Alert.alert("Thông báo", "Vui lòng nhập công việc.");
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: { title: trimmed },
    });

    setTodoText("");
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id },
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    });
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.todoItem}>
        <TouchableOpacity
          style={styles.todoContent}
          onPress={() => handleToggleTodo(item.id)}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.statusDot,
              { backgroundColor: item.completed ? "#22C55E" : "#F59E0B" },
            ]}
          />

          <View style={styles.todoTextBox}>
            <Text
              style={[
                styles.todoText,
                item.completed && styles.todoTextCompleted,
              ]}
            >
              {index + 1}. {item.title}
            </Text>
            <Text style={styles.todoSubText}>
              {item.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteTodo(item.id)}
        >
          <Text style={styles.deleteButtonText}>Xóa</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

      <Text style={styles.title}>Todo List</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nhập công việc..."
          placeholderTextColor="#94A3B8"
          value={todoText}
          onChangeText={setTodoText}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTodo}
          activeOpacity={0.85}
        >
          <Text style={styles.addButtonText}>Thêm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>Tổng công việc: {todos.length}</Text>
        <Text style={styles.summaryText}>
          Hoàn thành: {todos.filter((item) => item.completed).length}
        </Text>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={
          todos.length === 0 ? styles.emptyListContainer : styles.listContainer
        }
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>Chưa có công việc nào.</Text>
            <Text style={styles.emptySubText}>
              Hãy thêm công việc đầu tiên của bạn.
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
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
    marginTop: 10,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#CBD5E1",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1E293B",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#334155",
  },
  addButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  summaryBox: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryText: {
    color: "#E2E8F0",
    fontSize: 15,
    fontWeight: "600",
  },
  listContainer: {
    paddingBottom: 20,
  },
  emptyListContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  emptyBox: {
    backgroundColor: "#1E293B",
    borderRadius: 18,
    padding: 24,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 15,
    color: "#CBD5E1",
    textAlign: "center",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  todoContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 12,
  },
  todoTextBox: {
    flex: 1,
  },
  todoText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  todoTextCompleted: {
    textDecorationLine: "line-through",
    color: "#94A3B8",
  },
  todoSubText: {
    fontSize: 13,
    color: "#CBD5E1",
  },
  deleteButton: {
    backgroundColor: "#EF4444",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    marginLeft: 12,
  },
  deleteButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
