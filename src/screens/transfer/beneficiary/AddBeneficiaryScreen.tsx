import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import DArrow from "../../../../assets/icons/arrowD.svg";
import Bank from "../../../../assets/icons/bank.svg";

const ios = Platform.OS === "ios";
const topMargin = ios ? "mt-4" : "mt-10";

const AddBeneficiaryScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#E6EBF5" }}>
      <StatusBar style="dark" />
      <View className={"flex-1" + topMargin}>
        {/* Top Bar */}
        <View className="flex flex-col px-2 ml-2 mt-1">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={28} strokeWidth={2} color={"#00297A"} />
          </TouchableOpacity>
        </View>
        <View className="ml-4 px-2 mb-4">
          <Text className="text-2xl font-semibold" style={{ color: "#00297A" }}>
            Add Beneficiary
          </Text>
        </View>

        {/* Form */}
        <View className="mx-6">
          {/* Name */}
          <View className="flex flex-col mb-6">
            <Text className="mb-2">Beneficiary Name</Text>
            <TextInput
              placeholder="Full Name"
              className="p-4 bg-white rounded-xl"
            />
          </View>

          {/* Bank */}
          <View className="flex flex-col mb-6">
            <Text className="mb-2">Bank</Text>
            <View className="flex-row justify-between items-center bg-white p-4 rounded-xl">
              <View className="flex-row items-center">
                <View
                  className="items-center justify-center w-10 h-10 border-2 rounded-full p-2"
                  style={{ borderColor: "#E6EBF5" }}
                >
                  <Bank width={30} />
                </View>
                <Text className="ml-2">Select Bank</Text>
              </View>
              <TouchableOpacity>
                <DArrow />
              </TouchableOpacity>
            </View>
          </View>

          {/* Account Number */}
          <View className="flex flex-col mb-6">
            <Text className="mb-2">Account number</Text>
            <TextInput
              placeholder="0123456789"
              className="p-4 bg-white rounded-xl"
            />
          </View>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        className="flex justify-center items-center p-4 mx-5 rounded-lg absolute bottom-8 left-0 right-0"
        style={{ backgroundColor: "#039" }}
      >
        <Text className="text-white text-base font-medium">Add Beneficiary</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddBeneficiaryScreen;
