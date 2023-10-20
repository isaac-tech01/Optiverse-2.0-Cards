import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { Modal, Portal, PaperProvider } from "react-native-paper";
import MyModal from "../components/modal";
import SvgUri from "react-native-svg-uri";
import DeliveryComponent from "../components/delivery";
import { nigeriaStates } from "../constants/nigeria-states";
import { localGovernments } from "../constants/local-government";
import StateModal from "../components/stateModal";
import LGAModal from "../components/lgaModal";

const RequestCardScreen = () => {
  const navigation = useNavigation();
  const containerStyle = {
    backgroundColor: "#E6EBF5",
    padding: 14,
    borderRadius: 10,
  };
  const [modalVisibility, setModalVisibility] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  });

  const [selectedValue, setSelectedValue] = useState({
    modal1: "",
    modal2: "",
    modal3: "",
    modal4: "",
  });

  const showModal = (modalName: string) => {
    setModalVisibility({ ...modalVisibility, [modalName]: true });
  };

  const hideModal = (modalName: string) => {
    setModalVisibility({ ...modalVisibility, [modalName]: false });
  };

  const handleSelect = (modalName: string, value: string) => {
    setSelectedValue({ ...selectedValue, [modalName]: value });
    hideModal(modalName);
  };

  const modals: any = [
    {
      name: "Card Type",
      title: "Select Card Type",
      options: [{ label: "Verve Card", value: "Verve Card" }],
    },
    {
      name: "Account to Link",
      title: "Select Account",
      options: [
        { label: "Savings 200034167", value: "Savings 200034167" },
        { label: "Current 100034167", value: "Current 100034167" },
      ],
    },
    {
      name: "Account to charge for issuance",
      title: "Select Account",
      options: [
        { label: "Savings 200034167", value: "Savings 200034167" },
        { label: "Current 100034167", value: "Current 100034167" },
      ],
    },
    {
      name: "Reason",
      title: "Select Reason",
      options: [
        { label: "New Card", value: "New Card" },
        { label: "Suspected Fraud", value: "Suspected Fraud" },
        { label: "Stolen Card", value: "Stolen Card" },
        { label: "Lost Card", value: "Lost Card" },
        { label: "Expired Card", value: "Expired Card" },
        { label: "Damaged Card", value: "Damaged Card" },
        { label: "Retracted Card", value: "Retracted Card" },
      ],
    },
  ];

  // Separate state for modal5
  const [modal5Visibility, setModal5Visibility] = useState(false);
  const [selectedValueModal5, setSelectedValueModal5] = useState("");

  const showModal5 = () => {
    setModal5Visibility(true);
  };

  const hideModal5 = () => {
    setModal5Visibility(false);
  };

  const handleSelectModal5 = (value: string) => {
    setSelectedValueModal5(value);
    hideModal5();
  };

  const modal5 = {
    name: "Pick-up Location",
    title: "Select pick-up location",
    options: [
      { label: "55 Bishop Oluwole, VI", value: "55 Bishop Oluwole, VI" },
      { label: "Sanusi Fafunwa, VI", value: "Sanusi Fafunwa, VI" },
      {
        label: "273 Herbert Macaulay, Yaba",
        value: "55 Herbert Macaulay, Yaba",
      },
    ],
  };

  const [isStateModalVisible, setStateModalVisible] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const showStateModal = () => {
    setStateModalVisible(true);
  };
  const hideStateModal = () => {
    setStateModalVisible(false);
  };
  const handleStateSelect = (selectedState: React.SetStateAction<string>) => {
    console.log(selectedState);
    //console.log("localGovernments:", selectedLga);
    setSelectedState(selectedState); // Update the selected state
    //setLgaModalVisible(true);
    hideStateModal();
  };

  const [isLgaModalVisible, setLgaModalVisible] = useState(false);
  const [selectedLga, setSelectedLga] = useState("");
  const showLgaModal = () => {
    setLgaModalVisible(true);
  };

  const hideLgaModal = () => {
    setLgaModalVisible(false);
  };
  const handleLgaSelect = (selectedLga: React.SetStateAction<string>) => {
    console.log(selectedLga);
    setSelectedLga(selectedLga);
    hideLgaModal();
  };

  const [selectedOption, setSelectedOption] = useState("Branch Pick-up");

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
  };

  const [isBranchPickupActive, setBranchPickupActive] = useState(true);
  const togglePickupOption = () => {
    setBranchPickupActive(!isBranchPickupActive);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E6EBF5" }}>
      <PaperProvider>
        {/* Top Bar */}
        <View
          style={{
            margin: 16,
            marginBottom: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={30} strokeWidth={4} color={"#000A1F"} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 16, fontSize: 20, fontWeight: "bold" }}>
            Request Card
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="mb-4">
          {/* Top Pay */}
          <View
            style={{
              backgroundColor: "#039",
              margin: 16,
              marginBottom: 16,
              padding: 12,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Issuance Fee:
            </Text>
            <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
              N1,000 + VAT (N75)
            </Text>
          </View>

          {/* Inputs */}
          <View style={{ margin: 16 }}>
            {modals.map((modal) => (
              <View key={modal.name} style={{ marginBottom: 24 }}>
                <Text
                  style={{
                    marginBottom: 8,
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#000A1F",
                  }}
                >
                  {modal.name}
                </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 16,
                    borderRadius: 12,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    onPress={() => showModal(modal.name)}
                  >
                    {selectedValue[modal.name] ? (
                      <Text>{selectedValue[modal.name]}</Text>
                    ) : (
                      <Text>{modal.title}</Text>
                    )}
                    <SvgUri
                      width="30"
                      height="30"
                      source={require("../../assets/icons/dot.svg")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Modal for modal5 */}
          <View className="m-4 bg-white p-4 rounded-xl">
            <View
              className="flex-row justify-between items-center"
              style={{
                paddingVertical: 8, // Adjust the spacing as needed
                borderBottomWidth: 2, // Border width for the line
                borderBottomColor: "#003399",
              }}
            >
              <TouchableOpacity onPress={togglePickupOption}>
                <Text
                  className="text-base font-bold"
                  style={[
                    isBranchPickupActive
                      ? styles.activeText
                      : styles.inactiveText,
                  ]}
                >
                  Branch Pick-up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={togglePickupOption}>
                <Text
                  className="text-base font-bold"
                  style={[
                    !isBranchPickupActive
                      ? styles.activeText
                      : styles.inactiveText,
                  ]}
                >
                  Home Delivery
                </Text>
              </TouchableOpacity>
            </View>

            {/* Show the Touchable Opacity for Delivery */}
            {isBranchPickupActive && (
              <View style={{ marginBottom: 24 }}>
                <Text
                  className="mb-2 text-base font-bold"
                  style={{ color: "#000A1F" }}
                >
                  {modal5.name}
                </Text>
                <View>
                  <TouchableOpacity
                    className="flex-row justify-between items-center"
                    onPress={showModal5}
                    style={containerStyle}
                  >
                    {selectedValueModal5 ? (
                      <Text>{selectedValueModal5}</Text>
                    ) : (
                      <Text>{modal5.title}</Text>
                    )}
                    <SvgUri
                      width="30"
                      height="30"
                      source={require("../../assets/icons/dot.svg")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* Show the Touchable Opacity for Delivery */}
            {!isBranchPickupActive && (
              <View style={{ marginBottom: 24 }}>
                <Text
                  className="mt-1 mb-2 text-xs text-right"
                  style={{ color: "#000A1F" }}
                >
                  Identity will be verified on delivery.{"\n"}
                  Ensure you have a valid means of identification
                </Text>
                <View className="flex-col">
                  {/* House Number */}
                  <View className="mb-6">
                    <Text className="text-base font-semibold mb-1">
                      House Number
                    </Text>
                    <View
                      className="flex-row justify-between items-center"
                      style={containerStyle}
                    >
                      <TextInput
                        className="text-sm text-center space-y-1"
                        placeholder="Enter your house number"
                      />
                    </View>
                  </View>

                  {/* Street Name */}
                  <View className="mb-6">
                    <Text className="text-base font-semibold mb-1">
                      Street Name
                    </Text>
                    <View
                      className="flex-row justify-between items-center"
                      style={containerStyle}
                    >
                      <TextInput
                        className="text-sm text-center"
                        placeholder="Enter your street name"
                      />
                    </View>
                  </View>
                  {/* State */}
                  <View className="mb-6">
                    <Text className="text-base font-semibold mb-1">State</Text>
                    <View>
                      <TouchableOpacity
                        className="flex-row justify-between items-center"
                        onPress={showStateModal}
                        style={containerStyle}
                      >
                        <Text>{selectedState || "Select State"}</Text>
                        <SvgUri
                          width="30"
                          height="30"
                          source={require("../../assets/icons/dot.svg")}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* LGA */}
                  <View className="mb-6">
                    <Text className="text-base font-semibold mb-1">LGA</Text>
                    <View>
                      <TouchableOpacity
                        className="flex-row justify-between items-center"
                        onPress={showLgaModal}
                        style={containerStyle}
                      >
                        <Text>{selectedLga || "Select LGA"}</Text>
                        <SvgUri
                          width="30"
                          height="30"
                          source={require("../../assets/icons/dot.svg")}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View className="mb-6 flex-row justify-between items-center">
                    <Text style={{color: "#999999"}} className="text-xs">Delivery Fee</Text>
                    <Text className="text-xs">0</Text>
                  </View>

                  <View className="flex-row justify-between items-center">
                    <Text style={{color: "#999999"}} className="text-xs">VAT</Text>
                    <Text className="text-xs">0</Text>
                  </View>
                </View>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={{ backgroundColor: "#039" }}
            className="flex-1 justify-center items-center mx-4 rounded-lg py-4 px-3"
          >
            <Text className="text-white text-lg font-bold">Continue</Text>
          </TouchableOpacity>

          {modals.map((modal) => (
            <MyModal
              key={modal.name}
              visible={modalVisibility[modal.name]}
              hideModal={() => hideModal(modal.name)}
              title={modal.title}
              options={modal.options}
              onSelect={(value) => handleSelect(modal.name, value)}
            />
          ))}

          {/* Modal for modal5 */}
          <MyModal
            visible={modal5Visibility}
            hideModal={hideModal5}
            title={modal5.title}
            options={modal5.options}
            onSelect={handleSelectModal5}
          />

          {/* Render the StateSelectionModal */}
          <StateModal
            visible={isStateModalVisible}
            hideModal={hideStateModal}
            onSelect={handleStateSelect}
            states={nigeriaStates}
          />

          {/* Show the LGA selection modal */}
          <LGAModal
            visible={isLgaModalVisible}
            hideModal={hideLgaModal}
            lgas={localGovernments}
            onSelect={handleLgaSelect}
            selectedState={selectedState} // Pass the selected state
            selectedLga={selectedLga} // Pass the selected LGA
          />
        </ScrollView>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default RequestCardScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  option: {
    paddingVertical: 8,
    borderBottomWidth: 2,
  },
  selectedOption: {
    borderBottomColor: "#003399",
  },
  optionText: {
    color: "black", // Default text color
  },
  selectedOptionText: {
    color: "#003399", // Text color when selected
    fontWeight: "bold",
  },
  activeText: {
    color: "#003399",
  },
  inactiveText: {
    color: "#000A1F",
  },
});
