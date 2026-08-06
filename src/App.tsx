import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  GraduationCap, 
  ClipboardList,
  Home,
  Book as BookIcon,
  Download,
  BookMarked,
  ChevronUp,
  Eye,
  EyeOff
} from 'lucide-react';

import { BookData, Level } from './types';
import { adamA2BookDataEn, adamA2BookDataAr } from './data/adam/a2';
import { abrahamA2BookDataEn, abrahamA2BookDataAr } from './data/abraham/a2';
import { adamB1BookDataEn, adamB1BookDataAr } from './data/adam/b1';
import { adamB2BookDataEn, adamB2BookDataAr } from './data/adam/b2';
import { abrahamB1BookDataEn, abrahamB1BookDataAr } from './data/abraham/b1';
import { abrahamB2BookDataEn, abrahamB2BookDataAr } from './data/abraham/b2';
import { mosesA2BookDataEn, mosesA2BookDataAr } from './data/moses/a2';
import { mosesB1BookDataEn, mosesB1BookDataAr } from './data/moses/b1';
import { mosesB2BookDataEn, mosesB2BookDataAr } from './data/moses/b2';
import { meccaA2BookDataEn, meccaA2BookDataAr } from './data/mecca/a2';
import { meccaB1BookDataEn, meccaB1BookDataAr } from './data/mecca/b1';
import { meccaB2BookDataEn, meccaB2BookDataAr } from './data/mecca/b2';
import { yunusEmreA2BookDataEn, yunusEmreA2BookDataAr } from './data/yunusEmre/a2';
import { yunusEmreB1BookDataEn, yunusEmreB1BookDataAr } from './data/yunusEmre/b1';
import { yunusEmreB2BookDataEn, yunusEmreB2BookDataAr } from './data/yunusEmre/b2';
import { cn } from './lib/utils';
import { generateBookPDF } from './lib/pdfGenerator';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageToggle } from './components/ui/LanguageToggle';
import { StoryProgressProvider, useStoryProgress } from './contexts/StoryProgressContext';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from './lib/firebase';

// Layout Components
import { TeacherGuide } from './components/layout/TeacherGuide';
import { SelfStudyGuide } from './components/layout/SelfStudyGuide';
import { HomePage } from './components/layout/HomePage';

// Book Components
import { StoryPage } from './components/book/StoryPage';
import { InteractiveMapPage } from './components/book/InteractiveMapPage';
import { ExercisePage } from './components/book/ExercisePage';
import { MasterGlossary } from './components/book/MasterGlossary';
import { FinalChallenge } from './components/book/FinalChallenge';
import { SummaryDashboard } from './components/book/SummaryDashboard';
import { ParchmentEffect } from './components/ui/ParchmentEffect';

