let queue = [];

function addPatient() {
    let patient = document.getElementById("patientName").value;

    if (patient === "") {
        alert("Enter patient name");
        return;
    }

    queue.push(patient);
    document.getElementById("patientName").value = "";

    displayQueue();
}

function nextPatient() {
    if (queue.length === 0) {
        alert("No patients in queue");
        return;
    }

    let calledPatient = queue.shift();
    alert("Now Serving: " + calledPatient);

    displayQueue();
}

function clearQueue() {
    queue = [];
    displayQueue();
}

function displayQueue() {
    let list = document.getElementById("queueList");
    list.innerHTML = "";

    for (let i = 0; i < queue.length; i++) {
        let li = document.createElement("li");
        li.textContent = (i + 1) + ". " + queue[i];
        list.appendChild(li);
    }
}
