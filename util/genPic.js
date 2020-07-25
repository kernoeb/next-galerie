const fs = require('fs');
const sizeOf = require('image-size');

if (process.argv.length <= 2) {
    console.log(`Usage: ${__filename} /path/to/directory`);
    process.exit(-1);
}

const path = process.argv[2];
const img = []

// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
function reduce(numerator, denominator) {
    let gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    gcd = gcd(numerator, denominator);
    return [numerator / gcd, denominator / gcd];
}

fs.readdir(path, function (err, items) {
    const items2 = items.sort(function (a, b) {
        const x = new Date(`01-${a.split('_')[0]}`);
        const y = new Date(`01-${b.split('_')[0]}`);
        if (x < y) return 1;
        if (x > y) return -1;
        return 0;
    })

    // console.log(items2)

    for (let i = 0; i < items2.length; i++) {
        let red = sizeOf(path + items2[i])
        red = reduce(red.width, red.height)
        img.push({
            src: '/assets/' + items2[i],
            width: red[0],
            height: red[1]
        })
    }
    const json = JSON.stringify(img)
    fs.writeFileSync('./pages/api/pic.json', json)
});


