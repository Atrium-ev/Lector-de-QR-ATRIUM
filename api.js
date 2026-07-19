window.api = {
  lookup: async function(code) {
    const url = `${window.APP_CONFIG.apiUrl}?action=lookup&code=${encodeURIComponent(code)}`;
    const response = await fetch(url);
    return await response.json();
  },
  checkin: async function(code) {
    const url = window.APP_CONFIG.apiUrl;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `action=checkin&code=${encodeURIComponent(code)}`
    });
    return await response.json();
  }
};