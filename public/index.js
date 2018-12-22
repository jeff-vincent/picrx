import Caman from 'caman';

const canvas = document.getElementById('image');
const downloadBtn = document.getElementById('downloadBtn');
const context = canvas.getContext("2d");

function startCropper(canvas) {
  const cropper = new Cropper(canvas)
  canvas.className('hide')
};  
  
function downloadClick(event) {
  const fileExtension = fileName.slice(-4);
  let newFilename;
  if (fileExtension === ".jpg" || fileExtension === ".png") {
    newFilename = fileName.substring
    (0, fileName.length - 4) + ".jpg";
  }

  download(canvas, newFilename);
};

function download(canvas, filename) {
  let event;
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/jpeg", 1);
  event = new MouseEvent("click");
  link.dispatchEvent(event);
};

function handleImage(event) {
  const file = document.getElementById("fileInput").files[0];
  const reader = new FileReader();
  if (file) {
    fileName = file.name;
    reader.readAsDataURL(file);
  }

  // Add image to canvas
  reader.addEventListener(
    "load",
    () => {
      img = new Image();
      img.src = reader.result;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute("data-caman-id");
      }
    }
  )
};

function applyFilters() {
  let brightness = parseInt(document
  .getElementById('brightness').value);
  let contrast = parseInt(document
  .getElementById('contrast').value);
  let saturation = parseInt(document
  .getElementById('saturation').value);
  Caman('#image', function () {
    this.revert(false);
    this.brightness(brightness)
      .contrast(contrast)
      .saturation(saturation)
      .render();
  });
}

function resizeImage(percent) {
  Caman("#image", function () {
    this.revert(false);
    this.resize({
      width: parseInt(img.width/100 * percent),
      height: parseInt(img.height/100 * percent)
    })
    .render()
  });
}

function openMenu() {
  
};

function rotateImage() {
    Caman("#image", function () {
    this.revert(false);
    this.rotate(90)
    .render()
  });
};