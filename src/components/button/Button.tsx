import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}
const Button = ({ label, onClick }: ButtonProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <button
      style={{
        color: colors.primary[100],
        backgroundColor: colors.primary[800],
        border: "none",
        borderRadius: "7px",
        width: "50%",
        padding: "10px 40px 10px 40px",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
