import { FC, useState } from 'react'
import * as Style from './index.styles'

const ScheduleItem: FC<any> = ({ el, handleID }): JSX.Element => {
  const [choise, setChoise] = useState([])


  const changeChecked = () => {
   handleID(el.id)
  }

  return (
    <Style.ScheduleItem>
      <input type="checkbox" checked={el.completed} onChange={()=>changeChecked()} />
      {el.title}
    </Style.ScheduleItem>
  )
}

export default ScheduleItem
