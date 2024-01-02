import * as React from "react";

import { CardTransaction } from "@/components/common/cardTransaction";
import { getScreenSize, getHeaderHeight } from "@/utils/metrics";
import { style } from "./style";

export function HomeContent() {
  const headerHeight = getHeaderHeight();
  const { screenWidth, screenHeight } = getScreenSize();

  const circlePositionLeft = (screenWidth - 230) / 2;
  const graphPositionLeft = (screenWidth - 193) / 2;
  const balancePositionLeft = (screenWidth - 145) / 2;
  const scrollViewHeight = screenHeight - (headerHeight + 350);

  return (
    <flexboxLayout flexDirection="column">
      <absoluteLayout style={style.container}>
        <stackLayout style={style.content} />
        <stackLayout
          style={style.circle}
          top={-110}
          left={circlePositionLeft}
        />
        <image
          src="~/assets/images/home/graph.png"
          width={200}
          height={200}
          top={-90}
          left={graphPositionLeft}
        />
        <flexboxLayout
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={145}
          height={145}
          top={-70}
          left={balancePositionLeft}
        >
          <label fontSize={16} fontWeight="bold">
            $5,653.50
          </label>
          <label fontSize={12} color="#7B78AA">
            Available Balance
          </label>
        </flexboxLayout>
        <stackLayout top={150} paddingLeft={16}>
          <label fontSize={18} fontWeight="bold">
            My transaction
          </label>
        </stackLayout>
        <scrollView
          orientation="vertical"
          width="100%"
          height={scrollViewHeight}
          top={180}
          scrollBarIndicatorVisible={false}
        >
          <flexboxLayout
            flexDirection="column"
            paddingLeft={16}
            paddingRight={16}
            paddingBottom={20}
          >
            <CardTransaction
              name="Amazon"
              date="May 24, 2022"
              amount="$103.56"
              image="~/assets/images/home/amazon.png"
            />
            <CardTransaction
              name="McDonalds"
              date="May 12, 2022"
              amount="$34.78"
              image="~/assets/images/home/mcdonalds.png"
            />
            <CardTransaction
              name="Apple"
              date="May 8, 2022"
              amount="$1,000.97"
              image="~/assets/images/home/apple.png"
            />
            <CardTransaction
              name="Starbucks"
              date="May 5, 2022"
              amount="$10.56"
              image="~/assets/images/home/starbucks.png"
            />
          </flexboxLayout>
        </scrollView>
      </absoluteLayout>
    </flexboxLayout>
  );
}
