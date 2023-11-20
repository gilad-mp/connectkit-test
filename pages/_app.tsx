// siweConfig.verifyMessage
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { siweClient } from '../utils/siweClient';

const config = createConfig(
  getDefaultConfig({
    appName: 'ConnectKit Next.js demo',
    chains: [mainnet, polygon, optimism, arbitrum],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID 
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <siweClient.Provider>
        <ConnectKitProvider debugMode>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </siweClient.Provider>
    </WagmiConfig>
  );
}

export default MyApp;
