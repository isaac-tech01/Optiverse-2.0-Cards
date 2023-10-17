import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BackspaceIcon } from 'react-native-heroicons/outline'; // You may need to install this library for the delete icon

interface NumberKeypadProps {
  onKeyPress: (number: number) => void;
  onDeletePress: () => void;
}

const NumberKeypad: React.FC<NumberKeypadProps> = ({ onKeyPress, onDeletePress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {[1, 2, 3].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => onKeyPress(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {[4, 5, 6].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => onKeyPress(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {[7, 8, 9].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => onKeyPress(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onKeyPress(0)}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-end justify-end" style={styles.button} onPress={onDeletePress}>
          <BackspaceIcon name="backspace" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    margin: 36,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#CCD6EB',
  },
  buttonText: {
    color: '#000A1F',
    fontSize: 20,
  },
});

export default NumberKeypad;
