function osszesOszto(number) {
    var osztok = [];
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(numbers) {
    var paros = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            paros++;
        }
    }
    return paros;
}
function fuggvenyhivasPalindrom(fn) {
    var szoveg = fn();
    var fordSzoveg = szoveg.split('').reverse().join('');
    return szoveg === fordSzoveg;
}
