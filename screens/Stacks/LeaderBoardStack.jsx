import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeaderBoardScreen from "../LeaderBoard/LeaderBoardScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="leaderboard"
        component={LeaderBoardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
