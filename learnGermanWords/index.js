function loadLearnPage(selectedTile) {
    // Construct the URL for learn.html with the selected tile as a parameter
    const url = `learn.html?tile=${selectedTile}`;

    // Redirect the user to the learn.html page
    window.location.href = url;
}
