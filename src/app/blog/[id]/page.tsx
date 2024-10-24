import { apexFont } from "@/assets/fonts"
import H2 from "@/components/h2"
import Markdown from 'markdown-to-jsx';

import boxImg from '@/assets/shapes/box-benefits.svg';

import placeholder from "@/assets/placeholder-card.png";
import rightLineImg from '@/assets/shapes/right-line.svg';
import Image from "next/image";
import Badge from "@/app/_components/badge";
import LatestPosts from "@/app/_sections/latest-posts";
import Section from "@/components/section";
import personImg from '@/assets/person.jpg';
import ShareButtons from "@/app/_components/share-buttons";

const page = () => {

  const content = 
  `In today&apos;s competitive job market, attracting and retaining top talent is more challenging than ever. Companies are not just looking for employees to fill current vacancies; they are seeking to build a sustainable workforce for the future. This is where **talent pools** come into play. But what exactly are talent pools, and why should organizations prioritize them? Let&apos;s explore their role and the benefits they bring to the modern business landscape.

## What Is a Talent Pool?

A **talent pool** is a database or group of potential candidates that an organization keeps track of, regardless of whether there are immediate openings. These individuals could include past applicants, professionals who have shown interest in your company, referrals, or even passive candidates who aren&apos;t actively looking but would consider a new opportunity if the right one came along.

Talent pools allow HR teams and recruiters to stay connected with highly skilled professionals and to nurture relationships with them over time. When a job position opens up, rather than starting the recruitment process from scratch, companies can tap into their talent pool to find qualified candidates who are already familiar with the organization.

#### The Benefits of Talent Pools

1. **Faster Recruitment Process**
   
   One of the primary advantages of maintaining a talent pool is that it significantly speeds up the hiring process. Instead of spending weeks sourcing new candidates, recruiters can look into their talent pool to find individuals who are already vetted and engaged. This reduces time-to-hire and ensures that critical roles are filled more efficiently.

2. **Improved Candidate Quality**

   Talent pools allow companies to build a pipeline of high-quality candidates, ensuring that when a job opens up, they have a list of skilled professionals ready for consideration. Because talent pools are filled with people who have been pre-screened or have shown interest in the company, the likelihood of hiring someone who fits the culture and job requirements is much higher.

3. **Cost-Effective Recruitment**

   Recruitment is often a costly and time-consuming endeavor. Advertising job openings, working with recruitment agencies, and reviewing large numbers of applications can add up quickly. A well-maintained talent pool can reduce these costs by eliminating the need for constant external job advertising and reducing dependency on third-party recruiters.

#### Conclusion

In an era where top talent is highly sought after, building and maintaining a talent pool is no longer optional—it&apos;s essential. Talent pools provide a strategic advantage by reducing hiring times, improving candidate quality, and cutting recruitment costs, all while strengthening employer branding and promoting diversity. By investing in a robust talent pool, companies position themselves to not only meet their current hiring needs but to build a workforce for the future.

By implementing these practices, organizations can ensure that they have a competitive edge in attracting and retaining top talent, even in the most challenging job markets.`;

  return (
      <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between px-24 mt-10`}>
        <Section className="relative flex flex-col mb-20">
          <div className="flex flex-wrap gap-2 mb-5">
            <Badge category = "IT"/>
            <Badge category = "Talent Pool"/>
          </div>
          <H2 className="font-medium text-highlight">The role of Talent Pools: what are the benefits</H2>
          <span className="mt-10 text-xl text-secondary-text">Published at 2024-10-03</span>
          <div className="image-container-blog flex items-center justify-center w-full relative mt-24">
            <Image
                src={ placeholder }
                alt=""
                className="rounded-lg img-blog"
            />
            <Image
                src={ boxImg } 
                alt="Border" 
                className="absolute inset-16 pointer-events-none image-border-blog"
            />
            <Image
                src={ rightLineImg }
                alt="Line"
                className="left-line-blog"
            />
            <Image
                src={ rightLineImg }
                alt="Line"
                className="right-line-blog"
            />
          </div> 
          <Markdown className="post-content mt-20">{ content }</Markdown>
          <hr className="text-white opacity-30 mt-10 py-5"/>
          <div className="flex mb-24">
              <div className="flex flex-row gap-3 w-1/2">
                <Image
                  src = { personImg }
                  width={50}
                  height={50}
                  alt = "Juan Perez"
                  className="rounded-full"
                />
                <div className="author flex flex-col justify-center">
                  <span className="font-bold text-lg">Juan Perez</span>
                  <span>CTO</span>
                </div>
              </div>
              <ShareButtons title = "The role of Talent Pools: what are the benefits" />
          </div>
        </Section>
        <LatestPosts />
      </div>
  )
}

export default page
