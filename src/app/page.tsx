"use client";

import { useState, useEffect } from 'react';
// import Image from "next/image";
import Language from '../components/Language'
import RepoCard from '../components/RepoCard'

export default function Page () {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('JavaScript');
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    // Fetches the repository data here and set it using setRepository
    fetchNewRepo();
  }, [selectedLanguage]);

  const fetchNewRepo = async () => {
    try {
      // const randomLanguage = languages[Math.floor(Math.random() * languages.length)];

      const normalizeLanguage = (language: string) => {
        if (language) {
          return language.charAt(0).toUpperCase() + language.slice(1);
        }
        return language;
      }

      const normalizedLanguage = normalizeLanguage(selectedLanguage);
      const res = await fetch(`https://api.github.com/search/repositories?q=language:${normalizedLanguage}&sort=stars&order=desc`)
      const data = await res.json();

      if (data.items && data.items.length > 0) {
        const randomRepo = data.items[Math.floor(Math.random() * data.items.length)]; //Picking a random repo from the search
        setRepository(randomRepo);
      } else {
        //fetchNewRepo(); //If no results, try again with a different random language
        console.log("No repositories found!");
      }
    } catch (error) {
      console.error('Error fetching repository: ', error);
    }
  };

  return (
    <>
      <div className="body-container flex flex-col justify-center items-center mt-24">

        <Language onLanguageChange={(language: string) => {setSelectedLanguage(language)}}/> {/*updates language on the event of onLanguageChange */}

        {repository && <RepoCard repository={repository}/>}


        <div className="refresh m-2">
          <button className="refresh-btn cursor-pointer w-48 border-1 border-black rounded-md p-2 m-5 hover:bg-black hover:text-white transition" onClick={fetchNewRepo}>Refresh</button>
        </div>
      </div>
    </>
  );
}