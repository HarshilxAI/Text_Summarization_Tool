function summarizeText() {
  const inputText = document.getElementById("inputText").value.trim();
  const summaryOutput = document.getElementById("summaryOutput");

  if (!inputText) {
    summaryOutput.textContent = "⚠️ Please enter a paragraph first.";
    return;
  }

  // Basic fake summarization logic
  let summary = inputText;

   const replacements = {
  "in order to": "to",
  "as a result": "so",
  "due to the fact that": "because",
  "utilize": "use",
  "terminate": "end",
  "initiate": "start",
  "individuals": "people",
  "assistance": "help",
  "commence": "begin",
  "endeavor": "try",
  "purchase": "buy",
  "requirement": "need",
  "demonstrate": "show",
  "subsequent to": "after",
  "prior to": "before",
  "at this point in time": "now",
  "with regard to": "about",
  "concerning the matter of": "about",
  "has the ability to": "can",
  "a number of": "many",
  "is capable of": "can",
  "on account of": "because",
  "carry out": "do",
  "an excessive amount of": "too much",
  "in close proximity to": "near",
  "perform an analysis": "analyze",
  "made the decision": "decided",
  "a great deal of": "a lot of",
  "in the event that": "if",
  "it is important to note that": "",
  "provided that": "if",
  "on the occasion of": "when",
  "in the vicinity of": "near",
  "a majority of": "most",
  "has the potential to": "can",
  "owing to": "because",
  "at this moment": "now",
  "at that point in time": "then",
  "make a decision": "decide",
  "on a regular basis": "often",
  "with the exception of": "except",
  "is required to": "must",
  "notwithstanding the fact that": "although"
};


  for (let [original, replacement] of Object.entries(replacements)) {
    const regex = new RegExp(original, "gi");
    summary = summary.replace(regex, replacement);
  }

  const words = summary.split(" ");
  if (words.length > 40) {
    summary = words.slice(0, 40).join(" ") + "...";
  }

  summaryOutput.textContent = summary;
}
