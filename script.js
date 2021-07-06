// filter out the friends with 4 length
let friend = ['Uche', 'tosin', 'Jerry', 'joy', 'borr', 'John', 'Mary', 'Major']
friends = (friend) => {
    // return friend.filter((n => n.length === 4))
    return friend.filter((n => n.length === 4))


}
console.log(friends(friend));
//songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// => WE ARE THE CHAMPIONS MY FRIEND
song = "WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"
songDecorder = (song) => {
    return song.replaceAll('WUB', ' ')

}
console.log(songDecorder(song));
//Create a function that return the sum of the lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integer will be passed. for example. when an array is passed like[19,5,42,2,77], the output should be 7
let number = [19, 5, 42, 2, 77]
findTwoLowestNUMber = (number) => {
    let [firstNumber, secondNumber] = number.sort((a, b) => a - b);
    return firstNumber + secondNumber

}
console.log(findTwoLowestNUMber(number))
    //"a" =1, "b" =2, etc
    //Alphabet Position("The sunset sets at twelve o' clock")should return "20 8 5 21 14 5 20 19 5 20 20 23 5 12 22 5 15 3 12 15 3 11" string
const alphabet = 'abcdefghijklmnopqrstvwxyz'.split('');
alphabetPostion = (text) => {
    // alphabet.indexOf();
    return text.toLowerCase().replace(/[^a-zA-Z]/g, "").split("").map((letter) => alphabet.indexOf(letter) + 1).join(' ');

}
console.log(alphabetPostion("The sunset sets at twelve o'clock"));
//Return the number(count) of Vowels in the given strings
//we will consider a,e, i, o, u as vowels for this kata(but not y) 
//the input string will only consist of lower case letters and/or spaces.
getCount = (str) => {
    let vowelCount = 0;
    for (const letter of str) {
        if (letter.match((/[aeiou]/g))) {
            vowelCount++;
        }
    }
    return vowelCount

}
console.log(getCount('abracadabra'));
//split method
splitCount = (strn) => {
    let vowelSplit = strn.split('').reduce((acc, letter) => (letter.match(/[aeiou]/g) ? acc + 1 : acc), 0);
    return vowelSplit;
}
console.log(splitCount('abracadabra'));
//smart approache
smartCount = (str) => {
    return (str.match(/[aeiou]/ig) || []).length

}
console.log(smartCount('abracadabra'));
//Array
// const salad = ['Tomatos', 'Apple', 'Mushroom', 'CocoBam', 'carrot', 'pear']
// console.log(salad);
const salad = new Array('Tomatos', 'Apple', 'Mushroom', 'CocoBam', 'carrot', 'pear')
salad.push('orange')
salad.unshift('Pineapple')
salad.pop()
salad.shift()
const saladCopy = salad.slice();
console.log(saladCopy);
for (let i = 0; i < salad.length; i++) {
    console.log(`Element at index ${i} is ${salad[i]}`);
}
Array.isArray(['apple'])
console.log(Array.isArray('apple'));
let [fruit, , car] = ['Apple', 'Bunglow', 'Jeep']
console.log(fruit, car);
let friut2 = ['Pineapple', 'Apple', 'Carrot', 'Tomato', ['ver', 'kel', 'com']]
const veg = friut2[4]
console.log(veg);
console.log(veg[2]);
console.log(friut2[4][2]);