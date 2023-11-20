import type { NextPage } from 'next';
import { ConnectKitButton } from 'connectkit';

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ConnectKitButton />
    </div>
  );
};

export default Home;
