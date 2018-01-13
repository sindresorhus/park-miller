import test from 'ava';
import ParkMiller from '.';

const MAX_INT32 = 2147483647;
const ITERATIONS = 10000;

function assertInteger(t, seed) {
	const random = new ParkMiller(seed);

	for (let i = 0; i < ITERATIONS; i++) {
		const result = random.integer();
		t.true(Number.isInteger(result));
		t.true(result <= MAX_INT32);
	}
}

function assertIntegerInRange(t, seed) {
	const random = new ParkMiller(seed);
	const min = 33;
	const max = 2242;

	for (let i = 0; i < ITERATIONS; i++) {
		const result = random.integerInRange(min, max);
		t.true(Number.isInteger(result));
		t.true(result >= min);
		t.true(result <= max);
	}
}

function assertFloat(t, seed) {
	const random = new ParkMiller(seed);

	for (let i = 0; i < ITERATIONS; i++) {
		const result = random.float();
		t.false(Number.isInteger(result));
		t.true(result <= MAX_INT32);
	}
}

function assertFloatInRange(t, seed) {
	const random = new ParkMiller(seed);
	const min = 0.33;
	const max = 0.52242;

	for (let i = 0; i < ITERATIONS; i++) {
		const result = random.floatInRange(min, max);
		t.false(Number.isInteger(result));
		t.true(result >= min);
		t.true(result <= max);
	}
}

function assertBoolean(t, seed) {
	const random = new ParkMiller(seed);
	let average = 0;

	for (let i = 0; i < ITERATIONS; i++) {
		const result = random.boolean();
		t.is(typeof result, 'boolean');
		average += result ? 1 : -1;
	}

	t.true(average < 10000);
}

function runFn(fn) {
	const random = new ParkMiller(33);
	const values = [];

	for (let i = 0; i < ITERATIONS; i++) {
		values.push(random[fn]());
	}

	return values;
}

function runAsserts(t, fn, assertFn) {
	const seeds = [
		0,
		1,
		10,
		-10,
		Number.MIN_SAFE_INTEGER,
		Number.MAX_SAFE_INTEGER
	];

	for (const seed of seeds) {
		assertFn(t, seed);
	}

	// Ensure it generates numbers deterministically
	t.deepEqual(runFn(fn), runFn(fn));
	t.deepEqual(runFn(fn), runFn(fn));
}

test('.integer()', t => {
	runAsserts(t, 'integer', assertInteger);
});

test('.integerInRange()', t => {
	runAsserts(t, 'integerInRange', assertIntegerInRange);
});

test('.float()', t => {
	runAsserts(t, 'float', assertFloat);
});

test('.floatInRange()', t => {
	runAsserts(t, 'floatInRange', assertFloatInRange);
});

test('.boolean()', t => {
	runAsserts(t, 'boolean', assertBoolean);
});
