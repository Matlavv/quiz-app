import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { DifficultyProvider } from "./DifficultyContext";
import HomeStack from "./screens/Stacks/HomeStack";
import LeaderBoardStack from "./screens/Stacks/LeaderBoardStack";
import ProfileStack from "./screens/Stacks/ProfileStack";
import QuizStack from "./screens/Stacks/QuizStack";

export default function App() {
  const Tab = createBottomTabNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <DifficultyProvider>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Quiz") {
                iconName = focused ? "book" : "book-outline";
              } else if (route.name === "Leaderboard") {
                iconName = focused ? "trophy" : "trophy-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#C8B6FF",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Quiz" component={QuizStack} />
          <Tab.Screen name="Leaderboard" component={LeaderBoardStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </DifficultyProvider>
  );
}
