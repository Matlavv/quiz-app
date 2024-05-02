import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../../components/Header";
import QuizCategories from "../../components/QuizCategories";

const QuizScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-secondary-purple pb-8">
        <Header />
        <Text className=" m-4 text-2xl font-semibold">
          Choisissez parmis toutes les catégories de quiz !
        </Text>
      </View>
      {/* Quiz category list */}
      <View className="bg-white -mt-4 rounded-3xl h-full">
        <QuizCategories />
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
