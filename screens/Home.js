import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useLayoutEffect, useState } from "react";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const navigations = useNavigation();
  useLayoutEffect(() => {
    //    this just like useefecft but we want to use it for the header so that we can get our own customise header and we wnat it to run when once or when a depndency appeare
    navigations.setOptions({
      //   headerTitle: "Testing", this will change the default header title
      headerShown: false, // this will remove the header then we are free to do what we want
    });

    return () => {};
  }, []);

  return (
    <View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
            className="bg-slate-400 mb-4"
          >
            <Text className="font-bold p-7">{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
