import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Accordion from "../../components/accordian";
import ImagePicker, { launchImageLibrary } from "react-native-image-picker";
import SvgUri from "react-native-svg-uri";
import { PaperClipIcon } from "react-native-heroicons/solid";

const SupportCardScreen: React.FC = () => {
  const [text, setText] = useState("");
  const areAllInputsFilled = text;
  const navigation = useNavigation();

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  // const ImagePicker = () => {
  //   let options = {
  //     storageOptions: {
  //       path: "image",
  //     },
  //   };
  //   launchImageLibrary(options, (response: ImagePickerResponse) => {
  //     console.log(response);
  //   });
  // };

  // const handleImagePicker = () => {
  //   const options = {
  //     title: "Select an Image",
  //     storageOptions: {
  //       skipBackup: true,
  //       path: "images",
  //     },
  //   };

  //   launchImageLibrary(options, (response) => {
  //     if (response.didCancel) {
  //       console.log("User cancelled image picker");
  //     } else if (response.error) {
  //       console.error("ImagePicker Error: ", response.error);
  //     } else if (response.customButton) {
  //       console.log("User tapped a custom button: ", response.customButton);
  //     } else {
  //       // You can use response.uri to display the selected image
  //       console.log("Image URI: ", response.uri);

  //       // You can also use response.data to get image data (base64 format) if needed
  //       // console.log('Image Data: ', response.data);
  //     }
  //   });
  // };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#E6EBF5" }}>
      {/* Top Bar*/}
      <View className="flex flex-col px-2 ml-2 mt-1">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={28} strokeWidth={2} color={"#00297A"} />
        </TouchableOpacity>
      </View>
      <View className="ml-4 px-2 mb-4">
        <Text className="text-2xl font-semibold" style={{ color: "#00297A" }}>
          Support
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mb-2">
        {/* FAQ'S */}
        <View className="flex-col mx-4 mb-2">
          <View className="rounded-lg bg-white px-2 py-1 mb-2">
            <Accordion
              title="My card is Damaged, Stolen or Lost"
              content="Go to Cards - Request Card to apply for a new card and invalidate the old one. For added security, freeze  stolen or lost card to immediately disable it by navigating to Cards -Lock"
              color={""}
            />
          </View>
          <View className="rounded-lg bg-white px-2 py-1 mb-2">
            <Accordion
              title="My card has been Retracted"
              content=" My card is Damaged, Stolen or Lost
            My card has been Retracted
           Go to Cards - Request Card to apply for a new card and invalidate the old one. 
           Suspected Fraud with my card
           Card Pin not working"
              color="#000"
            />
          </View>
          <View className="rounded-lg bg-white px-2 py-1 mb-2">
            <Accordion
              title="Suspected Fraud with my card"
              content="Go to Cards - Request Card to apply for a new card and invalidate the old one. For added security, freeze  stolen or lost card to immediately disable it by navigating to Cards -Lock "
              color="#000"
            />
          </View>
          <View className="rounded-lg bg-white px-2 py-1 mb-2">
            <Accordion
              title="Card Pin not working"
              content="Go to Cards - Request Card to apply for a new card and invalidate the old one. For added security, freeze  stolen or lost card to immediately disable it by navigating to Cards -Lock "
              color="#000"
            />
          </View>
        </View>

        {/* Text Area */}
        <View className="flex-col mx-4 mb-2">
          <Text
            className="text-base font-bold mb-2"
            style={{ color: "#000A1F" }}
          >
            Send us a message:
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={4} // You can adjust the number of visible lines
            onChangeText={handleTextChange}
            value={text}
            placeholder="Type here..."
            className="bg-white rounded-lg p-4 text-base min-h-200"
            style={{ height: 147 }}
          />
        </View>

        {/* Attachment */}
        <TouchableOpacity
          className="flex-row items-center px-4 py-5 mb-4 mx-4 bg-white rounded-xl"
          // onPress={() => ImagePicker()}
        >
          <PaperClipIcon size={22} strokeWidth={2} color={"#000A1F"} />
          <Text className="ml-2 text-base">Attach a file</Text>
        </TouchableOpacity>

        {/* Button */}
        <TouchableOpacity
          disabled={!areAllInputsFilled}
          className="mx-4 px-3 py-4 items-center justify-center rounded-xl"
          style={
            areAllInputsFilled ? styles.enabledButton : styles.disabledButton
          }
        >
          <Text className="text-white text-base font-bold">Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  enabledButton: {
    // Style for the enabled button
    backgroundColor: "#039",
  },
  disabledButton: {
    // Style for the disabled button
    backgroundColor: "#99ADD6",
  },
});

export default SupportCardScreen;
