// Get all button keys
var keys = document.querySelectorAll('button');

var viewer = '';

// Add onclick event to keys
for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {

        btnVal = this.innerHTML;

        // Future fixes
        // 1. fix having an operator as first input or more than one in a row
        // 2. Limit characters allowed in viewer

        // Clear view history
        if (btnVal === 'AC') {
            clearHistory();
            return;
        }

        // Deletes last input
        if (btnVal === '<i class="fa fa-arrow-left" aria-hidden="true"></i>') {
            prevBtn();
            return;
        }

        // Returns results of input values and limits the viewer to 8 characters
        if (btnVal === '<i class="fa fa-check" aria-hidden="true"></i>') {
            document.getElementById('results').innerHTML = eval(viewer).toString().substring(0, 8);
            return
        }

        if (btnVal === 'x') {
            viewer += '*'
            document.getElementById('viewer').innerHTML = viewer;

        } else if (btnVal === '÷') {
            viewer += '/'
            document.getElementById('viewer').innerHTML = viewer;
        } else {
            viewer += btnVal;
            document.getElementById('viewer').innerHTML = viewer;
        }
    }
}

clearHistory = () => {
    viewer = '';
    document.getElementById('viewer').innerHTML = '';
    document.getElementById('results').innerHTML = '';
}

prevBtn = () => {
    viewer = viewer.slice(0, viewer.length-1);
    document.getElementById('viewer').innerHTML = viewer;
}
