import { View, Text, StyleSheet } from "react-native";
import Navbar from "./navigation/navbar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<Navbar></Navbar>
		</NavigationContainer>
		// <View style={styles.container}>
		// 	<Text>Hello World</Text>
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
