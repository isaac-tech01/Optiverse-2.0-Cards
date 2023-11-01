import {
  View,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Filter from "../../../../assets/icons/filter.svg";
import Search from "../../../../assets/icons/search.svg";
import RArrow from "../../../../assets/icons/arrowR.svg";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

const ios = Platform.OS === "ios";
const topMargin = ios ? "mt-4" : "mt-10";

const BeneficiariesScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const add = () => {
    navigation.navigate("Add_Beneficiary");
  };
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#E6EBF5" }}>
      <StatusBar style="dark" />
      <View className={"flex-1" + topMargin}>
        {/* Top Bar */}
        <View className="flex flex-col px-2 ml-2 mt-1">
          <ChevronLeftIcon size={28} strokeWidth={2} color={"#00297A"} />
        </View>
        <View className="ml-4 px-2 mb-4">
          <Text className="text-2xl font-semibold" style={{ color: "#00297A" }}>
            Beneficiaries
          </Text>
        </View>

        {/* Search Bar */}
        <View className="px-2 py-2 bg-white mx-6 flex-row justify-between items-center rounded-lg">
          <View className="flex-row items-center">
            <Search width={30} />
            <TextInput placeholder="Search" style={{ color: "#98A2B3" }} />
          </View>
          <Filter width={30} />
        </View>

        {/* Beneficiaries */}
        <View>
          {/* One */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Beneficiary")}
            className="mt-4 px-2 py-2 bg-white mx-6 flex-row justify-between items-center rounded-lg"
          >
            <View className="flex-row items-center">
              <View
                style={{ backgroundColor: "#99ADD6" }}
                className="w-10 h-10 rounded-full items-center flex justify-center"
              >
                <Text
                  className="text-3xl font-medium"
                  style={{ color: "#E6EBF5" }}
                >
                  Y
                </Text>
              </View>
              <Text className="ml-4 text-sm font-medium">Yetunde Kayode</Text>
            </View>
            <RArrow width={30} />
          </TouchableOpacity>

          {/* Two */}
          <View className="mt-4 px-2 py-2 bg-white mx-6 flex-row justify-between items-center rounded-lg">
            <View className="flex-row items-center">
              <View
                style={{ backgroundColor: "#99ADD6" }}
                className="w-10 h-10 rounded-full items-center flex justify-center"
              >
                <Text
                  className="text-3xl font-medium"
                  style={{ color: "#E6EBF5" }}
                >
                  Y
                </Text>
              </View>
              <Text className="ml-4 text-sm font-medium">Yetunde Kayode</Text>
            </View>
            <RArrow width={30} />
          </View>

          {/* Three */}
          <View className="mt-4 px-2 py-2 bg-white mx-6 flex-row justify-between items-center rounded-lg">
            <View className="flex-row items-center">
              <View
                style={{ backgroundColor: "#99ADD6" }}
                className="w-10 h-10 rounded-full items-center flex justify-center"
              >
                <Text
                  className="text-3xl font-medium"
                  style={{ color: "#E6EBF5" }}
                >
                  Y
                </Text>
              </View>
              <Text className="ml-4 text-sm font-medium">Yetunde Kayode</Text>
            </View>
            <RArrow width={30} />
          </View>

          {/* Four */}
          <View className="mt-4 px-2 py-2 bg-white mx-6 flex-row justify-between items-center rounded-lg">
            <View className="flex-row items-center">
              <View
                style={{ backgroundColor: "#99ADD6" }}
                className="w-10 h-10 rounded-full items-center flex justify-center"
              >
                <Text
                  className="text-3xl font-medium"
                  style={{ color: "#E6EBF5" }}
                >
                  Y
                </Text>
              </View>
              <Text className="ml-4 text-sm font-medium">Yetunde Kayode</Text>
            </View>
            <RArrow width={30} />
          </View>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
      onPress={add}
        className="flex justify-center items-center p-4 mx-5 rounded-lg absolute bottom-8 left-0 right-0"
        style={{ backgroundColor: "#039" }}
      >
        <Text className="text-white text-base font-medium">Add Beneficiary</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BeneficiariesScreen;
