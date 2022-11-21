import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="Add to do"
        className="border-2 border-red-200 mt-4 p-5"
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        title="todo submit"
        className="bg-blue-500 text-white"
        onPress={() => submitHandler(text)}
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({});
