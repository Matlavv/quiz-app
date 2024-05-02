import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, View } from "react-native";
import { useDifficulty } from "../../DifficultyContext";
import Header from "../../components/Header";

const ProfileScreen = () => {
  const { difficulty, handleSetDifficulty } = useDifficulty();

  return (
    <View>
      <Header />
      <Text>Select Difficulty:</Text>
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

export default ProfileScreen;
