import {expectType} from 'tsd';
import ParkMiller = require('.');

const random: ParkMiller = new ParkMiller(10);

expectType<number>(random.integer());
expectType<number>(random.integerInRange(0, 1));
expectType<number>(random.float());
expectType<number>(random.floatInRange(0, 1));
expectType<boolean>(random.boolean());
