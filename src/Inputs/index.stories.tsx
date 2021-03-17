import React from "react";
import theme from "../theme";

import Icon from "../Icon";
import TextCmp from "./Text";

export default {
  title: "Inputs",
};

export const Text = () => (
  <div style={{ backgroundColor: theme.colors.primary.gray, padding: 16 }}>
    <TextCmp
      placeholder="buscar pacientes"
      prefix={<Icon name="patients" width={22} height={14} color="white" />}
      style={{ color: "#ffffff" }}
    />
  </div>
);
