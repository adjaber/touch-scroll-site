
import React, { useEffect } from 'react';

const ChatbotWrapper = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js";
    script.async = true;
    
    // Wait for script to load before creating the bubble
    script.onload = () => {
      // Initialize Typebot popup
      // @ts-ignore
      window.Typebot?.initPopup({ typebot: "ecoesim-ai-chat" });
      
      console.log('Typebot script loaded and initialized');
    };
    
    // Add script to DOM if not already present
    if (!document.querySelector('script[src*="typebot.io/js"]')) {
      document.body.appendChild(script);
    }
    
    // Clean up function
    return () => {
      // We don't remove the script on unmount as it might affect other components
    };
  }, []);
  
  // Add manual launch function to window for buttons to use
  useEffect(() => {
    // @ts-ignore
    window.launchChatbot = () => {
      console.log('Launch chatbot function called');
      // @ts-ignore
      if (window.Typebot) {
        // @ts-ignore
        window.Typebot.open();
        console.log('Attempting to open chatbot via Typebot.open()');
      } else {
        console.error('Typebot is not initialized');
      }
    };
    
    return () => {
      // @ts-ignore
      window.launchChatbot = undefined;
    };
  }, []);

  return null;
};

export default ChatbotWrapper;
