import { BaseNavigationContainer } from "@react-navigation/core";
import * as React from "react";
import {
  stackNavigatorFactory,
  tabViewNavigatorFactory,
} from "react-nativescript-navigation";

import { Home } from "@/screens/home";
import { Cards } from "@/screens/cards";
import { Profile } from "@/screens/profile";
import { Graph } from "@/screens/graph";

const TabNavigator = tabViewNavigatorFactory();
const StackNavigator = stackNavigatorFactory();

const TabStack = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      selectedTabTextColor="#00D7FF"
      tabTextColor="#7B78AA"
      tabTextFontSize={12}
      tabBackgroundColor="#19173D90"
    >
      <TabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          iconSource: "~/assets/icons/tabs/home-active.png",
        }}
      />
      <TabNavigator.Screen
        name="CreditCard"
        component={Cards}
        options={{
          title: "Cards",
          iconSource: "~/assets/icons/tabs/credit-card.png",
        }}
      />
      <TabNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          iconSource: "~/assets/icons/tabs/profile.png",
        }}
      />
      <TabNavigator.Screen
        name="Graph"
        component={Graph}
        options={{
          title: "Statistics",
          iconSource: "~/assets/icons/tabs/graph.png",
        }}
      />
    </TabNavigator.Navigator>
  );
};

export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator initialRouteName="Tabs">
      <StackNavigator.Screen name="Tabs" component={TabStack} />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
