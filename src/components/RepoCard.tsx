import React from 'react';

interface RepoCardProps {
  name: String;
  description: String;
  url: String;
}

export default function RepoCard({name, description, url}) {
  return (
    <>
      <div className="repo-container w-98 h-48 m-2 p-3 border-black border-1 rounded-md">
        <div className="repo-hero">
          <h2 className="repo-title text-xl p-2">{name}</h2>
          <h3 className="repo-desc text-md p-2">{description}</h3>
        </div>

        <div className="repo-details flex flex-row">
          <p className="language p-3">{language}</p>
          <p className="stars p-3">{stars}</p>
          <p className="fork p-3">{fork}</p>
          <p className="issues p-3">{issue}</p>
        </div>
      </div>
    </>
  );
}