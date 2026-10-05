import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useUserRole } from './UserRoleContext';

/**
 * Class mode, for a teacher showing the book on a smart board: larger reading text,
 * answers and example answers stay hidden until the teacher reveals them, group tasks open.
 * Only teachers can turn it on; the choice is kept on the device.
 */
const STORAGE_KEY = 'v2:class-mode';

interface ClassModeValue {
  classMode: boolean;
  setClassMode: (on: boolean) => void;
}

const ClassModeContext = createContext<ClassModeValue>({ classMode: false, setClassMode: () => undefined });

export const ClassModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isTeacher } = useUserRole();
  const [stored, setStored] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'on';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, stored ? 'on' : 'off');
    } catch {
      // Storage may be unavailable; the mode then lasts for this visit only.
    }
  }, [stored]);

  const setClassMode = useCallback((on: boolean) => setStored(on), []);
  const value = useMemo(() => ({ classMode: isTeacher && stored, setClassMode }), [isTeacher, stored, setClassMode]);

  return <ClassModeContext.Provider value={value}>{children}</ClassModeContext.Provider>;
};

export const useClassMode = () => useContext(ClassModeContext);
