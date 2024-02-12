window.onload = () => {
  main();
};

// global variable
let subhanAllahCount = 0;
let alhamdulilahCount = 0;
let allahuakberCount = 0;

function main() {
  const subhanAllahIncrementBtn = document.getElementById(
    "subhan-allah-increment-btn"
  );
  const subhanAllahDecrementBtn = document.getElementById(
    "subhan-allah-decrement-btn"
  );
  const subhanAllahOutput = document.getElementById("subhan-allah-output");
  const allhamdulilhaIncrementBtn = document.getElementById(
    "allhamdulilha-increment-btn"
  );
  const allhamdulilhaDecrementBtn = document.getElementById(
    "allhamdulilha-decrement-btn"
  );
  const allhamdulilhaOutput = document.getElementById("allhamdulilha-output");
  const allahuakberIncrementBtn = document.getElementById(
    "allahuakber-increment-btn"
  );
  const allahuakberDecrementBtn = document.getElementById(
    "allahuakber-decrement-btn"
  );
  const allahuakberOutput = document.getElementById("allahuakber-output");
  const resetAllTasbihBtn = document.getElementById("reset-all-tasbih-btn");

  //   all event handler here
  subhanAllahIncrementBtn.addEventListener("click", incrementSubhanAllah);
  subhanAllahDecrementBtn.addEventListener("click", decrementSubhanAllah);
  allhamdulilhaIncrementBtn.addEventListener("click", incrementAllhamdulilha);
  allhamdulilhaDecrementBtn.addEventListener("click", decrementAlhamdulilha);
  allahuakberIncrementBtn.addEventListener("click", incrementAllahuakber);
  allahuakberDecrementBtn.addEventListener("click", decrementAllahuakber);
  resetAllTasbihBtn.addEventListener("click", resetAllTasbih);

  //  all dom event handler function here
  function incrementSubhanAllah(event) {
    if (subhanAllahCount < 33) {
      subhanAllahCount++;
    } else {
      alert("Subhan Allah Complete. Please fill up another one");
    }
    subhanAllahOutput.innerText = subhanAllahCount;
  }

  function decrementSubhanAllah() {
    if (subhanAllahCount > 0) {
      subhanAllahCount--;
    } else {
      alert(`you can't added negative value`);
    }
    subhanAllahOutput.innerText = subhanAllahCount;
  }

  function incrementAllhamdulilha() {
    if (alhamdulilahCount < 33) {
      alhamdulilahCount++;
    } else {
      alert("Alhamdulilha Complete. Please fill up another one");
    }
    allhamdulilhaOutput.innerText = alhamdulilahCount;
  }

  function decrementAlhamdulilha() {
    if (alhamdulilahCount > 0) {
      alhamdulilahCount--;
    } else {
      alert(`you can't added negative value`);
    }
    allhamdulilhaOutput.innerText = alhamdulilahCount;
  }

  function incrementAllahuakber() {
    if (allahuakberCount < 33) {
      allahuakberCount++;
    } else {
      alert(`Allahuakber Complete. Please fill up another one`);
    }
    allahuakberOutput.innerText = allahuakberCount;
  }

  function decrementAllahuakber() {
    if (allahuakberCount > 0) {
      allahuakberCount--;
    } else {
      alert(`you can't added negative value`);
    }
    allahuakberOutput.innerText = allahuakberCount;
  }

  function resetAllTasbih() {
    subhanAllahCount = 0;
    alhamdulilahCount = 0;
    allahuakberCount = 0;
    subhanAllahOutput.innerText = subhanAllahCount;
    allhamdulilhaOutput.innerText = alhamdulilahCount;
    allahuakberOutput.innerText = allahuakberCount;
  }
}
