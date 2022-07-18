import React from "react";
import { FlatList } from "react-native";

import SingleItemListComponent from "./SingleItemListComponent";

const ListAreaComponent = ({ data, setCourseGoals }) => {
	const onDeleteItem = itemId => {
		setCourseGoals(prevGoals => prevGoals.filter(goal => goal.id !== itemId));
	};

	return (
		<FlatList
			data={data}
			keyExtractor={item => item.id}
			renderItem={itemData => (
				<SingleItemListComponent onDelete={onDeleteItem} item={itemData.item} />
			)}
		/>
	);
};

export default ListAreaComponent;
