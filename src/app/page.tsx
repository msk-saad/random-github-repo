"use client";

import Image from "next/image";
import Language from '../components/Language'
import RepoCard from '../components/RepoCard'

export default function Home() {
  // const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  // const handleChange = (value: string) => {
  //   if (value !== '') {
  //     setSelectedLanguage(value);
  //   }
  // }
  return (
    <>
      <div className="body-container flex flex-col justify-center items-center mt-24">

        <Language />
        <RepoCard />

        

        <div className="refresh m-2">
          <button className="refresh-btn cursor-pointer w-48 border-1 border-black rounded-md p-2 m-5 hover:bg-black hover:text-white transition">Refresh</button>
        </div>
      </div>
    </>
  );
}
