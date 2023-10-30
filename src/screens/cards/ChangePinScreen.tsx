import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeftIcon,
  CreditCardIcon,
} from "react-native-heroicons/outline";
import NumberKeypad from "../../components/keypad";
import { useNavigation } from "@react-navigation/native";
import SvgUri from "react-native-svg-uri";
import Verve from "../../../assets/icons/verve.svg";

const ChangePinScreen = () => {
  const navigation = useNavigation();
  const [pinDigits, setPinDigits] = useState(["", "", "", ""]); // State to store entered pin digits
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    // Check if all 4 digits are entered in the current view
    const isCompleted = pinDigits.every((digit) => digit !== "");
    if (isCompleted && currentView < 2) {
      // Move to the next view when the PIN is completed
      setCurrentView(currentView + 1);
    } else if (isCompleted && currentView === 2) {
    }
  }, [pinDigits, currentView]);

  // const handleKeyPress = (digit: number) => {
  //   // Check if the current view is within the valid range (0 to 2)
  //   if (currentView >= 0 && currentView <= 2) {
  //     // Create a copy of the current PIN digits
  //     const updatedPinDigits = [...pinDigits];

  //     // Calculate the starting index for the current view
  //     const startIndex = currentView * 4;

  //     for (let i = startIndex; i < startIndex + 4; i++) {
  //       if (updatedPinDigits[i] === "") {
  //         updatedPinDigits[i] = digit.toString();
  //         break;
  //       }
  //     }
  //     setPinDigits(updatedPinDigits);

  //     // Check if all digits in the current view are entered
  //     const isViewCompleted = updatedPinDigits
  //       .slice(startIndex, startIndex + 4)
  //       .every((d) => d !== "");

  //     if (isViewCompleted) {
  //       // Move to the next view
  //       if (currentView < 2) {
  //         setCurrentView(currentView + 1);

  //         // Clear input for the current view
  //         for (let i = startIndex; i < startIndex + 4; i++) {
  //           updatedPinDigits[i] = "";
  //         }
  //         setPinDigits(updatedPinDigits);
  //       }
  //     }
  //   }
  // };

  const handleKeyPress = (digit: number) => {
    // Check if the current view is within the valid range (0 to 2)
    if (currentView >= 0 && currentView <= 2) {
      // Calculate the starting index for the current view
      const startIndex = currentView * 4;

      if (pinDigits[startIndex + 3] === "") {
        // If the last slot in the current view is empty, allow input
        const updatedPinDigits = [...pinDigits];
        for (let i = startIndex; i < startIndex + 4; i++) {
          if (updatedPinDigits[i] === "") {
            updatedPinDigits[i] = digit.toString();
            break;
          }
        }
        setPinDigits(updatedPinDigits);

        // Check if all digits in the current view are entered
        const isViewCompleted = updatedPinDigits
          .slice(startIndex, startIndex + 4)
          .every((d) => d !== "");

        if (isViewCompleted) {
          // Move to the next view
          if (currentView < 2) {
            setCurrentView(currentView + 1);

            // Clear input for the current view
            for (let i = startIndex; i < startIndex + 4; i++) {
              updatedPinDigits[i] = "";
            }
            setPinDigits(updatedPinDigits);
          }
        }
      }
    }
  };

  const handleDeletePress = () => {
    // Function to handle delete button press from the NumberKeypad
    const updatedPinDigits = [...pinDigits];
    for (let i = updatedPinDigits.length - 1; i >= 0; i--) {
      if (updatedPinDigits[i] !== "") {
        updatedPinDigits[i] = "";
        break;
      }
    }
    setPinDigits(updatedPinDigits);

    // Move back to the previous view when deleting in the first view
    if (currentView > 0) {
      setCurrentView(currentView - 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E6EBF5" }}>
      {/* Top Bar */}
      <View className="flex flex-col px-2 ml-2 mt-1">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={28} strokeWidth={2} color={"#00297A"} />
        </TouchableOpacity>
      </View>
      <View className="ml-4 px-2 mb-4">
        <Text className="text-2xl font-semibold" style={{ color: "#00297A" }}>
          Change Pin
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mb-2">
        {/* Verve Card */}
        <View className="flex-row items-center mx-6">
          <Verve width={40} height={40} />
          <Text className="font-semibold text-lg ml-3">
            Verve Card 5677********9876
          </Text>
        </View>

        {/* Enter Card Pin */}
        <View className="flex-col justify-center items-center mt-6">
          {/* View One */}
          {currentView === 0 && (
            <View>
              <Text
                style={{ color: "#000A1F" }}
                className="text-center text-base font-semibold"
              >
                Enter Old Pin
              </Text>
              {/* Display Pin Digits */}
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                {pinDigits.slice(0, 4).map((digit, index) => (
                  <View
                    key={index}
                    className="w-14 h-12 m-4 items-center justify-center bg-white rounded-lg"
                  >
                    <Text>{digit}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* View Two */}
          {currentView === 1 && (
            <View>
              <Text
                style={{ color: "#000A1F" }}
                className="text-center text-base font-semibold"
              >
                Enter New Pin
              </Text>
              {/* Display Pin Digits */}
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                {pinDigits.slice(4, 8).map((digit, index) => (
                  <View
                    key={index}
                    className="w-14 h-12 m-4 items-center justify-center bg-white rounded-lg"
                  >
                    <Text>{digit}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* View Three */}
          {currentView === 2 && (
            <View>
              <Text
                style={{ color: "#000A1F" }}
                className="text-center text-base font-semibold"
              >
                Confirm New Pin
              </Text>
              {/* Display Pin Digits */}
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                {pinDigits.slice(8, 12).map((digit, index) => (
                  <View
                    key={index}
                    className="w-14 h-12 m-4 items-center justify-center bg-white rounded-lg"
                  >
                    <Text>{digit}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Render the NumberKeypad and pass the callback functions */}
          <NumberKeypad
            onKeyPress={handleKeyPress}
            onDeletePress={handleDeletePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePinScreen;
