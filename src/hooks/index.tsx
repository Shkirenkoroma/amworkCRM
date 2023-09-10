import { useEffect, useState } from 'react';
import { IPropsScheduleItemData } from 'components/schedule/scheduleItem/index.types';
import axios from 'axios';

interface State<T> {
  loading: boolean
  data: T[]
  error: Error | null
};

export const useFetch = <T extends IPropsScheduleItemData>(
  url: string,
  _page: number,
): State<T> => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      axios
        .get(url, {
          params: {
            _page,
            _limit: 10,
          },
        })
        .then((res) => setData(res.data))
        .catch(setError)
        .finally(() => setLoading(false))
    }, 1000)
  }, [url, _page]);

  return {
    loading,
    data,
    error,
  }
};
