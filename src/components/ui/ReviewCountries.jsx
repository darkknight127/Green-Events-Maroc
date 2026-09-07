const countries = {
  pk: { fr: "Pakistan", en: "Pakistan" },
  be: { fr: "Belgique", en: "Belgium", stripes: ["#000000", "#fdda24", "#ef3340"] },
  fr: { fr: "France", en: "France", stripes: ["#000091", "#ffffff", "#e1000f"] },
  eng: { fr: "Angleterre", en: "England" },
  ma: { fr: "Maroc", en: "Morocco" },
};

export default function ReviewCountries({ codes, language }) {
  return (
    <span className="review-countries">
      {codes.map((code) => {
        const country = countries[code];
        return (
          <span className="review-country" key={code} title={country[language]}>
            <svg viewBox="0 0 30 20" width="21" height="14" aria-hidden="true" focusable="false">
              {country.stripes ? country.stripes.map((fill, index) => (
                <rect key={fill} x={index * 10} width="10" height="20" fill={fill} />
              )) : code === "eng" ? (
                <>
                  <rect width="30" height="20" fill="#fff" />
                  <path d="M0 10H30M15 0V20" stroke="#ce1124" strokeWidth="4" />
                </>
              ) : code === "pk" ? (
                <>
                  <rect width="30" height="20" fill="#01411c" />
                  <rect width="7.5" height="20" fill="#fff" />
                  <circle cx="18.5" cy="10" r="6" fill="#fff" />
                  <circle cx="20.2" cy="8.5" r="5.3" fill="#01411c" />
                  <path d="m22 4 .8 2.2 2.3.1-1.8 1.4.6 2.2L22 8.6l-1.9 1.3.6-2.2-1.8-1.4 2.3-.1Z" fill="#fff" />
                </>
              ) : (
                <>
                  <rect width="30" height="20" fill="#c1272d" />
                  <path d="M15 4.5 18.23 14.45 9.77 8.3 20.23 8.3 11.77 14.45Z" fill="none" stroke="#006233" strokeWidth="1.1" />
                </>
              )}
            </svg>
            <span className="sr-only">{country[language]}</span>
          </span>
        );
      })}
    </span>
  );
}
