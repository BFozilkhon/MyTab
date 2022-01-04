import React, { createContext, useState } from 'react';

export const FozilInfo = createContext();

export const Context = ({ children }) => {
  const [list, setList] = useState(false);
  return (
    <FozilInfo.Provider value={[list, setList]}>{children}</FozilInfo.Provider>
  );
};

export default Context;
