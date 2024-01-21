function osszesOszto(number: number): number[] {
    var osztok: number[] = [];
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            osztok.push(i);
        }
    }

    return osztok;
}

function parosDarab(numbers: number[]): number {
    var paros: number = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            paros++;
        }
    }

    return paros;
}

function fuggvenyhivasPalindrom(fn: () => string): boolean {
    var szoveg: string = fn();
    var fordSzoveg: string = szoveg.split('').reverse().join('');

    return szoveg === fordSzoveg;
}