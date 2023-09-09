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
  max-width:250px;
  width:100%;
  height:158px;
  background-color:#ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ScheduleInnerContainerContentItem = styled.div`
  padding:10px;
`

export const Input = styled.input`
  margin:0;
`
export const TitleItem = styled.div`
  display:flex;
  margin-bottom:10px;
`
export const DateItem = styled.div`
  display:flex;
  justify-content:space-between;
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
  line-height:1.1;
`

export const StartDate = styled.span`
  color:#50B810;
  font-weight:600;
  font-size:13px;
`
export const EndDate = styled.span`
  font-weight:600;
  color:#50B810;
  font-size:13px;
`

export const Description = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color:#555555;
  font-size:13px;
`
export const FooterItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`
export const GroupButtons = styled.div`
  max-width:150px;
  width:100%;
  display:flex;
  justify-content:space-between;
`
export const Button = styled.button`
  position:relative;
  height:20px;
  padding:1.5px 6px;
  border:none;
  border-radius:4px;
   

&:hover{
  cursor:pointer;
  background-color:#B233A6;
}
`
export const PhotoItem = styled.div`
height:24px;
width:24px;
`

export const Image = styled.img`
`

export const ButtonText = styled.span`
color:#616C82;
font-size:12px;
`
