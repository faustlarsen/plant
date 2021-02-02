import { changeState, stateControl } from './statemanager.js';

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);
export const badFood = changeState("soil")(-3);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);
export const badWater = changeState("water")(-3);