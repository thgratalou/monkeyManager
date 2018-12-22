Projet réalisé par Thibault GRATALOUP & Romuald Lhotellier Rivet

Remarques :
    - Les images de fond sont parfois capricieuses et ne s'affichent pas. Nous n'avons pas trouvé de solution pour remédier à ça.
    - Nous avons normalisé nos noms de fichiers pour simplifier la programmation et la modification :
        - M => Monkey
        - E => Enclosure
        - Les fichiers conf[M, E][C, U, D] correspondent aux messages de confirmations de création, modification et suppression d'un singe/enclos.
        - Les fichiers [create, update, delete][M, E] correspondent aux fichiers de création, modification, suppression d'un singe/enclos.
        - Les fichiers enclosure/monkey correspondent à l'affichage des singes/enclos.
        - Les fichiers enclosureID/monkeyID correspondent à l'affichage des singes/enclos par ID.
        - Les fichiers enclosureMenu/monkeyMenu correspondent aux menus d'affichages des singes/enclos.
        - Les fichiers search[Name, ID, Enclosure][M, E] correspondent aux pages de recherches par noms, ID ou enclos des singes/enclos.
        - Le css se trouve dans le fichiers style.css
        - La gestion de la page d'accueil se fait dans index.
        - Le header et le footer sont gérés dans header.pug & footer.pug
    - Nous n'avons pas eu le temps de lier enclos et singe.
    - Nous n'avons pas réussi à faire fonctionner les pages de recherches par noms/id/enclos. Néanmoins, vous pouvez utiliser la recherche dans la base avec les adresses suivantes :
        - /Monkeys/id/:id => Recherche par ID
        - /Monkeys/name/:name => Recherche par nom
        - /Monkeys/enclosure/:enclosure => Recherche par enclos
        - /Enclosures/name/:name => Recherche par nom
        - /Enclosures/id/:id => Recherche par ID
