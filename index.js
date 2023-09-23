document.addEventListener("DOMContentLoaded", function () { /* DOMContentLoaded = JS will only load this page, once the HTML page has been loaded. Best practice apparently. */

    const titleInput = document.querySelector(".title-input");
    const noteInput = document.querySelector(".note-input");
    const addNoteButton = document.querySelector(".adds-new-note-container");
    const addedNotesList = document.querySelector(".added-notes-list");

    function createNoteElement(title, note) {
        const li = document.createElement("li");
        li.innerHTML = `
        <div>
            <strong>${title}</strong><br>${note}
        </div>
        <div class="delete-note">
            <svg class="deletes-note" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
                </path>
            </svg>
        </div>
    `;

        const deleteButton = li.querySelector(".delete-note");
        deleteButton.addEventListener("click", function () {
            addedNotesList.removeChild(li);
        });

        return li;
    }

    function addNote() {
        const title = titleInput.value;
        const note = noteInput.value;

        if (title.trim() === "" || note.trim() === "") {
            return;
        }

        const noteElement = createNoteElement(title, note);
        addedNotesList.appendChild(noteElement);

        titleInput.value = "";
        noteInput.value = "";
    }

    addNoteButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevents form submission.
        addNote();
    });
});