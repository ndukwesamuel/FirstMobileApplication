import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Header({ navigation }) {
  return (
    <View className=" h-[180px] pt-[38px] bg-yellow-500">
      <Text className="font-bold  text-center text-[#fff] text-[20px]">
        My Todos
      </Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
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
