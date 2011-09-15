var elts = ['html', 'ul', 'li', 'h1', 'strong', 'a', 'p'];

var fx = {
  color: { prob: .5, type: 'hex' },
  'background-color': { prob: .5, type: 'hex' },
  'font-family': { prob: .6, type: 'enum', vals: ['sans-serif', 'serif', 'monospace',
    'Comic Sans', 'cursive', 'Impact', 'fantasy'] },
  'font-style': { prob: .30, type: 'enum', vals: ['normal', 'italic', 'oblique'] },
  'font-weight': { prob: .30, type: 'enum', vals: ['normal', 'bold'] },
  'text-decoration': { prob: .20, type: 'enum', vals: ['none', 'underline', 'overline',
    'line-through', 'blink', 'inherit'] },
  'font-size': { prob: .4, type: 'range', range: [8, 24] },
  'text-align': { type: 'enum', vals: ['left', 'center', 'right', 'justify' ] },
  
  width: { prob: .4, type: 'range', range: [30, 900] },
  'margin-top': { type: 'range', range: [0, 10] },
  'margin-bottom': { type: 'range', range: [0, 10] },
  'margin-left': { type: 'range', range: [0, 10] },
  'margin-right': { type: 'range', range: [0, 10] },
  'padding-top': { type: 'range', range: [0, 10] },
  'padding-bottom': { type: 'range', range: [0, 10] },
  'padding-left': { type: 'range', range: [0, 10] },
  'padding-right': { type: 'range', range: [0, 10] },

  'border-style': { prob: .3, type: 'enum', vals: ['none', 'hidden', 'dotted', 'dashed',
    'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'inherit'] },
  'border-width': { prob: .3, type: 'range', range: [0, 5] },
  'border-color': { prob: .3, type: 'hex' },
  'border-radius': { prob: .1, type: 'range', range: [2, 10] },

  float: { prob: .5, type: 'enum', vals: ['left', 'right'] },
  clear: { prob: .1, type: 'enum', vals: ['left', 'right', 'both'] },
  display: { prob: .2, type: 'enum', vals: ['block', 'inline'] }
};

function pick(f) {
  if(f.type == 'enum') {
    return f.vals[Math.floor ( Math.random() * f.vals.length )];
  }
  if(f.type == 'hex') {
    return '#' + (Math.random()*0xFFFFFF<<0).toString(16);
  }
  if(f.type == 'range') {
    var m = f.range[0], n = f.range[1];
    return Math.floor(m + (1+n-m)*Math.random());
  }
  return '';
}

$(document).ready(function() {
  for(var e in elts) {
    for(var f in fx) {
      if(!fx[f].prob || Math.random() <= fx[f].prob) {
        $(elts[e]).css(f, pick(fx[f]));
      }
    }
  }
});
