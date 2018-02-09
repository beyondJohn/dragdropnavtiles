var originindex, destinationindex;
function donotallowDrop(ev) {
    console.log('not allowed');
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    originindex = ev.target.id;
    ev.dataTransfer.setData("text", ev.target.id);
}
var droppedonimage = false;
function drop(ev) {
    ev.preventDefault();
    // if dropped in tile but not on existing content
    if (droppedonimage == false) {
        if (ev.path[2].id == '') {
            destinationindex = ev.path[0].id[0];
        }
        else {
            destinationindex = ev.path[2].id[0];
        }
        if (destinationindex != undefined) {
            var originhtml = document.getElementById(originindex);
            var destinationhtml = document.getElementById(destinationindex);
            originhtml.setAttribute('id', destinationindex);
            destinationhtml.setAttribute('id', originindex);
            document.getElementById(originindex + "-" + originindex).innerHTML = '';
            document.getElementById(originindex + "-" + originindex).appendChild(destinationhtml);
            document.getElementById(destinationindex + "-" + destinationindex).innerHTML = '';
            document.getElementById(destinationindex + "-" + destinationindex).appendChild(originhtml);
        }
    }
    droppedonimage = false;
    originindex = '';
    destinationindex = '';
}
function drop1(ev) {

    destinationindex = ev.path[3].id[0];
    if (destinationindex != undefined) {
        // else if dropped on image or text in tile
        droppedonimage = true;
        var originhtml = document.getElementById(originindex);
        var destinationhtml = document.getElementById(destinationindex);
        originhtml.setAttribute('id', destinationindex);
        destinationhtml.setAttribute('id', originindex);
        document.getElementById(originindex + "-" + originindex).innerHTML = '';
        document.getElementById(originindex + "-" + originindex).appendChild(destinationhtml);
        document.getElementById(destinationindex + "-" + destinationindex).innerHTML = '';
        document.getElementById(destinationindex + "-" + destinationindex).appendChild(originhtml);
        originindex = '';
        destinationindex = '';
    }
}
