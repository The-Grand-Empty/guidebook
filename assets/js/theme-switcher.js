function setTheme(theme) {
    localStorage.setItem('theme', theme);
    jtd.setTheme(theme);
};
jtd.onReady(function(){
    let theme = localStorage.getItem('theme') || 'dark';
    if (theme != jtd.getTheme()) {
        jtd.setTheme(theme);
    }
});
