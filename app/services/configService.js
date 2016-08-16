angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Istanbul',
        'id'            : '100514812580249787371',
        'googleApi'     : 'AIzaSyCtEfZF8O5UUkzVcEutdw-rhD6xFAWkd-s',
        'pwaId'         : 'cfm0ptim9d2t06h6g3lgho9urqg', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://gdgistanbul.github.io/website',
        'twitter'       : 'GDGIstanbul',
        'facebook'      : 'GDGIstanbul',
        'youtube'       : 'GDGIstanbul',
        'meetup'        : 'GDGIstanbul',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'd MMMM EEEE, y - H:mm',
        'cover' : {
            title: 'Android Development for Beginners',
            subtitle: 'Google Developers Study Jams is a free series of global, community-run, in-person study groups.',
            button: {
                text: 'Learn More',
                url: 'http://developerstudyjams.com/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
