
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

const ChatbotWrapper = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const { language } = useLanguage();
  
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
          setShowPrompt(false); // Hide prompt when chatbot opens
        } else {
          // Fallback - try to find and click the typebot button
          console.log('Typebot global not found, trying to click the bubble button directly');
          const shadow = document.querySelector('typebot-bubble')?.shadowRoot;
          if (shadow) {
            const button = shadow.querySelector('button');
            if (button) {
              button.click();
              console.log('Clicked typebot button directly');
              setShowPrompt(false); // Hide prompt when chatbot opens
            } else {
              console.error('Typebot button not found in shadow DOM');
            }
          } else {
            console.error('Typebot bubble not found');
          }
        }
      };
    }, 1000); // Give it 1 second to initialize
    
    // Show the prompt after 5 seconds
    const promptTimer = setTimeout(() => {
      setShowPrompt(true);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(promptTimer);
      // @ts-ignore
      window.launchChatbot = undefined;
    };
  }, []);

  // Click outside handler to dismiss the prompt
  useEffect(() => {
    const handleClickOutside = () => {
      if (showPrompt) {
        setShowPrompt(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showPrompt]);

  const handleChatButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // @ts-ignore
    window.launchChatbot();
  };

  return (
    <>
      {/* Floating chat button with highlight effect */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
        {showPrompt && (
          <div 
            className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg mb-3 max-w-xs animate-bounce"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-medium">
              {language === 'ar' 
                ? 'احصل على أفضل أسعار eSIM هنا! تحدث مع مساعدنا الآن'
                : 'Get the BEST eSIM prices here! Chat with our assistant now'}
            </p>
            <div className="mt-2 flex justify-between">
              <span className="text-xs text-green-600 font-bold">
                {language === 'ar' ? 'حصري عبر المحادثة فقط!' : 'EXCLUSIVE via chat only!'}
              </span>
              <span className="text-xs text-gray-500">
                {language === 'ar' ? 'أسعار أقل من المنافسين' : 'Lower than competitors'}
              </span>
            </div>
          </div>
        )}
        <Button 
          onClick={handleChatButtonClick}
          className="bg-travel-blue hover:bg-travel-blue/90 rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            1
          </span>
        </Button>
      </div>
    </>
  );
};

export default ChatbotWrapper;
