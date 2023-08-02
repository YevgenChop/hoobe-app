//components
import { ContentCard } from '@/app/components/ContentCard/ContentCard';
// assets
import { Hoobe } from '@/app/assets';
// types
import { Content, User, UserSocialPlatform } from '@/app/types';
// const
import { HOST, socialLogoMap } from '@/app/consts';
import { Button } from '@/app/components/Button/Button';

type HomeProps = {
  user: User
  userSocialPlatform: UserSocialPlatform[],

  content: Content[]
}


async function getData(): Promise<{ data: HomeProps }>{
  const res = await fetch(`${HOST}/api/home`, { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const { data } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="home-card card">
          <span className="hoobe-logo mb-2">
            <Hoobe/>
          </span>
          <h1 className="title mt-2 mb-2">hoo.be coding exercise</h1>
          <div className="flex flex-row items-center justify-center mt-2 mb-2 ">
            { data.userSocialPlatform.map( platform => {
              const PlatformLogo = socialLogoMap[platform.socialPlatform];
              return (
                <a
                  target="_blank"
                  className="social-platform hover:animate-spin"
                  key={platform.id}
                  href={platform.link}
                >
                  <PlatformLogo/>
                </a>
              )
            })}
          </div>
          <div className="content-container">
            { data.content.map( content => {
              return (
                <ContentCard
                  className="fadeIn hover:scale-105 transition-all ease-in-out hover:drop-shadow-lg"
                  key={content.content.id}
                  value={content}
                />
              )
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <Button>
           <span className="hoobe-icon mr-2">
             <Hoobe />
           </span>
            <span> create your hoo.be</span>
          </Button>
          <a className="mt-5 mb-5 login-link" href="https://devapp.hoo.be/login">login</a>
        </div>
    </main>
  )
}


