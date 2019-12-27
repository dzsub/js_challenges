
const parkMap = new Map();
const streetMap = new Map();

class Facilitie {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Facilitie {
    constructor (name, buildYear, numberOfTrees, area) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area; // square km
    }

    treeDensity() {
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }

    hasMoreThanXTrees(limit) {
        if(this.numberOfTrees > limit) {
            console.log(`${this.name} has more then ${limit} trees`);
        }
    }
}

class Street extends Facilitie {
    constructor (name, buildYear, length, size = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    description() {
        console.log(`${this.name}, built in ${this.buildYear}, is a ${this.size} street`);
    }
}

function totalAndAverage(arr) {
        let total = 0;
        for (let element of arr) {
            total += element;
        }
        return [total, total / arr.length];
    }

function calcAges() {
    const years = [];
    for (let [key, value] of parkMap) {
        years.push(value.buildYear);
    }
    return years.map(cur => new Date().getFullYear() - cur);
}

function getLength() {
    const len = [];
    for (let [key, value] of streetMap) {
        len.push(value.length);
    }
    return len;
}

// Add parks to the database
const greenPark = new Park('Green Park', 1920, 850, 0.8);
const nationalPark = new Park('National Park', 1722, 1322, 1.1);
const oakPark = new Park('Oak Park', 1855, 760, 0.35);

parkMap.set('Green Park', greenPark);
parkMap.set('National Park', nationalPark);
parkMap.set('Oak Park', oakPark);

// Add streets to the database
const oceanAvenue = new Street('Ocean Avenue', 1999, 5, 'big');
const everGreenStr = new Street('Evergreen Street', 2008, 1, 'small');
const fourthStr = new Street('4th Street', 2015, 2.6);
const sunsetBoulevard = new Street('Sunset Boulevard', 1982, 5.2, 'huge');

streetMap.set('Ocean Avenue', oceanAvenue);
streetMap.set('Evergreen Street', everGreenStr);
streetMap.set('4th Street', fourthStr);
streetMap.set('Sunset Boulevard', sunsetBoulevard);


function parkReport() {
    let treeLimit = 1000;
 
    const ages = calcAges();
    const [parkTot, parkAvg] = totalAndAverage(ages);

    console.log('----PARKS REPORT----');
    console.log(`Our ${ages.length} parks have an average age of ${parkAvg} years`);
    for (let [key, value] of parkMap) {
        value.treeDensity();
    }
    for (let [key, value] of parkMap) {
        value.hasMoreThanXTrees(treeLimit);
    }
}

function streetReport() {
    const strLen = getLength();
    const [strTot, strAvg] = totalAndAverage(strLen);

    console.log('----STREETS REPORT----');
    console.log(`Our ${strLen.length} streets have a total length of ${strTot} km, ` + 
                `with an average of ${strAvg} km.`);
    for (let [key, value] of streetMap) {
        value.description();
    }
}

parkReport();
streetReport();

const newPark = new Park ('New Park', 2016, 1200, 0.6);
parkMap.set('New Park', newPark);

const newStr = new Street ('New Street', 2018, 1.8, 'normal');
streetMap.set('New Street', newStr);

parkReport();
streetReport();



























