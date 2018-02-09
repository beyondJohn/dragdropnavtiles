
const initialbuttons = ["agenda","ps4", "shuttles","conference_rooms", "publishers", "latam_conference_rooms"];
const maincontainer = document.getElementsByClassName('hub-container')[0];
function createbuttons(buttonsarray) {
    var adderhalves = 0, totalhalves = 0;
    buttonsarray.forEach(function (btn) {
        if (tiles[btn].type == 'double') {
            totalhalves++;
        }
    }, this);
    buttonsarray.forEach(function (btn) {

        const divider = document.createElement("DIV");
        divider.setAttribute("class", "divider");
        if (adderhalves == 0) {
            maincontainer.appendChild(divider);
        }
        if (tiles[btn].type == 'double') {
            createhalfbtn(maincontainer, adderhalves, btn);
            if (adderhalves != 0 && adderhalves % 2 != 0) {
                maincontainer.appendChild(divider);
            }
            if (totalhalves == adderhalves + 1 && adderhalves % 2 == 0) {
                // add blank tile here
                createblanktile(maincontainer, adderhalves, btn)
                maincontainer.appendChild(divider);
            }
            adderhalves++;
        }


    }, this);
}

