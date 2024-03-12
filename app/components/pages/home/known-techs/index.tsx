import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { TbBrandNextjs } from 'react-icons/tb'

export const KnownTechs = () => {
  return (
    <section className='container py-16'>
      <SectionTitle subtitle='competências' title= 'Conhecimentos' />

      <div className='grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3'>
        {Array.from({length: 8}).map((_, index) => (
          <KnownTech key={index} tech={{
            icon: <TbBrandNextjs />,
            name: "Next.js",
            startDate: '2022-11-01'
          }}/>
        ))}
      </div>
    </section>
  )
}