function solve(str) {
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };

    let legendary = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath'
    };

    let junkMaterials = {};

    let materials = str
        .toLowerCase()
        .split(' ');

    for (let i = 0; i < materials.length; i += 2) {
        let qty = Number(materials[i]);
        let material = materials[i + 1];
        if (material in keyMaterials) {
            keyMaterials[material] += qty;
            if (keyMaterials[material] >= 250) {
                keyMaterials[material] -= 250;
                console.log(`${legendary[material]} obtained!`);
                break;
            }
        } else {
            if (material in junkMaterials) {
                junkMaterials[material] += qty;
            } else {
                junkMaterials[material] = qty;
            }
        }
    }

    let keyEntries = Object
        .entries(keyMaterials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (let [material, qty] of keyEntries) {
        console.log(`${material}: ${qty}`);
    }

    let junkEntries = Object
        .entries(junkMaterials)
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (let [material, qty] of junkEntries) {
        console.log(`${material}: ${qty}`);
    }
}

// solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');