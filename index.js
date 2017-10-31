let test = {
  1: .2,
  2: .5,
  3: .1,
  4: .1,
  5: .1
};

let distribution = (acc, curr) => {
  acc[curr] = ++acc[curr] || 1;
  return acc;
};

let dist = 'Nam a sapien.  Aliquam erat volutpat.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.'
    .replace(/[^a-z]/ig, '')
    .toLowerCase()
    .split('')
    .reduce(distribution, {});

console.log(dist);

const weight = Object
      .values(dist)
      .reduce((p, c) => p + c, 0);

console.log(weight);

let weightedDist = Object
    .keys(dist)
    .reduce((p, c) => {
      p[c] = dist[c] / weight;
      return p;
    }, {});

console.log(weightedDist);


// https://en.wikipedia.org/wiki/Rejection_sampling
// https://wiseodd.github.io/techblog/2015/10/21/rejection-sampling/

// target distribution
// probability density function
