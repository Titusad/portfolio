import Hero from '@/components/sections/Hero'
import WhatIDo from '@/components/sections/WhatIDo'
import FeaturedCases from '@/components/sections/FeaturedCases'
import Experience from '@/components/sections/Experience'
import SelectedWork from '@/components/sections/SelectedWork'
import DesignProcess from '@/components/sections/DesignProcess'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <FeaturedCases />
      <Experience />
      <SelectedWork />
      <DesignProcess />
    </>
  )
}
