import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";
import TrengingQuiz from "../components/TrendingQuiz";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Header />
        <Text className="text-xl font-bold m-4">Salut Matlav !👋</Text>
      </View>
      {/* Trending quiz */}
      <View>
        <TrengingQuiz />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
