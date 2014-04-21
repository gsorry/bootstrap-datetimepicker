// moment.js language configuration
// language : great britain english (en-gb)
// author : Chris Gedrim : https://github.com/chrisgedrim

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory(window.moment); // Browser global
    }
}(function (moment) {
    return moment.lang('sr-sr', {
        months : "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),
        monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Avg_Sep_Okt_Nov_Dec".split("_"),
        weekdays : "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),
        weekdaysShort : "Ned_Pon_Uto_Sre_Čet_Pet_Sub".split("_"),
        weekdaysMin : "Ne_Po_Ut_Sr_Če_Pe_Su".split("_"),
        longDateFormat : {
            LT : "HH:mm",
            L : "DD.MM.YYYY",
            LL : "D MMMM YYYY",
            LLL : "D MMMM YYYY LT",
            LLLL : "dddd, D MMMM YYYY LT"
        },
        calendar : {
            sameDay : '[Danas u] LT',
            nextDay : '[Sutra u] LT',
            nextWeek : 'dddd [u] LT',
            lastDay : '[Juče u] LT',
            lastWeek : '[Poslednji] dddd [u] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : "u %s",
            past : "pre %s",
            s : "nekoliko sekundi",
            m : "minut",
            mm : "%d minuta",
            h : "sat",
            hh : "%d sati",
            d : "dan",
            dd : "%d dana",
            M : "mesec",
            MM : "%d meseci",
            y : "godina",
            yy : "%d godina"
        },
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));
