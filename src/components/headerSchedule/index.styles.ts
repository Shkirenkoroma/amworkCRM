import styled from "styled-components";

export const HeaderSchedule = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const HeaderScheduleTitleName = styled.span`
  font-weight: 600;
  color: #50B810;
`;

export const ButtonAddingTask = styled.button`
  width: 100%;
  max-width: 38px;
  height: 25px;
  border: none;
  border-radius: 4px;

    &:hover{
      cursor:pointer;
}
`;

export const PlusPictureButton = styled.img`
`;

export const CountingGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 80px;
`;

export const WindowCount = styled.div`
  width: 100%;
  max-width: 26px;
  height: 18px;
  margin-left: 5px;
  padding: 0 4px 6px 4px;
  border: 1px solid #7B8AAB;
  border-radius: 5px;
  font-weight: 600;
  color: #555555;
  outline: none;
`;

export const WindowCountNumber = styled.span`
  display: block;
  text-align: center;
`;
