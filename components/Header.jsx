import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import profilePic from "../assets";

const Header = () => {
  return (
    <View className="flex flex-row justify-between mt-10">
      {/* Profile pic */}
      <View>
        <Image source={profilePic} className="rounded-2xl h-12 w-12" />
      </View>
      <View>
        <Text className="text-2xl font-bold text-white">Quiz App</Text>
      </View>
      <View>
        <Ionicons name="notifications" size={24} color="white" />
      </View>
    </View>
  );
};

export default Header;
