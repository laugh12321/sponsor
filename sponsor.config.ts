import { BadgePreset, defineConfig, tierPresets } from 'sponsorkit'

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  tiers: [
    {
      title: '历史赞助',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: '晨光赞助人',
      monthlyDollars: 5,
      preset: tierPresets.xs,
    },
    {
      title: '造型赞助人',
      monthlyDollars: 15,
      preset: tierPresets.small,
    },
    {
      title: '形象赞助人',
      monthlyDollars: 30,
      preset: tierPresets.base,
    },
    {
      title: '明眸赞助人',
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: '元气赞助人',
      monthlyDollars: 80,
      preset: tierPresets.large,
    },
    {
      title: '光影赞助人',
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ]
})
