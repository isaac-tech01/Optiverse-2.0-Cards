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
import CardComponent from "../components/card";
import SvgUri from "react-native-svg-uri";
import Eye from "../../assets/icons/eye.svg";
import Eyee from "../../assets/icons/eyee.svg";
import Lock from "../../assets/icons/lock.svg";
import Lockk from "../../assets/icons/lockk.svg";
import Option from "../../assets/icons/options.svg";
import Card from "../../assets/icons/card.svg";
import Activate from "../../assets/icons/activate.svg";
import Change from "../../assets/icons/change.svg";
import Support from "../../assets/icons/support.svg";
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
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#E6EBF5" }}>
      <StatusBar style="dark" />
      <View className={"flex-1" + topMargin}>
        {/* Top Bar */}
        <View
          style={{
            marginLeft: 4,
            marginTop: 2,
            marginBottom: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ChevronLeftIcon size={30} strokeWidth={4} color={"#000A1F"} />
          <Text className="ml-4 text-2xl font-bold">Manage Your Cards</Text>
        </View>

        {/* Card Carousel */}
        <CardComponent showDetails={showDetails} showCard={showCard} />

        {/* Card Icons */}
        <View className="flex-row justify-between items-center mx-10 mb-8">
          <View className="flex-col items-center">
            <TouchableOpacity disabled={showCard} onPress={toggleShowDetails} className="mb-2">
              {see === "eye" ? (
                <Eyee width={70} height={70} />
              ) : (
                <Eye width={70} height={70} />
              )}
            </TouchableOpacity>
            <Text>Show Details</Text>
          </View>

          <View className="flex-col items-center">
            <TouchableOpacity onPress={lockCard} className="mb-2">
              {lock === "lock" ? (
                <Lock width={70} height={70} />
              ) : (
                <Lockk width={70} height={70} />
              )}
            </TouchableOpacity>
            <Text>Lock</Text>
          </View>

          <View className="flex-col items-center">
            <TouchableOpacity
              className="mb-2"
              onPress={() => navigation.navigate("Option")}
            >
              <Option width={70} height={70} />
            </TouchableOpacity>
            <Text>Options</Text>
          </View>
        </View>

        {/* Options */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            className="flex-row items-center mx-10 mb-5"
            onPress={request}
          >
            <Card width={30} height={30} />
            <View className="flex-col ml-4">
              <Text className="text-lg font-bold">Request New Card</Text>
              <Text>Pick up or get a new card delivered to you!</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center mx-10 mb-5"
            onPress={activate}
          >
            <Activate width={30} height={30} />
            <View className="flex-col ml-4">
              <Text className="text-lg font-bold">Activate Card</Text>
              <Text>Ready to start using your new card? click here</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center mx-10 mb-5"
            onPress={change}
          >
            <Change width={30} height={30} />
            <View className="flex-col ml-4">
              <Text className="text-lg font-bold">Change Pin</Text>
              <Text>Change your pin in simple steps!</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center mx-10 mb-5"
            onPress={() => navigation.navigate("Support")}
          >
            <Support width={30} height={30} />
            <View className="flex-col ml-4">
              <Text className="text-lg font-bold">Support</Text>
              <Text>Report a card issue</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CardsScreen;
