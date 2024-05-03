import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/Header";

const InfiniteQuiz = () => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [questionCount, setQuestionCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    setLoading(true);
    setIsAnswered(false);
    setSelectedAnswer(null);
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=1&type=multiple`
      );
      const json = await response.json();
      if (json.results.length) {
        setQuestion(json.results[0]);
        setQuestionCount(questionCount + 1);
      } else {
        console.error("No questions found:", json);
      }
    } catch (error) {
      console.error("Error loading the question:", error);
    }
    setLoading(false);
  };

  const handleAnswer = (answer) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === question.correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNextQuestion = () => {
    fetchQuestion();
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!question) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Pas de questions pour le moment</Text>
      </View>
    );
  }

  const answers = [question.correct_answer, ...question.incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-primary-purple pb-8">
        <Header />
        <Text className="text-xl font-bold mb-2">{`Question ${questionCount}`}</Text>
        <Text className="text-lg mb-4">{question.question}</Text>
      </View>
      <View className="bg-white -mt-4 rounded-2xl p-4">
        {answers.map((answer, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => handleAnswer(answer)}
            className={`p-4 rounded-lg m-2 ${
              selectedAnswer === answer
                ? answer === question.correct_answer
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-primary-blue"
            }`}
          >
            <Text className="text-white">{answer}</Text>
          </TouchableOpacity>
        ))}
        <View className="flex-row justify-between items-center mt-4">
          <Text className="text-lg">Bonne réponses : {correctAnswers}</Text>
          {isAnswered && (
            <TouchableOpacity
              onPress={handleNextQuestion}
              className="bg-purple-500 px-4 py-2 rounded-full"
            >
              <Text className="text-white">Question suivante</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InfiniteQuiz;
