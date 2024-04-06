import { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import GoalInput from './components/GoalInput/GoalInput';
import GoalList from './components/GoalList/GoalList';

const App = () => {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (enteredGoal) => {
		setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
	};

	const deleteGoalHandle = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<GoalList
				courseGoals={courseGoals}
				onDeleteItem={deleteGoalHandle}
			/>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
		backgroundColor: '#ffffff',
	},
});
