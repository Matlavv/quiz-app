import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import InfiniteQuiz from "../Quiz/InfiniteQuiz";
import Quiz from "../Quiz/Quiz";

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
        name="infiniteQuiz"
        component={InfiniteQuiz}
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
