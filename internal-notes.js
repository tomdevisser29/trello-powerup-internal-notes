var t = TrelloPowerUp.iframe();

t.render(function () {
  renderPrivateNoteSection();
});

function renderPrivateNoteSection() {
  // Render the Private Note section
  var section = document.getElementById("content");
  section.innerHTML = `
        <textarea id="noteInput" placeholder="Start typing..."></textarea>
        <button id="saveNoteBtn" class="mod-primary">Save Note</button>
    `;

  // Load the saved note and prefill the textarea if available
  t.card("shared")
    .get("privateNote")
    .then(function (privateNote) {
      document.getElementById("noteInput").value = privateNote || "";
    })
    .catch(function (error) {
      console.error("Error occurred:", error);
    });

  document.getElementById("saveNoteBtn").addEventListener("click", function () {
    var note = document.getElementById("noteInput").value;
    // Save the note to the card's shared data
    t.set("card", "shared", "privateNote", note);
  });

  t.render(function () {
    t.sizeTo("#content").done();
  });
}
