function copyData() {
  var button = document.querySelector("button");
  var clipboard = new ClipboardJS(button);

  clipboard.on("success", function(e) {
    console.log("this conosle : ", clipboard);
    console.info("Action:", e.action);
    console.info("Text:", e.text);
    console.info("Trigger:", e.trigger);

    e.clearSelection();
  });

  clipboard.on("error", function(e) {
    console.error("Action:", e.action);
    console.error("Trigger:", e.trigger);
  });
}
