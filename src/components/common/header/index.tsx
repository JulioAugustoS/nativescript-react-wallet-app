import * as React from "react";
import { Dialogs } from "@nativescript/core";

import { getHeaderHeight, getScreenSize } from "@/utils/metrics";
import { style } from "./style";

type Props = {
  isHome?: boolean;
  back?: boolean;
  backAction?: () => void;
  showNotification?: boolean;
  showConfig?: boolean;
  title?: string;
};

export function Header({
  isHome = false,
  back = true,
  backAction = () => {},
  showNotification = false,
  showConfig = false,
  title = "",
}: Props) {
  const statusBarHeight = getHeaderHeight();
  const { screenWidth } = getScreenSize();
  const titleViewWidth = screenWidth - 16 * 2 - 44;

  return (
    <flexboxLayout
      style={{ ...style.container, height: statusBarHeight }}
      justifyContent="space-between"
      alignItems="center"
    >
      {isHome && (
        <flexboxLayout>
          <image
            row="0"
            margin="0"
            height="44"
            width="44"
            src="~/assets/images/header/avatar.png"
          />
          <flexboxLayout
            flexDirection="column"
            justifyContent="center"
            paddingLeft={13}
          >
            <label fontSize={16} fontWeight="bold">
              Welcome back!
            </label>
            <label fontSize={14}>Sandy Chungus</label>
          </flexboxLayout>
        </flexboxLayout>
      )}

      {showNotification && showConfig && (
        <flexboxLayout>
          {showNotification && (
            <button
              className="fas"
              fontSize={19}
              width={44}
              height={44}
              onTap={() => Dialogs.alert("Notification Tapped!")}
            >
              &#xf0f3;
            </button>
          )}
          {showConfig && (
            <button
              className="fas"
              fontSize={19}
              width={24}
              height={44}
              textAlignment="right"
              onTap={() => Dialogs.alert("Config Tapped!")}
            >
              &#xf142;
            </button>
          )}
        </flexboxLayout>
      )}

      {!isHome && back && (
        <flexboxLayout>
          <button
            className="fas"
            fontSize={20}
            width={44}
            height={44}
            textAlignment="left"
            onTap={backAction}
          >
            &#xf053;
          </button>
        </flexboxLayout>
      )}

      {title && (
        <flexboxLayout
          width={titleViewWidth}
          justifyContent="center"
          alignItems="center"
        >
          <label fontSize={18} fontWeight="bold">
            {title}
          </label>
          {!showConfig && !showNotification && (
            <stackLayout width={44} height={44} />
          )}
        </flexboxLayout>
      )}
    </flexboxLayout>
  );
}
