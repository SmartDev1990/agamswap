import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      // {
      //   label: t('Limit'),
      //   href: '/limit-orders',
      // },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: t('Perpetual'),
      //   href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT`,
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
    ],
  },
  {
    label: t('Earn'),
    href: '/404',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Farms'),
        href: '/404',
      },
      {
        label: t('Pools'),
        href: '/404',
      },
    ],
  },
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: TrophyIcon,
  //   fillIcon: TrophyFillIcon,
  //   items: [
  //     {
  //       label: t('Trading Competition'),
  //       href: '/competition',
  //       hideSubNav: true,
  //     },
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  {
    label: t('NFT'),
    href: ``,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      // {
      //   label: t('Overview'),
      //   href: `${nftsBaseUrl}`,
      // },
      // {
      //   label: t('Collections'),
      //   href: `${nftsBaseUrl}/#`,
      // },
      // {
      //   label: t('Activity'),
      //   href: `${nftsBaseUrl}/#`,
      // },
    ],
  },
  {
    label: 'Features',
    href: '/info',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '',
      },
      {
        label: t('IFO'),
        href: '',
      },
      {
        label: t('Voting'),
        href: '',
      },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: t('Leaderboard'),
      //   href: '/teams',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://medium.com/pancakeswap',
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
      //   {
      //     label: t('Docs'),
      //     href: 'https://docs.pancakeswap.finance',
      //     type: DropdownMenuItemType.EXTERNAL_LINK,
      //   },
    ],
  },
]

export default config
