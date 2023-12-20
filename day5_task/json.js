//Create your own resume data in JSON format
let myResume = {
    "basics": {
        "name": "RAJARAJAN T",
        "email": "rajarat6@gamil.com",
        "phone": 9578741769,
        "degree": "B.E",
        "location": {
            "address": "15/16 Sainath Enclave ShenoyNagar",
            "postalCode": 600030,
            "city": "Chennai",
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
