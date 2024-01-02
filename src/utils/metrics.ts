import { isAndroid, isIOS, Application, Screen } from "@nativescript/core";

export function getHeaderHeight() {
  if (isIOS) {
    const app = UIApplication.sharedApplication;
    // @ts-ignore
    const totalHeight = !app.isStatusBarHidden
      ? app.statusBarFrame.size.height
      : 0;

    return totalHeight >= 40 ? totalHeight + 20 : totalHeight + 50;
  }

  if (isAndroid) {
    const resourceId = Application.android
      .getResources()
      .getIdentifier("status_bar_height", "dimen", "android");

    if (resourceId > 0) {
      const dimension = Application.android
        .getResources()
        .getDimensionPixelSize(resourceId);

      return dimension + 50;
    }
  }

  return 60;
}

export function getScreenSize() {
  const screenWidth = Screen.mainScreen.widthDIPs;
  const screenHeight = Screen.mainScreen.heightDIPs;

  return { screenWidth, screenHeight };
}
