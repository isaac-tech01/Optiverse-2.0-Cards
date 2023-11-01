import { View, Text, Platform, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Pen from "../../../../assets/icons/pen.svg";
import Plus from "../../../../assets/icons/plus.svg";
import RArrow from "../../../../assets/icons/arrowR.svg";
import Logo from "../../../../assets/icons/logo.svg"

const ios = Platform.OS === "ios";
const topMargin = ios ? "mt-4" : "mt-10";

const BeneficiaryScreen = () => {
  const navigation = useNavigation();
  const shadowStyle = {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  };
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
            Beneficiary
          </Text>
        </View>

        {/* Name Symbol */}
        <View className="items-center justify-center flex-col mb-4">
          <View
            style={{ backgroundColor: "#99ADD6" }}
            className="w-20 h-20 rounded-full flex items-center justify-center"
          >
            <Text className="text-5xl font-bold text-white">Y</Text>
          </View>
          <Text style={{ color: "#001F5C" }} className="text-xl font-bold">
            Yetunde Kayode
          </Text>
        </View>

        {/* Edit && Add Account */}
        <View className="justify-around items-center flex-row mb-6">
          <TouchableOpacity
            style={
              Platform.OS === "android"
                ? { ...shadowStyle, elevation: 5 }
                : shadowStyle
            }
            className="flex-row p-2 justify-center items-center bg-white w-36 rounded-xl"
          >
            <View
              style={{ backgroundColor: "#0DDE65" }}
              className="w-6 h-6 rounded-full items-center justify-center mx-1"
            >
              <Pen width={20} />
            </View>
            <Text
              className="mx-1 text-sm font-semibold"
              style={{ color: "#003399" }}
            >
              Edit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate("Add_Beneficiary_E")}
            style={
              Platform.OS === "android"
                ? { ...shadowStyle, elevation: 5 }
                : shadowStyle
            }
            className="flex-row p-2 justify-center items-center bg-white w-40 rounded-xl"
          >
            <View
              style={{ backgroundColor: "#0DDE65" }}
              className="w-6 h-6 rounded-full items-center justify-center mx-1"
            >
              <Plus width={20} />
            </View>
            <Text
              className="mx-1 text-sm font-semibold"
              style={{ color: "#003399" }}
            >
              Add Account
            </Text>
          </TouchableOpacity>
        </View>

        {/* Accounts */}
        <View className="px-6">
          <Text className="text-base font-semibold mb-2">NGN Accounts</Text>
          <TouchableOpacity className="flex-row justify-between items-center bg-white rounded-xl px-2 py-3">
            <View className="flex-row justify-center items-center">
                <View className="border-gray-500 border-2 rounded-full">
                    <Logo/>
                </View>
                <View className="flex-col justify-center ml-4">
                    <Text className="text-sm font-bold">Yetunde Kayode</Text>
                    <Text className="text-xs">Optimus Bank</Text>
                    <Text>1000000072</Text>
                </View>
            </View>
            <RArrow/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BeneficiaryScreen;
