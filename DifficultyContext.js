import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const DifficultyContext = createContext();

export const useDifficulty = () => useContext(DifficultyContext);

export const DifficultyProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    const loadDifficulty = async () => {
      const storedDifficulty = await AsyncStorage.getItem("quizDifficulty");
      if (storedDifficulty) {
        setDifficulty(storedDifficulty);
      }
    };

    loadDifficulty();
  }, []);

  const handleSetDifficulty = async (value) => {
    setDifficulty(value);
    await AsyncStorage.setItem("quizDifficulty", value);
  };

  return (
    <DifficultyContext.Provider value={{ difficulty, handleSetDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
};
