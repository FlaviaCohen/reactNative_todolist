import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);

  const addGoalHandler = (value) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: value, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (value) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== value)
    );
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={toggleModal} />
        {modal && (
          <GoalInput
            pressHandler={addGoalHandler}
            toggleModal={toggleModal}
            visible={modal}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(item) => {
              return (
                <GoalItem
                  text={item.item.text}
                  id={item.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
    paddingTop: 24,
  },
});

export default App;
