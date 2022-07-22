import React from 'react';
import { NextSeo } from 'next-seo';

import { HeadProps } from './types';

export const Head = ({ title, description }: HeadProps) => {
  return <NextSeo title={title} description={description} />;
};

Head.defaultProps = {
  title: 'Internship Program',
};

export default Head;
