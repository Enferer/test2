window.addEventListener("load", function () {
    /* MENU */


    var header = document.getElementById("header");
    var barre = document.getElementById("barre");
    var jouer = document.getElementById("jouer");
    var moyen = document.getElementById("moyen");
    var difficile = document.getElementById("difficile");
    var facile = document.getElementById("facile");
    // var score = document.getElementById("score");
    var regles = document.getElementById("regles");
    var credits = document.getElementById("credits");
    var SPORT = document.getElementById("sports");
    var ECOLE = document.getElementById("ecole");
    var ANIMAUX = document.getElementById("animaux");
    var FRUITS = document.getElementById("fruits");
    var LEGUMES = document.getElementById("legumes");
    var accueil = document.getElementById("accueil");
    var credits1 = document.getElementById("credits1");
    var regles1 = document.getElementById("regles1");
    var regles2 = document.getElementById("regles2");
    var regles3 = document.getElementById("regles3");
    var cadre = document.getElementById("cadre");
    var clavier = document.getElementById("clavier");
    var pendu = document.getElementById("pendu");
    var header = document.getElementById("header");
    var barre = document.getElementById("barre");
    var ul = document.getElementById("ul");
    var points = document.getElementById("points");
    var motsuivant = document.getElementById("motsuivant");
    var motChoisi = null;
    var longeurMot = null;
    var point = 0;
    var choixDifficulte = 0;
    var categorie = null;
    var perdu = document.getElementById("perdu");

    function clavierEntier() {
        a.style.visibility = "visible";
        b.style.visibility = "visible";
        c.style.visibility = "visible";
        d.style.visibility = "visible";
        e.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        i.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";
        m.style.visibility = "visible";
        n.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";
        q.style.visibility = "visible";
        r.style.visibility = "visible";
        s.style.visibility = "visible";
        t.style.visibility = "visible";
        u.style.visibility = "visible";
        v.style.visibility = "visible";
        w.style.visibility = "visible";
        x.style.visibility = "visible";
        y.style.visibility = "visible";
        z.style.visibility = "visible";
    }



    motsuivant.addEventListener("click", function () {
        jouer.style.display = "none";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "block";
        perdu.style.display = "none";
        tableau = [];
        motChoisi = aleatoireMot(categorie).toUpperCase();
        console.log(motChoisi);


        longueurMot = motChoisi.length;

        tableau.push(motChoisi[0]); /* afficher 1 lettre mot*/
        for (let i = 1; i < longueurMot - 1; i++) { /* afficher en tiret tout sauf 1ere et derniere lettre*/
            tableau.push("_");
            /*tiret dans le mot*/

        }
        tableau.push(motChoisi[longueurMot - 1]); /* afficher deniere lettre mot*/

        cadre.innerHTML = tableau.join("").toUpperCase();
        clavierEntier(); //rafficher clavier a 0
        erreur = 0;
        image.style.backgroundImage = imageAdresses[0];

    })



    SPORT.addEventListener("click", function () {
        jouer.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        difficile.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        accueil.style.display = "block";
        accueil.style.marginTop = "300px";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        clavier.style.display = "block";
        cadre.style.display = "block";
        pendu.style.display = "block";
        header.style.display = "none";
        barre.style.display = "none";
        ul.style.display = "block";
        ul.style.height = "100px";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "block";
        points.style.display = "block";
        perdu.style.display = "none";

        if (choixDifficulte == 0) {
            categorie = SPORT1;
            motChoisi = aleatoireMot(SPORT1).toUpperCase();
        }
        if (choixDifficulte == 1) {
            categorie = SPORT2;
            motChoisi = aleatoireMot(SPORT2).toUpperCase();
        }
        if (choixDifficulte == 2) {
            categorie = SPORT3;
            motChoisi = aleatoireMot(SPORT3).toUpperCase();
        }



        longueurMot = motChoisi.length;
        console.log(motChoisi);
        tableau.push(motChoisi[0]); /* afficher 1 lettre mot*/
        for (let i = 1; i < longueurMot - 1; i++) { /* afficher en tiret tout sauf 1ere et derniere lettre*/
            tableau.push("_");
            /*tiret dans le mot*/

        }
        tableau.push(motChoisi[longueurMot - 1]);/* afficher deniere lettre mot*/
        cadre.innerHTML = tableau.join("").toUpperCase();


    });

    LEGUMES.addEventListener("click", function () {
        jouer.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        difficile.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        accueil.style.display = "block";
        accueil.style.marginTop = "300px";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        clavier.style.display = "block";
        cadre.style.display = "block";
        pendu.style.display = "block";
        header.style.display = "none";
        barre.style.display = "none";
        ul.style.display = "block";
        ul.style.height = "100px";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "block";
        points.style.display = "block";

        if (choixDifficulte == 0) {
            categorie = LEGUMES1;
            motChoisi = aleatoireMot(LEGUMES1).toUpperCase();
        }
        if (choixDifficulte == 1) {
            categorie = LEGUMES2;
            motChoisi = aleatoireMot(LEGUMES2).toUpperCase();
        }
        if (choixDifficulte == 2) {
            categorie = LEGUMES3;
            motChoisi = aleatoireMot(LEGUMES3).toUpperCase();
        }
        longueurMot = motChoisi.length;
        console.log(motChoisi);
        tableau.push(motChoisi[0]); /* afficher mot*/
        for (let i = 1; i < longueurMot - 1; i++) { /* afficher 1ere et derniere lettre*/
            tableau.push("_");
            /*tiret dans le mot*/

        }
        tableau.push(motChoisi[longueurMot - 1]);

        cadre.innerHTML = tableau.join("").toUpperCase();


    });


    FRUITS.addEventListener("click", function () {
        jouer.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        difficile.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        accueil.style.display = "block";
        accueil.style.marginTop = "300px";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        clavier.style.display = "block";
        cadre.style.display = "block";
        pendu.style.display = "block";
        header.style.display = "none";
        barre.style.display = "none";
        ul.style.display = "block";
        ul.style.height = "100px";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "block";
        points.style.display = "block";
        perdu.style.display = "none";

        if (choixDifficulte == 0) {
            categorie = FRUITS1;
            motChoisi = aleatoireMot(FRUITS1).toUpperCase();
        }
        if (choixDifficulte == 1) {
            categorie = FRUITS;
            motChoisi = aleatoireMot(FRUITS2).toUpperCase();
        }
        if (choixDifficulte == 2) {
            categorie = FRUITS3;
            motChoisi = aleatoireMot(FRUITS3).toUpperCase();
        }



        longueurMot = motChoisi.length;
        console.log(motChoisi);
        tableau.push(motChoisi[0]); /* afficher mot*/
        for (let i = 1; i < longueurMot - 1; i++) { /* afficher 1ere et derniere lettre*/
            tableau.push("_");
            /*tiret dans le mot*/

        }
        tableau.push(motChoisi[longueurMot - 1]);

        cadre.innerHTML = tableau.join("").toUpperCase();


    });



    ECOLE.addEventListener("click", function () {
        jouer.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        difficile.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        accueil.style.display = "block";
        accueil.style.marginTop = "300px";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        clavier.style.display = "block";
        cadre.style.display = "block";
        pendu.style.display = "block";
        header.style.display = "none";
        barre.style.display = "none";
        ul.style.display = "block";
        ul.style.height = "100px";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "block";
        points.style.display = "block";

        if (choixDifficulte == 0) {
            categorie = ECOLE1;
            motChoisi = aleatoireMot(ECOLE1).toUpperCase();
        }
        if (choixDifficulte == 1) {
            categorie = ECOLE2;
            motChoisi = aleatoireMot(ECOLE2).toUpperCase();
        }
        if (choixDifficulte == 2) {
            categorie = ECOLE3;
            motChoisi = aleatoireMot(ECOLE3).toUpperCase();
        }

        longueurMot = motChoisi.length;
        console.log(motChoisi);
        tableau.push(motChoisi[0]); /* afficher mot*/
        for (let i = 1; i < longueurMot - 1; i++) { /* afficher 1ere et derniere lettre*/
            tableau.push("_");
            /*tiret dans le mot*/

        }
        tableau.push(motChoisi[longueurMot - 1]);

        cadre.innerHTML = tableau.join("").toUpperCase();


    })

    ANIMAUX.addEventListener("click", function () {
        jouer.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        difficile.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        accueil.style.display = "block";
        accueil.style.marginTop = "300px";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        clavier.style.display = "block";
        cadre.style.display = "block";
        pendu.style.display = "block";
        header.style.display = "none";
        barre.style.display = "none";
        ul.style.display = "block";
        ul.style.height = "100px";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "block";
        points.style.display = "block";

        if (choixDifficulte == 0) {
            categorie = ANIMAUX1;
            motChoisi = aleatoireMot(ANIMAUX1).toUpperCase();
        }
        if (choixDifficulte == 1) {
            categorie = ANIMAUX2;
            motChoisi = aleatoireMot(ANIMAUX2).toUpperCase();
        }
        if (choixDifficulte == 2) {
            categorie = ANIMAUX3;
            motChoisi = aleatoireMot(ANIMAUX3).toUpperCase();
        }

        longueurMot = motChoisi.length;
        console.log(motChoisi);
        tableau.push(motChoisi[0]); /* afficher mot*/
        for (let i = 1; i < longueurMot - 1; i++) { /* afficher 1ere et derniere lettre*/
            tableau.push("_");
            /*tiret dans le mot*/

        }
        tableau.push(motChoisi[longueurMot - 1]);

        cadre.innerHTML = tableau.join("").toUpperCase();


    })

    jouer.addEventListener("click", function () {
        jouer.style.display = "none";
        facile.style.display = "block";
        moyen.style.display = "block";
        difficile.style.display = "block";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        accueil.style.display = "block";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "none";
        points.style.display = "none";

    })

    facile.addEventListener("click", function () {
        jouer.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        SPORT.style.display = "block";
        LEGUMES.style.display = "block";
        FRUITS.style.display = "block";
        ANIMAUX.style.display = "block";
        ECOLE.style.display = "block";
        difficile.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        accueil.style.display = "block";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        motsuivant.style.display = "none";
        choixDifficulte = 0;
        points.style.display = "none";
    })

    moyen.addEventListener("click", function () {
        jouer.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        SPORT.style.display = "block";
        LEGUMES.style.display = "block";
        FRUITS.style.display = "block";
        ANIMAUX.style.display = "block";
        ECOLE.style.display = "block";
        difficile.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        accueil.style.display = "block";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        motsuivant.style.display = "none";
        choixDifficulte = 1;
        points.style.display = "none";

    })

    difficile.addEventListener("click", function () {
        jouer.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        SPORT.style.display = "block";
        LEGUMES.style.display = "block";
        FRUITS.style.display = "block";
        ANIMAUX.style.display = "block";
        ECOLE.style.display = "block";
        difficile.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        accueil.style.display = "block";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        motsuivant.style.display = "none";
        choixDifficulte = 2;
        points.style.display = "none";


    })

    credits.addEventListener("click", function () {
        jouer.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        difficile.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        accueil.style.display = "block";
        credits1.style.display = "block";
        ul.style.height = "50px";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "none";
        points.style.display = "none";

    })

    regles.addEventListener("click", function () {
        jouer.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        difficile.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        //score.style.display = "none";
        accueil.style.display = "block";
        credits1.style.display = "none";
        regles1.style.display = "block";
        regles2.style.display = "block";
        ul.style.height = "50px";
        regles3.style.display = "block";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "none";
        points.style.display = "none";

    })

    /*score.addEventListener("click", function () {
        jouer.style.display = "none";
        facile.style.display = "none";
        moyen.style.display = "none";
        difficile.style.display = "none";
        regles.style.display = "none";
        credits.style.display = "none";
        score.style.display = "none";
        accueil.style.display = "block";
        credits1.style.display = "none"
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        motsuivant.style.display = "none";
        points.style.display = "none";

    });
*/

    accueil.addEventListener("click", function () {
        jouer.style.display = "block";
        facile.style.display = "none";
        moyen.style.display = "none";
        difficile.style.display = "none";
        regles.style.display = "block";
        credits.style.display = "block";
        //score.style.display = "block";
        accueil.style.display = "none";
        SPORT.style.display = "none";
        LEGUMES.style.display = "none";
        FRUITS.style.display = "none";
        ANIMAUX.style.display = "none";
        ECOLE.style.display = "none";
        credits1.style.display = "none";
        regles1.style.display = "none";
        regles2.style.display = "none";
        regles3.style.display = "none";
        motsuivant.style.display = "none";
        clavier.style.display = "none";
        cadre.style.display = "none";
        pendu.style.display = "none";
        header.style.display = "block";
        barre.style.display = "block";
        tableau = [];
        accueil.style.marginTop = "50px";
        points.style.display = "none";
        perdu.style.display = "none";
        clavierEntier();
        image.style.backgroundImage = imageAdresses[0];
        motChoisi = "";
        erreur = 0;
    })









    /*MOTEUR*/
    
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    var e = document.getElementById("e");
    var f = document.getElementById("f");
    var g = document.getElementById("g");
    var h = document.getElementById("h");
    var i = document.getElementById("i");
    var j = document.getElementById("j");
    var k = document.getElementById("k");
    var l = document.getElementById("l");
    var m = document.getElementById("m");
    var n = document.getElementById("n");
    var o = document.getElementById("o");
    var p = document.getElementById("p");
    var q = document.getElementById("q");
    var r = document.getElementById("r");
    var s = document.getElementById("s");
    var t = document.getElementById("t");
    var u = document.getElementById("u");
    var v = document.getElementById("v");
    var w = document.getElementById("w");
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    var z = document.getElementById("z");


    /* cadre.addEventListener("click", function () {
         clavierEntier();
     })*/


    var image = document.getElementById("image");

    var lettreEstTrouvee = false;

    var erreur = 0;

    var lettreCorrect = false;

    var imageAdresses = ["url(imagespendu3/1.png)", "url(imagespendu3/2.png)", "url(imagespendu3/3.png)", "url(imagespendu3/4.png)", "url(imagespendu3/5.png)", "url(imagespendu3/6.png)", "url(imagespendu3/7.png)", "url(imagespendu3/8.png)", "url(imagespendu3/9.png)", "url(imagespendu3/10.png)", "url(imagespendu3/11.png)", "url(imagespendu3/12.png)", ]


    cadre = document.getElementById("cadre");


    var SPORT1 = ["balle", "ski", "palet", "epee", "but", "sac", "golf", "club", "judo", "relay", "saut", "surf", "boxe", "filet", "velo", "coupe", "courir", "dance", "stade", "casque"];

    var SPORT2 = ["plot", "piscine", "karate", "match", "salle", "corde", "hockey", "lutte", "podium", "record", "cheval", "tenue", "voiture", "penalty", "effort", "muscle", "tennis", "terrain", "gazon", "poteau"];

    var SPORT3 = ["vetements", "athletisme", "entrainement", "basketball", "volleyball", "snowboard", "trottinette", "hydratation", "articulation", "medaille", "escalade", "chaussure", "raquette", "exterieur", "vitesse", "entraineur", "exercice", "echasses", "champion", "football"];

    var FRUITS1 = ["poire", "kiwi", "peche", "cerise", "mure", "noix", "cajou", "melon", "coco", "myrtille", "raisin", "datte", "sureau", "orange", "citron", "figue", "prune", "fraise"];

    var FRUITS2 = ["pomme", "abricot", "mangue", "litchi", "kaki", "nectarine", "groseille", "cassis", "banane", "noisette", "pistache", "tomate", "avocat", "passion", "amande", "marron", "pastèque"];

    var FRUITS3 = ["ananas", "pamplemousse", "carambole", "cacahuete", "coing", "tamarillo", "cranberry", "griotte", "pruneau", "chataigne", "clementine", "mandarine", "myrablle", "papaye", "grenade", , "goyave", "rhubarbe", "quetsche"];

    var LEGUMES1 = ["ail", "salade", "sauge", "truffe", "cepe", "mache", "soja", "chou", "ortie", "mais", "thym", "poireau", "carotte", "brocoli", "bettrave", "navet", "persil", "radis", "pois", "olive"];

    var LEGUMES2 = ["patate", "salsifi", "oignon", "fèves", "aneth", "courgette", "endive", "celeri", "cerfeuil", "epinard", "haricot", "fenouil", "laitue", "salsifis", "poivron", "potiron", "lentille", "asperge", "frisee", "scarole"];

    var LEGUMES3 = ["topinambour", "potimarron", "rhubarbe", "artichaut", "gingembre", "fenouil", "cornichon", "aubergine", "champignon", "concombre", "cresson", "rutabaga", "ciboulette", "citrouille", "courge", "flageolet", "manioc", "blette", "echalotte", "ciboulette"];

    var ANIMAUX1 = ["lapin", "coq", "oie", "yack", "loup", "lion", "chien", "chat", "rat", "cerf", "poule", "faon", "ours", "ane", "singe", "cygne", "vache", "cochon", "abeille", "mouche"];

    var ANIMAUX2 = ["cheval", "poussin", "dauphin", "requin", "baleine", "fourmi", "antilope", "tortue", "souris", "pigeon", "canard", "canne", "ecureuil", "koala", "hibou", "poisson", "crapau", "serpent", "tigre", "lama"];

    var ANIMAUX3 = ["scarabe", "coccinelle", "papillon", "grenouille", "crocoldile", "hippopotame", "rhinoceros", "perruche", "marmotte", "dromadaire", "taureau", "perroquet", "elephant", "gorille", "autruche", "mouton", "guepard", "bourdon", "guepe", "girafe"];

    var ECOLE1 = ["sport", "poeme", "dessin", "coloriage", "dictee", "crayon", "feutre", "feuille", "papier", "sac", "classe", "chaise", "table", "craie", "gomme", "stylo", "cahier", "regle", "colle", "carte"];

    var ECOLE2 = ["buvard", "ordinateur", "fenetre", "eleve", "cours", "francais", "horloge", "cartable", "compas", "scotch", "ciseaux", "livre", "classeur", "bureau", "image", "pinceau", "tableau", "trousse", "carnet", "ancre"];

    var ECOLE3 = ["recreation", "mathematiques", "geographie", "punition", "conjugaison", "grammaire", "directeur", "camarades", "interrogation", "trombone", "elastique", "professeur", "dictionnaire", "marqueur", "gouache", "intercalaire", "histoire", "pochette", "équerre", "peinture"];


    var tableau = [];

    function aleatoireMot(liste) {
        return liste[Math.floor(Math.random() * liste.length)]; //retourne un mot aletoire de la liste

    }

    function gagne(mot, tableau2) {

        if (mot.toUpperCase() == tableau2.join("").toUpperCase()) {

            return true
        }
        return false

    }


    function miseAJour(lettre) {

        for (var i = 0; i < motChoisi.length; i++) {

            if (motChoisi[i] == lettre) {
                tableau[i] = lettre;
                cadre.innerHTML = tableau.join("").toUpperCase();
                lettreCorrect = true;
            } /* toUpperCase = lettre majuscule*/
            /* fonction pour deffiler les images quand une lettre est fausse donc on prend lettreCorrect = vrai; soit elle est vrai on l'affiche, soit elle est fausse et on fait erreur + 1 donc deffilement d'image */
        }
        if (!lettreCorrect && motChoisi != tableau.join("")) {
            erreur = erreur + 1;
            image.style.backgroundImage = imageAdresses[erreur];
            /*! = inverse de vrai*/
            // !true = false
            // true && true == true
            // true && false == false
            // true || false == true

        }
        lettreCorrect = false;
        /* if (gagne(motChoisi, tableau)) {
             point++;
             console.log(point);
         }*/

    }

    var gestionTouche = function () {
        if (motChoisi != tableau.join("") && erreur != 11) {
            miseAJour(event.target.id.toUpperCase());
            event.target.style.visibility = "hidden";
            /* = rend invisible la lettre cliquée*/
        }

        if (erreur == 11) {
            point = 0;
            document.getElementById("nbrPoint").innerHTML = point;
            console.log(point);
            perdu.style.display = "block";
            perdu.style.backgroundImage = "url(perdu2.png)";
            aleatoireMot.style.display= "block";
        }

        if (motChoisi == tableau.join("")) {
            point++;
            document.getElementById("nbrPoint").innerHTML = point;
            console.log(point);
            perdu.style.display = "block";
            perdu.style.backgroundImage = "url(gagner1.png)";
        }

    }

    a.addEventListener("click", function (event) {
        gestionTouche();

    });
    b.addEventListener("click", function (event) {
        gestionTouche();
    });
    c.addEventListener("click", function (event) {
        gestionTouche();
    });
    d.addEventListener("click", function (event) {
        gestionTouche();
    });
    e.addEventListener("click", function (event) {
        gestionTouche();
    });
    f.addEventListener("click", function (event) {
        gestionTouche();
    });
    g.addEventListener("click", function (event) {
        gestionTouche();
    });
    h.addEventListener("click", function (event) {
        gestionTouche();
    });
    i.addEventListener("click", function (event) {
        gestionTouche();
    });
    j.addEventListener("click", function (event) {
        gestionTouche();
    });
    k.addEventListener("click", function (event) {
        gestionTouche();
    });
    l.addEventListener("click", function (event) {
        gestionTouche();
    });
    m.addEventListener("click", function (event) {
        gestionTouche();
    });
    n.addEventListener("click", function (event) {
        gestionTouche();
    });
    o.addEventListener("click", function (event) {
        gestionTouche();
    });
    p.addEventListener("click", function (event) {
        gestionTouche();
    });
    q.addEventListener("click", function (event) {
        gestionTouche();
    });
    r.addEventListener("click", function (event) {
        gestionTouche();
    });
    s.addEventListener("click", function (event) {
        gestionTouche();
    });
    t.addEventListener("click", function (event) {
        gestionTouche();
    });
    u.addEventListener("click", function (event) {
        gestionTouche();
    });
    v.addEventListener("click", function (event) {
        gestionTouche();
    });
    w.addEventListener("click", function (event) {
        gestionTouche();
    });
    x.addEventListener("click", function (event) {
        gestionTouche();
    });
    y.addEventListener("click", function (event) {
        gestionTouche();
    });
    z.addEventListener("click", function (event) {
        gestionTouche();
    });

})
