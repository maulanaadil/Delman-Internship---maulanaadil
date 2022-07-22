import type { NextPage } from 'next';
import { PageWrapper } from '@/layouts';
import { HomeModule } from '@/modules';

const Home: NextPage = () => {
  return (
    <div>
      <PageWrapper title='InternShip Program'>
        <HomeModule />
      </PageWrapper>
    </div>
  );
};

export default Home;
