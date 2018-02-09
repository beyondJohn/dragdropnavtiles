
const initialbuttons = ["agenda", "info","shuttles", "conference_rooms", "theaters", "publishers"];
const maincontainer = document.getElementsByClassName('hub-container')[0];
function createbuttons(buttonsarray) {
    var adder = 0;
    buttonsarray.forEach(function (btn) {
        const divider = document.createElement("DIV");
        divider.setAttribute("class", "divider");
        if (adder == 0) {
            maincontainer.appendChild(divider);
        }
        createhalfbtn(maincontainer,adder, btn);
        if (adder != 0 && adder % 2 != 0) {
            maincontainer.appendChild(divider);
        }
        if(initialbuttons.length == adder + 1 && adder % 2 == 0 ){
            // add blank tile here
            createblanktile(maincontainer, adder, btn)
            maincontainer.appendChild(divider);
        }
        adder++;
    }, this);
}

