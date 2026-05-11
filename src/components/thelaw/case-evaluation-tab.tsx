'use client';

import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { CaseEvaluationModal } from './case-evaluation-modal';
import { useLanguage } from '@/lib/i18n/language-context';

export function CaseEvaluationTab() {
  const { t, isRTL } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`hidden sm:flex fixed ${isRTL ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 z-40 bg-gold text-charcoal px-2 py-4 writing-mode-vertical ${isRTL ? 'rounded-r-md' : 'rounded-l-md'} shadow-lg hover:shadow-xl transition-all duration-300 group min-h-[44px] min-w-[44px] items-center justify-center`}
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label={t.caseEvaluation.title}
      >
        <div className="flex items-center gap-1.5 md:gap-2">
          <FileText
            size={14}
            className={`transition-transform duration-300 md:w-[16px] md:h-[16px] ${isHovered ? 'scale-110' : ''}`}
          />
          <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            {t.caseEvaluation.title}
          </span>
        </div>
      </button>

      <CaseEvaluationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        context="Floating Side Tab"
      />
    </>
  );
}
