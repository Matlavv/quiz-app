import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TrendingQuiz = () => {
  const navigation = useNavigation();

  const navigateToRandomQuiz = () => {
    navigation.navigate("Quiz", { screen: "RandomQuiz" });
  };
  const navigateToAnimalsQuiz = () => {
    navigation.navigate("Quiz", { screen: "animalsQuiz" });
  };
  const navigateToCelebritiesQuiz = () => {
    navigation.navigate("Quiz", { screen: "celebritiesQuiz" });
  };
  const navigateToCultureQuiz = () => {
    navigation.navigate("Quiz", { screen: "cultureQuiz" });
  };

  return (
    <View>
      <View>
        <Text className="text-xl font-bold m-4">Trending Quiz</Text>
      </View>
      {/* 3 containers */}
      <View className="flex flex-row justify-between m-4">
        <TouchableOpacity
          className="rounded-xl bg-primary-purple h-24"
          onPress={navigateToAnimalsQuiz}
        >
          <Text className="text-lg font-bold m-4">Animaux</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-xl bg-secondary-purple"
          onPress={navigateToCultureQuiz}
        >
          <Text className="text-lg font-bold m-4">Culture G</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-xl bg-third-purple"
          onPress={navigateToCelebritiesQuiz}
        >
          <Text className="text-lg font-bold m-4">Célébrités</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrendingQuiz;
