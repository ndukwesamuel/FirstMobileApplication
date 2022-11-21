import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//  <Ionicons name="md-checkmark-circle" size={32} color="green" />
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity className="flex-row items-center border border-white ">
      <Text className=" rounded-lg mt-[16px]  p-[5px]  mb-5 font-semibold text-lg w-[80%]">
        {item.text}
      </Text>
      <AntDesign
        name="delete"
        size={24}
        color="black"
        onPress={() => pressHandler(item.key)}
      />
    </TouchableOpacity>
  );
};

export default TodoItem;
