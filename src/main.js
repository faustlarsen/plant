import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { feed, blueFood, badFood, hydrate, superWater, badWater } from './plant.js';
import { plantOneControl } from './statemanager.js';
// import * as plant from './plant.js';


// //new plant
// let rose = plant.rose("Rose");
// const roseStateControl = storeState(rose);
// console.log(roseStateControl);

$(document).ready(function () {
  $("#create-plant").click(function () {
    let plantCount = $(".container >").length - 1;
    var plantHTML =
      `<div class="plant">
      <h2>Plant ${plantCount}:</h2>
      <h3>
        <div id="soil-value-${plantCount}">0</div>
        <div id="water-value-${plantCount}">0</div>

        <div class="grow-buttons">
          <button class="btn-success" id="feed-${plantCount}">Add soil</button>
          <button class="btn-success" id="blueFood-${plantCount}">Add blue soil</button>
          <button class="btn-warning" id="badFood-${plantCount}">Add bad soil</button>
          <br>
          <button class="btn-success" id="hydrate-${plantCount}">Add water</button>
          <button class="btn-success" id="superWater-${plantCount}">Add super water</button>
          <button class="btn-warning" id="badWater-${plantCount}">Add bad water</button>

          <!-- <button class="btn-success" id="show-state-${plantCount}">Current State</button> -->

        </div>
      </h3>
    </div>
    `
    $('.container').append(plantHTML);
    console.log(plantCount);
  });


  $('#feed-1').click(function () {
    const newState = plantOneControl(feed);
    $('#soil-value-1').text(`Soil: ${newState.soil}`);
  });

  $('#blueFood-1').click(function () {
    const newState = plantOneControl(blueFood);
    $('#soil-value-1').text(`Soil: ${newState.soil}`);
  });

  $('#badFood-1').click(function () {
    const newState = plantOneControl(badFood);
    $('#soil-value-1').text(`Soil: ${newState.soil}`);
  });

  $('#hydrate-1').click(function () {
    const newState = plantOneControl(hydrate);
    $('#water-value-1').text(`Water: ${newState.water}`);
  });

  $('#superWater-1').click(function () {
    const newState = plantOneControl(superWater);
    $('#water-value-1').text(`Water: ${newState.water}`);
  });

  $('#badWater-1').click(function () {
    const newState = plantOneControl(badWater);
    $('#water-value-1').text(`Water: ${newState.water}`);
  });

  $('#show-state-1').click(function () {
    const currentState = plantOneControl();
    $('#soil-value-1').text(`Soil: ${currentState.soil}`);
  });
});





