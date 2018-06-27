$(function () {

    jQuery('body').append(
        '<div class="ex-toolbar">' +
        '<div class="ex-toolbar__common"></div>' +
        '<div class="ex-toolbar__editable"></div>' +
        '<div class="ex-toolbar__mce"></div>' +
        '<div class="ex-toolbar__file"></div>' +
        '<div class="settings-tool-bar"></div>' +
        '<div class="flex-a-center">' +
        '<div class="ex-toolbar__panel"></div>' +
        '<div class="right-menu-button">' +
        '<span></span>' +
        '<span></span>' +
        '<span></span>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="right-menu" id="right-menu"></div>'
    );

    $('.editHandle').remove();
    $('<a/>').appendTo('.ex-toolbar__panel').addClass('editHandle').bind('click', function () {
        //ExologEditor.toggleSelectionMode();
    }).append('<i class="fa fa-pencil" aria-hidden="true"></i>EDIT');

    if (true) {
        if (true) {
            $('.editHandle').addClass('active');
        } else {
            $('.editHandle').removeClass('active');
        }
        //return false;
    }
    var bgimageRun = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABklBMVEUAAADeRjbdSTfdSTffSTb/AABEREBEREDdRjbdSTfeSTbIFBNEREBEREBEREDbRjbXSTZZPDlEREBEREDtmSrfVzTUSTeXJiREREBEREBEREDywST1wCXytCXxvyX1wSXytCbxvib1wyPxsybxwSborSfbSTbxwCf1wyPcSTbxvifytCbbSTbxvST1wSPbSTXfSTjxwCTxsybZSTXbSDfwvyX1wSXnrSjYVzXaSDfwvibruyXojCzwvSb2wyXrvCXwwSfvwCj2wyXvvyTwviT3wSXxviTywyX3wSPVrUmpjY2fjYHSq0ydjn+fi3/RqkqhjH+hjYHHo0uhjICbiX3HpUygi4Cei3/Oqk6hjYCfi3/PqU6gjIDOq02hjYHJo07uviTywCefjYGciX3NqEz0wSafi3+gjH+hi3+hjYGgjYCgjICijYGdiHyVh3h4eHffSTfeSTfZSTfYSTfiWDXXSTfWSTj3wyXaVzb2wiXuvCbsuyfbSTfaSTehjYGdin6fi3+ciX6gjICei3+gjYHvvSY/7nYzAAAAcHRSTlMAL9X0iAEDBC/slgEBBwgwmQkKC2HumgINDwJC9vpA9fo/9Po++oU98+o8+9g78vM7OvvzPTnx+/Y9OPVoN/D0NjXvNDPuMjDtuAn7ySL8yjz9zlf90XH+04v+16XZv9vzPdn+0D3m2L6kiW9VPSMKLva6TgAAAXhJREFUOMt90+dXwjAQAPA4AEWKWhwFF07ce++99xb33lpmATUg6v/tJUBbHg33pfful+bduyQIaUVGZla2LrmkN+iVLCdXFEVjnlJDJs7MmeQsn7joKiiM16DKW3iTnBUVU3d7SkoTLlgFG81skJWVV3jBfX6fy6iL/6X2yipJsnupQx90BWdReXWNBFEboE46ha7NvOJ11IOh+gB10dWAkCHeK3FHY8w/QnYv9c8m2EHxZtmDUgvp1P3VmpgE8bZ2xSVY4fJ5OjpV3pXkktQd8Pf0qryvP9mDoYHBIZUPp/jHyKhqkmPjKT7hkE/CKkymcTLJqek0DpOcYbpJTyY5O8d0zgA7zDPdxpthh4VFpgsWDj5LbLeSe7a8ssp0gZzjGl7fYDm9J5sYb22ncbSDcXh3j+1oH0fC3weHTEdH0Z/wL3YeaztM8iQawRDOU02HSZ5FcSzO/y4uU94ZTPIq7pHrm1uNd4rQ3f3D49Pzy+vbu9Y7R+gfNBjlK005ki8AAAAASUVORK5CYII=')";
    var bgimageDestroy = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACIlBMVEUAAADeRjbdSTfdSTffSTb/AABEREBEREDdRjbdSTfeSTbIFBNEREBEREBEREDbRjbXSTZZPDlEREBEREDtmSrfVzTUSTeXJiREREBEREBEREDywST1wCXytCXxvyX1wSXytCbxvib1wyPxsybxwSborSfbSTbxwCf1wyPcSTbxvifytCbbSTbxvST1wSPbSTXfSTjxwCTxsybZSTXbSDfwvyX1wSXnrSjYVzXaSDfwvibruyXojCzwvSb2wyXrvCXwwSfvwCj2wyXfTDbdSDfvvyTdSTfeSTbaSEjwviT3wSXdRzeYQT/xviTWSTfywyX3wSPZSTfbSTjVrUneSDepjY2fjYHSq0zdSTadjn+fi3/RqkrfSTahjH+hjYHHo0uhjICbiX3HpUzdRzWgi4Cei3/Oqk7fSDehjYCfi3/PqU7cRzfRSzWgjIDOq03YSTahjYHJo07uviTywCfXSTeCSzafjYGciX3NqEz0wSafi3+gjH+hi3+hjYGgjYCgjICijYGdiHyVh3h4eHffSTfeSTfZSTfYSTfiWDXXSTfWSTj3wyXaVzb2wiXuvCbsuyfbSTfaSTfyrCjoezDbWjbXTDjYSzf2vybpejDeSjflaDLbcGLgt7LXTz/gUT/qwLvicWPl5eXpxcDfUD/qx8Pt7e3huLPu7u7qxsLhvrrWTz+hjYHgvrmdin6fi3+ciX6gjICei3+gjYHqv7rjcGLvvSYYisTvAAAAhHRSTlMAL9X0iAEDBC/slgEBBwgwmQkKC2HumgINDwJC9vpA9fo/9Po++oU98+o8+9g78vM7OvvzPTnx+/Y9OPVoN/D0NjXv4i40/pUHM+69DjKYMO3+LbiUCfvJ1yL8yvg8/c5X/dHWcf7Tk4v+1/0vpdmVv9vzPb4N2f7QPebYvqSJb1U9Iwo2hCQEAAACJklEQVQ4T33T91sTMRgH8DhotbaoxYG4cNa992YIKIiCqKh1oiKC4sIF7ty112uLTEGhrEKB0FpF/z/fjOtdHnzMT3nyuUu+ed87hP41pk2fMTNNXrLZbeZs1myMsWOOuYacrnSXMzWbSx0r8+aLNVh1Z7idqdmChcxV36LFhmcuycxisyyYLV223A+uBTTFkSbesvqKlbqe7WcOOdgTrgyLr1qtw1gTZE6TQup0t+lrmYfC64LMsbIeIbvISt2zgXtzONvP/MtG2MH0TSkP6ZtpUrVli7gI863bTNfhCUXzbd9h8Z2S6/quYGD3Hovv3Sd7KLz/wEGLH5rizYePCKeVPHpsih/3GA6VPPEfp5XMyZW8ta29ozPPkc8dKnlS8q9d3bwTBYVFThut5KnTkn8TnYJRXGKHHc5Irncp33t6qUf6+tVS2OHsOfn8bq1nYHAIPDo84isrR+i8nL9NC/QOxkYj4GPjqlKBLly8JN2vHc4fGo1FqUOSSnSZXLlqvX8HzReJxrhjL7pGyPUblvp0snzR4YEJltSLbhISv3XbrF8e97EJlhRXoTskEf9x957hHgf3cZYU42p0P/kz/ovUPDDqn1+A+9j5kHQS19ahh8kEgVHzyOhPIe4fYfkik7+Vejt6nCR8PPnz9BntTVGx6lPFN/28wYZeCE+8fPWad7+ktIx7bX2DC6E3jU1v373/8PHTZ9F9+KfLKyq93qrqOvp3/wVPs2hT76WEcAAAAABJRU5ErkJggg==')";
    if (true) {
        $('.editHandle').css({
            'background-image': bgimageDestroy
        });
    } else {
        $('.editHandle').css({
            'background-image': bgimageRun
        });
    }
    //this.setIconForEditHandle();

    //defaults
    $.fn.editable.defaults.url = '/post';
    $.fn.editable.defaults.formContainer = '.ex-toolbar__editable';

    //enable / disable
    $('#enable').click(function () {
        $('#user .editable').editable('toggleDisabled');
    });

    //editables 
    $('#username').editable({
        url: '/post',
        type: 'text',
        pk: 1,
        name: 'username',
        title: 'Enter username'
    });

    $('#firstname').editable({
        validate: function (value) {
            if ($.trim(value) == '') return 'This field is required';
        }
    });

    $('#sex').editable({
        prepend: "not selected",
        source: [
            {value: 1, text: 'Male'},
            {value: 2, text: 'Female'}
        ],
        display: function (value, sourceData) {
            var colors = {"": "gray", 1: "green", 2: "blue"},
                elem = $.grep(sourceData, function (o) {
                    return o.value == value;
                });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $('#status').editable();

    $('#group').editable({
        showbuttons: false
    });

    $('#vacation').editable({
        datepicker: {
            todayBtn: 'linked'
        }
    });

    $('#dob').editable();

    $('#event').editable({
        placement: 'right',
        combodate: {
            firstItem: 'name'
        }
    });

    $('#meeting_start').editable({
        format: 'yyyy-mm-dd hh:ii',
        viewformat: 'dd/mm/yyyy hh:ii',
        validate: function (v) {
            if (v && v.getDate() == 10) return 'Day cant be 10!';
        },
        datetimepicker: {
            todayBtn: 'linked',
            weekStart: 1
        }
    });

    $('#comments').editable({
        showbuttons: 'bottom'
    });

    $('#note').editable();
    $('#pencil').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('#note').editable('toggle');
    });

    $('#state').editable({
        source: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    });

    $('#state2').editable({
        value: 'California',
        typeahead: {
            name: 'state',
            local: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
        }
    });

    $('#fruits').editable({
        pk: 1,
        limit: 3,
        source: [
            {value: 1, text: 'banana'},
            {value: 2, text: 'peach'},
            {value: 3, text: 'apple'},
            {value: 4, text: 'watermelon'},
            {value: 5, text: 'orange'}
        ]
    });

    $('#tags').editable({
        inputclass: 'input-large',
        select2: {
            tags: ['html', 'javascript', 'css', 'ajax'],
            tokenSeparators: [",", " "]
        }
    });

    var countries = [];
    $.each({
        "BD": "Bangladesh",
        "BE": "Belgium",
        "BF": "Burkina Faso",
        "BG": "Bulgaria",
        "BA": "Bosnia and Herzegovina",
        "BB": "Barbados",
        "WF": "Wallis and Futuna",
        "BL": "Saint Bartelemey",
        "BM": "Bermuda",
        "BN": "Brunei Darussalam",
        "BO": "Bolivia",
        "BH": "Bahrain",
        "BI": "Burundi",
        "BJ": "Benin",
        "BT": "Bhutan",
        "JM": "Jamaica",
        "BV": "Bouvet Island",
        "BW": "Botswana",
        "WS": "Samoa",
        "BR": "Brazil",
        "BS": "Bahamas",
        "JE": "Jersey",
        "BY": "Belarus",
        "O1": "Other Country",
        "LV": "Latvia",
        "RW": "Rwanda",
        "RS": "Serbia",
        "TL": "Timor-Leste",
        "RE": "Reunion",
        "LU": "Luxembourg",
        "TJ": "Tajikistan",
        "RO": "Romania",
        "PG": "Papua New Guinea",
        "GW": "Guinea-Bissau",
        "GU": "Guam",
        "GT": "Guatemala",
        "GS": "South Georgia and the South Sandwich Islands",
        "GR": "Greece",
        "GQ": "Equatorial Guinea",
        "GP": "Guadeloupe",
        "JP": "Japan",
        "GY": "Guyana",
        "GG": "Guernsey",
        "GF": "French Guiana",
        "GE": "Georgia",
        "GD": "Grenada",
        "GB": "United Kingdom",
        "GA": "Gabon",
        "SV": "El Salvador",
        "GN": "Guinea",
        "GM": "Gambia",
        "GL": "Greenland",
        "GI": "Gibraltar",
        "GH": "Ghana",
        "OM": "Oman",
        "TN": "Tunisia",
        "JO": "Jordan",
        "HR": "Croatia",
        "HT": "Haiti",
        "HU": "Hungary",
        "HK": "Hong Kong",
        "HN": "Honduras",
        "HM": "Heard Island and McDonald Islands",
        "VE": "Venezuela",
        "PR": "Puerto Rico",
        "PS": "Palestinian Territory",
        "PW": "Palau",
        "PT": "Portugal",
        "SJ": "Svalbard and Jan Mayen",
        "PY": "Paraguay",
        "IQ": "Iraq",
        "PA": "Panama",
        "PF": "French Polynesia",
        "BZ": "Belize",
        "PE": "Peru",
        "PK": "Pakistan",
        "PH": "Philippines",
        "PN": "Pitcairn",
        "TM": "Turkmenistan",
        "PL": "Poland",
        "PM": "Saint Pierre and Miquelon",
        "ZM": "Zambia",
        "EH": "Western Sahara",
        "RU": "Russian Federation",
        "EE": "Estonia",
        "EG": "Egypt",
        "TK": "Tokelau",
        "ZA": "South Africa",
        "EC": "Ecuador",
        "IT": "Italy",
        "VN": "Vietnam",
        "SB": "Solomon Islands",
        "EU": "Europe",
        "ET": "Ethiopia",
        "SO": "Somalia",
        "ZW": "Zimbabwe",
        "SA": "Saudi Arabia",
        "ES": "Spain",
        "ER": "Eritrea",
        "ME": "Montenegro",
        "MD": "Moldova, Republic of",
        "MG": "Madagascar",
        "MF": "Saint Martin",
        "MA": "Morocco",
        "MC": "Monaco",
        "UZ": "Uzbekistan",
        "MM": "Myanmar",
        "ML": "Mali",
        "MO": "Macao",
        "MN": "Mongolia",
        "MH": "Marshall Islands",
        "MK": "Macedonia",
        "MU": "Mauritius",
        "MT": "Malta",
        "MW": "Malawi",
        "MV": "Maldives",
        "MQ": "Martinique",
        "MP": "Northern Mariana Islands",
        "MS": "Montserrat",
        "MR": "Mauritania",
        "IM": "Isle of Man",
        "UG": "Uganda",
        "TZ": "Tanzania, United Republic of",
        "MY": "Malaysia",
        "MX": "Mexico",
        "IL": "Israel",
        "FR": "France",
        "IO": "British Indian Ocean Territory",
        "FX": "France, Metropolitan",
        "SH": "Saint Helena",
        "FI": "Finland",
        "FJ": "Fiji",
        "FK": "Falkland Islands (Malvinas)",
        "FM": "Micronesia, Federated States of",
        "FO": "Faroe Islands",
        "NI": "Nicaragua",
        "NL": "Netherlands",
        "NO": "Norway",
        "NA": "Namibia",
        "VU": "Vanuatu",
        "NC": "New Caledonia",
        "NE": "Niger",
        "NF": "Norfolk Island",
        "NG": "Nigeria",
        "NZ": "New Zealand",
        "NP": "Nepal",
        "NR": "Nauru",
        "NU": "Niue",
        "CK": "Cook Islands",
        "CI": "Cote d'Ivoire",
        "CH": "Switzerland",
        "CO": "Colombia",
        "CN": "China",
        "CM": "Cameroon",
        "CL": "Chile",
        "CC": "Cocos (Keeling) Islands",
        "CA": "Canada",
        "CG": "Congo",
        "CF": "Central African Republic",
        "CD": "Congo, The Democratic Republic of the",
        "CZ": "Czech Republic",
        "CY": "Cyprus",
        "CX": "Christmas Island",
        "CR": "Costa Rica",
        "CV": "Cape Verde",
        "CU": "Cuba",
        "SZ": "Swaziland",
        "SY": "Syrian Arab Republic",
        "KG": "Kyrgyzstan",
        "KE": "Kenya",
        "SR": "Suriname",
        "KI": "Kiribati",
        "KH": "Cambodia",
        "KN": "Saint Kitts and Nevis",
        "KM": "Comoros",
        "ST": "Sao Tome and Principe",
        "SK": "Slovakia",
        "KR": "Korea, Republic of",
        "SI": "Slovenia",
        "KP": "Korea, Democratic People's Republic of",
        "KW": "Kuwait",
        "SN": "Senegal",
        "SM": "San Marino",
        "SL": "Sierra Leone",
        "SC": "Seychelles",
        "KZ": "Kazakhstan",
        "KY": "Cayman Islands",
        "SG": "Singapore",
        "SE": "Sweden",
        "SD": "Sudan",
        "DO": "Dominican Republic",
        "DM": "Dominica",
        "DJ": "Djibouti",
        "DK": "Denmark",
        "VG": "Virgin Islands, British",
        "DE": "Germany",
        "YE": "Yemen",
        "DZ": "Algeria",
        "US": "United States",
        "UY": "Uruguay",
        "YT": "Mayotte",
        "UM": "United States Minor Outlying Islands",
        "LB": "Lebanon",
        "LC": "Saint Lucia",
        "LA": "Lao People's Democratic Republic",
        "TV": "Tuvalu",
        "TW": "Taiwan",
        "TT": "Trinidad and Tobago",
        "TR": "Turkey",
        "LK": "Sri Lanka",
        "LI": "Liechtenstein",
        "A1": "Anonymous Proxy",
        "TO": "Tonga",
        "LT": "Lithuania",
        "A2": "Satellite Provider",
        "LR": "Liberia",
        "LS": "Lesotho",
        "TH": "Thailand",
        "TF": "French Southern Territories",
        "TG": "Togo",
        "TD": "Chad",
        "TC": "Turks and Caicos Islands",
        "LY": "Libyan Arab Jamahiriya",
        "VA": "Holy See (Vatican City State)",
        "VC": "Saint Vincent and the Grenadines",
        "AE": "United Arab Emirates",
        "AD": "Andorra",
        "AG": "Antigua and Barbuda",
        "AF": "Afghanistan",
        "AI": "Anguilla",
        "VI": "Virgin Islands, U.S.",
        "IS": "Iceland",
        "IR": "Iran, Islamic Republic of",
        "AM": "Armenia",
        "AL": "Albania",
        "AO": "Angola",
        "AN": "Netherlands Antilles",
        "AQ": "Antarctica",
        "AP": "Asia/Pacific Region",
        "AS": "American Samoa",
        "AR": "Argentina",
        "AU": "Australia",
        "AT": "Austria",
        "AW": "Aruba",
        "IN": "India",
        "AX": "Aland Islands",
        "AZ": "Azerbaijan",
        "IE": "Ireland",
        "ID": "Indonesia",
        "UA": "Ukraine",
        "QA": "Qatar",
        "MZ": "Mozambique"
    }, function (k, v) {
        countries.push({id: k, text: v});
    });
    $('#country').editable({
        source: countries,
        select2: {
            width: 200,
            placeholder: 'Select country',
            allowClear: true
        }
    });


    $('#address').editable({
        url: '/post',
        value: {
            city: "Moscow",
            city: "Moscow",
            street: "Lenina",
            building: "12"
        },
        validate: function (value) {
            if (value.city == '') return 'city is required!';
        },
        display: function (value) {
            if (!value) {
                $(this).empty();
                return;
            }
            var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
            $(this).html(html);
        }
    });

    $('#user .editable').on('hidden', function (e, reason) {
        if (reason === 'save' || reason === 'nochange') {
            var $next = $(this).closest('tr').next().find('.editable');
            if ($('#autoopen').is(':checked')) {
                setTimeout(function () {
                    $next.editable('show');
                }, 300);
            } else {
                $next.focus();
            }
        }
    });

});