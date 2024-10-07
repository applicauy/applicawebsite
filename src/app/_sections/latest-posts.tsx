import { avigeaFont } from '@/assets/fonts'
import H2 from '@/components/h2'
import Section from '@/components/section'
import Image from 'next/image';
import placeholderImg from '@/assets/placeholder-card.png';
import Card from '../_components/card';

import backgroundImg from '@/assets/background/gradient.svg';


const posts = [
  {
    id: 1,
    title: 'The role of Talent Pools: what are the benefits',
    image: 
      <Image 
        src = { placeholderImg }
        layout="fill"
        objectFit="cover"
        alt="The role of Talent Pools: what are the benefits"
      />
  },
  {
    id: 2,
    title: 'The role of Talent Pools: what are the benefits',
    image: 
      <Image 
        src = { placeholderImg }
        layout="fill"
        objectFit="cover"
        alt="The role of Talent Pools: what are the benefits"
      />
  },
  {
    id: 3,
    title: 'The role of Talent Pools: what are the benefits',
    image: 
      <Image 
        src = { placeholderImg }
        layout="fill"
        objectFit="cover"
        alt="The role of Talent Pools: what are the benefits"
      />
  }
];

export default function LatestPosts() {
  return (
    <Section className="relative flex flex-col gap-8 mb-20">
      <div className="latest-posts-degraded">
      <Image
        src={backgroundImg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
      <div className="w-full z-[1] block">
        <div className='w-[60%]'>
          <H2 className="mb-6 md:mb-12 w-4/5 md:w-full text-center md:text-left">
              Checkout out our{" "}
              <strong
                  className={`font-normal ${avigeaFont.className} block`}
              >
                  latest posts
              </strong>
          </H2>
        </div>
      </div>
      <div className="block w-[100%]">
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 my-10 gap-10 items-center">
        {
          posts.map(
            post => (
              <Card  key = {post.id} {...post}></Card>
            )
          )
        }
        </div>
      </div>
    </Section>
  )
}
