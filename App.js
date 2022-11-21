import {
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Sandbox from "./components/Sandbox";
import { AntDesign } from "@expo/vector-icons";

const App = () => {
  const [todos, setTodos] = useState([{ text: "buy coffee", key: "1" }]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("dismissed");
        Keyboard.dismiss();
      }}
      className="bg-stone-500"
    >
      <View className=" flex-1">
        <Header />
        <View className="p-[40px] flex-1 bg-pink-500">
          <AddTodo submitHandler={submitHandler} />
          <View className="bg-yellow-300 flex-1">
            <FlatList
              showsVerticalScrollIndicator={false}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
