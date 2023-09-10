import { FC, useState } from 'react';
import HeaderSchedule  from 'components/headerSchedule';
import Header from 'components/header';
import Schedule from 'components/schedule';
import { IPropsScheduleItemData } from 'components/schedule/scheduleItem/index.types';
import * as Style from './App.styles';

const App: FC = (): JSX.Element => {
  const [countTaskFromArray, setCountTaskFromArray] = useState<IPropsScheduleItemData[]>([]);

  return (
    <Style.Container>
      <Header />
      <Style.ContainerSchedule>
        <HeaderSchedule countTaskFromArray={countTaskFromArray}/>
        <Schedule setCountTaskFromArray={setCountTaskFromArray} />
      </Style.ContainerSchedule>
    </Style.Container>
  )
};

export default App;
