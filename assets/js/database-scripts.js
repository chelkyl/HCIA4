var dbModel = [
    {
        "buildingId": {
            "name": "buildingName",
            "description": "string",
            "amenities": {
                "outlets": 1,
                "food and drink": 1,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "",
                    "longitude": ""
                },
                "address": ""
            },
            "ratings": {
                "original": {
                    "volume": "1-5",
                    "comfort": "1-5",
                    "extras": "1-5"
                },
                "community": [
                    {
                        "userId": {
                            "volume": "1-5",
                            "comfort": "1-5",
                            "extras": "1-5"
                        }
                    }
                ]
            },
            "floors": [
                {
                    "floorNumber": {
                        "rooms": [
                            {
                                "roomId": {
                                    "roomNumber": "string",
                                    "capacity": "1-inf"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];

var dbData = [
    {
        "1": {
            "name": "Watt",
            "description": "A newer, high-tech center with collaborative spaces.",
            "images": [
                "https://i.imgur.com/ydxcRHo.jpg",
                "https://i.imgur.com/RQJFR93.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 1,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6757885",
                    "longitude": "-82.8370649"
                },
                "address": "405 S Palmetto Blvd, Clemson, SC 29634"
            },
            "ratings": {
                "original": {
                    "volume": "2",
                    "comfort": "1",
                    "extras": "4"
                },
                "community": []
            },
            "floors": [
                {
                    "1": {
                        "rooms": [
                            {
                                "10": {
                                    "room": "110",
                                    "capacity": 15
                                }
                            }
                        ]
                    }
                },
                {
                    "2": {
                        "rooms": [
                            {
                                "9": {
                                    "room": "231",
                                    "capacity": 5
                                }
                            },
                            {
                                "8": {
                                    "room": "213",
                                    "capacity": 5
                                }
                            },
                            {
                                "7": {
                                    "room": "216",
                                    "capacity": 22
                                }
                            },
                            {
                                "6": {
                                    "room": "219",
                                    "capacity": 10
                                }
                            }
                        ]
                    }
                },
                {
                    "3": {
                        "rooms": [
                            {
                                "5": {
                                    "room": "323",
                                    "capacity": 17
                                }
                            },
                            {
                                "4": {
                                    "room": "321",
                                    "capacity": 15
                                }
                            },
                            {
                                "3": {
                                    "room": "320",
                                    "capacity": 23
                                }
                            },
                            {
                                "2": {
                                    "room": "342",
                                    "capacity": 16
                                }
                            },
                            {
                                "1": {
                                    "room": "340",
                                    "capacity": 9
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "2": {
            "name": "Rhodes",
            "description": "An engineering building with classrooms and atriums.",
            "images": [
                "https://i.imgur.com/LULAhsx.png",
                "https://i.imgur.com/KwpI1mo.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 0,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6763615",
                    "longitude": "-82.8373626"
                },
                "address": "Engineering Service Drive, Clemson, SC 29631"
            },
            "ratings": {
                "original": {
                    "volume": "1",
                    "comfort": "5",
                    "extras": "3"
                },
                "community": []
            },
            "floors": [
                {
                    "1": {
                        "rooms": [
                            {
                                "11": {
                                    "room": "100",
                                    "capacity": 14
                                }
                            },
                            {
                                "12": {
                                    "room": "104",
                                    "capacity": 6
                                }
                            },
                            {
                                "13": {
                                    "room": "108",
                                    "capacity": 7
                                }
                            },
                            {
                                "14": {
                                    "room": "112",
                                    "capacity": 12
                                }
                            },
                            {
                                "15": {
                                    "room": "116",
                                    "capacity": 17
                                }
                            },
                            {
                                "16": {
                                    "room": "120",
                                    "capacity": 9
                                }
                            }
                        ]
                    }
                },
                {
                    "2": {
                        "rooms": [
                            {
                                "17": {
                                    "room": "207",
                                    "capacity": 5
                                }
                            },
                            {
                                "18": {
                                    "room": "211",
                                    "capacity": 7
                                }
                            },
                            {
                                "19": {
                                    "room": "215",
                                    "capacity": 22
                                }
                            },
                            {
                                "20": {
                                    "room": "219",
                                    "capacity": 23
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "3": {
            "name": "Strom",
            "description": "A smaller and private history space.",
            "images": [
                "https://i.imgur.com/cz26i7g.jpg",
                "https://i.imgur.com/P6uw61o.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 0,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.673648",
                    "longitude": "-82.8380323"
                },
                "address": "Kappa St, Clemson, SC 29631"
            },
            "ratings": {
                "original": {
                    "volume": "4",
                    "comfort": "1",
                    "extras": "1"
                },
                "community": []
            },
            "floors": [
                {
                    "1": {
                        "rooms": [
                            {
                                "21": {
                                    "room": "112",
                                    "capacity": 6
                                }
                            },
                            {
                                "22": {
                                    "room": "118",
                                    "capacity": 12
                                }
                            },
                            {
                                "23": {
                                    "room": "124",
                                    "capacity": 7
                                }
                            },
                            {
                                "24": {
                                    "room": "130",
                                    "capacity": 11
                                }
                            },
                            {
                                "25": {
                                    "room": "136",
                                    "capacity": 24
                                }
                            },
                            {
                                "26": {
                                    "room": "142",
                                    "capacity": 3
                                }
                            }
                        ]
                    }
                },
                {
                    "2": {
                        "rooms": [
                            {
                                "27": {
                                    "room": "220",
                                    "capacity": 23
                                }
                            },
                            {
                                "28": {
                                    "room": "230",
                                    "capacity": 17
                                }
                            },
                            {
                                "29": {
                                    "room": "240",
                                    "capacity": 15
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "4": {
            "name": "Lehotsky",
            "description": "A building on the Ag Quad with classrooms and atriums.",
            "images": [
                "https://i.imgur.com/BpyCLkZ.jpg",
                "https://i.imgur.com/xPBqum2.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 0,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.674057",
                    "longitude": "-82.8351891"
                },
                "address": "Jersey Ln, Clemson, SC 29631"
            },
            "ratings": {
                "original": {
                    "volume": "4",
                    "comfort": "1",
                    "extras": "1"
                },
                "community": []
            },
            "floors": [
                {
                    "1": {
                        "rooms": [
                            {
                                "30": {
                                    "room": "170",
                                    "capacity": 16
                                }
                            },
                            {
                                "31": {
                                    "room": "150",
                                    "capacity": 16
                                }
                            },
                            {
                                "32": {
                                    "room": "155",
                                    "capacity": 19
                                }
                            },
                            {
                                "33": {
                                    "room": "190",
                                    "capacity": 23
                                }
                            }
                        ]
                    },
                    "2": {
                        "rooms": [
                            {
                                "34": {
                                    "room": "210",
                                    "capacity": 5
                                }
                            },
                            {
                                "35": {
                                    "room": "220",
                                    "capacity": 20
                                }
                            },
                            {
                                "36": {
                                    "room": "230",
                                    "capacity": 13
                                }
                            },
                            {
                                "37": {
                                    "room": "240",
                                    "capacity": 3
                                }
                            },
                            {
                                "38": {
                                    "room": "250",
                                    "capacity": 7
                                }
                            },
                            {
                                "39": {
                                    "room": "260",
                                    "capacity": 4
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "5": {
            "name": "Riggs",
            "description": "An engineering building with classrooms and atriums.",
            "images": [
                "https://i.imgur.com/GGAiFS0.jpg",
                "https://i.imgur.com/K4Z3e9D.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 0,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6770566",
                    "longitude": "-82.8378523"
                },
                "address": "433 Calhoun Dr, Clemson, SC 29634"
            },
            "ratings": {
                "original": {
                    "volume": "1",
                    "comfort": "2",
                    "extras": "2"
                },
                "community": []
            },
            "floors": [
                {
                    "1": {
                        "rooms": [
                            {
                                "40": {
                                    "room": "101",
                                    "capacity": 24
                                }
                            },
                            {
                                "41": {
                                    "room": "104",
                                    "capacity": 2
                                }
                            }
                        ]
                    }
                },
                {
                    "2": {
                        "rooms": [
                            {
                                "42": {
                                    "room": "202",
                                    "capacity": 23
                                }
                            },
                            {
                                "43": {
                                    "room": "206",
                                    "capacity": 14
                                }
                            },
                            {
                                "44": {
                                    "room": "210",
                                    "capacity": 24
                                }
                            },
                            {
                                "45": {
                                    "room": "214",
                                    "capacity": 14
                                }
                            },
                            {
                                "46": {
                                    "room": "218",
                                    "capacity": 15
                                }
                            }
                        ]
                    }
                },
                {
                    "3": {
                        "rooms": [
                            {
                                "47": {
                                    "room": "302",
                                    "capacity": 13
                                }
                            },
                            {
                                "48": {
                                    "room": "306",
                                    "capacity": 23
                                }
                            },
                            {
                                "49": {
                                    "room": "314",
                                    "capacity": 17
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "6": {
            "name": "ASC",
            "description": "A center for learning with study rooms and atriums.",
            "images": [
                "https://i.imgur.com/T4o0BSL.jpg",
                "https://i.imgur.com/dOlRY1S.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 1,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6757575",
                    "longitude": "-82.8358122"
                },
                "address": "836 McMillan Rd, Clemson, SC 29634"
            },
            "ratings": {
                "original": {
                    "volume": "3",
                    "comfort": "4",
                    "extras": "4"
                },
                "community": []
            },
            "floors": [
                {
                    "1": {
                        "rooms": [
                            {
                                "50": {
                                    "room": "100",
                                    "capacity": 8
                                }
                            },
                            {
                                "51": {
                                    "room": "102",
                                    "capacity": 14
                                }
                            },
                            {
                                "52": {
                                    "room": "104",
                                    "capacity": 15
                                }
                            },
                            {
                                "53": {
                                    "room": "106",
                                    "capacity": 25
                                }
                            },
                            {
                                "54": {
                                    "room": "108",
                                    "capacity": 20
                                }
                            }
                        ]
                    }
                },
                {
                    "2": {
                        "rooms": [
                            {
                                "59": {
                                    "room": "201",
                                    "capacity": 22
                                }
                            }
                        ]
                    }
                },
                {
                    "3": {
                        "rooms": [
                            {
                                "55": {
                                    "room": "301",
                                    "capacity": 23
                                }
                            },
                            {
                                "56": {
                                    "room": "307",
                                    "capacity": 5
                                }
                            },
                            {
                                "57": {
                                    "room": "311",
                                    "capacity": 24
                                }
                            },
                            {
                                "58": {
                                    "room": "319",
                                    "capacity": 22
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "7": {
            "name": "Hendrix",
            "description": "A student center with open collaborative spaces.",
            "images": [
                "https://hdkb.clemson.edu/phpkb/assets/IPCM/hendrix.JPG",
                "http://schooldesigns.com/Portals/0/SD_Images/Projects/048-Hendrix%20Coffee%20Shop.jpg",
                "http://schooldesigns.com/Portals/0/SD_Images/Projects/048-Hendrix%20Theatre%20Entry.jpg",
                "http://schooldesigns.com/Portals/0/SD_Images/Projects/048-Hendrix%20Lobby%20Interior.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 1,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6777912",
                    "longitude": "-82.8302843"
                },
                "address": "720 McMillan Rd, Clemson, SC 29631"
            },
            "ratings": {
                "original": {
                    "volume": "3",
                    "comfort": "4",
                    "extras": "5"
                },
                "community": []
            },
            "floors": [
                {
                    "2": {
                        "rooms": [
                            {
                                "60": {
                                    "room": "Ballroom A",
                                    "capacity": 2
                                }
                            },
                            {
                                "61": {
                                    "room": "Ballroom B",
                                    "capacity": 6
                                }
                            },
                            {
                                "62": {
                                    "room": "Peebles",
                                    "capacity": 19
                                }
                            },
                            {
                                "63": {
                                    "room": "Meeting A",
                                    "capacity": 10
                                }
                            },
                            {
                                "64": {
                                    "room": "Meeting B",
                                    "capacity": 11
                                }
                            }
                        ]
                    }
                },
                {
                    "3": {
                        "rooms": [
                            {
                                "65": {
                                    "room": "301",
                                    "capacity": 20
                                }
                            },
                            {
                                "66": {
                                    "room": "305",
                                    "capacity": 5
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "8": {
            "name": "Edwards",
            "description": "A health center building with classrooms and study desks.",
            "images": [
                "https://i.imgur.com/uyRAB8G.jpg",
                "https://i.imgur.com/EP7yNwi.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 0,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6767713",
                    "longitude": "-82.833895"
                },
                "address": "Epsilon Zeta Dr, Clemson, SC 29631"
            },
            "ratings": {
                "original": {
                    "volume": "2",
                    "comfort": "3",
                    "extras": "2"
                },
                "community": []
            },
            "floors": [
                {
                    "2": {
                        "rooms": [
                            {
                                "70": {
                                    "room": "206",
                                    "capacity": 18
                                }
                            },
                            {
                                "71": {
                                    "room": "208",
                                    "capacity": 23
                                }
                            },
                            {
                                "72": {
                                    "room": "210",
                                    "capacity": 17
                                }
                            },
                            {
                                "73": {
                                    "room": "212",
                                    "capacity": 25
                                }
                            },
                            {
                                "74": {
                                    "room": "214",
                                    "capacity": 4
                                }
                            }
                        ]
                    }
                },
                {
                    "3": {
                        "rooms": [
                            {
                                "75": {
                                    "room": "306",
                                    "capacity": 24
                                }
                            },
                            {
                                "76": {
                                    "room": "308",
                                    "capacity": 13
                                }
                            },
                            {
                                "77": {
                                    "room": "310",
                                    "capacity": 21
                                }
                            },
                            {
                                "78": {
                                    "room": "312",
                                    "capacity": 8
                                }
                            },
                            {
                                "79": {
                                    "room": "314",
                                    "capacity": 1
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "9": {
            "name": "McAdams",
            "description": "A joint-academic building with atriums, computer labs and classrooms.",
            "images": [
                "https://i.imgur.com/rqhzH49.jpg",
                "https://i.imgur.com/LGuN252.png"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 0,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.675658",
                    "longitude": "-82.8345767"
                },
                "address": "McMillan Rd, Clemson, SC 29631"
            },
            "ratings": {
                "original": {
                    "volume": "1",
                    "comfort": "4",
                    "extras": "2"
                },
                "community": []
            },
            "floors": [
                {
                    "1": {
                        "rooms": [
                            {
                                "80": {
                                    "room": "110B",
                                    "capacity": 7
                                }
                            },
                            {
                                "81": {
                                    "room": "110C",
                                    "capacity": 7
                                }
                            },
                            {
                                "82": {
                                    "room": "110D",
                                    "capacity": 16
                                }
                            },
                            {
                                "83": {
                                    "room": "114",
                                    "capacity": 19
                                }
                            },
                            {
                                "84": {
                                    "room": "119",
                                    "capacity": 1
                                }
                            },
                            {
                                "88": {
                                    "room": "120",
                                    "capacity": 13
                                }
                            },
                            {
                                "89": {
                                    "room": "118",
                                    "capacity": 6
                                }
                            }
                        ]
                    }
                },
                {
                    "2": {
                        "rooms": [
                            {
                                "85": {
                                    "room": "226",
                                    "capacity": 24
                                }
                            },
                            {
                                "86": {
                                    "room": "230",
                                    "capacity": 20
                                }
                            },
                            {
                                "87": {
                                    "room": "232",
                                    "capacity": 13
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "10": {
            "name": "Poole",
            "description": "A building on the Ag Quad with classrooms and atriums.",
            "images": [
                "https://i.imgur.com/3UzqWCQ.jpg",
                "https://i.imgur.com/m8pJIoA.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 0,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6738091",
                    "longitude": "-82.8341849"
                },
                "address": "Jersey Ln, Clemson, SC 29634"
            },
            "ratings": {
                "original": {
                    "volume": "2",
                    "comfort": "2",
                    "extras": "2"
                },
                "community": []
            },
            "floors": [
                {
                    "1": {
                        "rooms": [
                            {
                                "90": {
                                    "room": "101A",
                                    "capacity": 23
                                }
                            },
                            {
                                "91": {
                                    "room": "102A",
                                    "capacity": 14
                                }
                            },
                            {
                                "92": {
                                    "room": "103A",
                                    "capacity": 14
                                }
                            },
                            {
                                "93": {
                                    "room": "104A",
                                    "capacity": 21
                                }
                            },
                            {
                                "94": {
                                    "room": "101B",
                                    "capacity": 9
                                }
                            },
                            {
                                "95": {
                                    "room": "102B",
                                    "capacity": 22
                                }
                            },
                            {
                                "96": {
                                    "room": "103B",
                                    "capacity": 14
                                }
                            },
                            {
                                "97": {
                                    "room": "104B",
                                    "capacity": 23
                                }
                            },
                            {
                                "98": {
                                    "room": "101C",
                                    "capacity": 20
                                }
                            },
                            {
                                "99": {
                                    "room": "101D",
                                    "capacity": 14
                                }
                            },
                            {
                                "100": {
                                    "room": "101E",
                                    "capacity": 22
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "11": {
            "name": "Ampitheatre",
            "description": "An outdoor space at the center of campus.",
            "images": [
                "https://i.imgur.com/HQXbzjI.jpg",
                "https://i.imgur.com/clZuCbr.jpg"
            ],
            "amenities": {
                "outlets": 0,
                "food and drink": 0,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6734219",
                    "longitude": "-82.8233528"
                },
                "address": "Parkway Dr, Clemson, SC 29631"
            },
            "ratings": {
                "original": {
                    "volume": "3",
                    "comfort": "1",
                    "extras": "4"
                },
                "community": []
            },
            "floors": []
        }
    },
    {
        "12": {
            "name": "Starbucks",
            "description": "A coffee chain with indoor and outdoor seating.",
            "images": [
                "https://i.imgur.com/RtbNH8m.jpg",
                "https://i.imgur.com/yS5Gtlw.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 1,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6906219",
                    "longitude": "-82.8344631"
                },
                "address": "1082 Tiger Blvd, Clemson, SC 29631"
            },
            "ratings": {
                "original": {
                    "volume": "3",
                    "comfort": "3",
                    "extras": "4"
                },
                "community": []
            },
            "floors": []
        }
    },
    {
        "13": {
            "name": "McDonalds",
            "description": "An American styled fast food restaurant with indoor seating and a kids playhouse.",
            "images": [
                "https://i.imgur.com/GT54Bgq.jpg",
                "https://i.imgur.com/bsOrrDC.jpg"
            ],
            "amenities": {
                "outlets": 1,
                "food and drink": 1,
                "wifi": 1
            },
            "location": {
                "coordinates": {
                    "latitude": "34.6918245",
                    "longitude": "-82.8370091"
                },
                "address": "1065 Tiger Blvd, Clemson, SC 29631"
            },
            "ratings": {
                "original": {
                    "volume": "3",
                    "comfort": "3",
                    "extras": "3"
                },
                "community": []
            },
            "floors": []
        }
    }
];