
export const MakeFont = () => {
    const SVGIcons2SVGFontStream = require('svgicons2svgfont');
    var svg2ttf = require('svg2ttf');
    const fs = require('fs');
    const fontStream = new SVGIcons2SVGFontStream({
      fontName: 'test',
    });
    
    fontStream.pipe(fs.createWriteStream( './font_ss copy.svg'))
    .on('finish',function() {
      var ttf = svg2ttf(fs.readFileSync( './font_ss copy.svg', 'utf8'), {});
      fs.writeFileSync('./tst.ttf', new Buffer(ttf.buffer));
    })
    .on('error',function(err) {
      console.log(err);
    });
    
    var files = fs.readdirSync('./fonts/')
    
    // Writing glyphs
    for(let x=0;x<files.length;x++){
        console.log('\\u'+files[x].charCodeAt(0).toString(16))
        console.log(files[x][0])
        let glyph1 = fs.createReadStream(`fonts/${files[x]}`);
        glyph1.metadata = {
          unicode: [files[x][0]],
          name: files[x][0],
        };
        fontStream.write(glyph1);
        
    }
    
    fontStream.end();
}
