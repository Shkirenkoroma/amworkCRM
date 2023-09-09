import { FC, useState } from 'react'
import { descriptionText } from '../../utils'
import dateFormat from "dateformat";
import photo from '../../assets/Img.png'
import * as Style from './index.styles'

interface IPropsScheduleItemData {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface IPropsScheduleItem {
  el: IPropsScheduleItemData
  index:number
}

const ScheduleItem: FC<IPropsScheduleItem> = ({
  el,
  index
}): JSX.Element => {
  const [choise, setChoise] = useState(el.completed)
  const  startDateBeforeTransform= new Date(index*(10**13))
  const startDate = dateFormat(startDateBeforeTransform,  "mmm dd, hh:MM TT")
  const endDateBeforeTransform = new Date((index+1)*(10**13))
  const endDate = dateFormat(endDateBeforeTransform,  "mmm dd, hh:MM TT")

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
}

export default ScheduleItem
