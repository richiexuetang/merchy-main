import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const BreadCrumbs = ({ links }) => {
  return (
    <Breadcrumb>
      {links.map((breadcrumb, index) => {
        const { level, name, url } = JSON.parse(breadcrumb);

        const lastItem = index + 1 === links.length;

        return (
          <BreadcrumbItem key={name}>
            {!lastItem ? (
              <Link
                href={level === -1 ? '/' : '/category/[slug]'}
                as={level === -1 ? '/' : `/category/${url}`}
              >
                <BreadcrumbLink
                  fontSize="xs"
                  color="neutral.500"
                  outlineOffset="2px"
                  outline="2px solid transparent"
                  cursor="pointer"
                  textTransform="capitalize"
                  _hover={{
                    color: 'neutral.black',
                  }}
                >
                  {name}
                </BreadcrumbLink>
              </Link>
            ) : (
              <Text
                fontFamily="suisseIntlRegular"
                lineHeight="md"
                letterSpacing="0.004rem"
                textTransform="capitalize"
                fontSize="xs"
                borderBottomColor="#393939"
                borderBottomWidth="1px"
              >
                {name}
              </Text>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
