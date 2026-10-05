import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, User } from '../ui/icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { useUserRole, UserRole } from '../../contexts/UserRoleContext';
import { BrandedEntry } from './BrandedEntry';
import { cn } from '../../lib/utils';

/** Shown once after the access code: Student, Teacher or On my own, no account, changeable later from the home header. */
export const RolePicker: React.FC = () => {
  const { language, t } = useLanguage();
  const { setRole } = useUserRole();

  const options: { role: UserRole; title: string; hint: string; icon: React.ReactNode }[] = [
    { role: 'student', title: t('nav.roleStudent'), hint: t('nav.roleStudentHint'), icon: <BookOpen size={22} /> },
    { role: 'teacher', title: t('nav.roleTeacher'), hint: t('nav.roleTeacherHint'), icon: <GraduationCap size={22} /> },
    { role: 'self', title: t('nav.roleSelf'), hint: t('nav.roleSelfHint'), icon: <User size={22} /> },
  ];

  return (
    <BrandedEntry>
      <div role="group" aria-labelledby="role-picker-title">
        <h2 id="role-picker-title" className={cn('mt-6 text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-[1.15] text-[#FFF9EC]', language !== 'ar' && 'tracking-[-0.03em]')}>
          {t('nav.rolePrompt')}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[#EDE5D4]/70">{t('nav.roleNote')}</p>

        <div className="mt-7 flex flex-col gap-3">
          {options.map((option, index) => (
            <motion.button
              key={option.role}
              type="button"
              data-role-option={option.role}
              onClick={() => setRole(option.role)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-4 text-start transition-all hover:-translate-y-0.5 hover:border-[#D8B35C]/60 hover:bg-[#D8B35C]/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D58A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0e0c] active:scale-[0.99]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8B35C]/30 bg-[#D8B35C]/10 text-[#F3D58A] transition-colors group-hover:bg-[#D8B35C] group-hover:text-[#16130c]">
                {option.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-[17px] font-semibold text-[#FFF9EC]">{option.title}</span>
                <span className="mt-0.5 block text-[13px] leading-snug text-[#EDE5D4]/65">{option.hint}</span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </BrandedEntry>
  );
};
