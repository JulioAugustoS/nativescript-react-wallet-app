import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

import "@/global/style.css";
import { global } from "@/global";
import { Header, HomeContent } from "@/components";
import { MainStackParamList } from "@/NavigationParamList";

type Props = {
  route: RouteProp<MainStackParamList, "Home">;
  navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function Home({ navigation }: Props) {
  console.log(navigation);

  return (
    <stackLayout>
      <Header isHome showNotification showConfig />
      <stackLayout style={{ ...global.container, ...global.bg }}>
        <HomeContent />
      </stackLayout>
    </stackLayout>
  );
}
