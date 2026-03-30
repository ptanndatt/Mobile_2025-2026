import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const { increment, decrement } = counterSlice.actions;

// Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Giá trị: {count}</Text>

      <View style={styles.buttonBox}>
        <Button title="Tăng" onPress={() => dispatch(increment())} />
      </View>

      <View style={styles.buttonBox}>
        <Button title="Giảm" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
}

export default function BaiTap12Screen() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonBox: {
    width: 150,
    marginVertical: 8,
  },
});