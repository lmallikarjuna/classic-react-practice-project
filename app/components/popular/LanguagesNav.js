import React from "react";

export default function LanguageNav({ selected, onUpdatedLanguage }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="language-nav-container">
      {languages.map((language, index) => (
        <div className='language-nav-item' onClick={() => onUpdatedLanguage(language)} key={index}>
          {language}
        </div>
      ))}
    </ul>
  );
}
