"use client";

import { Button } from "@/app/components/button";
import { CMSIcon } from "@/app/components/cms-icon";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-badge";
import { HomePageInfo } from "@/app/types/page-info";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/lib/animations";

type ProfileSectionProps = {
  homeInfo: HomePageInfo;
};

export const ProfileSection = ({ homeInfo }: ProfileSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // console.log("teste", homeInfo.introduction);
  // console.dir(homeInfo.introduction, { depth: null });
  // console.log("Response Status:", response.status);
  return (
    <section className="flex w-full flex-col justify-end bg-profile-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl text-white">Sérgio Akira Sarui Junior</h1>

          <div>
            <div className="my-6 text-sm text-gray-400 sm:text-base">
              <RichText content={homeInfo.introduction.raw} />
              {/* Descobrir o erro aqui */}
            </div>

            <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
              {homeInfo.technologies.map((tech, i) => (
                <TechBadge
                  name={tech.name}
                  key={`intro-tech ${tech.name}`}
                  {...techBadgeAnimation}
                  transition={{ duration: 0.2, delay: i * 0.1 }}
                />
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
              <Button className="w-max shadow-button" onClick={handleContact}>
                Entre em contato
                <HiArrowNarrowRight size={18} />
              </Button>

              <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
                {homeInfo.socials.map((contact, index) => (
                  <a
                    href={contact.url}
                    key={`contact-${index}`}
                    target="_blank"
                    className="transition-colors hover:text-gray-100"
                  >
                    <CMSIcon icon={contact.iconSvg} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            // src='/images/profile-pic3.png'
            alt="Foto de perfil do Sergio Sarui"
            className="mb-6 h-[250px] w-[250px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[304px] lg:w-[320px]"
          />
        </motion.div>
      </div>
    </section>
  );
};
