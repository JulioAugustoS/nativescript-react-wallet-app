import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "@/NavigationParamList";

import { global } from "@/global";
import { Header } from "@/components";

type Props = {
  route: RouteProp<MainStackParamList, "CreditCard">;
  navigation: FrameNavigationProp<MainStackParamList, "CreditCard">;
};

export function Cards({ navigation }: Props) {
  return (
    <stackLayout>
      <Header title="Wallet" backAction={() => navigation.goBack()} />
      <stackLayout style={{ ...global.container, ...global.bg }}></stackLayout>
    </stackLayout>
  );
}
