import React from 'react';
import {router} from "next/client";
import {useDraftModeEnvironment} from "@sanity/next-loader/hooks";
import {useRouter} from "next/navigation";

const DisabledDraftMode = ({}) => {
  const environment = useDraftModeEnvironment();
  const router = useRouter();

  if(environment !== "live" && environment !== "unknown") {
    return null;
  }

  const handleClick = () => {
    await fetch("/draft-mode/disable");
    router.refresh();
  }

  return (
    <button onClick={handleClick} className={'fixed bottom-4 right-4 bg-gray-50 px-4 py-2 z-50'}>
      Disable Draft Mode
    </button>
  );
};

export default DisabledDraftMode;
// by Rokas with ❤️
