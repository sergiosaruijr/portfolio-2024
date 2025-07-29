import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { ProfileSection } from "./components/pages/home/profile-section";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";
import { RichTextContent } from "@graphcms/rich-text-types";

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
        highlightProjects(first: 5){
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
  `;

  try {
    const data = await fetchHygraphQuery<HomePageData>(query, 60 * 5);

    if (!data || !data.page) {
      // Retornar um fallback se os dados não forem encontrados
      return {
        page: {
          introduction: { raw: {} as RichTextContent },
          technologies: [],
          profilePicture: { url: "" },
          socials: [],
          knownTechs: [],
          highlightProjects: [],
        },
        workExperiences: [],
      };
    }

    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);

    // Fallback para casos de erro
    return {
      page: {
        introduction: { raw: {} as RichTextContent },
        technologies: [],
        profilePicture: { url: "" },
        socials: [],
        knownTechs: [],
        highlightProjects: [],
      },
      workExperiences: [],
    };
  }
};

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();

  // console.log(pageData);

  return (
    <>
      <ProfileSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
