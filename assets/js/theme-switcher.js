var theme_listeners = [
    jtd.setTheme,
]
function setTheme(theme, do_storage=true) {
    if (do_storage) {
        localStorage.setItem('theme', theme);
    }
    theme_listeners.forEach(listener => {
        listener(theme);
    });
};
jtd.onReady(function(){
    let theme = localStorage.getItem('theme') || 'dark';
    setTheme(theme, false);
});
