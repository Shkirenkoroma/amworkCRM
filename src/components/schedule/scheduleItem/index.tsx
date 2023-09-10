import { FC, useState } from 'react';
import { faker } from '@faker-js/faker';
import dateFormat from "dateformat";
import photo from 'assets/Img.png';
import { IPropsScheduleItemData } from './index.types';
import * as Style from './index.styles';

interface IPropsScheduleItem {
  dataItem: IPropsScheduleItemData
};

const ScheduleItem: FC<IPropsScheduleItem> = ({
  dataItem
}): JSX.Element => {
  const [choise, setChoise] = useState(dataItem.completed);
  const  startDateBeforeTransform= new Date(dataItem.id*(10**13));
  const startDate = dateFormat(startDateBeforeTransform,  "mmm dd, hh:MM TT");
  const endDateBeforeTransform = new Date((dataItem.id+1)*(10**13));
  const endDate = dateFormat(endDateBeforeTransform,  "mmm dd, hh:MM TT");
  const descriptionText = faker.lorem.paragraphs(5);

  const changeChecked = () => {
    setChoise(!choise)
  };

  return (
    <Style.ScheduleItem>
      <Style.ScheduleInnerContainerItem>
        <Style.ScheduleInnerContainerContentItem>
          <Style.TitleItem>
            <Style.LabelItem>
              <Style.Input
                type="checkbox"
                checked={choise}
                onChange={() => changeChecked()}
              />
              <Style.TitleText>{dataItem.title}</Style.TitleText>
            </Style.LabelItem>
          </Style.TitleItem>
          <Style.DateItem>
            <Style.StartDate>{startDate}</Style.StartDate>
            <Style.EndDate>{endDate}</Style.EndDate>
          </Style.DateItem>
          <Style.Description>{descriptionText}</Style.Description>
          <Style.FooterItem>
            <Style.GroupButtons>
              <Style.Button>
                <Style.ButtonText>Entity title</Style.ButtonText>
              </Style.Button>
              <Style.Button>
                <Style.ButtonText>Front-end</Style.ButtonText>
              </Style.Button>
            </Style.GroupButtons>
            <Style.PhotoItem>
              <Style.Image src={photo} alt="place for user photo" />
            </Style.PhotoItem>
          </Style.FooterItem>
        </Style.ScheduleInnerContainerContentItem>
      </Style.ScheduleInnerContainerItem>
    </Style.ScheduleItem>
  )
};

export default ScheduleItem;
