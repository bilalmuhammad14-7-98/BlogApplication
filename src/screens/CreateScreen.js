import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPosts } = useContext(Context);
  return (
    <View>
      <Text style={styles.label}>Enter title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Text style={styles.label}>Enter Content t</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
      />

      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPosts(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    marginLeft: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
});

export default CreateScreen;
