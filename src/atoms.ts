import { atom } from 'recoil';
import { darkTheme, lightTheme } from './theme';

// https://recoiljs.org/ko/docs/introduction/getting-started/
// Recoil는 React를 위한 상태 관리 라이브러리
// Atom은 상태(state)의 일부를 나타내며 Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있음.
// atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독(?)
// 그래서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 재렌더링
export const getTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    return darkTheme;
  }
  return lightTheme;
};

export const isDarkAtom = atom({
  key: 'isDark',
  default: getTheme(),
});
// atom은 두가지를 요구함
// key : 유일한 값이여야 함
// default : 기본 값
