import { FC, useState } from "react";
import * as Style from './index.styles'

const ScheduleItem: FC<any> = ({el}):JSX.Element => {
  const [choise, setChoise] = useState()
const changeChecked = () => {
!el.completed 
}

  return <Style.ScheduleItem><input type="checkbox" checked={el.completed}  onChange={changeChecked}></input>{el.title}</Style.ScheduleItem>
}

export default ScheduleItem;
