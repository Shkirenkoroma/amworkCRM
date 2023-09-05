import { FC, useEffect, useState } from 'react'
import Schedule from './schedule'
import AmWork from './assets/Logo.png'
import SuperCRM from './assets/superAmwork.png'
import axios from 'axios'
import * as Style from './App.styles.jsx'

const App: FC = (): JSX.Element => {
  const [arrayData, setDataFromApi] = useState<any>()
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      )
      const data = response.data
      setDataFromApi(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Style.Container>
      <Style.Header>
        <img src={AmWork} alt="Amwork logo for main page" />
        <img src={SuperCRM} alt="SuperCRM logo for main page" />
      </Style.Header>
      <Style.ContainerSchedule>
        <Schedule data={arrayData}/>
      </Style.ContainerSchedule>
    </Style.Container>
  )
}

export default App
