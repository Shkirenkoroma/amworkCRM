import { FC, useState } from 'react'
import * as Style from './index.styles'

const ScheduleItem: FC<any> = ({ el, handleID, dateStart, dateEnd
}): JSX.Element => {
  const [choise, setChoise] = useState([])

  const changeChecked = () => {
    handleID(el.id)
  }


  return (
    <Style.ScheduleItem>
      <Style.ScheduleInnerContainerItem>
        <Style.TitleItem>
          <Style.LabelItem>
            <Style.Input
              type="checkbox"
              checked={el.completed}
              onChange={() => changeChecked()}
            />
            <Style.TitleText>{el.title}</Style.TitleText>
          </Style.LabelItem>
        </Style.TitleItem>
        <Style.DateItem>
          <Style.StartDate>{dateStart}</Style.StartDate>
          <Style.EndDate>{dateEnd}</Style.EndDate>
        </Style.DateItem>
      </Style.ScheduleInnerContainerItem>
    </Style.ScheduleItem>
  )
}

export default ScheduleItem
