import { Button } from "@material-tailwind/react"
import { useEffect, useState } from 'react';

const DowloadPWA = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      console.log("sdsds")
      // Prevent the default behavior
      e.preventDefault();

      // Store the event so it can be used later
      setInstallPromptEvent(e);
    };

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Cleanup the event listener when the component is unmounted
    // return () => {
    //   window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    // };
  }, []);

  const handleInstallPWA = async () => {
    if (installPromptEvent) {
      // Show the install prompt
      installPromptEvent.prompt();

      const { outcome } = await installPromptEvent.userChoice;

      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }

      // Clear the stored event
      setInstallPromptEvent(null);
    }
  };
  return (
    <div className="md:hidden lg:block">
      <Button className='pwa-download' onClick={handleInstallPWA}><img src="Assets/Images/All Icons/Group 115.svg" alt="" /> Download App</Button>
    </div>
  )
}

export default DowloadPWA
