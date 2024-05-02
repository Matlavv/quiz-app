import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, View } from "react-native";
import { useDifficulty } from "../DifficultyContext";

const SelectDifficulty = () => {
  const { difficulty, handleSetDifficulty } = useDifficulty();

  return (
    <View className="bg-white rounded-2xl flex m-4 p-2">
      <Text className="text-lg font-semibold">Choisis la difficulté :</Text>
      <Picker
        selectedValue={difficulty}
        onValueChange={(itemValue) => handleSetDifficulty(itemValue)}
      >
        <Picker.Item label="Easy" value="easy" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Hard" value="hard" />
      </Picker>
    </View>
  );
};

export default SelectDifficulty;
