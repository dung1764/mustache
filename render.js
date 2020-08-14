function renderHello() {
    var stooges = [
        { "name": "Moe" },
        { "name": "Larry" },
        { "name": "Curly" }
    ];
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, { title: 'MUSTACHE', stooges: stooges, html: "<b>GitHub</b>"});
    document.getElementById('target').innerHTML = rendered;
}