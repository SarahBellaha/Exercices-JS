## Variables

Les variables permettent de mémoiriser une information.
Faire évoluer cette information.
C'est au développeur de nommer les variables.
Dans javascript, il existe une convention de nommage pour les varibales en js, cette conventionest appelé 'camelCase'.
- on comme par une miniscule.
- posséde une majuscume à chaque fois ou on change de mot.

```
example : 
var name = 'toto'
var firstName = ''
```

### Déclaration d'une variable

es5 var name= ' toto'
es6 const et let.
const : c'est une variable unique, c'ést à dire on ne peut plus la réaffecter 
let : c'est une variable modifiable. 


### Types de variables


#### number
const age = 30;
const height = 50.20;

#### boolean

un boolean est une donnée binaire, c'est à on peut avoir que deux états.

const isOpen = true;
const isHidden = false;

#### string
String est la variable est une chaine de caréctère, 'String' en anglais.
const str = 'bonjour tout le monde';
const str = ' j'ai été élu président de la republique'
const str = 'j'ai été élu président de la republique'
pour échaper de les caréctères spéciaux dans une string on ajout '\' avant le caréctère.

#### Array
Pour stocker plusieurs informations pour la même variable on utilise les tableaux.
les éléments de tableaux sont référenciés par un index.

const array = ['orange', 'kiwi', 2, true, 'yellow'];

Pour accéder un élément d'un tableau on utlise la syntaxe suivante : 
console.log(array[0]);
console.log(array[3]);

#### methodes Array

##### length 
permet d'avoir la longueur du tableau

#### Objets

Pour stocker plusieursinformations comme les tableaux.
const person = {
 firstName: 'Youssef',
 lastName : 'Slim',
 age : 31,
}

Pour accéder à un élément d'un objet on utlise la syntaxe suivante : 
console.log(person[]);

### Inspecter une variable
Pour voir ce que contient une variable, on peut utiliser la fonction `console.log`.

```js
prenom = "Clark";
console.log(prenom); // affiche "Clark" dans la console du navigateur (F12 / onglet Console)
notes = [10, 12, 15, 15, 20];
console.log(notes); // affiche le tableau et son contenu dans la console
```


### Type d'une variable

Le mot-clé `typeof` permet de vérifier le type d'une variable :

```js
typeof 12 //=> "number"
typeof 'toto' //=> "string"
typeof false //=> "boolean"
```

> Attention, `typeof` n'est pas une fonction (voir ci-après) : il n'y a pas de parenthèses, on n'écrit pas `typeof(12)` par exemple.
---

## Instructions
Par opposition aux variables qui stockent simplement les données du programme, les instructions sont les traitements qui manipulent ces données.

En JS, on écrit une instruction par ligne et on signale explicitement à la machine la fin d'une instruction par un `;` final.

_Le `;` en fin d'instruction est techniquement facultatif, mais son absence pose problème dans certains cas. La bonne pratique est de systématiquement écrire un `;` explicite pour s'éviter des ennuis._

### Affectation de variable



### Opérateurs
JS reconnaît un certain nombre d'opérateurs, qui permettent de manipuler facilement les données (en direct, ou stockées dans des variables).

Parmi tous les opérateurs disponibles, les opérateurs arithmétiques (`+`, `-`, `*`, `/`, `%`) permettent d'éxécuter les calculs de base sur des `number`.

``` js
1 + 3; // retourne 4
10 / 2 // retourne 5
1 * 3 // retourne 3 
666 - 42 // retourne 624
25 * 4 + 10 // retourne 110, sans parenthèses * et / l'emportent sur le + et -
25 * (4 + 10) // retourne 350, les parenthèses permettent de changer la précédence des opérateurs
```


#### Concaténation
oncaténer 2 chaînes de caractères veut dire « les coller bout à bout. » L'ordre de la concaténation importe.

Pour concaténer deux chaînes, on utilise l'opérateur `+` :

``` js
'salut' + ' ' + 'les gens'; // équivalent à la chaîne de caractère 'salut les gens'
```


#### Opérateurs logiques
Il est possible de combiner des valeurs booléennes, selon une logique particulière. Le résultat d'une opération booléenne est toujours une valeur booléenne, donc `true` ou `false`.

- L'opérateur `&&` signifie "ET" :
  `var canDrive = isEighteen && hasLicence;`
  si `isEighteen` vaut `true` ET que `hasLicence` vaut `true`, alors `canDrive` prendra la valeur `true`.

- L'opérateur `||` signifie "OU" :   
  `var takeUmbrella = isRaining || willRainToday ;`
  si `isRaining` vaut `true` OU que `willRainToday` vaut `true`, ou les deux, alors `takeUmbrella` prendra la valeur `true`.


##### égalité
Le signe `=` peut signifier des choses différentes, selon comment on l'utilise :

```
= : opérateur d'affectation (pour changer la valeur d'une variable, d'un élément de tableau…)
== : opérateur de comparaison souple (ne compare que la valeur, pas le type)
=== : opérateur de comparaison stricte (compare type & valeur)
```



##### supérieur, inférieur
Les opérateurs de comparaison permettent de vérifier 2 valeurs entre elles. Une comparaison renvoit toujours un `boolean`.

```js
const age = 28;
age < 30; // age (28) est inférieur à 30 ? true
age <= 30; // age (28) est inférieur ou égal à 30 ? true
age > 30; // age (28) est supérieur à 30 ? false
age >= 30; // age (28) est supérieur ou égal à 30 ? false
```