import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ChevronDownIcon, ChevronUpIcon } from "react-native-heroicons/solid";

interface AccordionProps {
  title: string;
  content: string;
  color: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleAccordion}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <Text style={{ fontWeight: "bold" }} className="text-base">{title}</Text>
          {expanded ? (
            <ChevronUpIcon size={24} color="#003399" />
          ) : (
            <ChevronDownIcon size={24} color="#003399" />
          )}
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={{ padding: 16, color:"#000A1F" }}>
          <Text className="text-xs">{content}</Text>
        </View>
      )}
    </View>
  );
};

export default Accordion;
