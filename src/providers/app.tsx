import { Box, ThemeProvider, Typography } from "@mui/material";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import theme from "@assets/theme";
import { PRIMARY_MAIN_COLOR } from "@utils/constants";
import { UIButton } from "@components/ui/Button";

const ErrorFallback = () => {
  return (
    <Box
      width="100vh"
      height={"100vh"}
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Typography color={"error"} fontSize={24} fontWeight="bold">
        Ooops, something went wrong
      </Typography>
      <UIButton onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </UIButton>
    </Box>
  );
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vh",
            height: "100vh",
          }}
        >
          <ScaleLoader color={PRIMARY_MAIN_COLOR} />
        </Box>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={theme}>
          <Router>{children}</Router>
        </ThemeProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
