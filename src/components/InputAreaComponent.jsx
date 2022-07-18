import React, { useState } from "react";
import { Button, Alert, Modal } from "react-native";

//style import
import { StyledInputBox, StyledInputText } from "../style/inputStyle";

const InputAreaComponent = ({ isVisible, setVisible, setCourseGoals }) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const addGoalHandler = () => {
		setCourseGoals(prevGoals => [
			{ id: Math.random().toString(), value: enteredGoal },
			...prevGoals,
		]);
	};

	const addFeaturesAfterGoalHandler = () => {
		if (!enteredGoal) return Alert.alert("No Item", "Input Required");
		addGoalHandler();
		setEnteredGoal("");
		setVisible(false);
	};

	const cancelGoalHandler = () => setVisible(false);

	return (
		<Modal visible={isVisible} animationType="slide">
			<StyledInputBox>
				<StyledInputText
					placeholder="Add Goals"
					onChangeText={text => setEnteredGoal(text)}
					value={enteredGoal}
				/>
				<Button title="Add" onPress={addFeaturesAfterGoalHandler} />
				<Button title="Cancel" onPress={cancelGoalHandler} />
			</StyledInputBox>
		</Modal>
	);
};

export default InputAreaComponent;
