import React, { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    const configScript = document.createElement("script");
    configScript.src = "https://mediafiles.botpress.cloud/d7c4edff-a3e0-4285-8f4b-06ba8f9db815/webchat/config.js";
    configScript.defer = true;
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);

  return (
    <div id="webchat" />
  );
}

export default Chatbot;
