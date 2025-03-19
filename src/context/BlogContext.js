import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setBlogs(response.data);
          });
    },[]);

    return (
        <BlogContext.Provider value={{blogs, setBlogs}} >
            {children}
        </BlogContext.Provider>
    );
};
