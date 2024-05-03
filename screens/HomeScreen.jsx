import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import SelectDifficulty from "../components/SelectDifficulty";
import TrengingQuiz from "../components/TrendingQuiz";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToInfiniteQuiz = () => {
    navigation.navigate("infiniteQuiz");
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-secondary-purple pb-6">
        <Header />
        <Text className="text-xl font-bold m-4">Salut Matlav !👋</Text>
        <SelectDifficulty />
      </View>
      {/* Trending quiz */}
      <View className="-mt-4 bg-white rounded-3xl">
        <TrengingQuiz />
      </View>
      <View>
        <TouchableOpacity
          className="bg-primary-purple rounded-3xl p-8 m-4"
          onPress={navigateToInfiniteQuiz}
        >
          <Text className="text-2xl text-center font-bold">Quiz infini</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
