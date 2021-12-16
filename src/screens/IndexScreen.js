import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPosts } = useContext(BlogContext);
  // console.log(blogPosts);
  return (
    <View>
      <Text>Main Screen</Text>
      <Button title="Add Blog Posts" onPress={addBlogPosts} />
      <FlatList
        data={data}
        keyExtractor={(post) => {
          post.title;
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;
