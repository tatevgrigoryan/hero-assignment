'use server'

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type ApplicationState = {
  message?: string;
  success?: boolean;
}

const initialState: ApplicationState = {
  message: "",
  success: false,
};

export async function submitApplication(prevState: ApplicationState, formData: FormData): Promise<ApplicationState> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return { success: false, message: "System configuration error. Please try again later." };
  }

  const listingId = formData.get("listing_id") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const coverLetter = formData.get("cover_letter") as string;

  if (!listingId || !name || !email || !coverLetter) {
    return { success: false, message: "All fields are required." };
  }

  const { error } = await supabase.rpc("fn_heroos__create_application", {
    listing_id: listingId,
    applicant_name: name,
    applicant_email: email,
    cover_letter: coverLetter,
  });

  if (error) {
    console.error("Application submission error:", error);
    return { success: false, message: "Failed to submit application. Please try again." };
  }

  return { success: true, message: "Application submitted successfully!" };
}
