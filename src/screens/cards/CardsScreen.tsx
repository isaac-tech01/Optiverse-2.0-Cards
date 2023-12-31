import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  EyeIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import CardComponent from "../../components/card";
import Eye from "../../../assets/icons/eye.svg";
import Eyee from "../../../assets/icons/eyee.svg";
import Lock from "../../../assets/icons/lock.svg";
import Lockk from "../../../assets/icons/lockk.svg";
import Option from "../../../assets/icons/options.svg";
import Card from "../../../assets/icons/card.svg";
import Activate from "../../../assets/icons/activate.svg";
import Change from "../../../assets/icons/change.svg";
import Support from "../../../assets/icons/support.svg";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const ios = Platform.OS === "ios";
const topMargin = ios ? "mt-4" : "mt-10";

const CardsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const request = () => {
    navigation.navigate("Request");
  };
  const activate = () => {
    navigation.navigate("Activate");
  };
  const change = () => {
    navigation.navigate("Change");
  };
  const [showDetails, setShowDetails] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [see, setSee] = useState("see");
  const [lock, setLock] = useState("lock");

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
    // Toggle between two different icon names
    const newIconName = see === "eye" ? "anotherIcon" : "eye";
    setSee(newIconName);
  };

  const lockCard = () => {
    setShowCard(!showCard);

    const Lockk = lock === "lock" ? "anotherIcon" : "lock";
    setLock(Lockk);
  };

  const Line = {
    borderColor: "#CCD6EB",
    borderWidth: 0.6,
    marginBottom: 6,
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
          <Text className="text-2xl font-semibold" style={{color: "#00297A"}}>Manage Your Cards</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="mb-20">
          {/* Card Carousel */}
          <CardComponent showDetails={showDetails} showCard={showCard} />

          {/* Card Icons */}
          <View className="flex-row justify-between items-center mx-10 mb-8">
            <View className="flex-col items-center">
              <TouchableOpacity
                disabled={showCard}
                onPress={toggleShowDetails}
                className="mb-2"
              >
                {see === "eye" ? (
                  <Eyee width={55} height={55} />
                ) : (
                  <Eye width={55} height={55} />
                )}
              </TouchableOpacity>
              <Text>Show Details</Text>
            </View>

            <View className="flex-col items-center">
              <TouchableOpacity onPress={lockCard} className="mb-2">
                {lock === "lock" ? (
                  <Lock width={55} height={55} />
                ) : (
                  <Lockk width={55} height={55} />
                )}
              </TouchableOpacity>
              <Text>Lock</Text>
            </View>

            <View className="flex-col items-center">
              <TouchableOpacity
                className="mb-2"
                onPress={() => navigation.navigate("Option")}
              >
                <Option width={55} height={55} />
              </TouchableOpacity>
              <Text>Options</Text>
            </View>
          </View>

          {/* Options */}
          <View className="mb-4">
            <TouchableOpacity
              className="flex-row items-center mx-6 mb-5 px-2 py-3 rounded-xl bg-white"
              onPress={request}
            >
              <Card width={30} height={30} />
              <View className="flex-col ml-4">
                <Text className="text-sm font-bold">Request New Card</Text>
                <Text className="text-xs">
                  Pick up or get a new card delivered to you!
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center mx-6 mb-5 px-2 py-3 rounded-xl bg-white"
              onPress={activate}
            >
              <Activate width={30} height={30} />
              <View className="flex-col ml-4">
                <Text className="text-sm font-bold">Activate Card</Text>
                <Text className="text-xs">
                  Ready to start using your new card? click here
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center mx-6 mb-5 px-2 py-3 rounded-xl bg-white"
              onPress={change}
            >
              <Change width={30} height={30} />
              <View className="flex-col ml-4">
                <Text className="text-sm font-bold">Change Pin</Text>
                <Text className="text-xs">
                  Change your pin in simple steps!
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center mx-6 mb-5 px-2 py-3 rounded-xl bg-white"
              onPress={() => navigation.navigate("Support")}
            >
              <Support width={30} height={30} />
              <View className="flex-col ml-4">
                <Text className="text-sm font-bold">Support</Text>
                <Text className="text-xs">Report a card issue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CardsScreen;
