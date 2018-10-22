//It receives all the words and returns the ones with more than 5 characters.
function getWords5letters(arrayWords) {
  let result = "";
  arrayWords.forEach(s => {
    if (s.length > 5) {
      result += s + "+";
    }
  });
  return result;
}

//It receives all the h1 titles and split them in individual words. Then returns it as an array.
function transformTitles(titles) {
  let words = "";
  for (title of titles) {
    words += title.innerText + " ";
  }
  result = words.split(" ");
  return result;
}

//Obtain all the h1 objects and returns it.
function obtainH1Titles() {
  const htmlTitles = document.getElementsByTagName("h1");
  const titles = [...htmlTitles];
  return titles;
}

//Main fuction. It is executed when this script its loaded.
(async function() {
  try {
    var titles = await obtainH1Titles();
    var words = await transformTitles(titles);
    var words5 = await getWords5letters(words);
    if (words5.length === 0) {
      alert("La busqueda no arrojo coincidencias");
    } else {
      console.log(words5);
    }
  } catch {
    console.log(`Error ${e}`);
  }
})();
