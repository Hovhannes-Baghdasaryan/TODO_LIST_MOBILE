import { Text, TouchableOpacity } from "react-native";

// style import
import { SingleGoal } from "./../style/listStyle";

const SingleItemListComponent = ({ item, onDelete }) => (
	<TouchableOpacity onPress={() => onDelete(item.id)}>
		<SingleGoal>
			<Text>{item.value}</Text>
		</SingleGoal>
	</TouchableOpacity>
);
export default SingleItemListComponent;
