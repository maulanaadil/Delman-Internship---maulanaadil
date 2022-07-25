import { NextPage } from 'next';
import React from 'react';
import { PageWrapper } from '@/layouts';
import { TitleTransformerModule } from '@/modules';

export const TitleTransformer: NextPage = () => {
  return (
    <PageWrapper title='Title Transformer'>
      <TitleTransformerModule />
    </PageWrapper>
  );
};

export default TitleTransformer;
