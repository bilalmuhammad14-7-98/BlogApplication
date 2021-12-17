import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  return (
    <View>
      <Text>Welcome to Edit Screen {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
