// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function naughtyWordDestroyer(text) {
	if (isEmpty(text)){
		return null;
	}
	const textArray = text.split(" ");
	textArray.forEach(function(element) {
		if (element.toLowerCase().includes("zoinks") || element.toLowerCase().includes("biffaroni") || element.toLowerCase().includes("loopdeloop") || element.toLowerCase().includes("muppeteer")) {
		element = "%*&^(#$&$";
	}
	console.log(element);
	})
}


// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}
// populate array with words and word counts
function wordCountList(text) {
  if (isEmpty(text)){
    return null
	}
	const textArray = text.split(" ");
  const occuranceArray = [];
	textArray.forEach(function(element){
    const wordOccurance	= numberOfOccurrencesInText(element, text);
    const occArrayArray = [];
    occArrayArray.push(element);
    occArrayArray.push(wordOccurance);
    occuranceArray.push(occArrayArray);
	});
  return occuranceArray
}
// remove repeat instances from array
// reorder elements based on its number
// put the resulting items in ol

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }

}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

