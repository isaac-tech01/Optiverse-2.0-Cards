import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  EyeIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import CardComponent from "../components/card";
import SvgUri from "react-native-svg-uri";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

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
  return (
    <SafeAreaView className="flex-1">
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
        <CardComponent />

        {/* Card Icons */}
        <View className="flex-row justify-between items-center mx-10 mb-8">
          <View className="flex-col items-center">
            <TouchableOpacity className="mb-2">
              <SvgUri
                width="70"
                height="70"
                source={require("../../assets/icons/eye.svg")}
              />
            </TouchableOpacity>
            <Text>Show Details</Text>
          </View>

          <View className="flex-col items-center">
            <TouchableOpacity className="mb-2">
              <SvgUri
                width="70"
                height="70"
                source={require("../../assets/icons/lock.svg")}
              />
            </TouchableOpacity>
            <Text>Lock</Text>
          </View>

          <View className="flex-col items-center">
            <TouchableOpacity
              className="mb-2"
              onPress={() => navigation.navigate("Option")}
            >
              <SvgUri
                width="70"
                height="70"
                source={require("../../assets/icons/options.svg")}
              />
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
            {/* <CreditCardIcon size={30} strokeWidth={2} color={"#003399"}/> */}
            <SvgUri
              width="30"
              height="30"
              source={require("../../assets/icons/card.svg")}
            />
            <View className="flex-col ml-4">
              <Text className="text-lg font-bold">Request New Card</Text>
              <Text>Pick up or get a new card delivered to you!</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center mx-10 mb-5"
            onPress={activate}
          >
            {/* <Cog8ToothIcon size={30} strokeWidth={2} color={"#003399"} /> */}
            <SvgUri
              width="30"
              height="30"
              source={require("../../assets/icons/card.svg")}
            />
            <View className="flex-col ml-4">
              <Text className="text-lg font-bold">Activate Card</Text>
              <Text>Ready to start using your new card? click here</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center mx-10 mb-5">
            {/* <ArrowPathIcon size={30} strokeWidth={2} color={"#003399"} /> */}
            <SvgUri
              width="30"
              height="30"
              source={require("../../assets/icons/change.svg")}
            />
            <View className="flex-col ml-4">
              <Text className="text-lg font-bold">Change Pin</Text>
              <Text>Change your pin in simple steps!</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center mx-10 mb-5"
            onPress={() => navigation.navigate("Support")}
          >
            {/* <PhoneIcon size={30} strokeWidth={2} color={"#003399"} /> */}
            <SvgUri
              width="30"
              height="30"
              source={require("../../assets/icons/support.svg")}
            />
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
