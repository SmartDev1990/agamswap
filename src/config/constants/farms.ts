import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()
export const CAKE_BNB_LP_MAINNET = '0xd611F8869A282CfD79723836e061bC118eB40A9b'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'RICE',
    lpAddresses: {
      32520: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      56: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      97: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'RICE-BRISE LP',
    lpAddresses: {
      32520: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
      56: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
      97: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 1,
  //   v1pid: 1,
  //   lpSymbol: 'xRICE-BRISE LP',
  //   lpAddresses: {
  //     32520: '0x0xd611F8869A282CfD79723836e061bC118eB40A9b',
  //     56: '0x0xd611F8869A282CfD79723836e061bC118eB40A9b',
  //     97: '0x0xd611F8869A282CfD79723836e061bC118eB40A9b',
  //   },
  //   token: serializedTokens.xRice,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 4,
  //   v1pid: 252,
  //   lpSymbol: 'xRICE-RICE LP',
  //   lpAddresses: {
  //     32520: '',
  //     56: '',
  //     97: '',
  //   },
  //   token: serializedTokens.xRice,
  //   isCommunity: true,
  //   quoteToken: serializedTokens.rice,
  // },
  // {
  //   pid: 5,
  //   v1pid: 252,
  //   lpSymbol: 'BASKOM-BRISE LP',
  //   lpAddresses: {
  //     32520: '',
  //     56: '',
  //     97: '',
  //   },
  //   token: serializedTokens.baskom,
  //   isCommunity: true,
  //   quoteToken: serializedTokens.wbnb,
  // },
  //
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
