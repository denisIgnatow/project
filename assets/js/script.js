let minus = document.querySelector('.btn__minus')
let plus = document.querySelector('.btn__plus')
let fontHeight = document.querySelector('.letter-height__num')

minus.onclick = () => {
  fontHeight.value = +fontHeight.value - 1;
}

plus.onclick = () => {
  fontHeight.value = +fontHeight.value + 1;
}

// color picker

let chosenColor = document.querySelector('.chosen-color')

cp = ColorPicker(document.getElementById('slide'), document.getElementById('picker'),
  function (hex, hsv, rgb, mousePicker, mouseSlide) {
    currentColor = hex;
    ColorPicker.positionIndicators(
      document.getElementById('slide-indicator'),
      document.getElementById('picker-indicator'),
      mouseSlide, mousePicker
    );
    chosenColor.style.backgroundColor = hex;
  });
cp.setHex('#D4EDFB');