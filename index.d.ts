declare class ParkMiller {
	/**
	[Park-Miller](https://en.wikipedia.org/wiki/Lehmer_random_number_generator) pseudorandom number generator (PRNG).

	@param seed - [Initialization seed.](https://en.wikipedia.org/wiki/Random_seed)

	@example
	```
	import ParkMiller = require('park-miller');

	const random = new ParkMiller(10);

	random.integer();
	//=> 2027521326
	```
	*/
	constructor(seed: number);

	integer(): number;
	integerInRange(min: number, max: number): number;
	float(): number;
	floatInRange(min: number, max: number): number;
	boolean(): boolean;
}

export = ParkMiller;
