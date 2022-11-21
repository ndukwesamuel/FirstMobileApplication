import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Sandbox = () => {
  return (
    <View className="bg-[#ddd] pt-[40px] flex-1">
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

export default Sandbox;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 2,
    backgroundColor: "gold",
    padding: 10,
    alignSelf: "flex-end",
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 10,
  },
  boxFour: {
    flex: 3,
    backgroundColor: "skyblue",
    padding: 10,
    alignSelf: "flex-start",
  },
});
