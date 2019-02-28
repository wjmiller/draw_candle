import SVG from 'svg.js'
import 'svg.select.js'
import 'svg.resize.js'

export default {
  name: 'DrawChart',
  props: {},
  mounted() {

    const grid = {
      priceStart: 0,
      priceEnd: 10,
      priceIncr: 2
    };
    const {
      priceEnd,
      priceIncr
    } = grid;

    // Make SVG Drawing Canvas
    const draw = SVG('chart').size(300, 300);

    // Set the height value of bottom price line
    let lineHeight = priceEnd / priceIncr * 30 + 35;
    // Create an array to push grid line numbers and line height into
    let gridData = [];

    // Draw the grid axis
    drawAxis(lineHeight - 30);

    // Loop through number of lines (priceEnd / priceIncr)
    for (var i = 0; i <= priceEnd / priceIncr; i++) {
      // Subtract 30 from/set line height
      lineHeight -= 30;
      // Push an array including line number and line height values into gridData
      gridData.push([i * priceIncr, lineHeight]);
    }

    // Loop over gridData and draw a price line with the number and line height data in each item
    for (const line of gridData) {
      drawPriceLine(line[0], line[1]);
    }

    function drawPriceLine(n, h) {
      if (n !== 0) {
        draw.line('100%', h, 26, h).stroke({
          color: '#aaa',
          width: 1
        });
      }
      draw.text(n.toString()).move(0, h - 6).font({
        size: '12px',
        fill: '#555',
        family: 'Arial'
      });
    }

    function drawAxis(h) {
      draw.line(25, h, 25, 5).stroke({
        color: '#000',
        width: 1
      });
      draw.line('100%', h, 25, h).stroke({
        color: '#000',
        width: 1
      });
    }

    /*
    const rect = draw.rect(40, 40).fill('#f06').move(250, 50).selectize({
      rotationPoint: false
    }).resize({
      snapToGrid: 5
    }).draggable();
    */
  }

}