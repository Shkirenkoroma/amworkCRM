import styled from 'styled-components';

export const ScheduleItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 263px;
  height: 166px;
  margin: 0 auto;
  margin-bottom: 8px;
  border-radius: 7px;
  background-color: #F4F8FF;
  color: #000;
`

export const ScheduleInnerContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 246px;
  height: 158px;
  background-color: #ffffff;
`

export const ScheduleInnerContainerContentItem = styled.div`
  padding: 10px;
`

export const Input = styled.input`
  margin: 0;
`

export const TitleItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const DateItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitleText = styled.span`
  margin-left: 5px;
  font-weight: 600;
  color: #3D8FEC;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  text-overflow: ellipsis; 
`

export const LabelItem = styled.label`
  line-height: 1.1;
  overflow: hidden;
  overflow-wrap: break-word;
`

export const StartDate = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: #50B810;
`

export const EndDate = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: #50B810;
`

export const Description = styled.p`
  font-size: 13px;
  color: #555555;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const FooterItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GroupButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 150px;
`

export const Button = styled.button`
  position: relative;
  height: 20px;
  padding: 1.5px 6px;
  border: none;
  border-radius: 4px;

    &:hover{
      cursor: pointer;
      background-color: #B233A6;
}
`

export const PhotoItem = styled.div`
  width: 24px;
  height: 24px;
`

export const Image = styled.img`
`

export const ButtonText = styled.span`
  font-size: 12px;
  color: #616C82;
`
