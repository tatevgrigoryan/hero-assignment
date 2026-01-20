'use client'

import { useFormState } from "react-dom";
import { submitApplication } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";

const initialState = {
  message: "",
  success: false,
};

export function ApplicationForm({ listingId }: { listingId: string }) {
  const [state, formAction] = useFormState(submitApplication, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <div className="glass-panel rounded-3xl p-6 text-white mt-10">
      <h2 className="text-xl font-semibold mb-6">Apply for this role</h2>
      
      {state.message && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${state.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
          {state.message}
        </div>
      )}

      <form ref={formRef} action={formAction} className="space-y-4">
        <input type="hidden" name="listing_id" value={listingId} />
        
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Jane Doe" 
            required 
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-white/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="jane@example.com" 
            required 
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-white/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cover_letter" className="text-sm font-medium text-white/80">Cover Letter</label>
          <textarea
            id="cover_letter"
            name="cover_letter"
            rows={5}
            required
            className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Tell us why you're a great fit..."
          />
        </div>

        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </form>
    </div>
  );
}
