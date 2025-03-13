"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import languageData from '../data/langugages.json'
import { useState } from "react";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const handleChange = (value: string) => {
    if (value !== '') {
      setSelectedLanguage(value);
    }
  }
  return (
    <>
      <div className="body-container flex flex-col justify-center items-center mt-24">

        <h1 className="hero-title text-2xl">GitHub Repository Finder</h1>

        <div className="select-container p-2 m-4">
          <Select value={selectedLanguage} onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {languageData && languageData.length > 0 ? (languageData.map((language, index) => (language && language.value && language.title ? (<SelectItem
                key={`${language.value}-${index}`}
                value={language.value || 'default'}
              >
                {language.title}
              </SelectItem>
              ) : null
              ))
              ) : (
                <div>No languages available</div>
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="repo-container w-98 h-48 m-2 p-3 border-black border-1 rounded-md">
          <div className="repo-hero">
            <h2 className="repo-title text-xl p-2">Repo-Title</h2>
            <h3 className="repo-desc text-md p-2">This is the description about the repository.</h3>
          </div>

          <div className="repo-details flex flex-row">
            <p className="language p-3">Language</p>
            <p className="stars p-3">Stars: 1000</p>
            <p className="fork p-3">Fork: 100</p>
            <p className="issues p-3">Issue: 1</p>
          </div>
        </div>

        <div className="refresh m-2">
          <button className="refresh-btn cursor-pointer w-48 border-1 border-black rounded-md p-2 m-5 hover:bg-black hover:text-white transition">Refresh</button>
        </div>
      </div>
    </>
  );
}
