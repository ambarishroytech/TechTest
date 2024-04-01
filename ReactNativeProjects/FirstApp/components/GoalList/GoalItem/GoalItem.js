import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = (props) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={props.onDelete}
				android_ripple={{ color: '#dddddd' }}
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		marginVertical: 10,
		backgroundColor: 'purple',
		borderColor: 'black',
		borderWidth: 1,
	},
	goalText: {
		padding: 10,
		fontSize: 18,
		color: 'white',
	},
	pressedItem: {
		opacity: 0.5,
	},
});
