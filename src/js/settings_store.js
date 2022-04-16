const SETTINGS_KEY = "livebook:settings";
const DEFAULT_SETTINGS = { livebookUrl: "", useLivebookDesktop: false };

/**
 * Stores configuration state and persists it across
 * browser sessions.
 */
class SettingsStore {
  constructor() {
    this._subscribers = [];
    this._settings = DEFAULT_SETTINGS;

    this._loadSettings();
  }

  get() {
    return this._settings;
  }

  update(newSettings) {
    const prevSettings = this._settings;
    this._settings = { ...this._settings, ...newSettings };
    this._subscribers.forEach((callback) =>
      callback(this._settings, prevSettings)
    );
    this._storeSettings();
  }

  getAndSubscribe(callback) {
    this._subscribers.push(callback);
    callback(this._settings);
  }

  _loadSettings() {
    try {
      const json = localStorage.getItem(SETTINGS_KEY);

      if (json) {
        const settings = JSON.parse(json);
        this._settings = { ...this._settings, ...settings };
      }
    } catch (error) {
      console.error(`Failed to load settings: ${error}`);
    }
  }

  _storeSettings() {
    try {
      const json = JSON.stringify(this._settings);
      localStorage.setItem(SETTINGS_KEY, json);
    } catch (error) {
      console.error(`Failed to persist settings: ${error}`);
    }
  }
}

export const settingsStore = new SettingsStore();
