import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  const handlePress = () => {
    onDeleteItem(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={handlePress}
        //android
        android_ripple={{ color: "#210644" }}
        //IOs
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
