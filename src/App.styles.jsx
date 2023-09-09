import styled from "styled-components";

export const Container = styled.div`
`

export const Header = styled.header`
display:flex;
align-items:center;
gap:20px;
padding:0 40px;
`

export const HeaderSchedule = styled.div`
display:flex;
justify-content:space-between;
padding:5px;
align-items:center;
`

export const HeaderScheduleTitleName = styled.span`
color:#50B810;
font-weight:600;
`

export const ButtonAddingTask = styled.button`
height:25px;
max-width:38px;
width:100%;
border:none;
border-radius:4px;
&:hover{
  cursor:pointer;
}
`
export const PlusPictureButton = styled.img`

`
export const CountingGroup = styled.div`
display:flex;
max-width:80px;
width:100%;

`
export const WindowCount = styled.div`
max-width:26px;
width:100%;
height:18px;
border-radius:5px;
border:1px solid #7B8AAB;
margin-left:5px;
outline:none;
color:#555555;
font-weight:600;
padding: 0 5px 6px 4px;
`

export const WindowCountNumber = styled.span`

`

export const ContainerSchedule = styled.div`
width:100%;
max-width:263px;
margin: 20px auto;
`
