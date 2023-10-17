import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Modal, Portal, Provider as PaperProvider } from "react-native-paper";
import SvgUri from "react-native-svg-uri";
import MyModal from "./modal";

const DeliveryComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(""); // Separate state for modal 1

  const containerStyle = {
    backgroundColor: "#E6EBF5",
    padding: 14,
    borderRadius: 10,
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handleSelect = (value: string) => {
    // Handle selection for modal 1
    setSelectedValue(value);
    // You can perform actions based on the selected value here
  };

  return (
    <SafeAreaView className="flex-1 mx-4 bg-white rounded-xl h-auto">
      <PaperProvider>
        <View style={{ padding: 4 }}>
          <Text>Pick-up Location</Text>
          <TouchableOpacity
            className="flex-row justify-between items-center"
            onPress={showModal}
            style={containerStyle}
          >
            {selectedValue ? (
              <Text>{selectedValue}</Text>
            ) : (
              <Text>Select pick-up location</Text>
            )}
            <SvgUri
              width={30}
              height={30}
              source={require("../../assets/icons/dot.svg")}
            />
          </TouchableOpacity>
        </View>

        <MyModal
          visible={modalVisible}
          hideModal={hideModal}
          title="Select Card Type"
          options={[
            { label: "55 Bishop Oluwole, VI", value: "55 Bishop Oluwole, VI" },
            { label: "Sanusi Fafunwa, VI", value: "Sanusi Fafunwa, VI" },
            { label: "273 Herbert Macaulay, Yaba", value: "55 Herbert Macaulay, Yaba" }
          ]}
          onSelect={handleSelect}
        />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default DeliveryComponent;
