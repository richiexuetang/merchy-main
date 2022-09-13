import './index.css';
import BrowseMenuItems from './BrowseMenuItems';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu category' : '';

  if (submenus.length > 0) {
    return (
      <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''} `}>
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
