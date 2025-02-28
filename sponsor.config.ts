import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: '历史赞助',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      }
    },
    {
      title: '晨光赞助人',
      monthlyDollars: 30,
      preset: tierPresets.xs,
    },
    {
      title: '造型赞助人',
      monthlyDollars: 30,
      preset: tierPresets.small,
    },
    {
      title: '形象赞助人',
      monthlyDollars: 30,
      preset: tierPresets.base,
    },
    {
      title: '明眸赞助人',
      monthlyDollars: 30,
      preset: tierPresets.medium,
    },
    {
      title: '元气赞助人',
      monthlyDollars: 30,
      preset: tierPresets.large,
    },
    {
      title: '光影赞助人',
      monthlyDollars: 30,
      preset: tierPresets.xl,
    },
  ]
})
