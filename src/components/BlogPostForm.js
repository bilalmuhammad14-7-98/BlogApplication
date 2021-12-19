import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        title="Save Blog Post"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
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

export default BlogPostForm;
