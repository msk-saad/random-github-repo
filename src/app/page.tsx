"use client";

import { useState } from 'react';
// import Image from "next/image";
import Language from '../components/Language'
import RepoCard from '../components/RepoCard'

interface Repo {
  name: String;
  html_url: string;
  description: String;
  language: String;
  stars: number;
  fork: number;
  issue: number;
}

interface HomePageProps {
  initialRepo: Repo;
}

export default function Home({initialRepo}: HomePageProps) {
  const [repo, setRepo] = useState<Repo>(initialRepo);
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchNewRepo = async () => {
    setLoading(true);
    const res = await fetch('https://github.com/repositories');
    const data = await res.json();
    const randomRepo = data[Math.floor(Math.random() * data.length)];

    setRepo({
      name: randomRepo.name,
      html_url: randomRepo.html_url,
      description: randomRepo.description || 'No description available',
      language: randomRepo.language,
      stars: randomRepo.stars,
      fork: randomRepo.fork,
      issue: randomRepo.issue
    });
    setLoading(false);
  }
  return (
    <>
      <div className="body-container flex flex-col justify-center items-center mt-24">

        <Language />

        {/* <RepoCard name={repo.name} description={repo.description} url={repo.html_url} language={repo.language} stars={repo.stars} fork={repo.fork} issue={repo.issue}/> */}

        <RepoCard name = "gittok" description="tiktok for github" url='#' language='Typescript' stars='1234' fork='200' issue='1'/>


        <div className="refresh m-2">
          <button className="refresh-btn cursor-pointer w-48 border-1 border-black rounded-md p-2 m-5 hover:bg-black hover:text-white transition" onClick={fetchNewRepo}>Refresh</button>
        </div>
      </div>
    </>
  );
}
