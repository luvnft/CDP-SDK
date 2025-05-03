"use client";

import { useState } from "react";
import { pinata } from "@/utils/pinataConfig";

// Move these types and components to top-level
interface DeploymentStep {
  message: string;
  status: 'pending' | 'loading' | 'complete' | 'error';
}

const DeploymentStatus = ({ steps }: { steps: DeploymentStep[] }) => {
  return (
    <div className="w-full max-w-md bg-white p-6 mt-6 rounded-lg shadow-md">
      <h3 className="font-bold mb-4 text-gray-800">Deployment Progress</h3>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {step.status === 'pending' && (
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-3" />
            )}
            {step.status === 'loading' && (
              <div className="w-4 h-4 mr-3">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent" />
              </div>
            )}
            {step.status === 'complete' && (
              <svg className="w-4 h-4 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {step.status === 'error' && (
              <svg className="w-4 h-4 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className={`
              ${step.status === 'complete' ? 'text-green-700' : ''}
              ${step.status === 'loading' ? 'text-blue-700' : ''}
              ${step.status === 'error' ? 'text-red-700' : ''}
              ${step.status === 'pending' ? 'text-gray-400' : ''}
            `}>
              {step.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
