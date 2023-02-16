import { Button, Image, View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

export default function Exp() {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.name}>Lefty</Text>
				<Text style={styles.level}>Level - 1</Text>
			</View>
			{/* <View style={{ flexDirection: "row" }}>
				<Text style={{}}>Title</Text>
			</View> */}
			<Progress.Bar
				animationType={"timing"}
				borderRadius={50}
				borderColor={"black"}
				style={styles.exp}
				color="blue"
				progress={0.3}
				width={300}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		paddingTop: 10,
	},
	textContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	name: {
		fontSize: 20,
		marginBottom: 5,
	},
	level: {
		marginBottom: 5,
	},
	title: {
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	exp: {},
});
