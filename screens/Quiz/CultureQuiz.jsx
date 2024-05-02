import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";
import { useDifficulty } from "../../DifficultyContext";
import Header from "../../components/Header";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CultureQuiz = () => {
  const { difficulty } = useDifficulty();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, [difficulty]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=multiple`
      );
      console.log(difficulty);
      const json = await response.json();
      setQuestions(json.results);
      setLoading(false);
      setIsQuizCompleted(false);
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const correct = answer === currentQuestion.correct_answer;
    setSelectedAnswer(answer);
    if (correct) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setIsQuizCompleted(true);
      }
    }, 1500);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isQuizCompleted) {
    return (
      <View className="flex-1 bg-white justify-center items-center p-4">
        <Header />
        <Text className="text-xl font-bold">Quiz terminé</Text>
        <Text className="text-lg">
          Score: {correctAnswers}/{questions.length}
        </Text>
        <TouchableOpacity
          onPress={fetchQuestions}
          style={{
            backgroundColor: "blue",
            padding: 12,
            marginVertical: 20,
            borderRadius: 4,
          }}
        >
          <Text className="text-base text-white">Relancer le Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / questions.length;

  // Mélanger les réponses
  const answers = shuffleArray([
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ]);

  return (
    <View className="flex-1 bg-primary-purple">
      <Header />
      <View className="flex-1 p-4 m-2 bg-white rounded-2xl">
        <View className="flex items-center justify-center">
          <Text className=" text-2xl font-bold text-black">
            Culture générale
          </Text>
        </View>
        <View className="flex items-center mt-10">
          <View className="w-80 rounded-xl bg-third-purple p-6">
            <Text className="text-lg font-bold text-white text-center">
              {currentQuestion
                ? currentQuestion.question
                : "Loading question..."}
            </Text>
          </View>
          <Text className="text-xl text-black font-bold mb-2">
            Score: {correctAnswers}/{questions.length}
          </Text>
          <Progress.Bar
            progress={progress}
            width={200}
            color="#C8B6FF"
            className="mb-8"
          />
          {answers.map((answer, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => handleAnswer(answer)}
              style={{
                backgroundColor: selectedAnswer
                  ? answer === currentQuestion.correct_answer
                    ? "green"
                    : answer == selectedAnswer
                    ? "red"
                    : "#B8C0FF"
                  : "#B8C0FF",
                padding: 12,
                marginVertical: 6,
                borderRadius: 4,
                marginTop: 5,
              }}
            >
              <Text className="text-base text-white">{answer}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CultureQuiz;
