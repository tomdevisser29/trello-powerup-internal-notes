TrelloPowerUp.initialize({
  "card-back-section": function (t, options) {
    return {
      title: "Internal Notes",
      icon: "https://trello-internal-notes.netlify.app/assets/lock.png",
      content: {
        type: "iframe",
        url: t.signUrl("./internal-notes.html"),
        height: 0,
      },
    };
  },
});
