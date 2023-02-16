import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import Avatar from "./avatar";
import Exp from "./exp";

const Tab = createBottomTabNavigator();

export default function Navbar() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerStyle: {
					height: 100,
					backgroundColor: "lightblue",
				},
				headerLeft: () => <Avatar />,
				headerTitle: () => <Exp />,
				// headerRight: () => (
				// 	<View style={{ marginRight: 50 }}>
				// 		<Button onPress={() => alert("This is a button!")} title="Info" />
				// 	</View>
				// ),
			}}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
}
