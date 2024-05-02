import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimalsQuiz from "../Quiz/AnimalsQuiz";
import CelebritiesQuiz from "../Quiz/CelebritiesQuiz";
import CultureQuiz from "../Quiz/CultureQuiz";
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
        name="animalsQuiz"
        component={AnimalsQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="celebritiesQuiz"
        component={CelebritiesQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="cultureQuiz"
        component={CultureQuiz}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
