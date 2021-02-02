import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { feed, blueFood, badFood, hydrate, superWater, badWater } from './plant.js';
import { changeState, stateControl } from './statemanager.js';

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





