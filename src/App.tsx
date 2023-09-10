import { FC, useState } from 'react'
import Schedule from './schedule'
import AmWork from './assets/Logo.png'
import SuperCRM from './assets/superAmwork.png'
import plus from './assets/add.png'
import * as Style from './App.styles.jsx'

const App: FC = (): JSX.Element => {
  const [countTask, setCountTask] = useState<[]>()

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
              <Style.PlusPictureButton src={plus} alt="icon of adding button" />
            </Style.ButtonAddingTask>
            <Style.WindowCount>
              <Style.WindowCountNumber>
                {countTask?.length}
              </Style.WindowCountNumber>
            </Style.WindowCount>
          </Style.CountingGroup>
        </Style.HeaderSchedule>
        <Schedule setCountTask={setCountTask}/>
      </Style.ContainerSchedule>
    </Style.Container>
  )
}

export default App
