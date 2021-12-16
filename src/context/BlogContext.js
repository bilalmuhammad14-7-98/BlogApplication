import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    //   case 'delete_blogpost':
    //     return state.filter((blogPost=> blogPost.id !== action.payload))

    default:
      return state;
  }
};

const addBlogPosts = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

const deleteBlogPosts = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPosts, deleteBlogPosts },
  []
);
