# park-miller

> [Park-Miller](https://en.wikipedia.org/wiki/Lehmer_random_number_generator) pseudorandom number generator (PRNG)

## Install

```
$ npm install park-miller
```

## Usage

```js
import ParkMiller from 'park-miller';

const random = new ParkMiller(10);

random.integer();
//=> 2027521326
```

## API

### `const random = new ParkMiller(seed)`

#### seed

Type: `integer`

[Initialization seed.](https://en.wikipedia.org/wiki/Random_seed)

### random.integer()
### random.integerInRange(min, max)
### random.float()
### random.floatInRange(min, max)
### random.boolean()

## Related

- [randoma](https://github.com/sindresorhus/randoma) - User-friendly pseudorandom number generator (PRNG)
