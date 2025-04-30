function setTheme(theme) {
    localStorage.setItem('theme', theme);
    jtd.setTheme(theme);
};
setTheme(localStorage.getItem('theme') || 'dark');
