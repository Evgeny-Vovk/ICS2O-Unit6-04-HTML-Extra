// Copyright (c) 2022 Evgeny All rights reserved
//
// Created by: Evgeny
// Created on: June 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-HTML-Extra/sw.js", {
    scope: "/ICS2O-Unit6-04-HTML-Extra/",
  })
}

"use strict"

window.onload = function() {
  // this calculates area and perimeter of a rectangle

  const params = new URLSearchParams(document.location.search)
  
  // input
  const width = params.get('w')
  const length = params.get('l')

  // process
  const area = width * length
  const perimeter = 2 * length + 2 * width
  const dimensions = "w = " + width + "<br> l = " + length

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('answer').innerHTML = 'The area is: ' + area.toFixed(2) + ' cm². ' + '<br>The perimeter is: ' + perimeter.toFixed(2) + ' cm.'
}