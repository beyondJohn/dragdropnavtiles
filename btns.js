function createhalfbtn(container, adder, btn){
    var myclass = adder == 0 ? 'tile clickable left-tile' : adder % 2 == 0 ? 'tile clickable left-tile' : 'tile clickable right-tile';
    const maincontainer = container;
    // tile container
    const newdiv = document.createElement("DIV");
    newdiv.setAttribute("id", adder + "-" + adder);
    newdiv.setAttribute("class", myclass);
    newdiv.setAttribute("ondrop", "drop(event)");
    newdiv.setAttribute("ondragover", "allowDrop(event)");
    // tile content
    const newcontent = document.createElement("DIV");
    newcontent.setAttribute("id", adder + "-" + btn);
    newcontent.setAttribute("draggable", "true");
    newcontent.setAttribute("ondragstart", "drag(event)");
    newcontent.setAttribute("ondragover", "allowDrop(event)");
    newcontent.setAttribute("ondrop", "drop1(event)");
    const divimg = document.createElement("DIV");
    divimg.setAttribute("class", "tile-img-div");
    if(tiles[btn].imgtype == 'fa'){
        var iclass = tiles[btn].img;
        var fa = document.createElement("i");
        fa.setAttribute("class", iclass + " iconblue");
        divimg.appendChild(fa);
    }
    else{
        var src = tiles[btn].img;
        var img = document.createElement("IMG");
        img.setAttribute("src", tiles[btn].img);
        img.setAttribute("width", "80px");
        img.setAttribute("class","nodrag");
        divimg.appendChild(img);
    }
    var text = document.createElement("DIV");
    text.setAttribute("class", "tile-text-div");
    text.appendChild(document.createTextNode(tiles[btn].text));
    text.setAttribute("ondrop", "return false");
    text.setAttribute("ondragover", "return false");
    newcontent.appendChild(divimg);
    newcontent.appendChild(text);
    newdiv.appendChild(newcontent);
    maincontainer.appendChild(newdiv);
}


function createblanktile(container, adder, btn){
    var myclass = 'tile right-tile';
// tile container
var newdiv = document.createElement("DIV");
newdiv.setAttribute("id", (adder+1) + "-" + (adder+1));
newdiv.setAttribute("class", myclass);
newdiv.setAttribute("ondrop", "drop(event)");
newdiv.setAttribute("ondragover", "allowDrop(event)");
// tile content
var newcontent = document.createElement("DIV");
newcontent.setAttribute("id", adder + 1);
newcontent.setAttribute("draggable", "true");
newcontent.setAttribute("ondragstart", "drag(event)");
newcontent.setAttribute("ondragover", "allowDrop(event)");
newcontent.setAttribute("ondrop", "drop1(event)");
var divimg = document.createElement("DIV");
divimg.setAttribute("class", "tile-img-div blanktile");
var text = document.createElement("DIV");
text.setAttribute("class", "tile-text-div");
newcontent.appendChild(divimg);
newcontent.appendChild(text);
newdiv.appendChild(newcontent);
maincontainer.appendChild(newdiv);
}