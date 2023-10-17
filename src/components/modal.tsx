import React, { useState } from "react";
import { View, Text } from "react-native";
import { Modal, Portal, Button, Provider as PaperProvider, RadioButton } from "react-native-paper";

interface MyModalProps {
  visible: boolean;
  hideModal: () => void;
  title: string;
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
}

const MyModal: React.FC<MyModalProps> = ({ visible, hideModal, title, options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const containerStyle = {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
  };

  const optionContainer = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  };

  return (
    <Portal>
      <Modal
        style={{ margin: 16 }}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 2 }}>{title}</Text>
        <View>
          <RadioButton.Group
            onValueChange={(newValue) => {
              setSelectedValue(newValue);
              onSelect(newValue);
              hideModal();
            }}
            value={selectedValue}
          >
            {options.map((option) => (
              <View key={option.value} style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={option.value}
                  status={selectedValue === option.value ? "checked" : "unchecked"}
                />
                <Text>{option.label}</Text>
              </View>
            ))}
          </RadioButton.Group>
        </View>
      </Modal>
    </Portal>
  );
};

export default MyModal;
