import React, { useState } from "react";
import { Button, View } from "react-native";

// style import
import { AppWrapper } from "./src/style/wrapperStyle";

// component import
import InputAreaComponent from "./src/components/InputAreaComponent";
import ListAreaComponent from "./src/components/ListAreaComponent";

const App = () => {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddModal, setIsAddModal] = useState(false);

	return (
		<AppWrapper>
			<View style={{ width: "60%", marginTop: "10%" }}>
				<Button title="Add New Goal" onPress={() => setIsAddModal(true)} />
				<ListAreaComponent data={courseGoals} setCourseGoals={setCourseGoals} />
			</View>
			<InputAreaComponent
				isVisible={isAddModal}
				setVisible={setIsAddModal}
				setCourseGoals={setCourseGoals}
			/>
		</AppWrapper>
	);
};

export default App;
