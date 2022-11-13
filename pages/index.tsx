import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { FeedItem, DefaultService } from '../generated'
import {AiFillInfoCircle} from 'react-icons/ai'

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [feeds, setFeeds] = useState<FeedItem[]>([]);
  const [error, setError] = useState("");

  async function getFeed() {
    if (query && event) {
      event.preventDefault();
      try {
        const response = await DefaultService.getV1SearchFeed(query)
        setFeeds(response)
      } catch (e: any) {
        setError(e.message)
        console.log(e)
      }
    }
  }

  useEffect(() => {
    getFeed()
  }, [query])

  return (
    <div className="flex flex-col h-screen">
      <div className="header p-20 grid grid-rows-3 gap-5">
        <h1 className="title text-8xl font-black text-center">Unconditional.</h1>
        <h2 className="subtitle text-xl font-light text-center">Give to your think an <a className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border border-black rounded-lg p-3 shine' href='about'>Unconditional think</a></h2>
        <form className='w-80 mx-auto' onSubmit={getFeed}>
          <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start search..." required></input>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black ">Search</button>
          </div>
        </form>
      </div>
      <main className='m-auto grid grid-cols-3 gap-4 pb-10'>
        {feeds.map((feed) => (
          <a href={feed.link} className="article bg-white p-6 block max-w-sm rounded-lg border border-black hover:shadow-2xl dark:bg-black dark:border-black dark:hover:bg-black">
            <h6 className='font-extralight'>{feed.source}</h6>
            <h5 className="p-2 text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">{feed.title}</h5>
            <hr />
            <p className="p-2 text-justify text-gray-700 dark:text-gray-400">{feed.summary}</p>
          </a>
        ))}
      </main>
      <Footer />
    </div >

  )
}

export default Home
