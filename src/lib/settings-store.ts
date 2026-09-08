const SETTINGS_KEY = "livebook:settings";

export interface Settings {
  livebookUrl: string;
  useLivebookDesktop: boolean;
}

const DEFAULT_SETTINGS: Settings = {
  livebookUrl: "",
  useLivebookDesktop: false,
};

type SettingsSubscriber = (settings: Settings, prevSettings?: Settings) => void;

/**
 * Stores configuration state and persists it across
 * browser sessions.
 */
class SettingsStore {
  private _subscribers: SettingsSubscriber[] = [];
  private _settings: Settings = DEFAULT_SETTINGS;

  constructor() {
    this._loadSettings();
  }

  get(): Settings {
    return this._settings;
  }

  update(newSettings: Partial<Settings>): void {
    const prevSettings = this._settings;
    this._settings = { ...this._settings, ...newSettings };
    this._subscribers.forEach((callback) =>
      callback(this._settings, prevSettings)
    );
    this._storeSettings();
  }

  getAndSubscribe(callback: SettingsSubscriber): void {
    this._subscribers.push(callback);
    callback(this._settings);
  }

  private _loadSettings(): void {
    try {
      const json = localStorage.getItem(SETTINGS_KEY);

      if (json) {
        const settings = JSON.parse(json) as Partial<Settings>;
        this._settings = { ...this._settings, ...settings };
      }
    } catch (error) {
      console.error(`Failed to load settings: ${error}`);
    }
  }

  private _storeSettings(): void {
    try {
      const json = JSON.stringify(this._settings);
      localStorage.setItem(SETTINGS_KEY, json);
    } catch (error) {
      console.error(`Failed to persist settings: ${error}`);
    }
  }
}

export const settingsStore = new SettingsStore();
