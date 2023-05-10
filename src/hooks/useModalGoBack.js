import { useEffect, useState } from 'react';

export default function useModalGoBack(key, close) {
  const [isOpen, toggleOpen] = useState(false);

  const toggleActive = (open) => {
    if (open) {
      window.location.assign(key); // navigate to same url but with the specified hash
    } else {
      window.location.replace('#'); // remove the hash
    }
  };

  useEffect(() => {
    // function for handling hash change in browser, toggling modal open
    const handleOnHashChange = () => {
      const isHashMatch = window.location.hash === key;
      toggleOpen(isHashMatch);
    };

    // event listener for hashchange event
    window.addEventListener('hashchange', handleOnHashChange);

    return () => window.removeEventListener('hashchange', handleOnHashChange);
  }, [key, close, toggleOpen]);

  return [isOpen, toggleActive];
}
