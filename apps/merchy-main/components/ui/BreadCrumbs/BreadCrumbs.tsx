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
      {links.map(({ name, url }, index) => {
        const lastItem = index + 1 === links.length;

        return (
          <BreadcrumbItem key={name}>
            {!lastItem ? (
              <Link href={`/category/[slug]`} as={`/category${url}`}>
                <BreadcrumbLink
                  fontSize="xs"
                  color="neurtral.500"
                  outlineOffset="2px"
                  outline="2px solid transparent"
                  cursor="pointer"
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
