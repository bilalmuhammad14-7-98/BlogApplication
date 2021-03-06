import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPosts } = useContext(Context);

  return (
    <View>
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPosts(title, content, () => navigation.navigate("Index"));
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
