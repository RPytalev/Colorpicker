$( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
        if(type === 'backgroundColor') {
            $( "#swatch" ).css( "background-color", "#" + hex );
        } else {
            $( "#swatch" ).css( "color", "#" + hex );
        }
    }
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 127 );
    $( "#green" ).slider( "value", 127 );
    $( "#blue" ).slider( "value", 127 );
  } );

let type = '';

let btnColor = document.getElementById('color');
let btnBackgroundColor = document.getElementById('backgroundColor');
btnColor.addEventListener('click', toggleColor);
btnBackgroundColor.addEventListener('click', toggleBackgroundColor);

function toggleColor() {
    type = 'color';
}

function toggleBackgroundColor() {
    type = 'backgroundColor';
}