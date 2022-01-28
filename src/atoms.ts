import { atom } from "recoil";
import { darkTheme, lightTheme } from "./theme";

export const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    return darkTheme;
  }
  return lightTheme;
};

export const isDarkAtom = atom({
  key: "isDark",
  default: getTheme(),
});
// atom은 두가지를 요구함
// key : 유일한 값이여야 함
// default : 기본 값
