import { useState } from "react";

export function useOpenAttrs() {
  const [openAttrs, setOpenAttrs] = useState();
  return {
    openAttrs,
    setOpenAttrs,
  };
}
