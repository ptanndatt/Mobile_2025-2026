import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Reducer
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

// Component con
function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Giá trị: {count}</Text>

      <Button title="Tăng" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="Giảm" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  );
}

// Screen chính
export default function BaiTap11Screen() {
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
    gap: 10,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});