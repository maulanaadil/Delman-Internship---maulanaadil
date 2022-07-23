import React from 'react';

import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import { BreadCrumbsProps } from './types';

export const BreadCrumbItems = ({ href, label }: BreadCrumbsProps) => {
  return (
    <>
      <BreadcrumbItem key={href}>
        <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
      </BreadcrumbItem>
    </>
  );
};

export default BreadCrumbItems;
