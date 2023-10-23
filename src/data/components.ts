import type { NetworkId } from '@/utils/types';

type Components = {
  helloExample: string
  homePage: string
  UI: {
    profileImage: string,
    profileName: string,
    profilePage: string
  }
  lidoExample: string,
  social:{
    compose: string,
    feed: string
  }
};

export const componentsByNetworkId: Record<NetworkId, Components | undefined> = {
  testnet: {
    homePage: 'gateway.testnet/widget/Home',
    helloExample: 'gagdiez.near/widget/HelloNear',
    UI: {
      profileImage: 'eugenethedream/widget/ProfileImage',
      profileName: 'eugenethedream/widget/ProfileName',
      profilePage: 'discom.testnet/widget/ProfilePage',
    },
    lidoExample: 'zavodil.near/widget/Lido',
    social:{
      compose: "mob.near/widget/MainPage.N.Compose",
      feed: "mob.near/widget/MainPage.N.Feed"
    }
  },

  mainnet: {
    homePage: 'gateway.near/widget/Home',
    helloExample: 'gagdiez.near/widget/HelloNear',
    UI: {
      profileImage: 'mob.near/widget/ProfileImage',
      profileName: 'patrick.near/widget/ProfileName',
      profilePage: 'near/widget/ProfilePage',
    },
    lidoExample: 'zavodil.near/widget/Lido',
    social:{
      compose: "mob.near/widget/MainPage.N.Compose",
      feed: "mob.near/widget/MainPage.N.Feed"
    }
  },
};
