document.addEventListener("DOMContentLoaded", function () { /* DOMContentLoaded = JS will only load this page, once the HTML page has been loaded. Best practice apparently. */

    const titleInput = document.getElementById("title-input");
    const noteInput = document.getElementById("note-input");
    const addsNoteButton = document.getElementById("adds-new-note-button");
    const noteList = document.getElementById("added-notes-list");

    addsNoteButton.addEventListener("click", function () {
        const title = titleInput.value;
        const note = noteInput.value;

        if (title.trim() !== "" && note.trim() !== "") {

            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${title}</strong><br>${note}`;

            const deleteButton = document.createElement("delete-button");
            // deleteButton.textContent = "Delete"; Version 1 of delete option.
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); // Version 2 of delete option.
            svg.setAttribute("class", "deletes-note-button");
            svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svg.setAttribute("height", "1.5em");
            svg.setAttribute("viewBox", "0 0 448 512");
            svg.innerHTML = `
               <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
               </path>
           `;

            deleteButton.appendChild(svg);

            deleteButton.addEventListener("click", function () {
                noteList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            noteList.appendChild(listItem);

            titleInput.value = ""; /* Clears the Title Input. */
            noteInput.value = "";

        } else {
            alert("Input and or Title have not been inputed as they are supposed to be.");
        }

    });
});