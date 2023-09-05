import { FC, useState } from 'react'
import { dateEnd, dateStart } from '../utils'
import ScheduleItem from './scheduleItem'

const Schedule: FC<any> = ({ data }): JSX.Element => {
const [listItem, setListItem] = useState(data)

  const handkeChangeList = (el: any) => {
   
    }


  return (
    <div>
      {data?.map((el: any) => (
        <ScheduleItem el={el} key={el.id} handleID={handkeChangeList}    dateStart={dateStart} dateEnd={dateEnd
        }
        />
      ))}
    </div>
  )
}

export default Schedule
