/* eslint-disable react/jsx-no-useless-fragment */
import BrowseMenuItems from './BrowseMenuItems';
import { useEffect, useRef, useState } from 'react';
import { chakra } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';

const BrowseCategories = gql`
  query allBrowseCategoriesQuery($level: Int) {
    levelCategories(level: $level) {
      name
      urlKey
      children {
        name
        urlKey
        children {
          name
          urlKey
        }
      }
    }
  }
`;

const BrowseMenu = ({ isOpen }) => {
  const { data, loading, error } = useQuery(BrowseCategories, {
    variables: { level: 1 },
  });

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

  if (isOpen && data && !error && !loading) {
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
        {data?.levelCategories.map((category, index) => {
          const depthLevel = 1;

          return (
            <BrowseMenuItems
              items={category}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </chakra.ul>
    );
  }
};
export default BrowseMenu;
