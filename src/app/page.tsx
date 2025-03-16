"use client";

import { useState, useEffect } from 'react';
// import Image from "next/image";
import Language from '../components/Language'
import RepoCard from '../components/RepoCard'
import languages from '../data/langugages.json';

export default function Page () {

  const [repository, setRepository] = useState(null);

  const repositories = [
    'https://api.github.com/repos/msk-saad/next-gittok',
    'https://api.github.com/repos/facebook/react',
    'https://api.github.com/repos/vercel/next.js',
    'https://api.github.com/repos/tailwindlabs/tailwindcss',
    'https://api.github.com/repos/vuejs/vue',
  ];

  useEffect(() => {
    // Fetches the repository data here and set it using setRepository
    fetchNewRepo();
  }, []);

  const fetchNewRepo = async () => {
    try {
      const randomLanguage = languages[Math.floor(Math.random() * languages.length)];

      const res = await fetch(`https://api.github.com/search/repositories?q=language:${randomLanguage}&sort=stars&order=desc`)
      const data = await res.json();

      if (data.items && data.items.length > 0) {
        const randomRepo = data.items[Math.floor(Math.random() * data.items.length)]; //Picking a random repo from the search
        setRepository(randomRepo);
      } else {
        fetchNewRepo(); //If no results, try again with a different random language
      }
    } catch (error) {
      console.error('Error fetching repository: ', error);
    }
  };

  return (
    <>
      <div className="body-container flex flex-col justify-center items-center mt-24">

        <Language />

        {repository && <RepoCard repository={repository}/>}


        <div className="refresh m-2">
          <button className="refresh-btn cursor-pointer w-48 border-1 border-black rounded-md p-2 m-5 hover:bg-black hover:text-white transition" onClick={fetchNewRepo}>Refresh</button>
        </div>
      </div>
    </>
  );
}