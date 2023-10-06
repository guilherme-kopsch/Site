const settings = {
    theme: 'light',
    language: 'en',
    notifications: true,
};

function saveSettings() {
    localStorage.setItem('settings', JSON.stringify(settings));
}

function loadSettings() {
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings);
        settings.theme = parsedSettings.theme;
        settings.language = parsedSettings.language;
        settings.notifications = parsedSettings.notifications;
    }
}
