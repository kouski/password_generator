// boton modo claro/oscuro

const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'light');
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);

//variables

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 8;
let inputpassword = document.getElementById('inputpassword');
let inputpassword1 = document.getElementById('inputpassword1');
let length = document.getElementById('password-len');


function setPassLength() {
  let inputValue = passwordLength;
  console.log(inputValue);

  //setting default
  if (inputValue === ""){
      return 12;
  }
  return inputValue;
}

length.textContent = setPassLength();


// Creates a function generatePasswords() that return a random password composed of passwordLength characters
function generatePasswords() {
    // Declares a variable called password and assign its value to an empty string
    let password = "";
    for (let j = 0; j < passwordLength; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      // Adds the new random chars to the password string
      password += characters[randomIndex];
    }
    return inputpassword.value = password;
    
  }
function generatePasswords1() {
    // Declares a variable called password and assign its value to an empty string
    let password = "";
    for (let j = 0; j < passwordLength; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      // Adds the new random chars to the password string
      password += characters[randomIndex];
    }
    return inputpassword1.value = password;
    
  }




