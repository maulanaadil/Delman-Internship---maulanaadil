import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  Box,
  Text,
  Divider,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

import { StateBreadCrumbs } from './types';

import { BreadCrumbItems } from '@/components';

export const Navbar = ({ ...props }) => {
  const router = useRouter();

  const [breadCrumbs, setBreadCrumbs] = useState<StateBreadCrumbs>([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== '');

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');

      const words = path
        .replace(/(\b[a-z](?!\s))/g, (letter) => letter.toUpperCase())
        .split('-')
        .join(' ');

      return {
        href,
        label: words,
      };
    });

    setBreadCrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <Box w='100%' margin='0px' padding='12px 16px' display='flex' {...props}>
      <Text fontSize='2xl' marginTop='-4px'>
        delman.io
      </Text>

      <Flex alignItems='center'>
        <Divider orientation='vertical' h='100%' marginLeft='20px' />
        <Breadcrumb marginLeft='20px'>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>InternShip Program</BreadcrumbLink>
          </BreadcrumbItem>
          {breadCrumbs.map((breadcrumb) => (
            <BreadCrumbItems
              key={breadcrumb.href}
              href={breadcrumb.href}
              label={breadcrumb.label}
            />
          ))}
        </Breadcrumb>
      </Flex>
    </Box>
  );
};

export default Navbar;
