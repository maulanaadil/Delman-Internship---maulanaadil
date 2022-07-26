import { NextPage } from 'next';
import React from 'react';
import { PageWrapper } from '@/layouts';
import UserFetcherModule from '@/modules/user-fetcher';

export const UserFetcher: NextPage = () => {
  return (
    <PageWrapper title='User Fetcher'>
      <UserFetcherModule />
    </PageWrapper>
  );
};

export default UserFetcher;
