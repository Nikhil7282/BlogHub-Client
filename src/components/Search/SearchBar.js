import React, { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { postContext } from "../../context/globalContext";

const SearchBar = () => {
  const {state,dispatch} = useContext(postContext);
  // console.log(state);
  // console.log(state);
  const handleChange = async(e) => {
    console.log(e);
    const filteredPost = state.data.filter((post) => {
      return (
        e.target.value && post.title.toLowerCase().includes(e.target.value)
      );
    });
    // console.log(filteredPost);
    dispatch({type:"Search_Results",payload:filteredPost})
  };
  const handleClick = () => {};
  return (
    <>
      <div className="searchBar">
        <input type="text" placeholder="Search" onChange={handleChange}/>
        <button onClick={handleClick}>
          <IoSearch />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
