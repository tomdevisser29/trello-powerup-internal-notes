var t = TrelloPowerUp.iframe();

t.render(function () {
  // Check if the user is a member of the organization
  t.board("organization")
    .then(function (board) {
      var organizationId = board.organization.id;
      console.log("organizationId", organizationId);
      return t.organization(organizationId).get("members");
    })
    .then(function (members) {
      var currentUserId = t.getContext().member;
      var isMemberOfOrganization = members.some(
        (member) => member.id === currentUserId
      );
      console.log("isMember", isMemberOfOrganization);
      if (!isMemberOfOrganization) {
        // If the user is not a member of the organization, render the Private Note section
        renderPrivateNoteSection();
      }
    });
});

function renderPrivateNoteSection() {
  // Render the Private Note section
  var section = document.getElementById("content");
  section.innerHTML = `
        <textarea id="noteInput" placeholder="Start typing..."></textarea>
        <button id="saveNoteBtn" class="mod-primary">Save Note</button>
    `;

  console.log("rendering");

  // Load the saved note and prefill the textarea if available
  t.card("shared")
    .get("shared", "privateNote")
    .then(function (privateNote) {
      document.getElementById("noteInput").value = privateNote || "";
    });

  document.getElementById("saveNoteBtn").addEventListener("click", function () {
    var note = document.getElementById("noteInput").value;
    // Save the note to the card's shared data
    t.set("card", "shared", "privateNote", note).then(function () {
      t.closePopup();
    });
  });

  t.render(function () {
    t.sizeTo("#content").done();
  });
}
