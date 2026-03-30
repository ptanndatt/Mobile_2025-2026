import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function BaiTap2Screen() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [fee, setFee] = useState("");
  const [courseList, setCourseList] = useState([
    { id: "1", name: "raja", course: "c#.net", fee: "20000" },
    { id: "2", name: "abc", course: "ltndd", fee: "15000" },
  ]);
  const [showList, setShowList] = useState(false);

  const validateForm = () => {
    if (!name.trim() || !course.trim() || !fee.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin");
      return false;
    }

    if (isNaN(Number(fee))) {
      Alert.alert("Thông báo", "Phí khóa học phải là số");
      return false;
    }

    return true;
  };

  const handleAdd = () => {
    if (!validateForm()) return;

    const newItem = {
      id: Date.now().toString(),
      name: name.trim(),
      course: course.trim(),
      fee: fee.trim(),
    };

    setCourseList([...courseList, newItem]);
    Alert.alert("Thông báo", "Thêm đăng ký thành công");
    clearInputs();
  };

  const handleEdit = () => {
    if (!validateForm()) return;

    const index = courseList.findIndex(
      (item) => item.name.toLowerCase() === name.trim().toLowerCase(),
    );

    if (index === -1) {
      Alert.alert("Thông báo", "Không tìm thấy tên đăng ký để cập nhật");
      return;
    }

    const updatedList = [...courseList];
    updatedList[index] = {
      ...updatedList[index],
      name: name.trim(),
      course: course.trim(),
      fee: fee.trim(),
    };

    setCourseList(updatedList);
    Alert.alert("Thông báo", "Cập nhật thành công");
    clearInputs();
  };

  const handleDelete = () => {
    if (!name.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập tên đăng ký để xóa");
      return;
    }

    const exists = courseList.some(
      (item) => item.name.toLowerCase() === name.trim().toLowerCase(),
    );

    if (!exists) {
      Alert.alert("Thông báo", "Xóa thất bại, không tìm thấy tên đăng ký");
      return;
    }

    const filteredList = courseList.filter(
      (item) => item.name.toLowerCase() !== name.trim().toLowerCase(),
    );

    setCourseList(filteredList);
    Alert.alert("Thông báo", "Xóa thành công");
    clearInputs();
  };

  const clearInputs = () => {
    setName("");
    setCourse("");
    setFee("");
  };

  const handleViewCourse = () => {
    setShowList(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.course}</Text>
      <Text style={styles.cell}>{item.fee}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>PHAMTANDAT-21022271</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Course Registration</Text>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nhập tên đăng ký"
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Course</Text>
          <TextInput
            style={styles.input}
            value={course}
            onChangeText={setCourse}
            placeholder="Nhập tên khóa học"
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Fee</Text>
          <TextInput
            style={styles.input}
            value={fee}
            onChangeText={setFee}
            placeholder="Nhập phí khóa học"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton} onPress={handleAdd}>
            <Text style={styles.actionButtonText}>ADD</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
            <Text style={styles.actionButtonText}>EDIT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleDelete}>
            <Text style={styles.actionButtonText}>DELETE</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.viewButton} onPress={handleViewCourse}>
          <Text style={styles.viewButtonText}>VIEW COURSE</Text>
        </TouchableOpacity>

        {showList && (
          <FlatList
            data={courseList}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Chưa có dữ liệu khóa học</Text>
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    backgroundColor: "#007b7f",
    paddingVertical: 14,
    alignItems: "center",
  },
  topBarText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  formContainer: {
    flex: 1,
    padding: 18,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: "#cc4b74",
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "600",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  label: {
    width: 65,
    fontSize: 16,
    color: "#555",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: "#aaa",
    fontSize: 18,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: "#ff3f72",
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewButton: {
    backgroundColor: "#2f80ed",
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#d6f5d6",
    borderWidth: 1,
    borderColor: "#bdbdbd",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 14,
    borderRightWidth: 1,
    borderRightColor: "#bdbdbd",
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
    fontSize: 16,
  },
});
