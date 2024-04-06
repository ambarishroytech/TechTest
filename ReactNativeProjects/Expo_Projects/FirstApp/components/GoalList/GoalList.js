import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './GoalItem/GoalItem';

const GoalList = (props) => {
	return (
		<View style={styles.goalsContainer}>
			<FlatList
				data={props.courseGoals}
				renderItem={(itemData) => {
					return (
						<GoalItem
							text={itemData.item.text}
							onDelete={props.onDeleteItem.bind(this, itemData.item.id)}
						/>
					);
				}}
				keyExtractor={(item, index) => item.id}
				alwaysBounceVertical={false}></FlatList>
		</View>
	);
};

export default GoalList;

const styles = StyleSheet.create({
	goalsContainer: {
		flex: 5,
	},
});
