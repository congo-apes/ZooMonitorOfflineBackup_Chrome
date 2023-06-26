// Event listener for when the document has finished loading
document.addEventListener('DOMContentLoaded', (event) => {
  // Event listener for when the 'dump' button is clicked
  document.getElementById('dump').addEventListener('click', () => {
    // Query the currently active tab
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const tab = tabs[0];
      // Execute the 'grabLocalStorage' function in the context of the active tab
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: grabLocalStorage
      }, (results) => {
        // Create a new Blob object from the result
        const blob = new Blob([results[0].result.data], { type: 'text/plain' });
        // Create a URL representing the Blob object
        const url = URL.createObjectURL(blob);
        // Generate a timestamp
        const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
        // Retrieve the site name
        const siteName = results[0].result.siteName;
        // Trigger a download of the Blob object
        chrome.downloads.download({
          url: url,
          filename: `localStorageDump_${timestamp}_${siteName}.txt`
        });
      });
    });
  });
});

// Function to retrieve data from localStorage
function grabLocalStorage() {
  let output = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    //this portion changes the way it's parsed to fit json format
    try {
      value = JSON.parse(value);
    } catch (e) {
    }
    output[key] = value;
  }

  return { data: JSON.stringify(output, null, 4), siteName: document.title };
}
