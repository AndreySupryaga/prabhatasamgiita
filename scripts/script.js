$(function () {

    const el = {
        title: $('.title'),
        original: $('.original-text'),
        tabEng: $('.tab-eng-container'),
        tabRu: $('.tab-ru-container'),
        video: $('.video')
    };

    $.getJSON( "poems.json", function( data ) {
        console.log(data);
        const poem = data[0];
        setPoemToMarkup(poem);
    });


    function setPoemToMarkup (poem) {
        el.title[0].innerHTML = poem.number;
        el.original[0].innerHTML = poem.text;
        if (poem.locale.ru) {
            el.tabRu[0].innerHTML = poem.locale.ru;
        }
        if (poem.locale.en) {
            el.tabEng[0].innerHTML = poem.locale.en;
        }
        if (poem.video) {
            el.video[0].innerHTML = poem.video;
        }
        el.original[0].innerHTML = poem.text;
    }

});

