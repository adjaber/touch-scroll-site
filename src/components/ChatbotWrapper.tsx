
import React, { useEffect } from 'react';

type BubbleProps = {
  typebot: string;
  apiHost: string;
  previewMessage?: {
    message: string;
    autoShowDelay: number;
    avatarUrl?: string;
  };
  theme?: {
    button?: {
      backgroundColor?: string;
    };
  };
};

const ChatbotWrapper = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@typebot.io/js@0.2/dist/web.js";
    script.async = true;
    
    // Wait for script to load before creating the bubble
    script.onload = () => {
      // Clean up any existing typebot instances
      const existingTypebot = document.querySelector('typebot-bubble');
      if (existingTypebot) {
        existingTypebot.remove();
      }
      
      // Create the typebot element
      const typebotEl = document.createElement('typebot-bubble');
      typebotEl.setAttribute('typebot', 'ecoesim-ai-chat');
      typebotEl.setAttribute('api-host', 'https://typebot.io');
      typebotEl.setAttribute('preview-message', 'I am your ESIM travel assistant!');
      typebotEl.setAttribute('auto-show-delay', '5000');
      typebotEl.setAttribute('avatar-url', 'https://media0.giphy.com/media/dzBLyjVBCtWgGPiXCJ/giphy-downsized.gif?cid=fe3852a3fbosw7q8hxkk92to3z05mkvobkpohmh86uo3nf8v&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g');
      typebotEl.setAttribute('button-color', '#1D1D1D');
      
      document.body.appendChild(typebotEl);
    };
    
    // Add script to DOM
    document.body.appendChild(script);
    
    // Clean up function
    return () => {
      // Remove the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      
      // Remove any typebot instances
      const typebotEl = document.querySelector('typebot-bubble');
      if (typebotEl) {
        typebotEl.remove();
      }
    };
  }, []);
  
  // Add manual launch function to window for debugging
  useEffect(() => {
    // @ts-ignore
    window.launchChatbot = () => {
      const typebotEl = document.querySelector('typebot-bubble');
      if (typebotEl) {
        // @ts-ignore
        typebotEl.open?.();
        console.log('Attempting to open chatbot');
      } else {
        console.error('Chatbot element not found');
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
