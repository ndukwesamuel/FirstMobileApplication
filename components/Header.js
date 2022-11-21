import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View className=" h-[80px] pt-[38px] bg-yellow-500">
      <Text className="font-bold  text-center text-[#fff] text-[20px]">
        My Todos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
