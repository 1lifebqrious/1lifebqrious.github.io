document.addEventListener('DOMContentLoaded', function() {
    // Set the URL parameter value as the header
    const header = document.getElementById('header');
    header.textContent = wordParam;
});

// Get the URL parameter value
const urlParams = new URLSearchParams(window.location.search);
const wordParam = urlParams.get('tile');

// Create an array to store the JSON objects
const jsonObjects = [];

// Function to load the text file
function loadTextFile() {
    return new Promise((resolve, reject) => {
        // Construct the file path
        const filePath = `data/${wordParam}.txt`;

        // Fetch the text file
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                // Split the content into lines
                const lines = data.split('\n');

                // Iterate over each line
                lines.forEach((line, index) => {
                    // Split the line into items using tab as the separator
                    const items = line.split('\t');

                    // Create a JSON object with the items
                    const jsonObject = {
                        id: `${wordParam}_${index}`,
                        object: items[0],
                        meaning: items[1],
                        example: items[2],
                        translation: items[3]
                    };

                    // Add the JSON object to the array
                    jsonObjects.push(jsonObject);
                });

                // Resolve the promise with the JSON objects
                resolve(jsonObjects);
            })
            .catch(error => {
                // Reject the promise with the error
                reject(error);
            });
    });
}

// Call the loadTextFile function
loadTextFile().then(() => {
    next();
});

var currentIndex = -1;

function next() {
    //clear the values of object, meaning, example, translation
    document.getElementById('object').textContent = '...';
    document.getElementById('meaning').textContent = '...';
    document.getElementById('example').textContent = '...';
    document.getElementById('translation').textContent = '...';

    currentIndex++;
    if (currentIndex >= jsonObjects.length) {
        currentIndex = 0;
    }

    var currentObject = jsonObjects[currentIndex];
    document.getElementById('object').textContent = currentObject.object;

    setTimeout(function() {
        setTimeout(function() {
            fadeIn('meaning', currentObject.meaning);
        }, 1000);

        setTimeout(function() {
            fadeIn('example', currentObject.example);
        }, 1500);

        setTimeout(function() {
            fadeIn('translation', currentObject.translation);
        }, 2000);
    }, 1000);
}

function fadeIn(elementId, text) {
    var element = document.getElementById(elementId);
    element.style.opacity = 0;
    element.textContent = text;

    var opacity = 0;
    var interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.01;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

//implement the back button functionality to load the previous contect of the jsonObjects array
function back() {
    //clear the values of object, meaning, example, translation
    document.getElementById('object').textContent = '...';
    document.getElementById('meaning').textContent = '...';
    document.getElementById('example').textContent = '...';
    document.getElementById('translation').textContent = '...';

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = jsonObjects.length - 1;
    }

    var currentObject = jsonObjects[currentIndex];
    document.getElementById('object').textContent = currentObject.object;

    setTimeout(function() {
        setTimeout(function() {
            fadeIn('meaning', currentObject.meaning);
        }, 1000);

        setTimeout(function() {
            fadeIn('example', currentObject.example);
        }, 1500);

        setTimeout(function() {
            fadeIn('translation', currentObject.translation);
        }, 2000);
    }, 1000);
}