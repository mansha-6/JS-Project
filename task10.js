let classifier;
let isModelLoaded = false;
const statusElement = document.getElementById('status');
const webcamFeed = document.getElementById('webcam-feed');
const startWebcamButton = document.getElementById('start-webcam');
const stopWebcamButton = document.getElementById('stop-webcam');
const resultsSection = document.getElementById('results');
const attendanceStatus = document.getElementById('attendance-status');
const knownFaces = ['Mansha', 'Vinit', 'Vaishnavi', 'Ashish']; 

async function initializeModel() {
    if (statusElement) statusElement.textContent = 'Loading model...';
    try {
        classifier = await ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/m036vplha/', () => {
            isModelLoaded = true;
            if (statusElement) statusElement.textContent = 'Model loaded successfully!';
            console.log('Model loaded successfully!');
        });
    } catch (error) {
        console.error('Error loading model:', error);
        if (statusElement) statusElement.textContent = 'Error loading model.';
    }
}

async function startWebcam() {
    if (!isModelLoaded) {
        alert('Model is not loaded yet.');
        return;
    }
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcamFeed.srcObject = stream;
        webcamFeed.classList.remove('hidden');
        resultsSection.classList.remove('hidden');
        startWebcamButton.classList.add('hidden');
        stopWebcamButton.classList.remove('hidden');
        classifyWebcam();
    } catch (error) {
        console.error('Error accessing webcam:', error);
        alert('Error accessing webcam. Please allow camera permissions.');
    }
}

async function classifyWebcam() {
    if (!webcamFeed.srcObject || !isModelLoaded) return;

    try {
        const results = await classifier.classify(webcamFeed);

        console.log('Classification results:', results);

        let presentNames = [];

        if (results.length > 0) {
            for (let result of results) {
                const recognizedFace = result.label.trim(); // Trim whitespace
                const confidence = result.confidence;

                console.log(`Recognized Face: ${recognizedFace}, Confidence: ${confidence}`);

                if (confidence > 0.5 && knownFaces.includes(recognizedFace)) { // Adjust threshold as needed
                    presentNames.push(recognizedFace);
                }
            }

            const absentNames = knownFaces.filter(name => !presentNames.includes(name));

            let attendanceHTML = '';
            if (presentNames.length > 0) {
                attendanceHTML += `Present: ${presentNames.join(', ')}`;
                attendanceStatus.style.color = '#2ecc71';
            } else {
                attendanceHTML += 'Face not found.';
                attendanceStatus.style.color = '#e74c3c';
            }

            if (absentNames.length > 0 && presentNames.length > 0) {
                attendanceHTML += `<br>Absent: ${absentNames.join(', ')}`;
            }

            attendanceStatus.innerHTML = attendanceHTML;

        } else {
            // No faces recognized at all
            attendanceStatus.textContent = 'Face not found.';
            attendanceStatus.style.color = '#e74c3c';
        }
    } catch (error) {
        console.error('Error classifying webcam feed:', error);
    }

    requestAnimationFrame(classifyWebcam); // Continuously classify the webcam feed
}

function stopWebcam() {
    const stream = webcamFeed.srcObject;
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    }
    webcamFeed.srcObject = null;
    webcamFeed.classList.add('hidden');
    resultsSection.classList.add('hidden');
    stopWebcamButton.classList.add('hidden');
    startWebcamButton.classList.remove('hidden');
}

if (startWebcamButton) startWebcamButton.addEventListener('click', startWebcam);
if (stopWebcamButton) stopWebcamButton.addEventListener('click', stopWebcam);
initializeModel();
