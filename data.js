var tiles = {
    ada: { text: 'Accessibility', img: 'ada.svg', navtag: 'ada', imgtype: 'svg', class: 'full', type: 'single' },
    agenda: { text: 'Agenda', img: 'fa fa-calendar-o fa-5x', navtag: 'agenda', imgtype: 'fa', class: 'half', type: 'double' },
    shuttles: { text: 'Shuttles & Travel', img: 'fa fa-bus fa-5x', navtag: 'shuttles', imgtype: 'fa', class: 'half', type: 'double' },
    publishers: { text: 'Publishers & Licenses', img: 'fa fa-id-card fa-5x', navtag: 'publishers', imgtype: 'fa', class: 'half', type: 'double' },
    partners: { text: 'Partners', img: 'fa fa-handshake fa-5x', navtag: 'Partners', imgtype: 'fa', class: 'half', type: 'double' },
    ps4: { text: 'PS4 Demos', img: 'ps4demos.svg', navtag: 'ps4', imgtype: 'svg', class: 'full', type: 'single' },
    ps_vr: { text: 'PS VR Demos', img: 'psvrdemos.svg', navtag: 'ps vr', imgtype: 'svg', class: 'full', type: 'single' },
    theaters: { text: 'Theaters', img: 'fa fa-film fa-5x', navtag: 'theater', imgtype: 'fa', class: 'full', type: 'single' },
    tournament: { text: 'Tournaments', img: 'tournaments.svg', navtag: 'tournaments', imgtype: 'svg', class: 'full paddingsm', type: 'single' },
    info: { text: 'Information', img: 'info.svg', navtag: 'info', imgtype: 'svg', class: 'full paddingsm', type: 'single' },
    autographs: { text: 'Autographs', img: 'autographs.svg', navtag: 'autographs', imgtype: 'svg', class: 'full paddingsm', type: 'single' },
    survey: { text: 'Survey', img: 'fa fa-pencil-square-o fa-5x', navtag: 'survey', imgtype: 'fa', class: 'full', type: 'single' },
    conference_rooms: { text: 'Conference Rooms', img: 'fa fa-users fa-5x', navtag: 'confrooms', imgtype: 'fa', class: 'half', type: 'double' },
    latam_conference_rooms: { text: 'LATAM Conference Rooms', img: 'LATAM.svg', navtag: 'latamconfrooms', imgtype: 'svg', class: 'full paddingsm' }
}

// sample final object
    // {
    // 		1:{type:'full', data:{ada:{text:'Accessibility', img:'images/ada.svg', navtag:'ada', imgtype:'svg', class:'left', type:'single'}}},
    // 		2:{type:'split', data:{
    //          agenda:{text:'Agenda', img:'fa fa-calendar fa-5x', navtag:'agenda', imgtype:'fa', class:'half', type:'double'},
	//          shuttles:{text:'Shuttles & Travel', img:'fa fa-bus fa-5x', navtag:'shuttles', imgtype:'fa', class:'half', type:'double'}
    // 		}},
    // 		3:{type:'full', data:{autographs:{text:'Autographs', img:'images/autographs.svg', navtag:'autographs', imgtype:'svg', class:'full', type:'single'}}}
    // 	}
// mock data for testing hub UI
    //var tags = ["ada", "panels","agenda","shuttles", "partners","publishers","info", "ps4", "ps vr","autographs","theaters","tournament", "survey"];
    //var tags = ["ada", "panels","agenda","shuttles", "publishers","partners","info", "ps4", "ps vr","autographs","theaters","tournament", "survey"];
    //var tags = ["ada", "panels", "agenda", "shuttles", "partners", "info","latam_conference_rooms", "ps4", "ps vr", "autographs", "theaters", "tournament", "survey"];
    //var tags = ["ada", "panels", "agenda", "shuttles", "partners", "latam_conference_rooms","conference_rooms","info", "ps4", "ps vr", "autographs", "theaters", "tournament", "survey"];