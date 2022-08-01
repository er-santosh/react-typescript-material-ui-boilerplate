import { Button } from "@mui/material";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const UIButton = ({ children, onClick }: ButtonProps) => {
  return (
    <Button onClick={onClick} color="primary" variant="contained">
      {children}
    </Button>
  );
};
