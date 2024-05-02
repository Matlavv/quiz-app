import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Quiz from "../Quiz/Quiz";
import QuizScreen from "../Quiz/QuizScreen";
import RandomQuiz from "../Quiz/RandomQuiz";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="quiz"
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="randomQuiz"
        component={RandomQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="quizCategory"
        component={Quiz}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
