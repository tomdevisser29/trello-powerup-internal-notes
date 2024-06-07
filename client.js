TrelloPowerUp.initialize({
  "card-back-section": function (t, options) {
    return {
      title: "Internal Notes",
      icon: "../assets/lock.png",
      content: {
        type: "iframe",
        url: t.signUrl("./internal-notes.html"),
        height: 230,
      },
    };
  },
});
