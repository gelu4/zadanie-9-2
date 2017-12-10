var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = "Marian";
if(allNames.indexOf(newName) === -1) {
allNames.push(newName);
}
console.log(allNames);

// reverse
var allNames7 = allNames.slice();
allNames7.reverse();
console.log(allNames7);
// Alfabetycznie

//function compareName(a, b) {
  //  return a - b
//}
var allNames4 = allNames.slice();

console.log('Bez sortowania: ' + allNames4 );

allNames4.sort()
console.log( 'Po sortowaniu: ' + allNames4 );


// Sortowanie na litere M

var allNames1 = allNames.slice();

console.log(allNames1);
var filteredByM = allNames1.filter(function(index) {
				return index !='Marek'&& index != 'Marian';
		 });
				console.log('filtered by M:', filteredByM);


// sposób 2

console.log(allNames1);
var filteredByM1 = allNames1.filter(function(el, i) {
				//console.log(index);
				return(el.charAt(el.lenght +1) != 'M')
		 });
				console.log('filtered by M:', filteredByM1);


// imiona dłuzsze niz 5 liter

var allNames5 = allNames.slice();
var letter = allNames5.filter(function(el, i) {
				return (el.charAt(el.length =5))
		 });
				console.log('letter', letter);


// wyciecie pozycji 2-4

var allNames2 = allNames.slice();
allNames2.splice(1, 3);
console.log(allNames2);



//imiona na K

var allNames6 = allNames.slice();
var indexOfK = allNames6.filter(function(el, i) {
				return (el.charAt(el.lenght) =="K")
		 });
				console.log('letter K:',  indexOfK);


