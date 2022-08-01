import {
  PRIMARY_MAIN_COLOR,
  PRIMARY_LIGHT_COLOR,
  PRIMARY_DARK_COLOR,
  SECONDARY_MAIN_COLOR,
  SECONDARY_LIGHT_COLOR,
  SECONDARY_DARK_COLOR,
  LIGHT_COLOR,
  DARK_COLOR,
  LIGHT_GREY_COLOR,
  DARK_LIGHT_COLOR,
  DARK_BLUE_COLOR,
} from "@utils/constants";

const palette = {
  primary: {
    main: PRIMARY_MAIN_COLOR,
    light: PRIMARY_LIGHT_COLOR,
    dark: PRIMARY_DARK_COLOR,
    contrastText: LIGHT_COLOR,
  },
  secondary: {
    main: SECONDARY_MAIN_COLOR,
    light: SECONDARY_LIGHT_COLOR,
    dark: SECONDARY_DARK_COLOR,
    contrastText: LIGHT_COLOR,
  },
  dark: {
    main: DARK_COLOR,
    light: DARK_LIGHT_COLOR,
    blue: DARK_BLUE_COLOR,
    contrastText: LIGHT_COLOR,
  },
  light: {
    main: LIGHT_COLOR,
    grey: LIGHT_GREY_COLOR,
    contrastText: DARK_COLOR,
  },
};
export default palette;
