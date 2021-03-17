import React from "react";

import Skeleton from "./index";

export const Square = () => (
  <>
    <Skeleton variant="square" height={100} />
    <Skeleton variant="square" height={100} />
  </>
);

export const Round = () => (
  <Skeleton variant="circle" height={100} width={100} />
);

export default {
  title: "Skeleton",
};
