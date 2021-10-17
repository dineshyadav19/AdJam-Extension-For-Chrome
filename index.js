chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
       
      let match = details.url.match(/.*:\/\/.*doubleclick\.net\/.*/g);
        
      if(match) {
        return { cancel: true }
      } else {
          return { cancel: false }
      }
      
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);