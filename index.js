const name = "Oluwafemi Akinwalere";

console.log(name);

function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

const numDisks = 3;
const sourceTower = 'A';
const auxiliaryTower = 'B';
const destinationTower = 'C';

towerOfHanoi(numDisks, sourceTower, auxiliaryTower, destinationTower);
