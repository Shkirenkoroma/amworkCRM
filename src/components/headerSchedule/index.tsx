import { FC } from 'react';
import plus from 'assets/add.png';
import * as Style from './index.styles';
import { IPropsScheduleItemData } from 'components/schedule/scheduleItem/index.types';

interface IPropsHeaderSchedule {
  countTaskFromArray: IPropsScheduleItemData[]
};

const HeaderSchedule:FC<IPropsHeaderSchedule> = ({countTaskFromArray}): JSX.Element => {

  return (
    <>
      <Style.HeaderSchedule>
        <Style.HeaderScheduleTitleName>Today</Style.HeaderScheduleTitleName>
        <Style.CountingGroup>
          <Style.ButtonAddingTask>
            <Style.PlusPictureButton src={plus} alt="icon of adding button" />
          </Style.ButtonAddingTask>
          <Style.WindowCount>
            <Style.WindowCountNumber>
              {countTaskFromArray?.length}
            </Style.WindowCountNumber>
          </Style.WindowCount>
        </Style.CountingGroup>
      </Style.HeaderSchedule>
    </>
  )
};

export default HeaderSchedule;
