import BrowseMenuItems from './BrowseMenuItems';
import { useEffect, useRef, useState } from 'react';
import { chakra } from '@chakra-ui/react';

const BrowseMenu = ({ isOpen, browseCategories }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handler = (event: React.SyntheticEvent) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current?.contains(event.target as HTMLInputElement)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', () => handler);
    document.addEventListener('touchstart', () => handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', () => handler);
      document.removeEventListener('touchstart', () => handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  if (isOpen && browseCategories) {
    return (
      <chakra.ul
        pos="absolute"
        top="100%"
        zIndex="1000"
        float="left"
        margin={0}
        boxShadow="rgb(0 0 0 / 25%) 0px 4px 4px, rgb(0 0 0 / 10%) 0px -2px 4px"
        fontWeight="600"
        bg="white"
        bgClip="padding-box"
        left={{ md: '-78px', xl: '-100px' }}
        width={{ md: '115px', lg: '132px', xl: '160px' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {browseCategories?.map(({ node }, index) => {
          const depthLevel = 1;

          return (
            <BrowseMenuItems items={node} key={index} depthLevel={depthLevel} />
          );
        })}
      </chakra.ul>
    );
  }
};
export default BrowseMenu;
