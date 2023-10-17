import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeftIcon,
  CreditCardIcon,
} from "react-native-heroicons/outline";
import NumberKeypad from "../components/keypad";
import { useNavigation } from "@react-navigation/native";
import SvgUri from "react-native-svg-uri";

const ActivateCardScreen = () => {
  const navigation = useNavigation();
  const [pinDigits, setPinDigits] = useState(["", "", "", ""]); // State to store entered pin digits
  const [currentView, setCurrentView] = useState(0);

  //   useEffect(() => {
  //     // Check if all 4 digits are entered in the current view
  //     const isCompleted = pinDigits.every((digit) => digit !== "");
  //     if (isCompleted && currentView < 2) {
  //       // Move to the next view when the PIN is completed
  //       setCurrentView(currentView + 1);
  //     } else if (isCompleted && currentView === 2) {
  //       // You have completed PIN entry on the last view.
  //       // You can perform further actions here, like sending the PIN to a server or validating it.
  //       // After that, you can navigate to a new page/screen.
  //       console.log("PIN Entered:", pinDigits.join(""));
  //       // Navigate to a new page/screen here
  //       // For example, you can use React Navigation:
  //       // navigation.navigate('NewPage');
  //     }
  //   }, [pinDigits, currentView]);

  useEffect(() => {
    // Check if all 4 digits are entered in the current view
    const isCompleted = pinDigits.every((digit) => digit !== "");
    if (isCompleted && currentView < 2) {
      // Move to the next view when the PIN is completed
      setCurrentView(currentView + 1);
    } else if (isCompleted && currentView === 2) {
      // You have completed PIN entry on the last view.
      // You can perform further actions here, like sending the PIN to a server or validating it.
      //console.log("PIN Entered:", pinDigits.join(""));
      // Navigate to a new page/screen here
      // For example, you can use React Navigation:
      // navigation.navigate('NewPage');
    }
  }, [pinDigits, currentView]);

  //   const handleKeyPress = (digit) => {
  //     // Function to handle key presses from the NumberKeypad
  //     const updatedPinDigits = [...pinDigits];
  //     for (let i = 0; i < updatedPinDigits.length; i++) {
  //       if (updatedPinDigits[i] === "") {
  //         updatedPinDigits[i] = digit.toString();
  //         break;
  //       }
  //     }
  //     setPinDigits(updatedPinDigits);
  //   };

  const handleKeyPress = (digit: number) => {
    // Check if the current view is within the valid range (0 to 2)
    if (currentView >= 0 && currentView <= 2) {
      // Create a copy of the current PIN digits
      const updatedPinDigits = [...pinDigits];

      // Calculate the starting index for the current view
      const startIndex = currentView * 4;

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
  };

  //   const handleKeyPress = (digit) => {
  //     // Check if the current view is within the valid range (0 to 2)
  //     if (currentView >= 0 && currentView <= 2) {
  //       // Create a copy of the current PIN digits
  //       const updatedPinDigits = [...pinDigits];

  //       for (let i = 0; i < updatedPinDigits.length; i++) {
  //         if (updatedPinDigits[i] === "") {
  //           updatedPinDigits[i] = digit.toString();
  //           break;
  //         }
  //       }
  //       setPinDigits(updatedPinDigits);

  //       // Check if all digits in the current view are entered
  //       const isViewCompleted = updatedPinDigits
  //         .slice(currentView * 4, currentView * 4 + 4)
  //         .every((d) => d !== "");

  //       if (isViewCompleted) {
  //         // Move to the next view
  //         setCurrentView(currentView + 1);

  //         // If it's not the last view, clear the input for the current view
  //         if (currentView < 2) {
  //           for (let i = currentView * 4; i < currentView * 4 + 4; i++) {
  //             updatedPinDigits[i] = "";
  //           }
  //           setPinDigits(updatedPinDigits);
  //         }
  //       }
  //     }
  //   };

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
      <View className="flex-row items-center mx-4 mb-8">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={30} strokeWidth={4} color={"#000A1F"} />
        </TouchableOpacity>
        <Text style={{ marginLeft: 16, fontSize: 20, fontWeight: "bold" }}>
          Activate Card
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mb-2">
        {/* Verve Card */}
        <View className="flex-row items-center mx-6 mb-8">
          <Image source={require("../../assets/images/cardS.png")} />
          <Text className="font-semibold text-lg ml-3">
            Verve Card 5677********9876
          </Text>
        </View>

        {/* Enter Card Pin */}
        <View className="flex-col justify-center items-center mt-10">
          {/* View One */}
          {currentView === 0 && (
            <View>
              <Text
                style={{ color: "#000A1F" }}
                className="text-center text-base font-semibold"
              >
                Enter New Card Pin
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
                Confirm New Card Pin
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
                Enter Transaction Pin
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

export default ActivateCardScreen;
