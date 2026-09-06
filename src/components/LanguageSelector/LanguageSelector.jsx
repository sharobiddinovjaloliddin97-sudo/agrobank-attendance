import { useState, useRef, useEffect } from "react";
import { Globe2, ChevronDown, Check } from "lucide-react";
import { languages } from "../../locales/translations";
import "./LanguageSelector.css";

function LanguageSelector({ currentLang, onChangeLang, className = "" }) {
  const [internalLang, setInternalLang] = useState(() => {
    return localStorage.getItem("app_lang") || "uz";
  });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedCode = currentLang !== undefined ? currentLang : internalLang;
  const currentLabel = languages.find((l) => l.code === selectedCode)?.label || "O‘zbekcha";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    localStorage.setItem("app_lang", code);
    if (onChangeLang) {
      onChangeLang(code);
    } else {
      setInternalLang(code);
    }
    setIsOpen(false);
  };

  return (
    <div className={`language-selector-wrapper ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={`language-selector-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe2 size={17} className="language-selector-globe" />
        <span>{currentLabel}</span>
        <ChevronDown
          size={15}
          className={`language-selector-arrow ${isOpen ? "open" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="language-selector-dropdown" role="listbox">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`language-selector-option ${
                selectedCode === lang.code ? "active" : ""
              }`}
              onClick={() => handleSelect(lang.code)}
              role="option"
              aria-selected={selectedCode === lang.code}
            >
              <span>{lang.label}</span>
              {selectedCode === lang.code && (
                <Check size={16} className="language-selector-check" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
