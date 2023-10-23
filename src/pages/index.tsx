import { isPassKeyAvailable } from '@near-js/biometric-ed25519';
import { useEffect } from 'react';

import { openToast } from '@/components/lib/Toast';
import { useDefaultLayout } from '@/hooks/useLayout';
import { useAuthStore } from '@/stores/auth';
import type { NextPageWithLayout } from '@/utils/types';

const HomePage: NextPageWithLayout = () => {
  const signedIn = useAuthStore((store) => store.signedIn);

  useEffect(() => {
    if (signedIn) {
      isPassKeyAvailable().then((passKeyAvailable: boolean) => {
        if (!passKeyAvailable) {
          openToast({
            title: 'Limited Functionality',
            type: 'WARNING',
            description: 'To access all account features, try using a browser that supports passkeys',
            duration: 5000,
          });
        }
      });
    }
  }, [signedIn]);

  return (
    <div className="container mx-auto">
      <h1 className="mt-5 text-center"> Your Gateway to an Open Web </h1>
      <h3 className="text-center"> Welcome to your NEAR Gateway </h3>
      
      <p className="mt-5">
        A gateway is a simple web app that can be augmented with <span className="red"> NEAR Components</span>.
        This Gateway is built using `Next.js` and readily allows users to login
        using FastAuth.
      </p>

      <h5 className="mt-5"> Configure your Gateway </h5>
      <ul>
        <li> Select the network (mainnet|testnet) in the <span className="text-italic"> ./src/utils/config.ts </span> </li>
        <li> Modify the navigation menu in <span className="text-italic">./src/components/navigation/navigation-categories.ts</span> </li>
        <li> Create a pages by creating files in <span className="text-italic">./src/pages</span> </li>
        <li> Define general components in <span className="text-italic">./src/data/components.ts</span> to use them across pages </li>
      </ul>
    </div>
  );
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
