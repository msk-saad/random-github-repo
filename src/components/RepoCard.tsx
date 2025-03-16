import React from 'react';
import {
  CircleDot,
  GitFork,
  GitPullRequest,
  Share2,
  Star,
  Calendar,
  Clock
} from 'lucide-react';

import Image from 'next/image';

export type License = {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export type Owner = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  type: string;
  [key: string]: any;
}

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  topics: string[];
  license: License;
  visibility: string;
  [key: string]: any;
}

interface RepoCardProps {
  repository: Repository;
}


export default function RepoCard({ repository }: RepoCardProps) {
  
  const getLanguageColor = () => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-300/80',
      TypeScript: 'bg-blue-400/80',
      Python: 'bg-green-400/80',
      Java: 'bg-orange-400/80',
      'C++': 'bg-pink-400/80',
      Ruby: 'bg-red-400/80',
      Go: 'bg-cyan-400/80',
      Rust: 'bg-orange-500/80',
      PHP: 'bg-indigo-400/80',
      Solidity: 'bg-purple-400/80',
      'C#': 'bg-red-400/80',
      default: 'bg-gray-400/80',
    };
    return colors[repository.language] || colors.default;
  }

  return (
    <div className='grid grid-rows-[minmax(0,1fr)_auto_auto] h-full gap-4 sm:gap-6'>
      <div className="repo-container w-98 h-full m-2 p-3 border-black border-1 rounded-md">
        <a href={repository.html_url} target='_blank' className='font-semibold p-1 text-zinc-600 hover:text-zinc-900 flex'><svg role="img" className="mr-1 h-[20px] w-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg>Github</a>
        <div className="repo-hero">
          <div className="flex flex-row p-2 w-full h-fit">
          <Image src={repository.owner.avatar_url} alt='profile-image' width={60} height={60}/>
          <div className="p-1 ml-3">
          <h2 className="repo-title text-xl p-2">{repository.name}</h2>
          <a href={repository.owner.html_url} target='_blank' className='w-2 h-2 ml-3 text-sm font-semibold text-zinc-600 hover:text-zinc-900 '><span>by </span>{repository.owner.login}</a></div>
          </div>
          <h3 className="repo-desc text-md p-2">{repository.description}</h3>
        </div>

        <div className="repo-details flex flex-row">
          <div className="language p-3">
            {repository.language && (
              <div className="flex items-center gap-2 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06] hover:bg-white/[0.06] transition-colors">
                <span className={`w-2 h-2 rounded-full ${getLanguageColor()}`}></span>
                <span className='text-black/70 text-sm'>{repository.language}</span>
              </div>
            )}
          </div>
          <div className='flex ml-10 mr-14'>
          <Star className='w-4 h-4 text-black/50 mt-4 -mr-2'/>
          <p className="stars p-3">
            {repository.stargazers_count}
            </p></div>
            <div className="flex">
              <GitFork className='w-4 h-4 text-black/50 mt-4 -mr-2'/>
          <p className="fork p-3">{repository.forks_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}