import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const ToggleWrapper = styled.div`
  width: 45px;
  height: 25px;
  max-width: 45px;
  border-radius: 25px;
  border: 1px solid ${(props) => props.theme.border};
  display: flex;
  background-color: ${(props) => props.theme.accentColor};
  margin-left: 10px;
`;

const Toggle = styled.button`
  height: 21px;
  width: 21px;
  border: 1px solid ${(props) => props.theme.border};
  margin-top: 1px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 50%;
  transform: translateX(${(props) => props.theme.toggle_position});
  cursor: pointer;
`;

function ToggleBtn() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => {
    setDarkAtom((prev) => !prev);
  };
  return (
    <ToggleWrapper>
      <Toggle onClick={toggleDarkAtom} />
    </ToggleWrapper>
  );
}

export default ToggleBtn;
