import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Switch } from "react-native-paper";
import {
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  EyeIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";

const OptionsCardScreen = () => {
  const navigation = useNavigation();
  const [limit, setLimit] = useState(false);
  const [isSwitchOnW, setIsSwitchOnW] = useState(false);
  const [isSwitchOnA, setIsSwitchOnA] = useState(false);
  const [isSwitchOnP, setIsSwitchOnP] = useState(false);
  const onToggleLimit = () => setLimit(!limit);
  const onToggleSwitchW = () => setIsSwitchOnW(!isSwitchOnW);
  const onToggleSwitchA = () => setIsSwitchOnA(!isSwitchOnA);
  const onToggleSwitchP = () => setIsSwitchOnP(!isSwitchOnP);

  const [range, setRange] = useState(150000);
  const [inputValue, setInputValue] = useState("");
  const formatCurrency = (value: any) => {
    return value.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  // const handleInputChange = (text) => {
  //   const numericValue = parseInt(text.replace(/[^0-9]/g, ""));
  //   setRange(numericValue);
  // };

  const handleInputChange = (text: string) => {
    if (text === "") {
      // Handle the case when the TextInput is empty
      setRange(0);
    } else {
      const numericValue = parseInt(text.replace(/[^0-9]/g, ""));
      setRange(isNaN(numericValue) ? 0 : numericValue);
    }
  };

  const [sliding, setSliding] = useState();

  const styles = {
    line: {
      borderWidth: 0.8, // Height of the line
      borderColor: "#ccd6eb", // Replace with your Tailwind CSS color class
      marginVertical: 10, // Adjust as needed
    },
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#e6ebf5" }}>
      {/* Top Bar*/}
      <View className="flex flex-col px-2 ml-2 mt-1">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={28} strokeWidth={2} color={"#00297A"} />
        </TouchableOpacity>
      </View>
      <View className="ml-4 px-2 mb-4">
        <Text className="text-2xl font-semibold" style={{ color: "#00297A" }}>
          Card Options
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mx-4">
        {/* Monthly Spending Limit */}
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-base font-bold">Monthly Spending Limit</Text>
          <Switch value={limit} color="#039" onValueChange={onToggleLimit} />
        </View>

        {/* Connection */}
        {limit ? (
          <View className="mb-6">
            <View className="bg-white p-4 rounded-lg w-full items-center">
              <View
                className="p-3 w-3/4 rounded-3xl"
                style={{ backgroundColor: "#ccd6eb" }}
              >
                {/* <Text className="text-xl text-center font-semibold">
                  {formatCurrency(range)}
                </Text> */}
                <TextInput
                  className="text-xl text-center"
                  value={range.toString()}
                  onChangeText={(text) => handleInputChange(text)}
                  placeholder="Enter amount"
                  keyboardType="numeric"
                />
              </View>
              {/* <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#039"
                maximumTrackTintColor="#808080"
                thumbTintColor="#039"
                value={0.5}
                onValueChange={(value) => setRange(parseInt(value * 100) + "%")}
                onSlidingStart={() => setSliding("Sliding")}
                onSlidingComplete={() => setSliding("Inactive")}
              /> */}
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={100000}
                maximumValue={2000000}
                step={10000}
                minimumTrackTintColor="#039"
                maximumTrackTintColor="#808080"
                thumbTintColor="#039"
                value={range}
                onValueChange={(value) => setRange(value)}
              />
              <View className="flex-row justify-between items-center w-full">
                <Text style={{ color: "#666" }} className="text-xs font-normal">
                  {formatCurrency(100000)}
                </Text>
                <Text style={{ color: "#666" }} className="text-xs font-normal">
                  {formatCurrency(2000000)}
                </Text>
              </View>
            </View>
          </View>
        ) : null}

        {/* Connection */}
        <View className="mb-6">
          <Text className="text-xs mb-1">Connections</Text>
          <View className="bg-white p-4 rounded-lg">
            <Text className="p-2 text-base" style={{ color: "#000A1F" }}>
              Linked Accounts
            </Text>
            <View style={styles.line} />
            <Text className="p-2 text-base" style={{ color: "#000A1F" }}>
              Link to Loyalty/Rewards
            </Text>
          </View>
        </View>

        {/* Card Lock */}
        <View className="mb-6">
          <Text className="text-base font-bold mb-1">Card Lock</Text>
          <Text className="text-xs" style={{ color: "#666666" }}>
            Customize your card lock preferences or lock everywhere by clicking
            the “lock ” icon on the card page
          </Text>
        </View>

        {/* Card lock by Channels */}
        <View className="mb-6">
          <Text className="text-xs">Connections</Text>
          <View className="bg-white p-4 rounded-lg">
            {/* WEB */}
            <View className="flex-row justify-between items-center">
              <Text className="p-2 text-base" style={{ color: "#000A1F" }}>
                WEB
              </Text>
              <View className="flex-row items-center">
                {isSwitchOnW ? (
                  <Text
                    className="text-sm font-normal"
                    style={{ color: "#666", marginRight: 4 }}
                  >
                    Locked
                  </Text>
                ) : null}
                <Switch
                  className="ml-2"
                  value={isSwitchOnW}
                  color="#039"
                  onValueChange={onToggleSwitchW}
                />
              </View>
            </View>
            <View style={styles.line} />

            {/* ATM */}
            <View className="flex-row justify-between items-center">
              <Text className="p-2 text-base" style={{ color: "#000A1F" }}>
                ATM
              </Text>
              <View className="flex-row items-center">
                {isSwitchOnA ? (
                  <Text
                    className="text-sm font-normal"
                    style={{ color: "#666", marginRight: 4 }}
                  >
                    Locked
                  </Text>
                ) : null}
                <Switch
                  className="ml-2"
                  value={isSwitchOnA}
                  color="#039"
                  onValueChange={onToggleSwitchA}
                />
              </View>
            </View>
            <View style={styles.line} />

            {/* POS */}
            <View className="flex-row justify-between items-center">
              <Text className="p-2 text-base" style={{ color: "#000A1F" }}>
                POS
              </Text>
              <View className="flex-row items-center">
                {isSwitchOnP ? (
                  <Text
                    className="text-sm font-normal"
                    style={{ color: "#666", marginRight: 4 }}
                  >
                    Locked
                  </Text>
                ) : null}
                <Switch
                  className="ml-2"
                  value={isSwitchOnP}
                  color="#039"
                  onValueChange={onToggleSwitchP}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OptionsCardScreen;
