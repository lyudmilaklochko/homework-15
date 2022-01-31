let result = 0.1 + 0.2;
alert( +result.toFixed(2) ); // 0.30

let string = "1";
let number = 2;
let num = Number(string);
 // alert(string + number); //12
alert(num + number); //3

let flash_drive_volume = prompt('Укажите объем флешки в ГБ');
const SIZE = 820;
const TRANSFER_TO_MB = 1000;
alert(flash_drive_volume * TRANSFER_TO_MB / SIZE);
