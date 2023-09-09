import { FC, useState } from 'react'
import * as Style from './index.styles'
import { descriptionText } from '../../utils'
import photo from '../../assets/Img.png';

const ScheduleItem: FC<any> = ({
  el,
  dateStart,
  dateEnd,
}): JSX.Element => {
  const [choise, setChoise] = useState(el.completed)

  const changeChecked = () => {
    setChoise(!choise)
  }
  
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
            <Style.TitleText>{el.title}</Style.TitleText>
          </Style.LabelItem>
        </Style.TitleItem>
        <Style.DateItem>
          <Style.StartDate>{dateStart}</Style.StartDate>
          <Style.EndDate>{dateEnd}</Style.EndDate>
        </Style.DateItem>
        <Style.Description>{descriptionText}</Style.Description>
        <Style.FooterItem>
          <Style.GroupButtons>
            <Style.Button><Style.ButtonText>Entity title</Style.ButtonText></Style.Button>
            <Style.Button><Style.ButtonText>Front-end</Style.ButtonText></Style.Button>
          </Style.GroupButtons>
          <Style.PhotoItem>
            <Style.Image src={photo} alt="place for user photo" />
          </Style.PhotoItem>
        </Style.FooterItem>
        </Style.ScheduleInnerContainerContentItem>
      </Style.ScheduleInnerContainerItem>
    </Style.ScheduleItem>
  )
}

export default ScheduleItem
