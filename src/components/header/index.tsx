import { FC } from "react";
import AmWork from 'assets/Logo.png';
import SuperCRM from 'assets/superAmwork.png';
import * as Style from './index.styles';

const Header:FC = ():JSX.Element => {

  return <>
    <Style.Header>
      <img src={AmWork} alt="Amwork logo for main page" />
      <img src={SuperCRM} alt="SuperCRM logo for main page" />
    </Style.Header>
</>
};

export default Header;
