const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();
  let hitungEmosi = 0;

  await new Promise(resolve => {
    for (object of theaterIXX) {
      if (object.hasil === emosi) hitungEmosi++;
    }
    return resolve(hitungEmosi);
  });

  await new Promise(resolve => {
    for (object of theaterVGC) {
      if (object.hasil === emosi) hitungEmosi++;
    }
    return resolve(hitungEmosi);
  });

  return hitungEmosi;
}

module.exports = {
  promiseOutput,
};
