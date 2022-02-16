
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, theme as nbTheme } from "native-base";
import StarterIntro from "./screens/StarterIntro";
import SignUp from "./screens/SignUp"
import SignIn from "./screens/SignIn"
import OTP from "./screens/OTP"
import Home from "./screens/Home"
import PostALoad from "./screens/PostALoad"
import ProductScreen from "./screens/ProductScreen"


const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.teal,
  },
});

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NativeBaseProvider theme={theme}>
			<NavigationContainer>
				<Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: "#134e4a", }, headerTintColor: '#fff', headerTitleAlign: 'center', }}>
					<Drawer.Screen name={"SignIn"} component={SignIn} options={{ headerShown: false,}}  />
					<Drawer.Screen name={"SignUp"} component={SignUp} options={{ headerShown: false,}} />
					<Drawer.Screen name={"OTP"} component={OTP} options={{ headerShown: false,}}  />
					<Drawer.Screen name={"Home"} component={Home} options={{ headerShown: true, title: 'Home'}}  />
					<Drawer.Screen name={"PostALoad"} component={PostALoad} options={{ headerShown: true, title: 'Post a Load'}}  />
				</Drawer.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
