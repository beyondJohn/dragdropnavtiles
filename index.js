Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
var originindex, destinationindex, origintext;
function donotallowDrop(ev) {
    console.log('not allowed');
}
function allowDrop(ev) {
    ev.preventDefault();
}
function dispose(ev){
    initialbuttons.remove(origintext);
    maincontainer.innerHTML = '';
    createbuttons(initialbuttons);
}
function drag(ev) {
    var getid = ev.target.id.split("-"); 
    originindex = ev.target.id;
    origintext = getid[1];
    ev.dataTransfer.setData("text", originindex);
}
var droppedonimage = false;
function drop(ev) {
    ev.preventDefault();
    // if dropped in tile but not on existing content
    if (droppedonimage == false) {
        // if (ev.path[2].id == '') {
        //     destinationindex = ev.path[0].id;
        //     console.log("ev.path[0].id: " , ev.path[0].id);
        //     console.log("ev: " , ev.srcElement);
        // }
        // else {
        //     destinationindex = ev.path[2].id;
        //     console.log("ev.path[2].id: " , ev.path[2].id);
        //     console.log("ev.path[2].id: " , ev.path);
        // }
        // if (destinationindex != undefined) {
        //     var parentoriginindex = originindex.split("-")[0] + "-" + originindex.split("-")[0];
        //     var parentdestinationindex = destinationindex.split("-")[0] + "-" + destinationindex.split("-")[0];
        //     droppedonimage = true;
        //     var originhtml = document.getElementById(originindex);
        //     var destinationhtml = document.getElementById(destinationindex);
        //     originhtml.setAttribute('id', destinationindex);
        //     destinationhtml.setAttribute('id', originindex);
        //     document.getElementById(parentoriginindex).innerHTML = '';
        //     document.getElementById(parentoriginindex).appendChild(destinationhtml);
        //     document.getElementById(parentdestinationindex).innerHTML = '';
        //     document.getElementById(parentdestinationindex).appendChild(originhtml);
        //     originindex = '';
        //     destinationindex = '';
        // }
    }
    droppedonimage = false;
    //originindex = '';
    destinationindex = '';
}
function drop1(ev) {

    destinationindex = ev.path[2].id;
    
    if (destinationindex != undefined) {
        // else if dropped on image or text in tile
        const originint = originindex.split("-")[0]
        const destinationint = destinationindex.split("-")[0];
        const originstring = originindex.split("-")[1]
        const destinationstring = destinationindex.split("-")[1];
        const neworiginid = destinationint + "-" + originstring;
        const newdestinationid = originint + "-" + destinationstring;
        const parentoriginindex = originint + "-" + originint;
        const parentdestinationindex = destinationint + "-" + destinationint;
        droppedonimage = true;
        var originhtml = document.getElementById(originindex);
        var destinationhtml = document.getElementById(destinationindex);
        
        originhtml.setAttribute('id', neworiginid);
        console.log("originhtml: ",originhtml)
        console.log("originindex: " + originindex);
        console.log("destinationindex: " + destinationindex);
        console.log("parentoriginindex: " + parentoriginindex);
        destinationhtml.setAttribute('id', newdestinationid);
        document.getElementById(parentoriginindex).innerHTML = '';
        document.getElementById(parentoriginindex).appendChild(destinationhtml);
        document.getElementById(parentdestinationindex).innerHTML = '';
        document.getElementById(parentdestinationindex).appendChild(originhtml);
        originindex = '';
        destinationindex = '';
    }
}
