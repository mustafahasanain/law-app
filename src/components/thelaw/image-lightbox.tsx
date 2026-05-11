'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog, DialogContent, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface ImageLightboxProps {
  images: ImageItem[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImageLightbox({ images, initialIndex = 0, open, onOpenChange }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);

  // Track open state transitions to reset index on open
  if (open && !wasOpen) {
    // Dialog just opened - will be handled by the effect below
  }
  // Use effect to sync state on open change (event-driven, not cascading render)
  const justOpened = open && !wasOpen;
  useEffect(() => {
    setWasOpen(open);
  }, [open]);

  useEffect(() => {
    if (justOpened) {
      setCurrentIndex(initialIndex);
      setZoomed(false);
    }
  }, [justOpened, initialIndex]);

  const goToPrev = useCallback(() => {
    setZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') onOpenChange(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, goToPrev, goToNext, onOpenChange]);

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-4xl bg-charcoal-dark border-gold/30 p-0 overflow-hidden"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">
          {currentImage.title || currentImage.alt}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Image lightbox viewer - {currentImage.alt}
        </DialogDescription>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-charcoal border-b border-gold/20">
          <div>
            {currentImage.title && (
              <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                {currentImage.title}
              </h3>
            )}
            {currentImage.category && (
              <span className="text-gold text-xs uppercase tracking-wider font-bold">{currentImage.category}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {/* Zoom toggle */}
            <button
              onClick={() => setZoomed(!zoomed)}
              className="w-9 h-9 flex items-center justify-center text-gold hover:bg-gold/20 rounded transition-colors"
              aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
            >
              {zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
            </button>
            {/* Close button */}
            <button
              onClick={() => onOpenChange(false)}
              className="w-9 h-9 flex items-center justify-center text-gold hover:bg-gold/20 rounded transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Image area */}
        <div className="relative bg-black/50 flex items-center justify-center" style={{ minHeight: '400px', maxHeight: '70vh' }}>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className={`max-w-full max-h-[65vh] object-contain transition-transform duration-300 ${zoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setZoomed(!zoomed)}
          />

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-charcoal/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all rounded"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-charcoal/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all rounded"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Footer with dots */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-charcoal border-t border-gold/20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setZoomed(false); }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-gold w-6' : 'bg-gold/30 hover:bg-gold/60'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
            <span className="text-gray-400 text-xs ml-3">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
