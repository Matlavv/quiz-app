import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";
import SelectDifficulty from "../components/SelectDifficulty";
import TrengingQuiz from "../components/TrendingQuiz";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-secondary-purple pb-6">
        <Header />
        <Text className="text-xl font-bold m-4">Salut Matlav !👋</Text>
        <SelectDifficulty />
      </View>
      {/* Trending quiz */}
      <View className="h-full -mt-4 bg-white rounded-3xl">
        <TrengingQuiz />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
