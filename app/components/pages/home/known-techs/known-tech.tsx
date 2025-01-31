import { CMSIcon } from "@/app/components/cms-icon";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { getRelativeTimeString } from "@/app/utils/get-relative-time";

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(new Date(tech.startDate), "pt-BR");
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-emerald-500">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime}</span>
    </div>
  );
};

// Como estava antes
// import { CMSIcon } from '@/app/components/cms-icon'
// import { KnownTech as IKnownTech} from '@/app/types/projects'
// import { getRelativeTimeString } from '@/app/utils/get-relative-time'
// import { ReactNode } from 'react'

// type KnownTechProps = {
//   tech: {
//     icon: ReactNode
//     name: string
//     startDate: string
//   }
// }

// export const KnownTech = ({tech}: KnownTechProps) => {
//   const relativeTime = getRelativeTimeString(new Date(tech.startDate), 'pt-BR')
//   return (
//     <div className='p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all'>
//       <div className='flex items-center justify-between'>
//         <p className='font-medium'>{tech.name}</p>
//         {tech.icon}
//       </div>

//       <span>{relativeTime}</span>
//     </div>
//   )
// }
