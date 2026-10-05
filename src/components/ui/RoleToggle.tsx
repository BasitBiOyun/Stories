import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useUserRole, UserRole } from '../../contexts/UserRoleContext';
import { cn } from '../../lib/utils';

/** Small Student · Teacher · On my own switch for the home header; the choice is a device preference. */
export const RoleToggle: React.FC = () => {
  const { t } = useLanguage();
  const { role, setRole } = useUserRole();
  const options: UserRole[] = ['student', 'teacher', 'self'];
  const labels: Record<UserRole, string> = { student: t('nav.roleStudent'), teacher: t('nav.roleTeacher'), self: t('nav.roleSelf') };

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-white/15 bg-black/35 p-0.5 backdrop-blur-md"
      role="group"
      aria-label={t('nav.roleSwitch')}
      data-role-toggle
    >
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => setRole(option)}
          aria-pressed={role === option}
          className={cn(
            'min-h-8 rounded-full px-2.5 font-display text-[10px] font-semibold uppercase tracking-wider transition-colors sm:min-h-9 sm:px-3.5 sm:text-[11px]',
            role === option ? 'bg-white/[0.14] text-[#FFF9EC]' : 'text-parchment/60 hover:bg-white/5 hover:text-parchment',
          )}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
};
