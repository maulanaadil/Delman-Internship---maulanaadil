import type { NextPage } from 'next';
import { PageWrapper } from '@/layouts';
import { HomeModule } from '@/modules';

const Home: NextPage = () => {
  return (
    <PageWrapper title='Main menu'>
      <HomeModule />
    </PageWrapper>
  );
};

export default Home;
