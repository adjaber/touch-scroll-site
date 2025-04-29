
import React, { useEffect } from 'react';

const ChatbotWrapper = () => {
  // Add manual launch function to window for buttons to use
  useEffect(() => {
    // Wait a short moment to ensure Typebot is initialized by the script in index.html
    const timer = setTimeout(() => {
      // @ts-ignore
      window.launchChatbot = () => {
        console.log('Launch chatbot function called');
        // Try to use the Typebot global object first
        // @ts-ignore
        if (window.Typebot) {
          // @ts-ignore
          window.Typebot.open();
          console.log('Attempting to open chatbot via Typebot.open()');
        } else {
          // Fallback - try to find and click the typebot button
          console.log('Typebot global not found, trying to click the bubble button directly');
          const shadow = document.querySelector('typebot-bubble')?.shadowRoot;
          if (shadow) {
            const button = shadow.querySelector('button');
            if (button) {
              button.click();
              console.log('Clicked typebot button directly');
            } else {
              console.error('Typebot button not found in shadow DOM');
            }
          } else {
            console.error('Typebot bubble not found');
          }
        }
      };
    }, 1000); // Give it 1 second to initialize
    
    return () => {
      clearTimeout(timer);
      // @ts-ignore
      window.launchChatbot = undefined;
    };
  }, []);

  return null;
};

export default ChatbotWrapper;
