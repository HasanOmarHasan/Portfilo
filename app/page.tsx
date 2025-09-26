'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  PROFESSIONAL_SUMMARY,
  EDUCATION,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: 'easeOut',
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
  
}
const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

type ProjectMediaProps = {
  video?: string
  image?: string
}

function ProjectMedia({ video, image }: ProjectMediaProps) {
  if (image) {
    return (
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.3,
        }}
      >
        <MorphingDialogTrigger>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={image}
              alt="Project preview"
              fill
              className="cursor-zoom-in object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </MorphingDialogTrigger>

        <MorphingDialogContainer>
          <MorphingDialogContent className="relative max-h-[90vh] w-[90vw] max-w-[1200px] rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset sm:w-[85vw] dark:bg-zinc-950 dark:ring-zinc-800/50">
            <div className="relative h-[80vh] w-full">
              <Image
                src={image}
                alt="Project preview"
                fill
                className="rounded-xl object-contain"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 85vw, 1200px"
                quality={100}
              />
            </div>
          </MorphingDialogContent>

          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1 shadow-lg dark:bg-zinc-800"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  // if (video) {
  //   return (
  //     <MorphingDialog
  //       transition={{
  //         type: 'spring',
  //         bounce: 0,
  //         duration: 0.3,
  //       }}
  //     >
  //       <MorphingDialogTrigger>
  //         <video
  //           src={video}
  //           autoPlay
  //           loop
  //           muted
  //           className="aspect-video w-full cursor-zoom-in rounded-xl"

  //         />
  //       </MorphingDialogTrigger>
  //       <MorphingDialogContainer>
  //         <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
  //           <video
  //             src={video}
  //             autoPlay
  //             loop
  //             muted
  //             className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
  //           />
  //         </MorphingDialogContent>
  //         <MorphingDialogClose
  //           className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
  //           variants={{
  //             initial: { opacity: 0 },
  //             animate: {
  //               opacity: 1,
  //               transition: { delay: 0.3, duration: 0.1 },
  //             },
  //             exit: { opacity: 0, transition: { duration: 0 } },
  //           }}
  //         >
  //           <XIcon className="h-5 w-5 text-zinc-500" />
  //         </MorphingDialogClose>
  //       </MorphingDialogContainer>
  //     </MorphingDialog>
  //   )
  // }

  return null
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <Link
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </Magnetic>
  )
}
function CardWrapper({ 
  children, 
  href,
  className = ""
}: { 
  children: React.ReactNode
  href?: string
  className?: string
}) {
  const content = (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-200/30 to-zinc-300/20 p-[1px] dark:from-zinc-600/20 dark:to-zinc-700/30">
      <Spotlight
        className="from-zinc-900 via-zinc-800 to-zinc-700 blur-xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={80}
      />
      <div className="relative h-full w-full rounded-[23px] bg-white/80 p-6 backdrop-blur-sm dark:bg-zinc-950/80">
        {children}
      </div>
    </div>
  )

  return href ? (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`block transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  )
}
function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
      {children}
    </h3>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-32 py-8"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* About */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="whitespace-pre-line text-zinc-600 dark:text-zinc-400">
            {PROFESSIONAL_SUMMARY}
          </p>
        </div>
      </motion.section>

     

       {/* Selected Projects */}
      <motion.section variants={VARIANTS_SECTION}>
        <SectionHeader>Selected Projects</SectionHeader>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              variants={VARIANTS_ITEM}
              custom={index}
              className="group"
            >
              <div className="space-y-4">
                <div className="relative">
                  <ProjectMedia 
                    video={project.video} 
                    image={project.image}
                    // alt={`${project.name} preview`}
                  />
                </div>
                
                <div className="space-y-3 px-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {project.date}
                    </span>
                  </div>
                  
                  <Link
                    className="group/project inline-block"
                    href={project.link}
                    target="_blank"
                  >
                    <h4 className="text-xl font-semibold text-zinc-900 transition-colors group-hover/project:text-zinc-600 dark:text-zinc-100 dark:group-hover/project:text-zinc-300">
                      {project.name}
                    </h4>
                  </Link>
                  
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {project.description}
                    
                    {project.readMore && (
                      <Link
                        href={project.readMore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 inline-flex items-center font-medium text-blue-600 transition-all duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Read more →
                      </Link>
                    )}
                  </p>
                  
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      
  {/* Work Experience (Old) */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <Link
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-col space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <h4
                        // className="font-normal dark:text-zinc-100"
                        className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
                      >
                        {job.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                  {job.description && (
                    <p className="text-sm whitespace-pre-line leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {job.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>


        {/* Work Experience */}
      {/* <motion.section variants={VARIANTS_SECTION}>
        <SectionHeader>Work Experience</SectionHeader>
        <div className="grid gap-6 md:grid-cols-2">
          {WORK_EXPERIENCE.map((job, index) => (
            <motion.div key={job.id} variants={VARIANTS_ITEM} custom={index}>
              <CardWrapper href={job.link}>
                <div className="space-y-4">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {job.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                  
                  {job.description && (
                    <p className="text-sm whitespace-pre-line leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {job.description}
                    </p>
                  )}
                </div>
              </CardWrapper>
            </motion.div>
          ))}
        </div>
      </motion.section> */}

      {/* Education */}
      <motion.section variants={VARIANTS_SECTION}>
        <SectionHeader>Education</SectionHeader>
        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((edu, index) => (
            <motion.div key={edu.id} variants={VARIANTS_ITEM} custom={index}>
              <CardWrapper href={edu.link}>
                <div className="space-y-4">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {edu.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {edu.institution}
                      </p>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {edu.start} - {edu.end}
                    </p>
                  </div>
                  
                  {edu.description && (
                    <p className="text-sm whitespace-pre-line leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {edu.description}
                    </p>
                  )}
                </div>
              </CardWrapper>
            </motion.div>
          ))}
        </div>
      </motion.section>

     
    
      {/* BLOG */}
      {BLOG_POSTS.length > 0 && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-3 text-lg font-medium">Latest Writings</h3>
          <div className="flex flex-col space-y-0">
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.uid}
                  className="-mx-3 rounded-xl px-3 py-3"
                  href={post.link}
                  data-id={post.uid}
                >
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {post.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </AnimatedBackground>
          </div>
        </motion.section>
      )}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <Link
            className="underline dark:text-zinc-300"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </Link>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
