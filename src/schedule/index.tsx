import { FC, useState } from 'react'
import ScheduleItem from './scheduleItem'

const Schedule: FC<any> = ({ data }): JSX.Element => {
  console.log('data', data)
const [listItem, setListItem] = useState(data)
console.log('listItem', listItem)

  const handkeChangeList = (el: any) => {
    const newList = data.map((item:any) => {
      console.log(item.id)
      console.log(el)
      if (item.id === el) 
        return { ...item, completed: !item.completed }
        return item;
      })
      setListItem(newList)
    }
  

  return (
    <div>
      {listItem?.map((el: any) => (
        <ScheduleItem el={el} key={el.id} handleID={handkeChangeList} />
      ))}
    </div>
  )
}

export default Schedule
