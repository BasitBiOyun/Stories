import { useState } from 'react';
import { ArrowRight, Eye, EyeOff } from '../ui/icons';
import { BrandedEntry } from './BrandedEntry';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';

const ACCESS_CODE = 'stories_enar';

/** Remembered on the device, so an installed app asks once and not after every restart. */
export const hasAccessCode = (): boolean => {
  try {
    return (localStorage.getItem('app_access_code') ?? sessionStorage.getItem('app_access_code')) === ACCESS_CODE;
  } catch {
    return false;
  }
};

const rememberAccessCode = (code: string) => {
  try {
    localStorage.setItem('app_access_code', code);
  } catch {
    try { sessionStorage.setItem('app_access_code', code); } catch { /* storage blocked: stays open for this visit */ }
  }
};

/** The first screen: the library opens once the access code given to the school is typed in. */
export const AccessGate = ({ onOpen }: { onOpen: () => void }) => {
  const { language, isRTL } = useLanguage();
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = passwordInput.trim();
    if (normalized !== ACCESS_CODE) {
      setErrorMsg('Incorrect password! Please try again.');
      return;
    }
    rememberAccessCode(normalized);
    onOpen();
  };

  const gateCopy = language === 'ar'
    ? { welcome: 'أَهْلًا بِكَ', text: 'اكْتُبْ رَمْزَ الدُّخُولِ الَّذِي أُعْطِيَ لَكَ لِتَفْتَحَ الْمَكْتَبَة.', label: 'رَمْزُ الدُّخُول', open: 'افْتَحِ الْمَكْتَبَة', wrong: 'الرَّمْزُ غَيْرُ صَحِيح. حَاوِلْ مَرَّةً أُخْرَى.', show: 'أَظْهِرِ الرَّمْز', hide: 'أَخْفِ الرَّمْز' }
    : { welcome: 'Welcome', text: 'Enter the access code you were given to open the library.', label: 'Access code', open: 'Open the library', wrong: 'That code is not right. Please try again.', show: 'Show code', hide: 'Hide code' };

  return (

      <BrandedEntry>
        <h2 className={cn('mt-6 text-[40px] font-semibold leading-[1.1] text-[#FFF9EC]', language !== 'ar' && 'tracking-[-0.03em]')}>{gateCopy.welcome}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[#EDE5D4]/70">{gateCopy.text}</p>
        <form onSubmit={handlePasswordSubmit} className="mt-7 flex flex-col">
          <label htmlFor="access-code" className="text-[12px] font-semibold text-[#EDE5D4]/70">{gateCopy.label}</label>
          <div className="relative mt-2 flex items-center">
            <input
              id="access-code"
              type={showPassword ? 'text' : 'password'}
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
                setErrorMsg('');
              }}
              placeholder={gateCopy.label}
              dir="ltr"
              className="w-full rounded-2xl border border-[#D8B35C]/35 bg-white/[0.05] py-4 pe-12 ps-5 text-base text-[#FFF9EC] placeholder-[#EDE5D4]/35 transition-all focus:border-[#F3D58A] focus:outline-none focus:ring-[3px] focus:ring-[#D8B35C]/20"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute end-3.5 cursor-pointer p-1 text-[#D8B35C]/70 transition-colors hover:text-[#F3D58A]"
              aria-label={showPassword ? gateCopy.hide : gateCopy.show}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errorMsg && (
            <p role="alert" className="mt-3 text-[13px] text-red-300">{gateCopy.wrong}</p>
          )}
          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#ECCD7E,#B98A36)] px-7 py-4 text-[15px] font-semibold text-[#16130c] shadow-[0_18px_50px_rgba(216,179,92,0.26)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(216,179,92,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D58A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0e0c] active:scale-[0.99]"
          >
            {gateCopy.open}
            <ArrowRight size={16} mirrored={isRTL} />
          </button>
        </form>
      </BrandedEntry>
  );
};
