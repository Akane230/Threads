import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: { 
          backgroundColor: "#282727ff",
          borderRadius: 35,
          bottom: 35,
          marginHorizontal: 20, 
          height: 70,
          position: "absolute",
        },

        tabBarIconStyle: {
          backgroundColor: "#413d3dff",
          borderRadius: 50,
          width: 50,
          height: 50,
          marginTop: 5,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen 
      name="home" 
      options={{ 
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />

      <Tabs.Screen 
      name="cart" 
      options={{ 
        title: "Cart", 
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="bag-outline" color={color} size={size} />
        ),
      }} />

      <Tabs.Screen 
      name="favorites" 
      options={{ 
        title: "Favorites", 
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart-outline" color={color} size={size} />
        ),
      }} />

      <Tabs.Screen 
      name="profile" 
      options={{ 
        title: "Profile", 
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" color={color} size={size} />
        ),
      }} />

    </Tabs>
  );
}