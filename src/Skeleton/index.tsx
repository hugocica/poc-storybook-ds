import React from "react";

import * as s from "./styles";
import * as t from "./types";

export default function Skeleton({
  variant = "square",
  ...rest
}: t.ISkeletonProps) {
  return <s.Skeleton variant={variant} {...rest} />;
}
