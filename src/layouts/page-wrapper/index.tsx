import React from 'react';
import { Head } from '@/layouts';

import { PageWrapperProps } from './types';

export const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <div>
      <Head title={title} />
      <div>{children}</div>
    </div>
  );
};

export default PageWrapper;
