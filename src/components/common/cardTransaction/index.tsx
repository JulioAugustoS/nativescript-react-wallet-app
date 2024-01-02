import * as React from "react";

import { style } from "./style";

type Props = {
  name: string;
  image: string;
  date: string;
  amount: string;
};

export function CardTransaction({ name, image, date, amount }: Props) {
  return (
    <flexboxLayout
      justifyContent="space-between"
      alignItems="center"
      style={style.container}
    >
      <flexboxLayout alignItems="center" height="100%">
        <image
          src={image}
          width={48}
          height={48}
          stretch="none"
          style={style.image}
        />
        <flexboxLayout flexDirection="column">
          <label fontSize={14} fontWeight="bold">
            {name}
          </label>
          <label fontSize={12}>{date}</label>
        </flexboxLayout>
      </flexboxLayout>
      <stackLayout>
        <label fontSize={14}>- {amount}</label>
      </stackLayout>
    </flexboxLayout>
  );
}
