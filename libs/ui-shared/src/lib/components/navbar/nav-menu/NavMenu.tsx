import { navMenuItems } from '../../../data/navMenuItems';
import NavMenuItems from './NavMenuItems';
import * as Styled from '../navbar.styles';

const NavMenu = () => {
  return (
    <>
      <Styled.MenuWrapper>
        {navMenuItems.map((menu, index) => {
          const depthLevel = 0;

          return (
            <NavMenuItems items={menu} key={index} depthLevel={depthLevel} />
          );
        })}
      </Styled.MenuWrapper>
    </>
  );
};
export default NavMenu;
