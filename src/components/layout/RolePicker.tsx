import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, User } from '../ui/icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { useUserRole, UserRole } from '../../contexts/UserRoleContext';
import { LanguageToggle } from '../ui/LanguageToggle';
import { cn } from '../../lib/utils';

/** Shown once after the access code: Student, Teacher or On my own, no account, changeable later from the home header. */
export const RolePicker: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const { setRole } = useUserRole();

  const options: { role: UserRole; title: string; hint: string; icon: React.ReactNode }[] = [
    { role: 'student', title: t('nav.roleStudent'), hint: t('nav.roleStudentHint'), icon: <BookOpen size={30} /> },
    { role: 'teacher', title: t('nav.roleTeacher'), hint: t('nav.roleTeacherHint'), icon: <GraduationCap size={30} /> },
    { role: 'self', title: t('nav.roleSelf'), hint: t('nav.roleSelfHint'), icon: <User size={30} /> },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={language}
      className="min-h-screen bg-wood flex flex-col items-center justify-center relative overflow-hidden page-texture p-4"
    >
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="absolute top-4 end-4 z-20">
        <LanguageToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 w-full max-w-3xl rounded-2xl border-2 border-gold/40 bg-[#1e1915]/95 p-7 text-center shadow-[0_0_50px_rgba(212,175,55,0.15)] backdrop-blur-sm sm:p-9"
        role="group"
        aria-labelledby="role-picker-title"
      >
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold/40" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold/40" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold/40" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold/40" />

        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-gold/70">{t('nav.homeTitle')}</p>
        <h2 id="role-picker-title" className={cn('mt-3 font-display text-2xl text-[#FFF9EC] sm:text-3xl', language !== 'ar' && 'tracking-wide')}>
          {t('nav.rolePrompt')}
        </h2>
        <p className="mx-auto mt-2 max-w-md font-serif text-[14px] leading-relaxed text-[#F5EDD6]/70">{t('nav.roleNote')}</p>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {options.map(option => (
            <button
              key={option.role}
              type="button"
              data-role-option={option.role}
              onClick={() => setRole(option.role)}
              className="group flex min-h-[150px] flex-col items-center justify-center gap-3 rounded-2xl border border-gold/30 bg-gold/[0.06] px-5 py-6 text-center transition-all hover:-translate-y-0.5 hover:border-gold/70 hover:bg-gold/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1915] active:scale-[0.99]"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-[#1e1915]">
                {option.icon}
              </span>
              <span className="font-display text-xl font-semibold text-[#FFF9EC]">{option.title}</span>
              <span className="font-serif text-[13px] leading-snug text-[#F5EDD6]/65">{option.hint}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
