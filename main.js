// Notes popup toggle
const notesButton = document.getElementById("notesButton");
const notesPopup = document.getElementById("notesPopup");
const closeNotes = document.getElementById("closeNotes");

notesButton.addEventListener("click", () => {
    const isVisible = notesPopup.style.display === "flex";
    notesPopup.style.display = isVisible ? "none" : "flex";
});

closeNotes.addEventListener("click", () => {
    notesPopup.style.display = "none";
});