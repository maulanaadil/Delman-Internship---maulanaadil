import React from 'react';
import { NextSeo } from 'next-seo';

import { HeadProps } from './types';

export const Head = ({ title, description }: HeadProps) => {
  return (
    <NextSeo
      title={`Internship Program | ${title}`}
      description={description}
    />
  );
};

export default Head;
