'use client';

import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function PageSkeleton() {
  return (
    <div className="min-h-screen">
      {/* Header skeleton */}
      <div className="border-b border-border-gray dark:border-gray-800">
        {/* Top bar */}
        <div className="hidden md:block h-10 bg-charcoal dark:bg-charcoal-dark" />
        {/* Nav bar */}
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="flex gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-16" />
            ))}
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="h-[600px] md:h-[700px] bg-charcoal dark:bg-charcoal-dark relative">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Skeleton className="h-8 w-56 bg-gray-700" />
            <Skeleton className="h-16 w-80 bg-gray-700" />
            <Skeleton className="h-4 w-64 bg-gray-700" />
            <Skeleton className="h-4 w-48 bg-gray-700" />
          </div>
          <div className="hidden lg:flex justify-end">
            <Skeleton className="h-[450px] w-[350px] bg-gray-700" />
          </div>
        </div>
      </div>

      {/* Practice areas skeleton */}
      <div className="py-20 bg-white dark:bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="h-4 w-40 mx-auto" />
            <Skeleton className="h-10 w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-start gap-4 p-6 border border-border-gray dark:border-gray-700">
                <Skeleton className="h-12 w-12 shrink-0" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials skeleton */}
      <div className="py-20 bg-charcoal dark:bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="h-4 w-40 mx-auto bg-gray-700" />
            <Skeleton className="h-10 w-64 mx-auto bg-gray-700" />
          </div>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Skeleton className="h-24 w-full mx-auto bg-gray-700" />
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-4 bg-gray-700" />
              ))}
            </div>
            <Skeleton className="h-5 w-32 mx-auto bg-gray-700" />
          </div>
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="bg-charcoal-dark dark:bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-6 w-32 bg-gray-700" />
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="h-4 w-full bg-gray-700" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
