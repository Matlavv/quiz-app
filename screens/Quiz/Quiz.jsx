import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";
import { useDifficulty } from "../../DifficultyContext";
import Header from "../../components/Header";

const Quiz = () => {
  const route = useRoute();
  const { category } = route.params || {};
  const { difficulty } = useDifficulty();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    if (category) {
      setLoading(true);
      setQuestions([]);
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
      setSelectedAnswer(null);
      setIsQuizCompleted(false);
      fetchQuestions();
    }
  }, [category, difficulty]);

  const fetchQuestions = async () => {
    try {
      const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
      const response = await fetch(url);
      const json = await response.json();
      if (json.results) {
        setQuestions(json.results);
      } else {
        console.error("Pas de résultats trouvés:", json);
      }
      setLoading(false);
      setIsQuizCompleted(false);
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
    } catch (error) {
      console.error("Erreur lors du chargement des questions:", error);
      setLoading(false);
    }
  };

  const handleAnswer = (answer) => {
    if (loading || currentQuestionIndex >= questions.length) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const correct = answer === currentQuestion.correct_answer;
    setSelectedAnswer(answer);

    if (correct) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setIsQuizCompleted(true);
      }
    }, 1000);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Header />
        <Text className="text-xl">
          Aucune question disponible pour cette catégorie ou difficulté.
        </Text>
      </View>
    );
  }

  if (isQuizCompleted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Header />
        <Text className="text-xl font-bold">Quiz terminé</Text>
        <Text className="text-lg">
          Score: {correctAnswers}/{questions.length}
        </Text>
        <TouchableOpacity
          onPress={() => fetchQuestions()}
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
  const answers = currentQuestion
    ? [
        currentQuestion.correct_answer,
        ...currentQuestion.incorrect_answers,
      ].sort(() => Math.random() - 0.5)
    : [];

  return (
    <View className="flex-1">
      <View className="bg-secondary-purple pb-6">
        <Header />
        <View className="p-4">
          <Text className="text-2xl mb-2">{`Thème : ${currentQuestion.category}`}</Text>
          <Text className="text-lg font-semibold mb-2">
            {currentQuestion.question}
          </Text>
          <Progress.Bar progress={progress} width={350} color="#B8C0FF" />
          <Text className="text-lg font-bold mb-4">
            Bonnes réponses: {correctAnswers}/{questions.length}
          </Text>
        </View>
      </View>
      <View className="">
        <View className="mt-10">
          {answers.map((answer, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => handleAnswer(answer)}
              className="flex-row items-center bg-blue-500 rounded-xl p-4 m-2"
              style={{
                backgroundColor:
                  selectedAnswer === answer
                    ? answer === currentQuestion.correct_answer
                      ? "green"
                      : "red"
                    : "#B8C0FF",
              }}
            >
              <Text className="flex-1 text-white font-semibold">{answer}</Text>
              {selectedAnswer && (
                <MaterialIcons
                  name={
                    answer === currentQuestion.correct_answer
                      ? "check"
                      : selectedAnswer === answer
                      ? "close"
                      : null
                  }
                  size={24}
                  color="white"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Quiz;
