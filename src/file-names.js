const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const box = {};
  const done = [];

  for (let thing of names) {
    if (!box[thing]) {
      box[thing] = 1;
      done.push(thing);
    } else {
      let num = box[thing];
      let newThing = `${thing}(${num})`;

      while (box[newThing]) {
        num++;
        newThing = `${thing}(${num})`;
      }

      box[thing] = num + 1;
      box[newThing] = 1;
      done.push(newThing);
    }
  }

  return done;
}

module.exports = {
  renameFiles
};
