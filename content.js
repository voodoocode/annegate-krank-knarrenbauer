var substitutionsFirst = [
    'Ammenschreck',
    'Angelgrät',
    'Ankerbett',
    'Annegate',
    'Annektiert',
    'Annregret',
    'Angedreht',
    'Armgedreht',
    'Angerät',
    'Ampelgrät',
    'Analgape',
    'Analgerät',
    'Abendbrot',
    'Angriffskrieg',
    'Angedreht',
    'Abhörgerät',
    'Ballergret',
    'Bannegret',
    'Panzergret',
    'Pannengerät',
    'Undefined',
];

var substitutionsMiddle = [
    'Kampf',
    'Kann',
    'Klein',
    'Klump',
    'Klotz',
    'Kotz',
    'Katz',
    'Krampf',
    'Krank',
    'Kein',
    'Krebs',
    'Kommt',
    'Kennt',
    'Krupp',
    'Krabbe',
    'Klang',
    'Klamm',
    'Kran',
    'Mampf',
    'Trump',
    'Trumpf'
];

var substitutionsLast = [
    'Kackebauer',
    'Katzenjammer',
    'Kackenkarrer',
    'Klammerkauer',
    'Karrenklauer',
    'Kalterschauer',
    'Kampfhubschrauber',
    'Karpfenkauer',
    'Krakenkrauler',
    'Keilerhauer',
    'Knarrenbauer',
    'Koksanbauer',
    'Karottenbauer',
    'Kolabrauer',
    'Kamelraucher',
    'Kranbauer',
    'Nervenklauer',
    'Pfaffenhauer',
    'Gassenhauer'
];

var nicknames = [
    'AKK-47',
    'Büchsengretl',
    'CDUzi',
    'Granaten-Gretel',
    'Knarren-Greta'
];

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        var replacementFullname = substitutionsFirst[Math.floor(Math.random() * substitutionsFirst.length)] +
            " " + substitutionsMiddle[Math.floor(Math.random() * substitutionsMiddle.length)] +
            "-" + substitutionsLast[Math.floor(Math.random() * substitutionsLast.length)];
        var replacementNickname = nicknames[Math.floor(Math.random() * nicknames.length)];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Annegret Kramp-Karrenbauer|Kramp-Karrenbauer/gi, replacementFullname).replace(/\bAKK\b(?![ -]47)/gi, replacementNickname);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
