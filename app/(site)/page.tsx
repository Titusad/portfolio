import Hero from '@/components/sections/Hero'
import WhatIDo from '@/components/sections/WhatIDo'
import FeaturedCases from '@/components/sections/FeaturedCases'
import Experience from '@/components/sections/Experience'
import SelectedWork from '@/components/sections/SelectedWork'
import DesignProcess from '@/components/sections/DesignProcess'
import FadeUp from '@/components/ui/FadeUp'

export default function Home() {
  return (
    <>
      <Hero />
      <FadeUp><WhatIDo /></FadeUp>
      <FadeUp><FeaturedCases /></FadeUp>
      <FadeUp><Experience /></FadeUp>
      <FadeUp><SelectedWork /></FadeUp>
      <FadeUp><DesignProcess /></FadeUp>
    </>
  )
}
