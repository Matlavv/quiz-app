import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profilecreen from "../Profile/ProfileScreen";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={Profilecreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
