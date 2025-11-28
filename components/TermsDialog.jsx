import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

/**
 * Terms and Conditions Dialog Component
 * 
 * This component displays a terms and conditions popup that appears automatically
 * when the website is first opened. It uses localStorage to remember if the user
 * has already accepted the terms, so it won't show again after acceptance.
 * 
 * @param {boolean} isDark - Whether the app is in dark mode
 */
export default function TermsDialog({ isDark = true }) {
  // State to control dialog visibility
  const [open, setOpen] = useState(false);

  // Check localStorage on component mount to see if terms were already accepted
  useEffect(() => {
    const termsAccepted = localStorage.getItem("termsAccepted");
    // Only show dialog if terms haven't been accepted yet
    if (!termsAccepted) {
      // Small delay to ensure smooth page load
      setTimeout(() => {
        setOpen(true);
      }, 500);
    }
  }, []);

  // Handle accepting terms - save to localStorage and close dialog
  const handleAccept = () => {
    localStorage.setItem("termsAccepted", "true");
    setOpen(false);
  };

  // Handle canceling - just close the dialog (will show again on next visit)
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        {/* Overlay backdrop - darkens the background */}
        <Dialog.Overlay 
          className={`fixed inset-0 w-full h-full z-[100] ${
            isDark ? "bg-black/60" : "bg-black/40"
          } backdrop-blur-sm`} 
        />
        
        {/* Dialog content container */}
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4 z-[101]">
          <div className={`rounded-2xl shadow-2xl ${
            isDark 
              ? "bg-black/95 border border-white/10" 
              : "bg-white border border-slate-200"
          }`}>
            {/* Header section with title and close button */}
            <div className={`flex items-center justify-between p-6 border-b ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}>
              <Dialog.Title className={`text-xl font-semibold ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Terms and Conditions
              </Dialog.Title>
              <Dialog.Close 
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? "text-white/60 hover:bg-white/10 hover:text-white" 
                    : "text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                }`}
                aria-label="Close dialog"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Dialog.Close>
            </div>

            {/* Terms content */}
            <Dialog.Description className={`space-y-4 p-6 text-[15px] leading-relaxed ${
              isDark ? "text-white/80" : "text-slate-600"
            }`}>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please
                do not use this service.
              </p>
              <p>
                This website and its content are provided "as is" without warranty of any kind,
                either express or implied. We reserve the right to modify these terms at any time
                without prior notice.
              </p>
              <p>
                Your use of this website constitutes your agreement to all such terms, conditions,
                and notices. We may update these terms periodically, and continued use of the
                website after such changes constitutes acceptance of the new terms.
              </p>
            </Dialog.Description>

            {/* Action buttons */}
            <div className={`flex items-center gap-3 p-6 border-t ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}>
              <Dialog.Close asChild>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 text-white bg-brand-orange rounded-lg outline-none ring-offset-2 ring-brand-orange focus:ring-2 hover:bg-brand-orange/90 transition-colors font-medium"
                >
                  Accept
                </button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button
                  onClick={handleCancel}
                  className={`px-6 py-2.5 rounded-lg outline-none ring-offset-2 ring-brand-orange focus:ring-2 transition-colors font-medium ${
                    isDark
                      ? "text-white border border-white/20 hover:bg-white/10"
                      : "text-slate-800 border border-slate-300 hover:bg-slate-50"
                  }`}
                  aria-label="Close"
                >
                  Cancel
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

