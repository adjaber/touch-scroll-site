
import React from 'react';

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

// Create a wrapper for the Bubble component
const ChatbotWrapper = () => {
  React.useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@typebot.io/js@0.2/dist/web.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  // Define the props for Bubble
  const bubbleProps: BubbleProps = {
    typebot: "ecoesim-ai-chat",
    apiHost: "https://typebot.io",
    previewMessage: {
      message: "I am your ESIM travel assistant!",
      autoShowDelay: 5000,
      avatarUrl:
        "https://media0.giphy.com/media/dzBLyjVBCtWgGPiXCJ/giphy-downsized.gif?cid=fe3852a3fbosw7q8hxkk92to3z05mkvobkpohmh86uo3nf8v&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g",
    },
    theme: { button: { backgroundColor: "#1D1D1D" } }
  };

  // Create the element with the necessary attributes
  React.useEffect(() => {
    const typebotEl = document.createElement('typebot-bubble');
    typebotEl.setAttribute('typebot', bubbleProps.typebot);
    typebotEl.setAttribute('api-host', bubbleProps.apiHost);

    if (bubbleProps.previewMessage) {
      typebotEl.setAttribute('preview-message', bubbleProps.previewMessage.message);
      typebotEl.setAttribute('auto-show-delay', String(bubbleProps.previewMessage.autoShowDelay));
      if (bubbleProps.previewMessage.avatarUrl) {
        typebotEl.setAttribute('avatar-url', bubbleProps.previewMessage.avatarUrl);
      }
    }

    if (bubbleProps.theme?.button?.backgroundColor) {
      typebotEl.setAttribute('button-color', bubbleProps.theme.button.backgroundColor);
    }

    document.body.appendChild(typebotEl);

    return () => {
      document.body.removeChild(typebotEl);
    };
  }, []);

  // This component doesn't render anything visible directly
  return null;
};

export default ChatbotWrapper;
