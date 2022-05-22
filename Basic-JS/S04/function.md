# Les fonctions

Tout comme une variable sert à stocker une valeur, une fonction sert à stocker des instructions, pour les utiliser plus tard/loin dans le programme.

Une fonction peut éventuellement recevoir des informations de la part de la personne qui l'utilise, pour contextualiser son travail (notions de paramètres/arguments), ce qui en fait un outil très polyvalent.

## Fonction simple (sans paramètre)

### Définition

Pour définir une fonction, on utilise le mot-clé `function` et un bloc d'instructions délimité par des accolades :

```js
function hello() {
  console.log('hello world !');
}
```
> Attention, la structure minimaliste pour définir une fonction sera toujours `function nomDeLaFonction() {}`. Les parenthèses notamment sont obligatoires.


Il est également possible de définir une fonction anonyme, et de la stocker dans une variable :

```js
const hello = function () {
  console.log('hello world !');
};
```

> La différence entre fonction nommée et fonction anonyme tient surtout du style personnel. Dans les deux cas, l'exécution sera identique.
> ### Exécution

```js
hello(); // produira un 'hello world !' dans la console
```

## Fonction avec valeur de retour

La définition d'une fonction peut prévoir que celle-ci retourne une valeur, avec le mot-clé `return` :

```js
function getMessage(name) {
  return 'hello ' + name +' !';
}
```

La personne utilisant (exécutant) la fonction peut, si elle le souhaite, récupérer et par exemple stocker cette valeur de retour :

``` js
// La variable message contiendra 'hello Gringo !'
var message = getMessage('Gringo');
```

**Attention** : quand le moteur JS rencontre une instruction `return`, il quitte la fonction (toute instruction ultérieure dans la fonction est ignorée).

## Fonction avec des paramètres

Si on souhaite utiliser une fonction mais que son travail dépend d'informations qui ne sont pas connues au moment de sa définition, il est possible de les lui fournir au moment de son exécution :

### Définition

La définition indique alors que la fonction prend un (ou plusieurs) **paramètre(s)**, par exemple ci-dessous `name`. 
Le paramètre est en fait une variable locale (définie uniquement au sein de la fonction), dont la valeur n'est pas spécifiée car inconnue à ce stade. La variable sera créée automatiquement lors de l'exécution, et contiendra alors une valeur précise.

```js
function hello(name) {
  console.log('hello ' + name +' !');
}
```

### Exécution

Lors de l'exécution, on passe en **argument** une valeur, par exemple ci-dessous `'Gringo'`. Cette valeur est assignée à la variable `name` dans le corps de la fonction, `name` étant le nom du paramètre qui correspond.

```js
hello('Youssef'); // produira un 'hello Gringo !' dans la console
```

### Fonctions avec plusieurs paramètres 

Une fonction peut accepter plusieurs paramètres

```js
function addition(a, b) {
  return a + b;
}
// resultat contiendra 10
const resultat = addition(3, 7);
```