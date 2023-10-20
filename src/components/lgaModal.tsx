import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { List, Button, Dialog, Portal, Modal } from "react-native-paper";

interface LGAModalProps {
  visible: boolean;
  hideModal: () => void;
  onSelect: any;
  selectedState: string; // The selected state name
  selectedLga: string; // The selected state name
  lgas: { [key: string]: string[] }; // Object with states as keys and arrays of LGAs as values
}

const LGAModal: React.FC<LGAModalProps> = ({
  visible,
  hideModal,
  lgas,
  onSelect,
  selectedState,
}) => {
  const [selectedLga, setSelectedLga] = useState<string>("");
  const containerStyle = {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
  };

  // Filter LGAs based on the selected state
  const filteredLGAs = selectedState ? lgas[selectedState] || [] : [];
  //const filteredLGAs = lgas[selectedState] || [];

  return (
    <Portal>
      <Modal
        style={{ margin: 16 }}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <Dialog.Title>Select a Local Government Area</Dialog.Title>
        <Dialog.ScrollArea style={{ maxHeight: 250, paddingHorizontal: 0 }}>
          <FlatList
            data={filteredLGAs}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <List.Item
                title={item}
                onPress={() => {
                  onSelect(item); // Notify the parent component about the selected LGA
                  hideModal(); // Close the modal
                }}
              />
            )}
          />
        </Dialog.ScrollArea>
        <Dialog.Actions>
          <Button onPress={hideModal}>Cancel</Button>
        </Dialog.Actions>
      </Modal>
    </Portal>
  );
};

export default LGAModal;
