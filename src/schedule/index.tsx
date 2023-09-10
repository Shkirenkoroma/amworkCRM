import { FC, useEffect, useState } from 'react'
import ScheduleItem from './scheduleItem'
import { useInView } from 'react-intersection-observer'
import { Item, useFetch } from '../hooks'
import * as Style from './index.styles.jsx'

interface IPropsScheduleItem {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface IPropsSchedule {
  setCountTask: (data) => void
}

const Schedule: FC<IPropsSchedule> = ({ setCountTask }): JSX.Element => {
  const [page, setPage] = useState<number>(0)
  const [data, setData] = useState<Item[]>([])
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  const { data: resData, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/todos',
    page,
  )

  useEffect(() => {
    if (data && inView) {
      setPage((prev) => (prev += 1))
    }
  }, [inView])

  useEffect(() => {
    if (resData) {
      setData((prev) => [...prev, ...resData])
      setCountTask(data)
    }
  }, [resData])

  return (
    <Style.ContainerSchedule>
      {data &&
        data?.map((dataItem: IPropsScheduleItem, index: number) => (
          <ScheduleItem dataItem={dataItem} key={dataItem.id} index={index} />
        ))}
      {loading && <Style.Loading>Loading...</Style.Loading>}
      {data && <Style.BorderBlock ref={ref}/>}
    </Style.ContainerSchedule>
  )
}

export default Schedule
