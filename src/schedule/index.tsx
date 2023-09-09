import { FC } from 'react'
import { dateEnd, dateStart } from '../utils'
import ScheduleItem from './scheduleItem'
import * as Style from './index.styles.jsx'

const Schedule: FC<any> = ({ data }): JSX.Element => {
  
  return (
    <Style.ContainerSchedule>
      {data?.map((el: any) => (
        <ScheduleItem
          el={el}
          key={el.id}
          dateStart={dateStart}
          dateEnd={dateEnd}
        />
      ))}
    </Style.ContainerSchedule>
  )
}

export default Schedule
