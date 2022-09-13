import { ItemAttributes } from '../../../data/navMenuItems';
import './index.css';
import NavMenuItems from './NavMenuItems';

export interface DropdownProps {
  submenus: ItemAttributes[];
  dropdown: boolean;
  depthLevel: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  submenus,
  dropdown,
  depthLevel,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

  return (
    <ul
      className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''} ${
        depthLevel > 1 ? 'category' : ''
      }`}
    >
      <div className={`${depthLevel > 2 ? 'category-container' : ''}`}>
        {submenus.map((submenu, index) => (
          <NavMenuItems items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </div>
    </ul>
  );
};

export default Dropdown;
