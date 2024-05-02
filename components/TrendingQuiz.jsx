import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TrendingQuiz = () => {
  const navigation = useNavigation();

  const navigateToQuiz = (category) => {
    navigation.navigate("quizCategory", { category });
  };

  return (
    <View>
      <Text className="text-xl font-bold m-4">Trending Quiz</Text>
      <View className="flex flex-row justify-between m-4">
        <TouchableOpacity
          className="rounded-xl bg-primary-purple h-24"
          onPress={() => navigateToQuiz(27)} // ID de la catégorie pour Animaux
        >
          <Text className="text-lg font-bold m-4">Animaux</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-xl bg-secondary-purple"
          onPress={() => navigateToQuiz(9)} // ID de la catégorie pour Culture G
        >
          <Text className="text-lg font-bold m-4">Culture G</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-xl bg-third-purple"
          onPress={() => navigateToQuiz(26)} // ID de la catégorie pour Célébrités
        >
          <Text className="text-lg font-bold m-4">Célébrités</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrendingQuiz;
