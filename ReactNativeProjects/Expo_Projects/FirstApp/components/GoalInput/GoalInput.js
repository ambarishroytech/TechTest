import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState({ text: '', id: '' });

	const goalInputHandler = (enteredText) => {
		setEnteredGoal((currentText) => {
			return { text: enteredText, id: Math.random().toString() };
		});
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal((currentText) => {
			return { text: '', id: '' };
		});
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder='Your course goal'
				style={styles.textInput}
				onChangeText={goalInputHandler}
				value={enteredGoal.text}
			/>
			<Button
				title='Add'
				onPress={addGoalHandler}
			/>
		</View>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
	},
	textInput: {
		borderColor: 'grey',
		borderWidth: 1,
		padding: 10,
		margin: 10,
		width: '70%',
	},
});
