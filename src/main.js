import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { feed, blueFood, badFood, hydrate, superWater, badWater } from './plant.js';
import { plantOneControl } from './statemanager.js';

$(document).ready(function () {
  $("#create-plant").click(function () {
    $('.plant-header').append($('.plant-container').html())
    let plantCount = $(".plant-header > h3").length + 1;
    console.log(plantCount);
  });

  $('#feed').click(function () {
    const newState = plantOneControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#blueFood').click(function () {
    const newState = plantOneControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#badFood').click(function () {
    const newState = plantOneControl(badFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#hydrate').click(function () {
    const newState = plantOneControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#superWater').click(function () {
    const newState = plantOneControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#badWater').click(function () {
    const newState = plantOneControl(badWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#show-state').click(function () {
    const currentState = plantOneControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });
});





