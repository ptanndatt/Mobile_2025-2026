import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice
const studentSlice = createSlice({
  name: 'students',
  initialState: {
    list: ['Nguyen Van A', 'Tran Thi B'],
  },
  reducers: {
    addStudent: (state, action) => {
      if (action.payload.trim() !== '') {
        state.list.push(action.payload);
      }
    },
    removeLastStudent: (state) => {
      state.list.pop();
    },
  },
});

const { addStudent, removeLastStudent } = studentSlice.actions;

// Store
const store = configureStore({
  reducer: {
    students: studentSlice.reducer,
  },
});

function StudentManager() {
  const [name, setName] = useState('');
  const studentList = useSelector((state) => state.students.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim() === '') return;
    dispatch(addStudent(name));
    setName('');
  };

  const handleRemoveLast = () => {
    if (studentList.length > 0) {
      dispatch(removeLastStudent());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản lý danh sách sinh viên</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên sinh viên"
        value={name}
        onChangeText={setName}
      />

      <View style={styles.buttonBox}>
        <Button title="Thêm tên" onPress={handleAdd} />
      </View>

      <View style={styles.buttonBox}>
        <Button title="Xóa tên cuối cùng" onPress={handleRemoveLast} />
      </View>

      <FlatList
        data={studentList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.item}>
            {index + 1}. {item}
          </Text>
        )}
        style={styles.list}
      />
    </View>
  );
}

export default function BaiTap13Screen() {
  return (
    <Provider store={store}>
      <StudentManager />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  buttonBox: {
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
  },
  item: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});