# La syntaxe JavaScript

Rappels sur la séparation des concepts :

- HTML => structure des contenus (définition),
- CSS => présentation des contenus (mise en forme),
- **JavaScript => gestion des interactions** (entre l'utilisateur et le navigateur) + **évolution dynamique du contenu**

---
## Commentaires

En JavaScript, comme avec tous les langages de programmation, on écrit des instructions à destination de la machine, pour obtenir un résultat. L'ensemble de ces instructions forme un programme, qui dans l'idéal fait quelque chose d'intéressant et viable :see_no_evil:

Mais avant de commencer à écrire des instructions pour la machine, on va pouvoir faire des commentaires,
comme en HTML et en CSS, par exemple pour donner des _indications_ uniquement destinées aux
développeurs, c'est-à-dire vous et vos collègues : les êtres humains.

Deux types de commentaires existent en JavaScript (JS) :

- Sur une ligne, en la faisant commencer par `//` : la ligne est ignorée par la machine.
- Sur plusieurs lignes, avec `/*` et `*/` (comme en CSS) : le bloc de lignes est ignoré par la machine.

``` js
// Une ligne de commentaire
/*
  Un bloc
  de commentaires
  sur plusieurs lignes
*/
```

> Attention, avec la syntaxe `//` il est possible d'ajouter un commentaire sur une ligne où du code est déjà présent, sans que ce code ne soit lui-même mis en commentaire (et donc ignoré par la machine) : voir des exemples ci-après.
---
