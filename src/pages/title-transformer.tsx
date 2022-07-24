import { NextPage } from 'next';
import React from 'react';
import { PageWrapper } from '@/layouts';

export const TitleTransformer: NextPage = () => {
  return <PageWrapper title='Title Transformer'>hello world</PageWrapper>;
};

export default TitleTransformer;
