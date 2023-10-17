import React from "react";
import { View, FlatList } from "react-native";
import { List, Button, Dialog, Portal, Modal } from "react-native-paper";

interface StateSelectionModalProps {
  visible: boolean;
  hideModal: () => void;
  onSelect: (state: string) => void;
  states: { value: string; name: string }[];
}

const StateModal: React.FC<StateSelectionModalProps> = ({
  visible,
  hideModal,
  onSelect,
  states,
}) => {
  const containerStyle = {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <Dialog.Title>Select a State</Dialog.Title>
        <Dialog.ScrollArea style={{ maxHeight: 250, paddingHorizontal: 0 }}>
          <FlatList
            data={states}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <List.Item
                title={item.name}
                onPress={() => {
                  onSelect(item.name);
                  hideModal();
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

export default StateModal;
