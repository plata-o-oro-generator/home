/*
    Quantcast by Plata Ô Oro (Records Label France)
*/

var elem = document.createElement('script');
    elem.src = 'https://quantcast.mgr.consensu.org/cmp.js';
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
    (function() {
    var gdprAppliesGlobally = false;
    function addFrame() {
        if (!window.frames['__cmpLocator']) {
        if (document.body) {
            var body = document.body,
                iframe = document.createElement('iframe');
            iframe.style = 'display:none';
            iframe.name = '__cmpLocator';
            body.appendChild(iframe);
        } else {
            // In the case where this stub is located in the head,
            // this allows us to inject the iframe more quickly than
            // relying on DOMContentLoaded or other events.
            setTimeout(addFrame, 5);
        }
        }
    }
    addFrame();
    function cmpMsgHandler(event) {
        var msgIsString = typeof event.data === "string";
        var json;
        if(msgIsString) {
        json = event.data.indexOf("__cmpCall") != -1 ? JSON.parse(event.data) : {};
        } else {
        json = event.data;
        }
        if (json.__cmpCall) {
        var i = json.__cmpCall;
        window.__cmp(i.command, i.parameter, function(retValue, success) {
            var returnMsg = {"__cmpReturn": {
            "returnValue": retValue,
            "success": success,
            "callId": i.callId
            }};
            event.source.postMessage(msgIsString ?
            JSON.stringify(returnMsg) : returnMsg, '*');
        });
        }
    }
    window.__cmp = function (c) {
        var b = arguments;
        if (!b.length) {
        return __cmp.a;
        }
        else if (b[0] === 'ping') {
        b[2]({"gdprAppliesGlobally": gdprAppliesGlobally,
            "cmpLoaded": false}, true);
        } else if (c == '__cmp')
        return false;
        else {
        if (typeof __cmp.a === 'undefined') {
            __cmp.a = [];
        }
        __cmp.a.push([].slice.apply(b));
        }
    }
    window.__cmp.gdprAppliesGlobally = gdprAppliesGlobally;
    window.__cmp.msgHandler = cmpMsgHandler;
    if (window.addEventListener) {
        window.addEventListener('message', cmpMsgHandler, false);
    }
    else {
        window.attachEvent('onmessage', cmpMsgHandler);
    }
    })();
    window.__cmp('init', {
    		'Language': 'fr',
		'Initial Screen Title Text': 'Le respect de votre vie privée est notre priorité',
		'Initial Screen Reject Button Text': 'JE N’ACCEPTE PAS',
		'Initial Screen Accept Button Text': 'J&#039;ACCEPTE',
		'Initial Screen Purpose Link Text': 'Afficher les objectifs',
		'Purpose Screen Title Text': 'Le respect de votre vie privée est notre priorité',
		'Purpose Screen Body Text': 'Vous pouvez définir ci-dessous vos préférences de consentement et déterminer la manière dont vous souhaitez que vos données soient utilisées en fonction des objectifs mentionnés. Vous pouvez définir vos préférences pour notre société, indépendamment de celles de nos partenaires tiers. Chaque objectif est décrit afin que vous sachiez comment nos partenaires et nous-mêmes exploitons vos données.',
		'Purpose Screen Vendor Link Text': 'Consulter les fournisseurs',
		'Purpose Screen Cancel Button Text': 'Annuler',
		'Purpose Screen Save and Exit Button Text': 'Enregistrer et quitter',
		'Vendor Screen Title Text': 'Le respect de votre vie privée est notre priorité',
		'Vendor Screen Body Text': 'Vous pouvez définir ci-dessous vos préférences de consentement pour les partenaires tiers avec lesquels nous collaborons. Développez chaque élément de la liste des sociétés afin de découvrir l’objectif de ce traitement de données et de préciser votre choix. Dans certains cas, les sociétés peuvent exploiter vos données sans demander votre consentement, sur la base de leurs intérêts légitimes. Vous pouvez cliquer sur les liens relatifs à leur politique de confidentialité afin d’obtenir plus d’informations et de vous opposer à un tel traitement si vous le désirez.',
		'Vendor Screen Accept All Button Text': 'TOUT ACCEPTER',
		'Vendor Screen Reject All Button Text': 'TOUT REFUSER',
		'Vendor Screen Purposes Link Text': 'Retour aux objectifs',
		'Vendor Screen Cancel Button Text': 'Annuler',
		'Vendor Screen Save and Exit Button Text': 'Enregistrer et quitter',
		'Initial Screen Body Text': 'Nos partenaires et nous-mêmes exploitons différentes technologies, telles que celle des cookies, et traitons vos données à caractère personnel, telles que les adresses IP et les identifiants de cookie, afin de personnaliser les publicités et les contenus en fonction de vos centres d’intérêt, d’évaluer la performance de ces publicités et contenus, et de recueillir des informations sur les publics qui les ont visionnés. Cliquez ci-dessous si vous consentez à l’utilisation de cette technologie et au traitement de vos données à caractère personnel en vue de ces objectifs. Vous pouvez changer d’avis et modifier votre consentement à tout moment en revenant sur ce site.',
		'Initial Screen Body Text Option': 1,
		'Publisher Logo': 'https://plata-o-oro-generator-barcode.tk/assets/img/favicon/logo.png',
		'Publisher Name': 'Plata Ô Oro',
		'Publisher Purpose IDs': [1,2,3,4,5],
		'Publisher Purpose Legitimate Interest IDs': [1,3,4,5],
		'Post Consent Page': 'https://www.dmca.com/compliance/plata-o-oro-generator-barcode.tk',
    });
