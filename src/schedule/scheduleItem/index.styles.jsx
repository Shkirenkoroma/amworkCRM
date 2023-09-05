import styled from 'styled-components';

export const ScheduleItem = styled.div`
  background-color:#F4F8FF;
  border-radius:7px;
  color:#000;
  width: 100%;
  max-width: 263px;
  height:166px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom:8px;
`

export const ScheduleInnerContainerItem = styled.div`
max-width:255px;
width:100%;
height:158px;
background-color:#ffffff;
`

export const Input = styled.input`
margin:0;
`
export const TitleItem = styled.div`
display:flex;
padding:10px;
`
export const DateItem = styled.div`
display:flex;
justify-content:space-around;
`

export const TitleText = styled.span`
color:#3D8FEC;
font-weight:600;
text-overflow: ellipsis; 
margin-left:5px;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;  
`

export const LabelItem = styled.label`
overflow: hidden;
overflow-wrap: break-word;
`

export const StartDate = styled.span`
color:#50B810;
font-weight:600;
`
export const EndDate = styled.span`
font-weight:600;
color:#50B810
`

export const Description = styled.p`
white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color:#555555;
`
export const FooterItem = styled.div`
`
export const SwitchButton = styled.div`
`
export const Button = styled.button`
`
export const PhotoItem = styled.div`
`
export const Image = styled.img`
`