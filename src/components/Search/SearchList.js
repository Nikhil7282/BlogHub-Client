import React, { useContext } from "react";
import { postContext } from "../../context/globalContext";
const SearchList = () => {
  const {state}=useContext(postContext)
  if (state.searchResults.length === 0) {
    return (
      <div className=".dataResult">
        <a className="dataItem">
          {console.log("No Post")}
          <p>No Post Found</p>
        </a>
      </div>
    );
  }
  return (
    <div className="dataResult">
      {state.searchResults.map((post, idx) => {
        return (
          <a className="dataItem" key={idx}>
            {/* {console.log(post.title)} */}
            <p>{post.title}</p>
          </a>
        );
      })}
    </div>
  );
};

export default SearchList;
