import { FC } from 'react'
import ScheduleItem from './scheduleItem'
import * as Style from './index.styles.jsx'

interface IPropsScheduleItem {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface IPropsSchedule {
  data: IPropsScheduleItem[]
}

const Schedule: FC<IPropsSchedule> = ({ data }): JSX.Element => {
  
  return (
    <Style.ContainerSchedule>
      {data?.map((el: IPropsScheduleItem, index: number) => (
        <ScheduleItem el={el} key={el.id} index={index} />
      ))}
    </Style.ContainerSchedule>
  )
}

export default Schedule
