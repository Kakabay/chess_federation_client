import { useEffect, useRef, useState } from 'react';
import RussianFlag from '../../icons/russian-flag.svg';
import TurkmenFlag from '../../icons/turkmen-flag.svg';
import UKFlag from '../../icons/uk-flag.svg';
import Arrow from '../../icons/arrow-down-black.svg';

interface LangProps {
  title: string;
  img: string;
}

const languages = [
  {
    language: 'Türkmen',
    flag: TurkmenFlag,
  },
  {
    language: 'Русский',
    flag: RussianFlag,
  },
  {
    language: 'English',
    flag: UKFlag,
  },
];

const Lang = () => {
  const [langOpened, setLangOpened] = useState<boolean>(false);
  const [activeLang, setActiveLang] = useState<string>('Türkmen');

  const langdownRef = useRef<HTMLDivElement>(null);

  // Click outside dropdown close function
  useEffect(() => {
    const handleLangClickOutside = (e: MouseEvent) => {
      if (langdownRef.current && !langdownRef.current.contains(e.target as Node)) {
        setLangOpened(false);
      }
    };

    document.addEventListener('click', handleLangClickOutside);

    return () => {
      document.addEventListener('click', handleLangClickOutside);
    };
  }, []);

  return (
    <div className="lang" ref={langdownRef}>
      {languages.map((lang) =>
        lang.language === activeLang ? (
          <div className="lang-content" onClick={() => setLangOpened((initial) => !initial)}>
            <div>
              <img src={lang.flag} alt="flag" />
            </div>

            <span className={langOpened ? 'active' : ''}>{lang.language}</span>
            <div className={langOpened ? 'arrow active' : 'arrow'}>
              <img src={Arrow} alt="arr icon" />
            </div>
          </div>
        ) : null,
      )}

      {langOpened && (
        <div className={langOpened ? 'lang-dropdown' : 'lang-dropdown disabled'}>
          {languages.map((lang) =>
            lang.language !== activeLang ? (
              <div
                className="lang-dropdown-content"
                onClick={() => {
                  setActiveLang(lang.language);
                  setLangOpened((initial) => !initial);
                }}>
                <div>
                  <img src={lang.flag} alt="flag" />
                </div>
                <span>{lang.language}</span>
              </div>
            ) : null,
          )}
        </div>
      )}
    </div>
  );
};

export default Lang;
