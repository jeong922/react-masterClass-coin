import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../atoms';
import { darkTheme, lightTheme } from '../theme';

const ToggleWrapper = styled.div`
  width: 45px;
  height: 25px;
  max-width: 45px;
  border-radius: 25px;
  border: 1px solid ${(props) => props.theme.border};
  display: flex;
  background-color: ${(props) => props.theme.accentColor};
  margin-left: 10px;
  cursor: pointer;
`;

const Toggle = styled.button`
  height: 21px;
  width: 21px;
  border: 1px solid ${(props) => props.theme.border};
  margin-top: 1px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 50%;
  transform: translateX(${(props) => props.theme.toggle_position});
  transition: all 300ms ease-in;
  cursor: pointer;
`;

function ToggleBtn() {
  const [theme, setTheme] = useRecoilState(isDarkAtom);
  const handleChangeTheme = useCallback(() => {
    if (theme === darkTheme) {
      localStorage.setItem('theme', 'light');
      setTheme(lightTheme);
      return;
    }
    localStorage.setItem('theme', 'dark');
    setTheme(darkTheme);
  }, [theme, setTheme]);
  return (
    <ToggleWrapper onClick={handleChangeTheme}>
      <Toggle />
    </ToggleWrapper>
  );
}

export default ToggleBtn;
