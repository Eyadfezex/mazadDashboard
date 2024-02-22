import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
interface LabelProps {
  label: string;
}

const Label = ({ label = "text" }: LabelProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <span
      style={{
        fontSize: "20px",
        borderBottom: "solid 1px",
        borderColor: colors.primary[200],
        borderRadius: "15px",
        padding: "0 15px 0 15px",
        borderLeft: "solid 1px",
      }}
    >
      {label}
    </span>
  );
};

export default Label;
