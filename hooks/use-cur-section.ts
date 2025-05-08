import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { RefObject, useEffect, useRef } from "react";

export default function useCurSection(curSectionRef: RefObject<Element>, amount: number | "all" | "some" = "all") {
  const isInView = useInView(curSectionRef, { amount });
  const router = useRouter();
  const isInitialMount = useRef(true);
  const hasScrolled = useRef(false);

  useEffect(() => {
    // Handle initial page load
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // If there's no hash in the URL, scroll to top
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
      return;
    }

    // Only update hash if user has scrolled
    if (!hasScrolled.current) {
      hasScrolled.current = true;
      return;
    }

    const timeout = setTimeout(() => {
      const sectionId = curSectionRef.current?.id;
      if (isInView && sectionId) {
        router.push(`#${sectionId}`, { scroll: false });
      }
    }, 400);

    return () => clearTimeout(timeout);
  });

  return isInView;
}
