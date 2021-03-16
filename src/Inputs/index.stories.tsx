import React from "react";

import Icon from "../Icon";
import TextCmp from "./Text";

export default {
  title: "Inputs",
};

export const Text = () => (
  <TextCmp
    placeholder="buscar pacientes"
    prefix={<Icon name="patients" width={22} height={14} />}
  />
);
