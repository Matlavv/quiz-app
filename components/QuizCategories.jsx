import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions, // Import Dimensions to calculate width
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const QuizCategories = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php");
      const json = await response.json();
      setCategories(json.trivia_categories);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      setLoading(false);
    }
  };

  const navigateToQuiz = (categoryId, categoryName) => {
    navigation.navigate("quizCategory", {
      category: categoryId,
      key: new Date().getTime(),
      name: categoryName,
    });
    console.log("Navigating to quiz with category:", categoryName);
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  const buttonWidth = (Dimensions.get("window").width - 80) / 2;

  return (
    <ScrollView className="flex-1 bg-white mb-52 mt-6">
      <View className="flex-row flex-wrap justify-around px-5">
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => navigateToQuiz(category.id, category.name)}
            className="mb-4 bg-primary-blue p-4 rounded-xl shadow-md"
            style={{ width: buttonWidth, height: buttonWidth }}
          >
            <Text className="text-lg font-bold text-white text-center">
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default QuizCategories;
