const fs = require('fs');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

const path = process.argv[2];
let img = []

fs.readdir(path, function (err, items) {
    /*let items2 = items.sort(function (a, b) {
        let x = parseInt(a.split('-')[1], 10)
        let y = parseInt(b.split('-')[1], 10)
        let x2 = parseInt(a.split('-')[0], 10)
        let y2 = parseInt(b.split('-')[0], 10)
        console.log(x + ' ' + y + ' ' + x2 + ' ' + y2)

        if ((x < y) && (x2 < y2)) {
            return -1;
        }
        if ((x > y) && (x2 > y2)) {
            return 1;
        }
        return 0;
    })*/

    let items2 = items.sort(function (a, b) {
        let x = new Date('01-' + a.split('_')[0]);
        let y = new Date('01-' + b.split('_')[0]);
        if (x < y) return 1;
        if (x > y) return -1;
        return 0;
    })

    console.log(items2)

    for (let i = 0; i < items2.length; i++) {
        img.push({
            img: items2[i],
            title: items2[i].split('.jpg')[0],
        })
    }
    let json = JSON.stringify(img)
    fs.writeFileSync('./pages/api/pic.js', 'export const tileData = ' + json + ';')
});


