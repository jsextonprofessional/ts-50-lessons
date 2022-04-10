// @ts-check
/**
 * @typedef { import('./types.d').ShipStorage }
ShipStorage */
/**
 * @typedef { import('./types.d').StorageItem }
StorageItem */
const storage = {
  max: undefined,
  items: []
}

Object.defineProperty(storage, 'max', { writable: false, value: 5000 })

let currentStorage = undefined

function storageUsed() {
  if(currentStorage) {
    return currentStorage
  }
  currentStorage = 0
  for(let i = 0; i < storage.length(); i++) {
    currentStorage += storage.items[i].weight
  }
  return currentStorage
}

/**
 * @param {StorageItem} item
 */
function add(item) {
  if(storage.max - item.weight >= storageUsed()) {
    storage.items.push(item)
    currentStorage += item.weight
  }
}

add({ weight: 3000 })