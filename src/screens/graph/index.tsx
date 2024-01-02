import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "@/NavigationParamList";

import { global } from "@/global";
import { Header } from "@/components";

type Props = {
  route: RouteProp<MainStackParamList, "Profile">;
  navigation: FrameNavigationProp<MainStackParamList, "Profile">;
};

export function Graph({ navigation }: Props) {
  return (
    <stackLayout>
      <Header title="Statistics" backAction={() => navigation.goBack()} />
      <stackLayout style={{ ...global.container, ...global.bg }}></stackLayout>
    </stackLayout>
  );
}
