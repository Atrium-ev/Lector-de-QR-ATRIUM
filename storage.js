window.storage = {
  KEY_ENTRIES: "atrium_checkin_entries",
  KEY_THEME: "atrium_theme",
  loadEntries: function() { try { return JSON.parse(localStorage.getItem(this.KEY_ENTRIES) || "[]"); } catch { return []; } },
  saveEntries: function(entries) { localStorage.setItem(this.KEY_ENTRIES, JSON.stringify(entries)); },
  addLocal: function(attendee) {
    const entries = this.loadEntries();
    if (!entries.some(e => e.code === attendee.code)) {
      entries.unshift({ code: attendee.code, name: attendee.name, bachiller: attendee.bachiller, email: attendee.email, ts: new Date().toISOString(), checked_at: attendee.checked_at });
      this.saveEntries(entries);
    }
  },
  alreadyLocal: function(code) { return this.loadEntries().some(e => e.code === code); },
  clearEntries: function() { localStorage.removeItem(this.KEY_ENTRIES); },
  getTheme: function() { return localStorage.getItem(this.KEY_THEME) || "light"; },
  setTheme: function(theme) { localStorage.setItem(this.KEY_THEME, theme); }
};