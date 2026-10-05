import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';
import { cn } from '../../lib/utils';
import { storyCatalog } from '../../core/content/storyCatalog';
import homeIcon from '../../assets/images/home_icon.webp';

/** Title in the interface language only, with the last word in gold ("Culture" / «الثَّقَافَة»). */
export const BrandTitle: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useLanguage();
  const title = t('nav.homeTitle');
  const split = title.lastIndexOf(' ');
  return (
    <span className={className}>
      {title.slice(0, split + 1)}
      <span className="home-gold-text">{title.slice(split + 1)}</span>
    </span>
  );
};

/**
 * Split screen for the steps before the library (access code, role choice):
 * a slowly drifting wall of book covers with the project name on one side, the form on the other.
 */
export const BrandedEntry: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, isRTL } = useLanguage();
  const covers = storyCatalog.filter(story => language === 'en' || !story.englishOnly).map(story => story.image);

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={language}
      className={cn(
        'grid min-h-screen grid-rows-[38vh_1fr] bg-[#0b0e0c] text-[#EDE5D4] md:grid-cols-[1.15fr_1fr] md:grid-rows-1',
        isRTL && 'font-arabic',
      )}
    >
      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="absolute inset-[-30%_-20%] flex rotate-[-8deg] flex-col gap-5 opacity-75">
          {[0, 1, 2, 3].map(row => (
            <div
              key={row}
              className={cn('flex gap-5', row % 2 ? 'home-drift-reverse -ms-[200px]' : 'home-drift')}
            >
              {Array.from({ length: 12 }, (_, index) => (
                <div
                  key={index}
                  className="aspect-[4/5] h-[200px] shrink-0 rounded-[18px] bg-cover bg-center md:h-[260px]"
                  style={{ backgroundImage: `url(${covers[(index + row * 2) % covers.length]})` }}
                />
              ))}
            </div>
          ))}
        </div>
        <div
          className={cn(
            'absolute inset-0',
            isRTL
              ? 'bg-[linear-gradient(-90deg,rgba(11,14,12,.15),rgba(11,14,12,.55)_70%,#0b0e0c),linear-gradient(0deg,rgba(11,14,12,.9),transparent_50%)]'
              : 'bg-[linear-gradient(90deg,rgba(11,14,12,.15),rgba(11,14,12,.55)_70%,#0b0e0c),linear-gradient(0deg,rgba(11,14,12,.9),transparent_50%)]',
          )}
        />
        <div className="absolute bottom-5 start-5 z-10 max-w-[85%] md:bottom-14 md:start-14">
          <p className={cn('text-[12px] font-semibold uppercase text-[#D8B35C]', isRTL ? 'text-[15px]' : 'tracking-[0.26em]')}>
            {language === 'ar' ? 'مكتبة قصص ثنائية اللغة' : 'Bilingual story library'}
          </p>
          <h1 className={cn('mt-3 text-[clamp(2.2rem,4.6vw,4.4rem)] font-semibold text-[#FFF9EC]', isRTL ? 'leading-[1.3]' : 'leading-none tracking-[-0.045em]')}>
            <BrandTitle />
          </h1>
        </div>
      </div>

      <div className="relative flex items-center justify-center px-5 py-10 sm:px-10">
        <div className="absolute end-4 top-4 z-20">
          <LanguageToggle />
        </div>
        <div className="w-full max-w-[440px]">
          <img src={homeIcon} alt="" className="h-14 w-14 rounded-[14px] bg-white/[0.05] p-2" />
          {children}
        </div>
      </div>
    </div>
  );
};
