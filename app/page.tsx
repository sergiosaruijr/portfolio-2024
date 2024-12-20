import { HighlightedProjects } from './components/pages/home/highlighted-projects';
import { KnownTechs } from './components/pages/home/known-techs';
import { ProfileSection } from './components/pages/home/profile-section';
import { WorkExperience } from './components/pages/home/work-experience';
import { HomePageData } from './types/page-info';
import { fetchHygraphQuery } from './utils/fetch-hygraph-query';

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    // 60 * 60 * 24 // 24 hours
    60
  )
}

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  // console.log(pageData)
  
  return (
    <>
      <ProfileSection homeInfo={pageData}/>
      <KnownTechs techs={pageData.knownTechs}/>
      <HighlightedProjects projects={pageData.highlightProjects}/>
      <WorkExperience experiences={workExperiences}/>
    </>
  )
}
