import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import languageData from '../data/langugages.json'

interface LanguageProps {
  onLanguageChange: (value: string) => void; //Callback function to pass the selectedLanguage;
}

export default function Language({ onLanguageChange }: LanguageProps) {

  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const handleChange = (value: string) => {
    if (value !== '') {
      setSelectedLanguage(value);
      onLanguageChange(value);
    }
  }

  return (
    <>
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
    </>
  );
}