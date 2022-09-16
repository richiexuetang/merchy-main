import BrowseMenuItems from './BrowseMenuItems';
import s from './Dropdown.module.css';
import { clsx } from 'clsx';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;

  if (submenus.length > 0) {
    return (
      <ul
        className={clsx(
          s.dropdown,
          depthLevel > 1 && s.dropdownSubmenu,
          depthLevel > 1 && s.category,
          dropdown && s.show
        )}
      >
        <div
          className={clsx(
            depthLevel > 1 && s.categoryContainer && s.categoryContainerScroll
          )}
        >
          {submenus.map((submenu, index) => (
            <BrowseMenuItems
              items={submenu}
              key={index}
              depthLevel={depthLevel}
            />
          ))}
        </div>
      </ul>
    );
  }
};

export default Dropdown;
