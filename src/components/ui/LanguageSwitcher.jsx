import { languages } from "../../data/siteContent";
import { cn } from "../../lib/utils";

function LanguageSwitcher({ activeLanguage, ariaLabel, onChange }) {
  return (
    <div
      aria-label={ariaLabel}
      className="liquid-glass inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#F7F1E7]"
      role="group"
    >
      {languages.map((language, index) => (
        <span className="inline-flex items-center gap-2" key={language.code}>
          <button
            aria-pressed={activeLanguage === language.code}
            className={cn(
              "transition-colors duration-200 hover:text-[#C8A45D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A45D]",
              activeLanguage === language.code
                ? "text-[#C8A45D]"
                : "text-[#F7F1E7]/72",
            )}
            onClick={() => onChange(language.code)}
            type="button"
          >
            {language.label}
          </button>
          {index < languages.length - 1 ? (
            <span aria-hidden="true" className="text-[#F7F1E7]/28">
              |
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
