
function markAsDone() {
    var nextStep = document.querySelector('#checklist li');
    if(nextStep){
        var doneList = document.querySelector('#checklist-done');
        doneList.appendChild(nextStep);
    }else{
        var checklistButton = document.querySelector('#checklist-button');
        checklistButton.innerText = "Ready to Run!";
    }
}
