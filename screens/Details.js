import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useLayoutEffect } from "react";

const Details = ({ navigation, route }) => {
  const { title, rating, body, key } = route.params;

  console.log(title);
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{body}</Text>
      <Text>{key}</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
