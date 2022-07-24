import React from 'react';
import { Head } from '@/layouts';

import { PageWrapperProps } from './types';
import { Navbar } from '@/components';

export const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <>
      <Head title={title} />
      <Navbar />
      {children}
    </>
  );
};

export default PageWrapper;
