import './styles.css';
import { changeState, stateControl } from './statemanager.js';

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const badFood = changeState("soil")(-3);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const badWater = changeState("water")(-3);


$(document).ready(function () {
  $('#feed').click(function () {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  $('#blueFood').click(function () {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  $('#badFood').click(function () {
    const newState = stateControl(badFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });


  $('#hydrate').click(function () {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#superWater').click(function () {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#badWater').click(function () {
    const newState = stateControl(badWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#show-state').click(function () {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });
});





