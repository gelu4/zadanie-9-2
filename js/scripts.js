var femaleNames = ['Asia', 'Monika', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Kuba', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = "Marian";
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}
console.log(allNames);
/*
// reverse specjalnie zakomentowane

var allNames7 = allNames.slice();
allNames7.reverse();
console.log(allNames7);*/

//Alfabetycznie

var allNames4 = allNames.slice();

console.log('Bez sortowania: ' + allNames4);

allNames4.sort()
console.log('Po sortowaniu: ' + allNames4);


// Sortowanie na litere M

var allNames1 = allNames.slice();

console.log(allNames1);

var filteredByM = allNames1.filter(function (el, i) {
	return (el.charAt(el.i + 1) !== 'M')
});
console.log('Filtered by M: ' + filteredByM);


// imiona dłuzsze niz 5 liter

var allNames5 = allNames.slice();
var filter = allNames5.filter(function (el) {
	return (el.length) > 5;
});
console.log('letter', filter);


// wyciecie pozycji 2-4

var allNames2 = allNames.slice();
allNames2.splice(1, 3);
console.log(allNames2);

//imiona na K

var allNames6 = allNames.slice();
var letterK = allNames6.filter(function (el, i) {
	return (el.charAt(el.i) == "K")
});
console.log('letter K:', letterK);



allNames.map(function (el, i) {
			console.log(el +' - '+ el.length + ' - letters');
});
