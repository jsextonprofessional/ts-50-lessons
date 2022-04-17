// @ts-check
/**
 * @typedef { import('../@types/types').ShipStorage }
ShipStorage */
/**
 * @typedef { import('../@types/types').StorageItem }
StorageItem */
const storage = {
    max: undefined,
    items: []
};
Object.defineProperty(storage, 'max', { writable: false, value: 5000 });
let currentStorage = undefined;
function storageUsed() {
    if (currentStorage) {
        return currentStorage;
    }
    currentStorage = 0;
    for (let i = 0; i < storage.length(); i++) {
        currentStorage += storage.items[i].weight;
    }
    return currentStorage;
}
/**
 * @param {StorageItem} item
 */
function add(item) {
    if (storage.max - item.weight >= storageUsed()) {
        storage.items.push(item);
        currentStorage += item.weight;
    }
    $('#numberOfItems').text(storage.items.length);
    // if(isDevelopment) {
    //   const itemCount = storage.items.length
    //   console.log(`${itemCount} items`)
    //   console.log(`${currentStorage} kg total`);
}
add({ weight: 3000 });
