import { HighlightedProjects } from './components/pages/home/highlighted-projects';
import { KnownTechs } from './components/pages/home/known-techs';
import { ProfileSection } from './components/pages/home/profile-section';

export default async function Home() {
  return (
    <>
      <ProfileSection />
      <KnownTechs />
      <HighlightedProjects />
    </>
  )
}
