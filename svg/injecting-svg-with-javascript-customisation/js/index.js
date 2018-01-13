document.addEventListener('DOMContentLoaded', function(){

var icon1 = document.querySelectorAll('.icon1');
var icon2 = document.querySelectorAll('.icon2');
var icon3 = document.querySelectorAll('.icon3');

//icon 1
for (i = 0; i < icon1.length; ++i) {
icon1[i].innerHTML = '<svg viewBox="0 0 40 30"><path d="M28.111,5.022l-1.215-3.655C26.625,0.55,25.861,0,25,0H7C6.138,0,5.375,0.55,5.102,1.367  L3.877,5.024C2.833,5.091,2,5.939,2,7v3c0,1.104,0.896,2,2,2h1.034c0,0.075-0.03,0.146-0.021,0.221l2,18C7.125,31.232,7.98,32,9,32  h14c1.02,0,1.875-0.768,1.986-1.779l2-18c0.01-0.075-0.021-0.146-0.021-0.221H28c1.104,0,2-0.896,2-2V7  C30,5.935,29.16,5.083,28.111,5.022z M7,2h18l1,3H6L7,2z M9,30l-0.333-3h14.666L23,30H9z M23.443,26H8.555L7.444,16h17.111  L23.443,26z M24.666,15H7.333L7,12h18L24.666,15z M28,10H4V7h24V10z" fill="#333333" id="cup"/></svg>';
}

//icon 2
for (i = 0; i < icon2.length; ++i) {
icon2[i].innerHTML = '<svg viewBox="0 0 40 30"><path clip-rule="evenodd" d="M25.914,13.143C25.477,8.58,21.678,5,17,5  c-3.619,0-6.717,2.148-8.146,5.23C8.424,10.094,7.976,10,7.501,10c-2.485,0-4.5,2.016-4.5,4.5c0,0.494,0.099,0.961,0.246,1.404  c-1.933,1.127-3.246,3.195-3.246,5.594c0,3.59,2.91,6.5,6.5,6.5V28H24.5v-0.002c4.143,0,7.5-3.357,7.5-7.5  C32,16.842,29.379,13.805,25.914,13.143z M24.5,25.998V26H6.501c-2.481-0.002-4.5-2.02-4.5-4.502c0-1.6,0.843-3.045,2.254-3.867  c1.371-0.787,1.465-0.943,0.89-2.357c-0.097-0.291-0.144-0.544-0.144-0.773c0-1.379,1.121-2.5,2.5-2.5c0,0,0.656-0.047,1.353,0.23  c1.147,0.457,1.272,0.02,1.814-1.159C11.815,8.599,14.3,7,17,7c3.6,0,6.576,2.723,6.924,6.334c0.123,1.432,0.123,1.432,1.615,1.773  C28.125,15.601,30,17.869,30,20.498C30,23.531,27.533,25.998,24.5,25.998z" fill="#333333" fill-rule="evenodd" id="cloud"/></svg>';
}
  
// icon 3
for (i = 0; i < icon3.length; ++i) {
icon3[i].innerHTML = '<svg viewBox="0 0 40 30"><g id="lab_1_"><path d="M20.682,3.732C20.209,3.26,19.582,3,18.914,3s-1.295,0.26-1.77,0.733l-1.41,1.412   C15.261,5.617,15,6.245,15,6.914c0,0.471,0.129,0.922,0.371,1.313L1.794,13.666c-0.908,0.399-1.559,1.218-1.742,2.189   c-0.185,0.977,0.125,1.979,0.834,2.687l12.72,12.58c0.548,0.548,1.276,0.859,2.045,0.877C15.669,32,15.711,32,15.729,32   c0.202,0,0.407-0.021,0.61-0.062c0.994-0.206,1.808-0.893,2.177-1.828l5.342-13.376c0.402,0.265,0.875,0.407,1.367,0.407   c0.67,0,1.297-0.261,1.768-0.733L28.4,15c0.477-0.474,0.738-1.103,0.738-1.773s-0.262-1.3-0.732-1.768L20.682,3.732z    M16.659,29.367c-0.124,0.313-0.397,0.544-0.727,0.612c-0.076,0.016-0.153,0.022-0.229,0.021c-0.254-0.006-0.499-0.108-0.682-0.292   L2.293,17.12c-0.234-0.233-0.337-0.567-0.275-0.893c0.061-0.324,0.279-0.598,0.582-0.73l6.217-2.49   c4.189,1.393,8.379,0.051,12.57,4.522L16.659,29.367z M26.992,13.58l-1.414,1.413c-0.195,0.196-0.512,0.196-0.707,0l-1.768-1.767   l-1.432,3.589l0.119-0.303c-3.01-3.005-6.069-3.384-8.829-3.723c-0.887-0.109-1.747-0.223-2.592-0.405l8.491-3.401l-1.715-1.715   c-0.195-0.195-0.195-0.512,0-0.707l1.414-1.415c0.195-0.195,0.512-0.195,0.707,0l7.725,7.727   C27.189,13.068,27.189,13.385,26.992,13.58z" fill="#333333"/><path d="M16.5,21c1.378,0,2.5-1.121,2.5-2.5S17.879,16,16.5,16c-1.379,0-2.5,1.121-2.5,2.5S15.122,21,16.5,21z    M16.5,17c0.828,0,1.5,0.672,1.5,1.5S17.328,20,16.5,20c-0.829,0-1.5-0.672-1.5-1.5S15.671,17,16.5,17z" fill="#333333"/><path d="M29.5,0C28.121,0,27,1.121,27,2.5S28.121,5,29.5,5S32,3.879,32,2.5S30.879,0,29.5,0z M29.5,4   C28.672,4,28,3.328,28,2.5S28.672,1,29.5,1S31,1.672,31,2.5S30.328,4,29.5,4z" fill="#333333"/><path d="M8,17c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2S8,15.897,8,17z M10,16c0.552,0,1,0.447,1,1   s-0.448,1-1,1s-1-0.447-1-1S9.448,16,10,16z" fill="#333333"/><circle cx="13" cy="23" fill="#333333" r="1"/><circle cx="29" cy="8" fill="#333333" r="1"/></g></svg>';
}
  

});

var icons = document.querySelectorAll('.svg-icons');

for (var i =0; i < icons.length; i++) {
    
  icons[i].addEventListener('click', function () {
        
    this.classList.toggle('active');    
    
  }, false);

}