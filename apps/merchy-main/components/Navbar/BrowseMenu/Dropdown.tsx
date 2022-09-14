import BrowseMenuItems from './BrowseMenuItems';
import { clsx } from 'clsx';
import './index.module.css';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1;

  if (submenus.length > 0) {
    return (
      <ul
        className={clsx(
          'dropdown',
          dropdownClass && 'dropdown-submenu category',
          dropdown && 'show'
        )}
      >
        <div className={`${depthLevel > 1 ? 'category-container' : ''}`}>
          {submenus?.map((submenu, index) => (
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
