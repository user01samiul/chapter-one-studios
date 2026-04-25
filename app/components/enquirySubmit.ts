export type EnquiryFormData = {
  names: string;
  email: string;
  date: string;
  venue?: string;
  message: string;
};

export async function submitEnquiry(
  formData: EnquiryFormData,
  source: string,
) {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData, source }),
  });

  const result = (await response.json().catch(() => null)) as {
    message?: string;
  } | null;

  if (!response.ok) {
    throw new Error(result?.message || "We could not send your enquiry.");
  }

  return result?.message || "Enquiry sent successfully.";
}
