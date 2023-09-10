import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { IPropsScheduleItemData } from './scheduleItem/index.types';
import { useFetch } from 'hooks';
import ScheduleItem from './scheduleItem';
import * as Style from './index.styles';

interface IPropsSchedule {
  setCountTaskFromArray: (data) => void
};

const Schedule: FC<IPropsSchedule> = ({ setCountTaskFromArray }): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<IPropsScheduleItemData[]>([]);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { data: resData, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/todos',
    page,
  );

  useEffect(() => {
    if (data && inView) {
      setPage((prev) => (prev += 1))
    }
  }, [inView]);

  useEffect(() => {
    if (resData) {
      setData((prev) => [...prev, ...resData])
      setCountTaskFromArray(data)
    }
  }, [resData]);

  return (
    <Style.ContainerSchedule>
      {data &&
        data?.map((dataItem: IPropsScheduleItemData) => (
          /*Из-за того, что используется бесконечная прокрутка весь массив данных делится на равные части
          равные 10, поэтому итерирует по индексам от 1 до 10 и далее повторяет, ввиду чего вызывает консольные ошибки. 
          Для уникальности ключей поэтому еще умножается на Math.randow() 
          */ 
          <ScheduleItem dataItem={dataItem} key={dataItem.id*Math.random()} />
        ))}
      {loading && <Style.Loading>Loading...</Style.Loading>}
      {data && <Style.BorderBlock ref={ref}/>}
    </Style.ContainerSchedule>
  )
}

export default Schedule;
