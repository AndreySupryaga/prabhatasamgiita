$(function () {

    const el = {
        title: $('.title'),
        original: $('.original-text'),
        tabEng: $('.tab-eng-container'),
        tabRu: $('.tab-ru-container'),
        video: $('.video'),
        input: $('#autocompele-input')
    };

    $.getJSON("poems.json", function (data) {
        console.log(data);
        const poem = data[0];
        setPoemToMarkup(poem);
        awesomeCompleteInit(data);
    });


    function setPoemToMarkup(poem) {
        el.title[0].innerHTML = poem.value;
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

    function awesomeCompleteInit(list) {
        const comboplete = new Awesomplete('#autocompele-input', {
            minChars: 0,
            list: list,
            autoFirst: true,
            maxItems: 20,
            select: function (item) {
                console.log(item);
            }
        });

        Awesomplete.$('.dropdown-btn').addEventListener("click", function () {
            if (comboplete.ul.childNodes.length === 0) {
                comboplete.minChars = 0;
                comboplete.evaluate();
            } else if (comboplete.ul.hasAttribute('hidden')) {
                comboplete.open();
            } else {
                comboplete.close();
            }
        });

        comboplete.select(function (item) {
                console.log(item);
            }
        )
    }

});

