import React, { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

const LoderProvider = ({ children }) => {
  const [isShowLoader, setIsShowLoader] = useState(false);

  return (
    <LoaderContext.Provider
      value={{ isShowLoader, setIsShowLoader }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);

export default LoderProvider;
