import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import Quiz from "../Quiz/Quiz";
import RandomQuiz from "../Quiz/RandomQuiz";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
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