const AppContent = () => {
  // --- State ---
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const code = sessionStorage.getItem('app_access_code');
    return code === 'stories_enar';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = passwordInput.trim();
    if (normalized === 'stories_enar') {
      sessionStorage.setItem('app_access_code', normalized);
      setIsAuthenticated(true);
    } else {
      setErrorMsg('Incorrect password! Please try again.');
    }
  };

  const [selectedProphetId, setSelectedProphetId] = useState<string | null>(null);
  const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTeacherGuideOpen, setIsTeacherGuideOpen] = useState(false);
  const [isSelfStudyOpen, setIsSelfStudyOpen] = useState(false);
  const [isDyslexic, setIsDyslexic] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, boolean | null>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [abrahamB2Images, setAbrahamB2Images] = useState<Record<number, string>>({});
  const [mosesA2Images, setMosesA2Images] = useState<Record<number, string>>({});
  const [mosesB1Images, setMosesB1Images] = useState<Record<number, string>>({});
  const [mosesB2Images, setMosesB2Images] = useState<Record<number, string>>({});
  const [yunusEmreA2Images, setYunusEmreA2Images] = useState<Record<number, string>>({});
  const [yunusEmreB1Images, setYunusEmreB1Images] = useState<Record<number, string>>({});
  const [yunusEmreB2Images, setYunusEmreB2Images] = useState<Record<number, string>>({});
  const [adamA2ArabicAudios, setAdamA2ArabicAudios] = useState<Record<number, string>>({});
  const [adamB1ArabicAudios, setAdamB1ArabicAudios] = useState<Record<number, string>>({});
  const [adamB2ArabicAudios, setAdamB2ArabicAudios] = useState<Record<number, string>>({});
  const [yunusA2ArabicAudios, setYunusA2ArabicAudios] = useState<Record<number, string>>({});
  const [yunusB1ArabicAudios, setYunusB1ArabicAudios] = useState<Record<number, string>>({});
  const [yunusB2ArabicAudios, setYunusB2ArabicAudios] = useState<Record<number, string>>({});
  const [mosesA2ArabicAudios, setMosesA2ArabicAudios] = useState<Record<number, string>>({});
  const [mosesB1ArabicAudios, setMosesB1ArabicAudios] = useState<Record<number, string>>({});
  const [mosesB2ArabicAudios, setMosesB2ArabicAudios] = useState<Record<number, string>>({});
  const [abrahamA2ArabicAudios, setAbrahamA2ArabicAudios] = useState<Record<number, string>>({});
  const [abrahamB1ArabicAudios, setAbrahamB1ArabicAudios] = useState<Record<number, string>>({});
  const [abrahamB2ArabicAudios, setAbrahamB2ArabicAudios] = useState<Record<number, string>>({});
  const [meccaA2ArabicAudios, setMeccaA2ArabicAudios] = useState<Record<number, string>>({});
  const [meccaB1ArabicAudios, setMeccaB1ArabicAudios] = useState<Record<number, string>>({});
  const [meccaB2ArabicAudios, setMeccaB2ArabicAudios] = useState<Record<number, string>>({});
  const [isQuickTOCOpen, setIsQuickTOCOpen] = useState(false);
  const [activePdfDownloads, setActivePdfDownloads] = useState<string[]>([]);
 
  useEffect(() => {
    const handleStart = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && detail.name) {
        setActivePdfDownloads(prev => [...prev, detail.name]);
      }
    };
    const handleEnd = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && detail.name) {
        setActivePdfDownloads(prev => prev.filter(n => n !== detail.name));
      }
    };
    window.addEventListener('pdf-generation-start', handleStart);
    window.addEventListener('pdf-generation-end', handleEnd);
    return () => {
      window.removeEventListener('pdf-generation-start', handleStart);
      window.removeEventListener('pdf-generation-end', handleEnd);
    };
  }, []);
 
  useEffect(() => {
    const parseChapterNumber = (name: string): number | null => {
      // 1. Try to match 'chapter' followed by optional separators and then digits
      let match = name.match(/chapter\s*[-_]?\s*(\d+)/i);
      if (match) return parseInt(match[1], 10);

      // 2. Try to match 'ch' followed by optional separators and then digits
      match = name.match(/\bch\s*[-_]?\s*(\d+)/i) || name.match(/_ch\s*[-_]?\s*(\d+)/i);
      if (match) return parseInt(match[1], 10);

      // 3. Strip 'a1', 'a2', 'b1', 'b2' to avoid false positives from the level name in the prefix
      const cleanedName = name.replace(/\b[ab][12]\b/i, '').replace(/^[ab][12]\s*[-_]?\s*/i, '');
      match = cleanedName.match(/(\d+)/);
      if (match) return parseInt(match[1], 10);

      return null;
    };

    const fetchB2Images = async () => {
      try {
        const imagesRef = ref(storage, 'Abraham/abraham_b2/images');
        const res = await listAll(imagesRef);
        
        // Parse chapter numbers and pair them with storage items
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        // Sort chapters numerically
        parsedItems.sort((a, b) => a.chNum - b.chNum);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for ${item.name}:`, err);
            }
          })
        );
        
        setAbrahamB2Images(urlsMap);
      } catch (error) {
        console.error("Error loading B2 images from Firebase Storage:", error);
      }
    };
 
    const fetchMosesA2Images = async () => {
      try {
        // Try 'Moses/a2/images' first, if empty try 'Moses/moses_a2/images'
        let imagesRef = ref(storage, 'Moses/a2/images');
        let res = await listAll(imagesRef);
        
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'Moses/moses_a2/images');
          res = await listAll(imagesRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        parsedItems.sort((a, b) => a.chNum - b.chNum);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Moses A2 ${item.name}:`, err);
            }
          })
        );
        
        setMosesA2Images(urlsMap);
      } catch (error) {
        console.error("Error loading Moses A2 images from Firebase Storage:", error);
      }
    };
 
    const fetchMosesB1Images = async () => {
      try {
        // Try 'Moses/b1/images' first, if empty try 'Moses/moses_b1/images'
        let imagesRef = ref(storage, 'Moses/b1/images');
        let res = await listAll(imagesRef);
        
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'Moses/moses_b1/images');
          res = await listAll(imagesRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        parsedItems.sort((a, b) => a.chNum - b.chNum);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Moses B1 ${item.name}:`, err);
            }
          })
        );
        
        setMosesB1Images(urlsMap);
      } catch (error) {
        console.error("Error loading Moses B1 images from Firebase Storage:", error);
      }
    };

    const fetchMosesB2Images = async () => {
      try {
        // Try 'Moses/b2/images' first, if empty try 'Moses/moses_b2/images'
        let imagesRef = ref(storage, 'Moses/b2/images');
        let res = await listAll(imagesRef);
        
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'Moses/moses_b2/images');
          res = await listAll(imagesRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        parsedItems.sort((a, b) => a.chNum - b.chNum);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Moses B2 ${item.name}:`, err);
            }
          })
        );
        
        setMosesB2Images(urlsMap);
      } catch (error) {
        console.error("Error loading Moses B2 images from Firebase Storage:", error);
      }
    };

    const fetchYunusEmreA2Images = async () => {
      try {
        let imagesRef = ref(storage, 'Yunus/a2/images');
        let res = await listAll(imagesRef);
        
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'yunus/a2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'Yunus/yunus_a2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'yunus/yunus_a2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'YunusEmre/a2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'YunusEmre/yunusemre_a2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'Yunus_Emre/a2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'Yunus_Emre/yunusemre_a2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'yunusEmre/a2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'yunusEmre/yunusemre_a2/images');
          res = await listAll(imagesRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        parsedItems.sort((a, b) => a.chNum - b.chNum);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Yunus Emre A2 ${item.name}:`, err);
            }
          })
        );
        
        setYunusEmreA2Images(urlsMap);
      } catch (error) {
        console.error("Error loading Yunus Emre A2 images from Firebase Storage:", error);
      }
    };

    const fetchYunusEmreB1Images = async () => {
      try {
        let imagesRef = ref(storage, 'Yunus/b1/images');
        let res = await listAll(imagesRef);
        
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'yunus/b1/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'Yunus/yunus_b1/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'yunus/yunus_b1/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'YunusEmre/b1/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'YunusEmre/yunusemre_b1/images');
          res = await listAll(imagesRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        parsedItems.sort((a, b) => a.chNum - b.chNum);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Yunus Emre B1 ${item.name}:`, err);
            }
          })
        );
        
        setYunusEmreB1Images(urlsMap);
      } catch (error) {
        console.error("Error loading Yunus Emre B1 images from Firebase Storage:", error);
      }
    };

    const fetchYunusEmreB2Images = async () => {
      try {
        let imagesRef = ref(storage, 'yunus/b2/images');
        let res = await listAll(imagesRef);
        
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'Yunus/b2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'Yunus/yunus_b2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'yunus/yunus_b2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'YunusEmre/b2/images');
          res = await listAll(imagesRef);
        }
        if (res.items.length === 0) {
          imagesRef = ref(storage, 'YunusEmre/yunusemre_b2/images');
          res = await listAll(imagesRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        parsedItems.sort((a, b) => a.chNum - b.chNum);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Yunus Emre B2 ${item.name}:`, err);
            }
          })
        );
        
        setYunusEmreB2Images(urlsMap);
      } catch (error) {
        console.error("Error loading Yunus Emre B2 images from Firebase Storage:", error);
      }
    };

    const fetchAdamA2ArabicAudios = async () => {
      try {
        const audioRef = ref(storage, 'Adam_A2/Adam_a2_arabic_audio');
        const res = await listAll(audioRef);
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Adam A2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setAdamA2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Adam A2 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchAdamB1ArabicAudios = async () => {
      try {
        const audioRef = ref(storage, 'adam_b1/audio/arabic_audio');
        const res = await listAll(audioRef);
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Adam B1 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setAdamB1ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Adam B1 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchAdamB2ArabicAudios = async () => {
      try {
        const audioRef = ref(storage, 'adam_b2/audio/arabic_audio');
        const res = await listAll(audioRef);
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Adam B2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setAdamB2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Adam B2 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchYunusA2ArabicAudios = async () => {
      try {
        const audioRef = ref(storage, 'yunus/a2/audio/arabic_audio');
        const res = await listAll(audioRef);
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Yunus A2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setYunusA2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Yunus A2 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchYunusB1ArabicAudios = async () => {
      try {
        const audioRef = ref(storage, 'yunus/b1/audio/arabic_audio');
        const res = await listAll(audioRef);
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Yunus B1 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setYunusB1ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Yunus B1 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchYunusB2ArabicAudios = async () => {
      try {
        const audioRef = ref(storage, 'yunus/b2/audio/arabic_audio');
        const res = await listAll(audioRef);
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Yunus B2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setYunusB2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Yunus B2 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchMosesA2ArabicAudios = async () => {
      try {
        let audioRef = ref(storage, 'Moses/a2/audio/arabic_audio');
        let res = await listAll(audioRef);
        if (res.items.length === 0) {
          audioRef = ref(storage, 'moses/a2/audio/arabic_audio');
          res = await listAll(audioRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Moses A2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setMosesA2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Moses A2 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchMosesB1ArabicAudios = async () => {
      try {
        let audioRef = ref(storage, 'Moses/b1/audio/arabic_audio');
        let res = await listAll(audioRef);
        if (res.items.length === 0) {
          audioRef = ref(storage, 'moses/b1/audio/arabic_audio');
          res = await listAll(audioRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Moses B1 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setMosesB1ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Moses B1 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchMosesB2ArabicAudios = async () => {
      try {
        let audioRef = ref(storage, 'Moses/b2/audio/arabic_audio');
        let res = await listAll(audioRef);
        if (res.items.length === 0) {
          audioRef = ref(storage, 'moses/b2/audio/arabic_audio');
          res = await listAll(audioRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Moses B2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setMosesB2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Moses B2 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchAbrahamA2ArabicAudios = async () => {
      try {
        let audioRef = ref(storage, 'Abraham/abraham_a2/audio/arabic_audio');
        let res = await listAll(audioRef);
        if (res.items.length === 0) {
          audioRef = ref(storage, 'abraham/abraham_a2/audio/arabic_audio');
          res = await listAll(audioRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Abraham A2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setAbrahamA2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Abraham A2 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchAbrahamB1ArabicAudios = async () => {
      try {
        let audioRef = ref(storage, 'Abraham/abraham_b1/audio/arabic_audio');
        let res = await listAll(audioRef);
        if (res.items.length === 0) {
          audioRef = ref(storage, 'abraham/abraham_b1/audio/arabic_audio');
          res = await listAll(audioRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Abraham B1 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setAbrahamB1ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Abraham B1 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchAbrahamB2ArabicAudios = async () => {
      try {
        let audioRef = ref(storage, 'Abraham/abraham_b2/audio/arabic_audio');
        let res = await listAll(audioRef);
        if (res.items.length === 0) {
          audioRef = ref(storage, 'abraham/abraham_b2/audio/arabic_audio');
          res = await listAll(audioRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Abraham B2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setAbrahamB2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Abraham B2 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchMeccaA2ArabicAudios = async () => {
      try {
        let audioRef = ref(storage, 'mecca/a2/audio/arabic_audio');
        let res = await listAll(audioRef);
        if (res.items.length === 0) {
          audioRef = ref(storage, 'Mecca/a2/audio/arabic_audio');
          res = await listAll(audioRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Mecca A2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setMeccaA2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Mecca A2 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchMeccaB1ArabicAudios = async () => {
      try {
        let audioRef = ref(storage, 'mecca/b1/audio/arabic_audio');
        let res = await listAll(audioRef);
        if (res.items.length === 0) {
          audioRef = ref(storage, 'Mecca/b1/audio/arabic_audio');
          res = await listAll(audioRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Mecca B1 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setMeccaB1ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Mecca B1 Arabic audios from Firebase Storage:", error);
      }
    };

    const fetchMeccaB2ArabicAudios = async () => {
      try {
        let audioRef = ref(storage, 'mecca/b2/audio/arabic_audio');
        let res = await listAll(audioRef);
        if (res.items.length === 0) {
          audioRef = ref(storage, 'Mecca/b2/audio/arabic_audio');
          res = await listAll(audioRef);
        }
        
        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        }).filter((x): x is { item: typeof x.item, chNum: number } => x.chNum !== null);
        
        const urlsMap: Record<number, string> = {};
        await Promise.all(
          parsedItems.map(async ({ item, chNum }) => {
            try {
              const url = await getDownloadURL(item);
              urlsMap[chNum] = url;
            } catch (err) {
              console.error(`Error getting download URL for Mecca B2 Arabic Audio ${item.name}:`, err);
            }
          })
        );
        
        setMeccaB2ArabicAudios(urlsMap);
      } catch (error) {
        console.error("Error loading Mecca B2 Arabic audios from Firebase Storage:", error);
      }
    };

    fetchB2Images();
    fetchMosesA2Images();
    fetchMosesB1Images();
    fetchMosesB2Images();
    fetchYunusEmreA2Images();
    fetchYunusEmreB1Images();
    fetchYunusEmreB2Images();
    fetchAdamA2ArabicAudios();
    fetchAdamB1ArabicAudios();
    fetchAdamB2ArabicAudios();
    fetchYunusA2ArabicAudios();
    fetchYunusB1ArabicAudios();
    fetchYunusB2ArabicAudios();
    fetchMosesA2ArabicAudios();
    fetchMosesB1ArabicAudios();
    fetchMosesB2ArabicAudios();
    fetchAbrahamA2ArabicAudios();
    fetchAbrahamB1ArabicAudios();
    fetchAbrahamB2ArabicAudios();
    fetchMeccaA2ArabicAudios();
    fetchMeccaB1ArabicAudios();
    fetchMeccaB2ArabicAudios();
  }, []);

  const { language, t, formatNumber, isRTL } = useLanguage();
  const { stats, resetStats } = useStoryProgress();

  // --- Data ---
  const currentBook = useMemo(() => {
    if (!selectedProphetId || !currentLevel) return null;

    let bookEn: BookData | null = null;
    let bookAr: BookData | null = null;

    if (selectedProphetId === 'adam') {
      const booksEn = { 'A2': adamA2BookDataEn, 'B1': adamB1BookDataEn, 'B2': adamB2BookDataEn };
      const booksAr = { 'A2': adamA2BookDataAr, 'B1': adamB1BookDataAr, 'B2': adamB2BookDataAr };
      bookEn = booksEn[currentLevel];
      bookAr = booksAr[currentLevel];
    } else if (selectedProphetId === 'ibrahim') {
      const booksEn = { 'A2': abrahamA2BookDataEn, 'B1': abrahamB1BookDataEn, 'B2': abrahamB2BookDataEn };
      const booksAr = { 'A2': abrahamA2BookDataAr, 'B1': abrahamB1BookDataAr, 'B2': abrahamB2BookDataAr };
      bookEn = booksEn[currentLevel];
      bookAr = booksAr[currentLevel];
    } else if (selectedProphetId === 'musa') {
      const booksEn = { 'A2': mosesA2BookDataEn, 'B1': mosesB1BookDataEn, 'B2': mosesB2BookDataEn };
      const booksAr = { 'A2': mosesA2BookDataAr, 'B1': mosesB1BookDataAr, 'B2': mosesB2BookDataAr };
      bookEn = booksEn[currentLevel];
      bookAr = booksAr[currentLevel];
    } else if (selectedProphetId === 'mecca') {
      const booksEn = { 'A2': meccaA2BookDataEn, 'B1': meccaB1BookDataEn, 'B2': meccaB2BookDataEn };
      const booksAr = { 'A2': meccaA2BookDataAr, 'B1': meccaB1BookDataAr, 'B2': meccaB2BookDataAr };
      bookEn = booksEn[currentLevel];
      bookAr = booksAr[currentLevel];
    } else if (selectedProphetId === 'yunusEmre') {
      const booksEn = { 'A2': yunusEmreA2BookDataEn, 'B1': yunusEmreB1BookDataEn, 'B2': yunusEmreB2BookDataEn };
      const booksAr = { 'A2': yunusEmreA2BookDataAr, 'B1': yunusEmreB1BookDataAr, 'B2': yunusEmreB2BookDataAr };
      bookEn = booksEn[currentLevel];
      bookAr = booksAr[currentLevel];
    }

    if (!bookEn) return null;

    // Apply dynamic custom storage images (shared/synced across all languages)
    let imagesToUse: Record<number, string> | null = null;
    if (selectedProphetId === 'ibrahim' && currentLevel === 'B2' && Object.keys(abrahamB2Images).length > 0) {
      imagesToUse = abrahamB2Images;
    } else if (selectedProphetId === 'musa') {
      if (currentLevel === 'A2' && Object.keys(mosesA2Images).length > 0) imagesToUse = mosesA2Images;
      else if (currentLevel === 'B1' && Object.keys(mosesB1Images).length > 0) imagesToUse = mosesB1Images;
      else if (currentLevel === 'B2' && Object.keys(mosesB2Images).length > 0) imagesToUse = mosesB2Images;
    } else if (selectedProphetId === 'yunusEmre') {
      if (currentLevel === 'A2' && Object.keys(yunusEmreA2Images).length > 0) imagesToUse = yunusEmreA2Images;
      else if (currentLevel === 'B1' && Object.keys(yunusEmreB1Images).length > 0) imagesToUse = yunusEmreB1Images;
      else if (currentLevel === 'B2' && Object.keys(yunusEmreB2Images).length > 0) imagesToUse = yunusEmreB2Images;
    }

    if (imagesToUse) {
      bookEn = {
        ...bookEn,
        pages: bookEn.pages.map(page => {
          if (imagesToUse && imagesToUse[page.id]) {
            return { ...page, image: imagesToUse[page.id] };
          }
          return page;
        })
      };
    }

    // Now construct the final book to return based on active language
    if (language === 'ar' && bookAr) {
      // 1. Apply Arabic audio files
      let audiosToUse: Record<number, string> | null = null;
      if (selectedProphetId === 'adam') {
        if (currentLevel === 'A2' && Object.keys(adamA2ArabicAudios).length > 0) audiosToUse = adamA2ArabicAudios;
        else if (currentLevel === 'B1' && Object.keys(adamB1ArabicAudios).length > 0) audiosToUse = adamB1ArabicAudios;
        else if (currentLevel === 'B2' && Object.keys(adamB2ArabicAudios).length > 0) audiosToUse = adamB2ArabicAudios;
      } else if (selectedProphetId === 'ibrahim') {
        if (currentLevel === 'A2' && Object.keys(abrahamA2ArabicAudios).length > 0) audiosToUse = abrahamA2ArabicAudios;
        else if (currentLevel === 'B1' && Object.keys(abrahamB1ArabicAudios).length > 0) audiosToUse = abrahamB1ArabicAudios;
        else if (currentLevel === 'B2' && Object.keys(abrahamB2ArabicAudios).length > 0) audiosToUse = abrahamB2ArabicAudios;
      } else if (selectedProphetId === 'musa') {
        if (currentLevel === 'A2' && Object.keys(mosesA2ArabicAudios).length > 0) audiosToUse = mosesA2ArabicAudios;
        else if (currentLevel === 'B1' && Object.keys(mosesB1ArabicAudios).length > 0) audiosToUse = mosesB1ArabicAudios;
        else if (currentLevel === 'B2' && Object.keys(mosesB2ArabicAudios).length > 0) audiosToUse = mosesB2ArabicAudios;
      } else if (selectedProphetId === 'mecca') {
        if (currentLevel === 'A2' && Object.keys(meccaA2ArabicAudios).length > 0) audiosToUse = meccaA2ArabicAudios;
        else if (currentLevel === 'B1' && Object.keys(meccaB1ArabicAudios).length > 0) audiosToUse = meccaB1ArabicAudios;
        else if (currentLevel === 'B2' && Object.keys(meccaB2ArabicAudios).length > 0) audiosToUse = meccaB2ArabicAudios;
      } else if (selectedProphetId === 'yunusEmre') {
        if (currentLevel === 'A2' && Object.keys(yunusA2ArabicAudios).length > 0) audiosToUse = yunusA2ArabicAudios;
        else if (currentLevel === 'B1' && Object.keys(yunusB1ArabicAudios).length > 0) audiosToUse = yunusB1ArabicAudios;
        else if (currentLevel === 'B2' && Object.keys(yunusB2ArabicAudios).length > 0) audiosToUse = yunusB2ArabicAudios;
      }

      // 2. Synchronize images directly from bookEn to ensure absolute synchrony!
      const englishPageImages: Record<number, string> = {};
      bookEn.pages.forEach(p => {
        if (p.image) {
          englishPageImages[p.id] = p.image;
        }
      });

      bookAr = {
        ...bookAr,
        pages: bookAr.pages.map(page => {
          const updatedPage = { ...page };
          // Enforce English image synchrony
          if (englishPageImages[page.id]) {
            updatedPage.image = englishPageImages[page.id];
          }
          // Enforce Arabic audio Url if exists
          if (audiosToUse && audiosToUse[page.id]) {
            updatedPage.audioUrl = audiosToUse[page.id];
          }
          return updatedPage;
        })
      };

      return bookAr;
    }

    return bookEn;
  }, [
    selectedProphetId, 
    currentLevel, 
    language, 
    abrahamB2Images, 
    mosesA2Images, 
    mosesB1Images, 
    mosesB2Images, 
    yunusEmreA2Images, 
    yunusEmreB1Images, 
    yunusEmreB2Images,
    yunusA2ArabicAudios,
    yunusB1ArabicAudios,
    yunusB2ArabicAudios,
    mosesA2ArabicAudios,
    mosesB1ArabicAudios,
    mosesB2ArabicAudios,
    abrahamA2ArabicAudios,
    abrahamB1ArabicAudios,
    abrahamB2ArabicAudios,
    meccaA2ArabicAudios,
    meccaB1ArabicAudios,
    meccaB2ArabicAudios,
    adamA2ArabicAudios,
    adamB1ArabicAudios,
    adamB2ArabicAudios
  ]);

  const currentPage = currentBook?.pages[currentPageIndex];
  const totalPages = currentBook?.pages.length || 0;
  const progress = totalPages > 0 ? (currentPageIndex + 1) / totalPages : 0;

  const currentCollection = useMemo(() => {
    if (!selectedProphetId) return null;
    if (selectedProphetId === 'mecca') return 'history';
    if (selectedProphetId === 'yunusEmre') return 'turkish';
    return 'prophets';
  }, [selectedProphetId]);

  // Dynamic UI theme classes based on active collection
  const themeClasses = useMemo(() => {
    if (currentCollection === 'history') {
      return {
        headerBg: "bg-emerald-950/85 border-emerald-500/20",
        headerSubtitle: "text-emerald-400",
        buttonSec: "bg-emerald-500/10 border-emerald-500/30 text-parchment hover:bg-emerald-500/20",
        progressTrack: "bg-emerald-500/10",
        progressBar: "bg-emerald-500",
        percentageText: "text-emerald-400/80",
        mainBg: !showSummary && (currentLevel === 'A2' || currentLevel === 'B1' 
          ? "bg-[#F4F7F5]/95" 
          : "bg-[#EDF2EE]/95"),
        cardBorder: "border-emerald-500/20",
        navButton: "bg-emerald-700 border-emerald-500 text-white hover:bg-emerald-800 hover:scale-110",
        goldText: "text-emerald-400",
        quoteLine: "via-emerald-500/40",
        // Side-menu specific
        menuOverlayBg: "bg-emerald-950/60",
        menuBg: "bg-[#042416]/95",
        menuBorder: "border-emerald-500/10",
        menuAccentText: "text-emerald-400",
        menuHoverBg: "hover:bg-emerald-500/10",
        menuSectionHeader: "text-emerald-400/40",
        menuItemActive: "bg-emerald-600 text-white",
        menuItemHover: "hover:bg-emerald-500/5 text-parchment/60",
        menuCloseButton: "text-emerald-400/40 hover:text-emerald-400",
        menuLogoContainer: "border-emerald-500/20 bg-emerald-500/10 shadow-[0_2px_10px_rgba(16,185,129,0.15)]",
      };
    } else if (currentCollection === 'turkish') {
      return {
        headerBg: "bg-[#0D1D2C]/85 border-[#22D3EE]/20",
        headerSubtitle: "text-[#22D3EE]",
        buttonSec: "bg-[#22D3EE]/10 border-[#22D3EE]/30 text-parchment hover:bg-[#22D3EE]/20",
        progressTrack: "bg-[#22D3EE]/10",
        progressBar: "bg-[#22D3EE]",
        percentageText: "text-[#22D3EE]/80",
        mainBg: !showSummary && (currentLevel === 'A2' || currentLevel === 'B1' 
          ? "bg-[#F2F6F9]/95" 
          : "bg-[#EAF0F4]/95"),
        cardBorder: "border-[#22D3EE]/20",
        navButton: "bg-sky-700 border-sky-450 text-white hover:bg-sky-850 hover:scale-110",
        goldText: "text-[#22D3EE]",
        quoteLine: "via-[#22D3EE]/40",
        // Side-menu specific
        menuOverlayBg: "bg-[#06121D]/60",
        menuBg: "bg-[#0a1826]/95",
        menuBorder: "border-[#22D3EE]/10",
        menuAccentText: "text-[#22D3EE]",
        menuHoverBg: "hover:bg-[#22D3EE]/10",
        menuSectionHeader: "text-[#22D3EE]/40",
        menuItemActive: "bg-sky-700 text-white",
        menuItemHover: "hover:bg-[#22D3EE]/5 text-parchment/60",
        menuCloseButton: "text-[#22D3EE]/40 hover:text-[#22D3EE]",
        menuLogoContainer: "border-[#22D3EE]/20 bg-[#22D3EE]/10 shadow-[0_2px_10px_rgba(34,211,238,0.15)]",
      };
    } else {
      // Default 'prophets'
      return {
        headerBg: "bg-amber-950/80 border-amber-400/20",
        headerSubtitle: "text-gold",
        buttonSec: "bg-amber-400/10 border-amber-400/30 text-parchment hover:bg-amber-400/20",
        progressTrack: "bg-gold/10",
        progressBar: "bg-gold",
        percentageText: "text-gold/60",
        mainBg: !showSummary && (currentLevel === 'A2' || currentLevel === 'B1' 
          ? "bg-orange-50/95" 
          : "bg-parchment/95"),
        cardBorder: "border-amber-400/10",
        navButton: currentLevel === 'A2' || currentLevel === 'B1' 
          ? "bg-amber-600 border-amber-400 text-white hover:bg-amber-700 hover:scale-110" 
          : "bg-gold border-gold/40 text-white hover:bg-gold/80 hover:scale-110",
        goldText: "text-gold",
        quoteLine: "via-gold/40",
        // Side-menu specific
        menuOverlayBg: "bg-[#14221a]/60",
        menuBg: "bg-[#14221a]/95",
        menuBorder: "border-amber-400/10",
        menuAccentText: "text-gold",
        menuHoverBg: "hover:bg-gold/10",
        menuSectionHeader: "text-gold/40",
        menuItemActive: "bg-gold text-white",
        menuItemHover: "hover:bg-gold/5 text-parchment/60",
        menuCloseButton: "text-gold/40 hover:text-gold",
        menuLogoContainer: "border-gold/20 bg-gold/10 shadow-[0_2px_10px_rgba(212,175,55,0.15)]",
      };
    }
  }, [currentCollection, currentLevel, showSummary]);

  const currentBookTitle = useMemo(() => {
    if (!currentBook) return '';
    if (language === 'ar') {
      if (selectedProphetId === 'adam') {
        return 'قصص الأنبياء: آدم (عليه السلام)';
      }
      if (selectedProphetId === 'ibrahim') {
        return 'قصص الأنبياء: إبراهيم (عليه السلام)';
      }
      if (selectedProphetId === 'musa') {
        return 'قصص الأنبياء: موسى (عليه السلام)';
      }
      if (selectedProphetId === 'mecca') {
        return 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام';
      }
      if (selectedProphetId === 'yunusEmre') {
        return 'أعلام التراث التركي الإسلامي: يونس إمره';
      }
      return currentBook.title
        .replace(/stories of the prophets:/gi, 'قصص الأنبياء:')
        .replace(/prophet abraham \(as\)/gi, 'النبي إبراهيم (عليه السلام)')
        .replace(/prophet adam \(as\)/gi, 'النبي آدم (عليه السلام)')
        .replace(/prophet moses \(as\)/gi, 'النبي موسى (عليه السلام)');
    }
    
    // English
    if (selectedProphetId === 'mecca') {
      return 'Islamic History & Civilization: Mecca';
    }
    if (selectedProphetId === 'yunusEmre') {
      return 'Great Figures of Turkish-Islamic Heritage: Yunus Emre';
    }
    return currentBook.title;
  }, [currentBook, language, selectedProphetId]);

  // --- Handlers ---
  const handleStartJourney = (prophetId: string, level: Level) => {
    setSelectedProphetId(prophetId);
    setCurrentLevel(level);
    setCurrentPageIndex(0);
    setUserAnswers({});
    setIsMenuOpen(false);
    setShowSummary(false);
    resetStats();
  };

  const handleLevelSelect = (level: Level) => {
    setCurrentLevel(level);
    setCurrentPageIndex(0);
    setUserAnswers({});
    setIsMenuOpen(false);
    setShowSummary(false);
    resetStats();
  };

  const handleReturnToLibrary = () => {
    setSelectedProphetId(null);
    setCurrentLevel(null);
    setCurrentPageIndex(0);
    setIsMenuOpen(false);
    setShowSummary(false);
    resetStats();
  };

  const handleReadAgain = () => {
    setCurrentPageIndex(0);
    setUserAnswers({});
    setShowSummary(false);
    resetStats();
  };

  const handleReviewStory = () => {
    setShowSummary(false);
  };

  const handleNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in form controls
      const activeEl = document.activeElement as HTMLElement | null;
      if (
        activeEl && (
          activeEl.tagName === 'INPUT' || 
          activeEl.tagName === 'TEXTAREA' || 
          activeEl.isContentEditable
        )
      ) {
        return;
      }

      // Only navigate if a story is active, no overlays are open, and summary is not shown
      if (!selectedProphetId || showSummary) return;
      if (isMenuOpen || isTeacherGuideOpen || isSelfStudyOpen || isQuickTOCOpen) return;

      if (e.key === 'ArrowRight') {
        if (language === 'ar') {
          handlePrevPage();
        } else {
          handleNextPage();
        }
      } else if (e.key === 'ArrowLeft') {
        if (language === 'ar') {
          handleNextPage();
        } else {
          handlePrevPage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    selectedProphetId,
    showSummary,
    isMenuOpen,
    isTeacherGuideOpen,
    isSelfStudyOpen,
    isQuickTOCOpen,
    currentPageIndex,
    totalPages,
    language
  ]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (totalPages <= 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    const pageIdx = Math.min(
      totalPages - 1,
      Math.max(0, Math.floor(percentage * totalPages))
    );
    setCurrentPageIndex(pageIdx);
  };

  const handleAnswer = (id: string, answer: boolean) => {
    setUserAnswers(prev => ({ ...prev, [id]: answer }));
  };

  // --- Render Helpers ---
  if (!isAuthenticated) {
    return (
      <div 
        dir={isRTL ? 'rtl' : 'ltr'}
        lang={language}
        className={cn(
          "min-h-screen bg-wood flex flex-col items-center justify-center relative overflow-hidden page-texture p-4",
          isDyslexic && "font-dyslexic-mode"
        )}
      >
        <ParchmentEffect />

        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 w-full max-w-md bg-[#1e1915]/95 rounded-2xl p-8 border-2 border-gold/40 shadow-[0_0_50px_rgba(212,175,55,0.15)] text-center backdrop-blur-sm">
          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold/40" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold/40" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold/40" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold/40" />

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>

          <h2 className="font-display text-2xl tracking-wide text-gold uppercase mb-2">Access Required</h2>
          <p className="font-serif text-[#F5EDD6]/70 text-[14px] leading-relaxed mb-6">
            Please enter the access code provided to you to unlock the application.
          </p>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="relative flex items-center">
              <input 
                type={showPassword ? "text" : "password"}
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="Access Code"
                className="w-full bg-[#120F0D]/90 border border-gold/30 rounded-xl pl-5 pr-12 py-3.5 text-center text-white placeholder-[#F5EDD6]/30 font-mono text-base focus:outline-none focus:border-gold/70 focus:ring-1 focus:ring-gold/50 transition-all shadow-inner"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3.5 text-gold/60 hover:text-gold p-1 transition-colors cursor-pointer"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {errorMsg && (
              <p className="text-red-400 font-serif text-[12px] animate-pulse">
                {errorMsg}
              </p>
            )}

            <button 
              type="submit"
              className="w-full bg-gold/10 hover:bg-gold/20 text-gold border border-gold/50 rounded-xl px-6 py-3.5 font-display text-[12px] uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)] active:scale-95"
            >
              Unlock App
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gold/10 flex justify-center gap-4">
            <span className="font-display text-[9px] uppercase tracking-widest text-[#F5EDD6]/40">Interactive E-Book Series</span>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedProphetId || !currentLevel) {
    return <HomePage onStart={handleStartJourney} />;
  }

  const renderPage = () => {
    if (showSummary) {
      return (
        <SummaryDashboard 
          bookData={currentBook!} 
          onFinish={handleReturnToLibrary}
          onReviewStory={handleReviewStory}
          onReadAgain={handleReadAgain}
          onStartJourney={handleStartJourney}
        />
      );
    }

    if (!currentPage) return null;

    switch (currentPage.type) {
      case 'story':
        return (
          <StoryPage 
            page={currentPage} 
            allPages={currentBook?.pages || []}
            currentIndex={currentPageIndex}
            isDyslexic={isDyslexic} 
            fontSize={currentBook?.baseFontSize || 12}
            level={currentLevel}
            collectionId={currentCollection || 'prophets'}
          />
        );
      case 'map':
        return (
          <InteractiveMapPage 
            page={currentPage}
            collectionId={currentCollection || 'prophets'}
          />
        );
      case 'glossary':
        return <MasterGlossary bookData={currentBook!} page={currentPage} collectionId={currentCollection || 'prophets'} />;
      case 'final-challenge':
        return <FinalChallenge bookData={currentBook!} onComplete={() => setShowSummary(true)} />;
      default:
        return (
          <ExercisePage 
            page={currentPage} 
            userAnswers={userAnswers} 
            handleAnswer={handleAnswer} 
            level={currentLevel}
            collectionId={currentCollection || 'prophets'}
          />
        );
    }
  };

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={language}
      className={cn(
        "h-dvh max-h-dvh bg-wood flex flex-col relative overflow-hidden page-texture",
        isDyslexic && "font-dyslexic-mode"
      )}
    >
      {/* Living Parchment Effect */}
      <ParchmentEffect />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Navigation Header */}
      {!showSummary && (
        <header className={cn(
          "relative z-50 h-12 sm:h-14 md:h-16 border-b px-2.5 sm:px-5 md:px-8 flex items-center justify-between transition-colors duration-500 shrink-0 gap-2 sm:gap-4",
          themeClasses.headerBg
        )}>
          {/* Left: Menu button + Title & Level */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 shrink">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-1.5 sm:p-2 rounded-full transition-colors shrink-0 hover:bg-white/10 text-parchment cursor-pointer"
              title={t('nav.menu')}
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            <div className="h-5 sm:h-6 w-px bg-gold/20 shrink-0 hidden sm:block" />

            <div className="flex flex-col min-w-0">
              <h2 className={cn(
                "font-display text-[11px] sm:text-[15px] md:text-[18px] tracking-tight leading-snug truncate max-w-[100px] xs:max-w-[140px] sm:max-w-xs md:max-w-sm lg:max-w-md",
                "text-parchment"
              )} title={currentBookTitle}>{currentBookTitle}</h2>
              <span className={cn(
                "font-serif italic text-[8px] sm:text-[10px] uppercase tracking-widest leading-none mt-0.5",
                themeClasses.headerSubtitle
              )}>
                {t('nav.level')} {formatNumber(currentLevel || '')}
              </span>
            </div>
          </div>

          {/* Center / Inline Language Toggle */}
          <div className="shrink-0 flex items-center">
            <LanguageToggle />
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
            {/* Download PDF button */}
            <button 
              onClick={() => currentBook && generateBookPDF(currentBook)}
              className={cn(
                "flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all border shrink-0 text-xs",
                themeClasses.buttonSec
              )}
              title={t('nav.downloadPdf')}
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden lg:inline font-display text-[10px] sm:text-[11px] uppercase tracking-wider">
                {t('nav.downloadPdf')}
              </span>
            </button>

            {/* Progress Bar & Percentage */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <div 
                onClick={handleProgressBarClick}
                className={cn(
                  "w-20 sm:w-28 md:w-36 lg:w-40 h-2 sm:h-2.5 rounded-full overflow-hidden border border-white/10 shadow-inner flex items-center p-[1px] cursor-pointer hover:scale-105 active:scale-95 transition-transform", 
                  themeClasses.progressTrack
                )}
                title={language === 'ar' ? "انقر للانتقال السريع للصفحة" : "Click to quick-jump to page"}
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress * 100}%` }}
                  className={cn("h-full rounded-full shadow-sm shadow-black/20", themeClasses.progressBar)}
                />
              </div>
              <span className={cn("font-display text-[10px] sm:text-[12px] font-bold tracking-wider", themeClasses.percentageText)}>
                {formatNumber(Math.round(progress * 100))}%
              </span>
            </div>

            {/* Return to Library (Home) */}
            <button 
              onClick={handleReturnToLibrary}
              className={cn(
                "p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-md flex items-center justify-center border shrink-0",
                "bg-amber-950/40 border-amber-400/30 text-gold hover:text-parchment hover:bg-amber-400/25 hover:border-amber-400/60 cursor-pointer",
                currentCollection === 'history' && "bg-emerald-950/40 border-emerald-500/30 text-emerald-400 hover:text-parchment hover:bg-emerald-500/25 hover:border-emerald-500/60",
                currentCollection === 'turkish' && "bg-[#0D1D2C]/40 border-[#22D3EE]/30 text-[#22D3EE] hover:text-parchment hover:bg-[#22D3EE]/25 hover:border-[#22D3EE]/60"
              )}
              title={t('nav.returnToLibrary')}
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 flex flex-col overflow-hidden min-h-0">
        <div className={cn(
          "flex-1 w-full relative page-texture transition-all duration-500 flex flex-col overflow-hidden min-h-0",
          themeClasses.mainBg
        )}>
          {/* Page Navigation Controls - Floating Side Buttons on Desktop (lg+) */}
          {!showSummary && (
            <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none z-30 px-2 lg:px-3 xl:px-5">
              <button 
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
                className={cn(
                  "pointer-events-auto p-2.5 lg:p-3 rounded-full shadow-xl transition-all border-2 backdrop-blur-md",
                  currentPageIndex === 0 ? "opacity-0 cursor-default" : "opacity-90 hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer",
                  themeClasses.navButton
                )}
                title={t('nav.back')}
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={3} />
              </button>
              <button 
                onClick={handleNextPage}
                disabled={currentPageIndex === totalPages - 1}
                className={cn(
                  "pointer-events-auto p-2.5 lg:p-3 rounded-full shadow-xl transition-all border-2 backdrop-blur-md",
                  currentPageIndex === totalPages - 1 ? "opacity-0 cursor-default" : "opacity-90 hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer",
                  themeClasses.navButton
                )}
                title={t('nav.next')}
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={3} />
              </button>
            </div>
          )}

          <div className="flex-1 overflow-hidden min-h-0 flex flex-col">
            <div className={cn(
              currentPage?.type === 'map' ? "w-full h-full" : "w-full max-w-[1700px] mx-auto h-full flex flex-col min-h-0",
              !showSummary && currentPage?.type !== 'map' && "p-3 sm:p-5 md:p-8 lg:py-8 lg:px-20 xl:px-24 2xl:px-28"
            )}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={showSummary ? 'summary' : `${currentLevel}-${currentPageIndex}`}
                  initial={{ opacity: 0, scale: showSummary ? 1.05 : 1, y: showSummary ? 0 : 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: showSummary ? 0.95 : 1, y: showSummary ? 0 : -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-full flex flex-col overflow-hidden min-h-0"
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {!showSummary && (
        <footer className={cn(
          "relative z-50 h-11 sm:h-13 md:h-14 border-t px-2.5 sm:px-5 md:px-8 flex items-center justify-between transition-colors duration-500 shrink-0 gap-2",
          themeClasses.headerBg
        )}>
          {/* Left: TOC button */}
          <div className="flex items-center gap-2 relative shrink-0">
            <button 
              onClick={() => setIsQuickTOCOpen(prev => !prev)}
              className={cn(
                "flex items-center gap-1.5 cursor-pointer group/page px-2 sm:px-2.5 py-1 rounded-lg border border-transparent transition-all duration-300",
                "hover:bg-white/10 hover:border-gold/20 select-none active:scale-95"
              )}
              title={t('nav.tableOfContents')}
            >
              <BookMarked className={cn(themeClasses.goldText, "w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2] shrink-0")} />
              <span className={cn(
                "font-serif italic text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1",
                "text-parchment/80 group-hover/page:text-parchment"
              )}>
                {t('nav.page')} {formatNumber(currentPageIndex + 1)} {t('nav.of')} {formatNumber(totalPages)}
                <ChevronUp className={cn("w-3 h-3 opacity-40 transition-transform duration-300 shrink-0", isQuickTOCOpen && "rotate-180")} />
              </span>
            </button>

            {/* Quick Table of Contents Popover */}
            <AnimatePresence>
              {isQuickTOCOpen && (
                <>
                  {/* Backdrop to close click outside */}
                  <div 
                    className="fixed inset-0 z-40 bg-transparent" 
                    onClick={() => setIsQuickTOCOpen(false)} 
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={cn(
                      "absolute bottom-14 left-0 z-50 w-72 sm:w-80 md:w-96 rounded-2xl shadow-2xl border backdrop-blur-2xl p-3 sm:p-4 flex flex-col gap-3",
                      themeClasses.menuBg,
                      themeClasses.menuBorder,
                      language === 'ar' ? "left-auto right-0 origin-bottom-right" : "origin-bottom-left"
                    )}
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <h4 className={cn("font-display text-xs md:text-sm uppercase tracking-wider font-semibold", themeClasses.goldText)}>
                        {t('nav.tableOfContents')}
                      </h4>
                      <span 
                        style={{ fontFamily: "'Poppins', sans-serif" }} 
                        className="text-[11px] text-white/50 font-medium"
                      >
                        {formatNumber(totalPages)} {language === 'ar' ? "صفحات" : "pages"}
                      </span>
                    </div>

                    <div className="space-y-1.5 max-h-64 sm:max-h-72 overflow-y-auto custom-scrollbar pr-1.5 scroll-smooth">
                      {currentBook?.pages.map((page, idx) => {
                        const isActive = currentPageIndex === idx;
                        return (
                          <button
                            key={page.id}
                            onClick={() => {
                              setCurrentPageIndex(idx);
                              setIsQuickTOCOpen(false);
                            }}
                            className={cn(
                              "w-full p-2 sm:p-2.5 rounded-xl text-left font-serif text-xs sm:text-[14px] flex items-center justify-between gap-2.5 transition-all",
                              language === 'ar' && "text-right flex-row-reverse",
                              isActive 
                                ? "bg-gold/25 text-white font-semibold border border-gold/30" 
                                : "hover:bg-white/5 text-parchment/70 hover:text-white border border-transparent"
                            )}
                          >
                            <div className={cn("flex items-center gap-2 min-w-0", language === 'ar' && "flex-row-reverse")}>
                              <span 
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                                className={cn(
                                  "text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-md min-w-[20px] text-center font-medium shrink-0",
                                  isActive ? "bg-gold/40 text-white" : "bg-white/5 text-white/40"
                                )}
                              >
                                {formatNumber(idx + 1)}
                              </span>
                              <span className="truncate">{page.title}</span>
                            </div>
                            
                            {/* Page Type Badge/Indicator */}
                            <div className="flex items-center gap-1 shrink-0">
                              {(page.type === 'quiz' || page.type === 'vocabulary-match' || page.type === 'sequencing' || page.type === 'game') && (
                                <span className="text-[10px] bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 px-1.5 py-0.5 rounded font-display">
                                  {language === 'ar' ? 'معرفة' : 'Kc'}
                                </span>
                              )}
                              {page.type === 'exercises' && (
                                <span className="text-[10px] bg-amber-500/10 text-amber-400/90 border border-amber-500/20 px-1.5 py-0.5 rounded font-display">
                                  {language === 'ar' ? 'تمارين' : 'Ex'}
                                </span>
                              )}
                              {page.type === 'glossary' && (
                                <span className="text-[10px] bg-sky-500/10 text-sky-400/90 border border-sky-500/20 px-1.5 py-0.5 rounded font-display">
                                  {language === 'ar' ? 'قاموس' : 'Gl'}
                                </span>
                              )}
                              {page.type === 'final-challenge' && (
                                <span className="text-[10px] bg-red-500/10 text-red-400/90 border border-red-500/20 px-1.5 py-0.5 rounded font-display">
                                  {language === 'ar' ? 'تحدي' : 'Ch'}
                                </span>
                              )}
                              {isActive && (
                                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Center: Integrated Responsive Navigation Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button 
              onClick={handlePrevPage}
              disabled={currentPageIndex === 0}
              className={cn(
                "flex items-center gap-1 px-2 sm:px-3 py-1 rounded-lg border text-xs font-bold transition-all disabled:opacity-25 disabled:cursor-not-allowed shadow-sm active:scale-95 cursor-pointer",
                themeClasses.buttonSec
              )}
              title={t('nav.back')}
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{t('nav.back')}</span>
            </button>

            <button 
              onClick={handleNextPage}
              disabled={currentPageIndex === totalPages - 1}
              className={cn(
                "flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg border text-xs font-bold transition-all disabled:opacity-25 disabled:cursor-not-allowed shadow-md active:scale-95 cursor-pointer",
                themeClasses.navButton
              )}
              title={t('nav.next')}
            >
              <span className="hidden sm:inline">{t('nav.next')}</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Right: Quranic Quote or Collection Title */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Quranic Quote - Yusuf 111 - Shown on 2XL+ */}
            <div className="hidden 2xl:flex flex-col items-center">
              <div className="flex items-center gap-2">
                <p className={cn(
                  "tracking-wide drop-shadow-sm text-center font-medium text-xs",
                  themeClasses.goldText,
                  language === 'ar' ? "text-sm font-bold" : "font-serif italic text-xs"
                )} dir={language === 'ar' ? "rtl" : "ltr"}>
                  {language === 'ar' 
                    ? "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ"
                    : "\"In their stories is a lesson for those who have intelligence.\""}
                </p>
              </div>
            </div>

            <p className="font-display text-[10px] sm:text-[11px] tracking-[0.15em] text-white/70 font-semibold uppercase truncate max-w-[120px] lg:max-w-none">
              {currentCollection === 'history' ? t('home.collection2') : currentCollection === 'turkish' ? t('home.collection3') : t('home.collection1')}
            </p>
          </div>
        </footer>
      )}

      {/* Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn("fixed inset-0 backdrop-blur-sm z-[200]", themeClasses.menuOverlayBg)}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className={cn("w-80 h-full backdrop-blur-2xl shadow-2xl p-8 flex flex-col border-r", themeClasses.menuBg, themeClasses.menuBorder)}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center overflow-hidden p-1.5", themeClasses.menuLogoContainer)}>
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/home_icon.png?alt=media&token=d8075082-0856-42d8-bc20-db4d7ce86c99"
                      alt=""
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-display text-xl text-parchment tracking-tight">
                    {t('nav.mainMenu')}
                  </h3>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className={cn("transition-colors", themeClasses.menuCloseButton)}>
                  <X size={24} />
                </button>
              </div>

              <div className="lg:hidden mb-8">
                <LanguageToggle />
              </div>

              <div className="space-y-2 flex-1">
                <button 
                  onClick={handleReturnToLibrary}
                  className={cn("w-full p-4 rounded-xl flex items-center gap-4 text-parchment transition-all group", themeClasses.menuHoverBg)}
                >
                  <Home size={20} className={cn("group-hover:scale-110 transition-transform", themeClasses.menuAccentText)} />
                  <span className="font-serif font-bold">{t('nav.libraryHome')}</span>
                </button>
                
                <div className="py-4">
                  <h4 className={cn("font-display text-[10px] uppercase tracking-widest mb-4 px-4", themeClasses.menuSectionHeader)}>
                    {t('nav.guidesResources')}
                  </h4>
                  <button 
                    onClick={() => {
                      setIsTeacherGuideOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className={cn("w-full p-4 rounded-xl flex items-center gap-4 text-parchment transition-all group", themeClasses.menuHoverBg)}
                  >
                    <GraduationCap size={20} className={cn("group-hover:scale-110 transition-transform", themeClasses.menuAccentText)} />
                    <span className="font-serif font-bold">{t('nav.teacherGuide')}</span>
                  </button>
                  <button 
                    onClick={() => {
                      setIsSelfStudyOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className={cn("w-full p-4 rounded-xl flex items-center gap-4 text-parchment transition-all group", themeClasses.menuHoverBg)}
                  >
                    <ClipboardList size={20} className={cn("group-hover:scale-110 transition-transform", themeClasses.menuAccentText)} />
                    <span className="font-serif font-bold">{t('nav.selfStudyGuide')}</span>
                  </button>
                  <button 
                    onClick={() => {
                      currentBook && generateBookPDF(currentBook);
                      setIsMenuOpen(false);
                    }}
                    className={cn("w-full p-4 rounded-xl flex items-center gap-4 text-parchment transition-all group", themeClasses.menuHoverBg)}
                  >
                    <Download size={20} className={cn("group-hover:scale-110 transition-transform", themeClasses.menuAccentText)} />
                    <span className="font-serif font-bold">{t('nav.downloadPdf')}</span>
                  </button>
                </div>

                <div className="py-4">
                  <h4 className={cn("font-display text-[10px] uppercase tracking-widest mb-4 px-4", themeClasses.menuSectionHeader)}>
                    {t('nav.tableOfContents')}
                  </h4>
                  <div className="space-y-1 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                    {currentBook?.pages.map((page, idx) => (
                      <button 
                        key={page.id}
                        onClick={() => {
                          setCurrentPageIndex(idx);
                          setIsMenuOpen(false);
                        }}
                        className={cn(
                          "w-full p-3 rounded-lg text-left font-serif text-sm flex items-center gap-3 transition-all",
                          isRTL && "text-right",
                          currentPageIndex === idx ? themeClasses.menuItemActive : themeClasses.menuItemHover
                        )}
                      >
                        <span className="font-display text-[10px] opacity-40">{formatNumber(idx + 1)}</span>
                        <span className="truncate">{page.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Teacher Guide Overlay */}
      <TeacherGuide 
        isOpen={isTeacherGuideOpen} 
        onClose={() => setIsTeacherGuideOpen(false)} 
        content={currentBook?.teacherGuide || []}
        metadata={currentBook?.teacherGuideMetadata}
        bookId={currentBook?.id}
        collectionId={currentCollection || 'prophets'}
      />

      {/* Self-Study Guide Overlay (Student Guide) */}
      <SelfStudyGuide 
        isOpen={isSelfStudyOpen} 
        onClose={() => setIsSelfStudyOpen(false)} 
        content={currentBook?.selfStudyGuide || []}
        studentGuideText={currentBook?.studentGuideText}
        studentGuideSections={currentBook?.studentGuideSections}
        metadata={currentBook?.studentGuideMetadata}
        title={t('nav.studentSelfStudyGuide')}
        subtitle={t('nav.reflectionPractice')}
        footerText={t('nav.interactiveEbookSeries')}
        collectionId={currentCollection || 'prophets'}
      />

      {/* Background PDF Generation Notification Card */}
      <AnimatePresence>
        {activePdfDownloads.map((name) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-[#1E293B]/95 text-white p-4 pr-5 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md max-w-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="font-display font-medium text-[10px] uppercase tracking-widest text-amber-400">Background Download</h5>
              <p className="font-serif text-[13px] text-slate-200 truncate mt-0.5" title={name}>
                Generating PDF for {name}...
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const App = () => (
  <StoryProgressProvider>
    <AppContent />
  </StoryProgressProvider>
);

export default App;
