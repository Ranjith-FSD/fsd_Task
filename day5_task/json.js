//Create your own resume data in JSON format
let myResume = {
    "basics": {
        "name": "RANJITHKUMAR K",
        "email": "ranjithk@gamil.com",
        "phone": 7871267800,
        "degree": "BCA",
        "location": {
            "address": "22, Renganayakipuram Rd, Renganayaki Puram",
            "postalCode": 639001,
            "city": "Karur",
            "state": "Tamilnadu",
            "country": "India"
        },
        "profiles": [
            {
                "github": "https://github.com/Ranjith-FSD"
            }
        ]
    },

    "education": [
        {
            "institution": "Jairams Arts and Science College ",
            "department": "BCA",
            "studyType": "fulltime",
            "batch start year": 2018,
            "batch end year": 2021,
            "gpa": 7.5,
        }
    ],
    "skills": [
        {
            "name": "python,javascript",
            "level": "beginer",
            "project": [
                "Responsive website use Javascript"
            ]
        }
    ],
    "languages": [
        {
            "language": "Tamil,Enlish",
        }
    ],
    "interests": [
        {
            "name": "Cricket,Explore",
        }
    ]
}
console.log(myResume);
