import { FC } from 'react'
import ScheduleItem from './scheduleItem'

const Schedule: FC<any> = ({data}): JSX.Element => {
  
  return <div>
    {data?.map((el:any)=><ScheduleItem el={el} key={el.id}/>)}
  </div>
}

export default Schedule
