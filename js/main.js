window.addEventListener('load', () => {
    const model = new ListModel(['Coconut - 4$/kg', 'Cranberry - 3$/kg', 'Lime - 5$/kg', " Mango - 10$/kg" , "Orange - 6$/kg", 'Chile pepper - 9$/kg', 'Honeyberry - 8$/kg', 'Juniper berry - 12$/kg', 'White sapote - 11$/kg','Japanese plum - 10$/kg', 'Pumpkin - 7$/kg','Passionfruit - 15$/kg','Pomegranate - 2$/kg','Strawberry - 4$/kg']),
        view = new ListView(model, {
            'list' : document.getElementById('list'),
            'addButton' : document.getElementById('plusBtn'),
            'delButton' : document.getElementById('minusBtn'),
            // 'changeButton' : document.getElementById('changeBtn')
        }),
        controller = new ListController(model, view);

    view.show();
});



