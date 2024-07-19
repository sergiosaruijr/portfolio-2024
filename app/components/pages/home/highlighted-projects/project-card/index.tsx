// import { Link } from '@/app/components/link'
// import { TechBadge } from '@/app/components/tech-badge'
// import Image from 'next/image'
// import { HiArrowNarrowRight } from 'react-icons/hi'

// export const ProjectCard = () => {
//   return (
//     <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
//       <div className='w-full h-full'>
//         <Image 
//           width={420}
//           height={304}
//           // src='https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA'
//           src='/images/profile-pic.png'
//           alt='Thumnail de exemplo'
//           className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg'
//         />
//       </div>

//       <div>
//         <h3 className='flex items-center gap-3 font-medium text-lg text-gray-50'>
//           <Image 
//             width={20}
//             height={20}
//             alt=''
//             src='/images/icons/project-title-icon.svg'
//           />
//           Projeto Teste
//         </h3>

//         <p className='text-gray-400 my-6'>
//         Teste é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js.
//         </p>

//         <div className='flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]'>
//           <TechBadge name='Next.js'/>
//           <TechBadge name='Next.js'/>
//           <TechBadge name='Next.js'/>
//           <TechBadge name='Next.js'/>
//           <TechBadge name='Next.js'/>
//         </div>

//         <Link href="/projects/book-wise">
//           Ver projeto
//           <HiArrowNarrowRight />
//         </Link>
//       </div>
//     </div>
//   )
// }
'use client'

import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import { Project } from '@/app/types/projects'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <motion.div 
      className='flex gap-6 lg:gap-12 flex-col lg:flex-row'
      initial= {{opacity: 0, y: 100}}
      whileInView= {{ opacity: 1, y:0}}
      exit= {{opacity: 0, y: 100}}
      transition={{duration: 0.5}}
    >
      <motion.div 
        className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full'
        initial= {{opacity: 0, y: 100, scale: 0.5}}
        whileInView= {{ opacity: 1, y: 0,  scale: 1}}
        exit= {{opacity: 0, y: 100,  scale: 0.5}}
        transition={{duration: 0.3, delay: 0.2}}
      >
        <Image 
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Thumnail do projeto ${project.title}`}
          className='w-full h-full object-cover rounded-lg'
        />
      </motion.div>

      <div className='flex-1 lg:py-[18px]'>
        <motion.h3 
          className='flex items-center gap-3 font-medium text-lg text-gray-50'
          {...fadeUpAnimation}
          transition={{duration: 0.7}}
        >
          <Image 
            width={20}
            height={20}
            alt=''
            src='/images/icons/project-title-icon.svg'
          />
          {project.title}
        </motion.h3>

        <motion.p 
          className='text-gray-400 my-6'
          {...fadeUpAnimation}
          transition={{duration: 0.2, delay: 0.3}}
        >
        {project.shortDescription}
        </motion.p>

        <div className='flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]'>
          {project.technologies?.map((tech, i) => (
            <TechBadge 
              key={`${project.title}-tech-${tech.name}`} 
              name={tech.name}
              {...techBadgeAnimation}
              transition={{duration: 0.2, delay: 0.5 + i * 0.1}}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}