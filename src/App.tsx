import { FC, useEffect, useState } from 'react'
import Schedule from './schedule'
import AmWork from './assets/Logo.png'
import SuperCRM from './assets/superAmwork.png'
import axios from 'axios'
import plus from './assets/add.png'
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
      console.log('data', data)
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
        <Style.HeaderSchedule>
          <Style.HeaderScheduleTitleName>Today</Style.HeaderScheduleTitleName>
          <Style.CountingGroup>
            <Style.ButtonAddingTask>
              <Style.PlusPictureButton src={plus} alt="icon of adding button"/>
            </Style.ButtonAddingTask>
            <Style.WindowCount><Style.WindowCountNumber>{arrayData?.length}</Style.WindowCountNumber></Style.WindowCount>
          </Style.CountingGroup>
        </Style.HeaderSchedule>
        <Schedule data={arrayData} />
      </Style.ContainerSchedule>
    </Style.Container>
  )
}

export default App
