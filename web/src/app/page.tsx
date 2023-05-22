import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Signin } from '@/components/Signin'
export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16 ">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes " />
        <Signin />
        <Hero />
        <Copyright />
      </div>
      {/* right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </div>
  )
}
