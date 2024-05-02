import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { penguin } from "../assets";

const TrendingQuiz = () => {
  const navigation = useNavigation();

  const navigateToQuiz = (category) => {
    navigation.navigate("quizCategory", {
      category,
      key: new Date().getTime(),
    });
    console.log("Navigating to quiz with category:", category);
  };

  return (
    <View>
      <Text className="text-xl font-bold m-4">Quiz populaires</Text>
      <View className="flex flex-row justify-between m-4">
        <TouchableOpacity
          className="rounded-xl bg-primary-purple h-24"
          onPress={() => navigateToQuiz(27)} // ID de la catégorie pour Animaux
        >
          <Text className="text-lg font-bold m-4">Animaux</Text>
          <Image source={penguin} className="w-12 h-12" />
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
