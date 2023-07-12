import React, {useContext} from "react";
import {context} from "./App"

export const Children = () => {
  const user = useContext(context);
  return(
    <>
      <h3>이름:{user.name}</h3>
      <h3>나이:{user.age}</h3>
    </>
  );
}
