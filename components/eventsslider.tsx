import React, { useState, useEffect } from 'react';

// Type definitions
interface Teacher {
  name: string;
  email: string;
  mobile: string;
  contactTiming: string;
}

interface Student {
  name: string;
}

interface InCharges {
  teacher: Teacher | Teacher[];
  student: Student[];
}

interface Registration {
  rules: string;
  link: string;
}

interface SubEvent {
  name: string;
  venue: string;
  date: string;
  time: string;
  classesEligible: string;
  duration: string;
  participants: string;
  rules: string[];
  judgementCriteria: string[];
  incharges: InCharges;
  registration: Registration;
}

interface Event {
  eventName: string;
  subEvents: SubEvent[];
}

// SubEvent background images mapping
const subEventBackgrounds: { [key: string]: string } = {
  // NAVRAS
  'Symphony': 'assets/Symphony.jpg',
  'Sur Sangam (Music - a Universal Language)': 'assets/Sur_Sangam_Music_-_a_Universal_Language.jpg',
  'Kitchen Geniuses': 'assets/Kitchen_Geniuses.jpg',
  'ELAN: The Pulse Within (Western Dance Competition)': 'assets/elan.jpg',
  'नुक्कड़ नाटक (एक सामंजस्यपूर्ण राष्ट्र)': 'assets/नुक्कड़_नाटक_एक_सामंजस्यपूर्ण_राष्ट्र.jpg',

  // WORDWEAVE
  'TED Talk': 'assets/TED_Talk.jpg',
  'बातों - बातों में (हिन्दी पॉडकास्ट)': 'assets/बातों_-_बातों_में_हिन्दी_पॉडकास्ट.jpg',
  'Flights of Poetic Fantasy (Poetry Writing Competition)': 'assets/Flights_of_Poetic_Fantasy_Poetry_Writing_Competition.jpg',
  'संस्कृत श्लोक गायन': 'assets/संस्कृत_श्लोक_गायन.jpg',

  // NAVRANG
  'Reimagine and Recreate (Chitrashala Jr. A)': 'assets/Reimagine_and_Recreate_Chitrashala_Jr._A.jpg',
  'Paper Montage (Chitrashala Jr. B)': 'assets/Paper_Montage_Chitrashala_Jr._B.jpg',
  'Canvas Painting (Chitrashala Jr. C)': 'assets/Canvas_Painting_Chitrashala_Jr._C.jpg',
  'Indian Renaissance Impact (Aesthetic Moves Sr. A)': 'assets/indian_rensiance.webp',
  'Statuette (Aesthetic Moves Sr. B)': 'assets/Statuette_Aesthetic_Moves_Sr._B.jpg',
  'Impressionist Landscape (Aesthetic Moves Sr. C)': 'assets/Impressionist_Landscape_Aesthetic_Moves_Sr._C.jpg',
  'Aesthetical Expression (Aesthetic Moves Sr. D)': 'assets/Aesthetical_Expression_Aesthetic_Moves_Sr._D.jpg',

  // TECHNOLYMPICS
  'GameCraft': 'assets/GameCraft.jpg',
  'Webolution': 'assets/Webolution.jpg',
  'CrypteX': 'assets/CrypteX.jpg',
  'ChemCraft 3D': 'assets/Chemcraft_3D.jpg',
  'Vista View': 'assets/Vista_View.jpg',
  'Rube It Up!': 'assets/Rub_It_Up!.jpg',
  'EcoInnovators': 'assets/ecoinnovators.jpg',
  'Reel Harmony': 'assets/Reel_Harmony.jpg',
  'GameSpark': 'assets/GameSpark.jpg',
  'Top Coders': 'assets/Top_Coders.jpg',
  'IQrypt (Science & Technology Quiz)': 'assets/IQrypt_Science_&_Technology_Quiz.jpg',

  // AUREUS
  'Bid Blitz': 'assets/Bid_Blitz.jpg',
  'Think Tank': 'assets/Think_Tank.jpg',
};

// Events array - Add your event data here
const Events: Event[] = [
  {
    eventName: "NAVRAS",
    subEvents: [
      {
        name: "Symphony",
        venue: "Auditorium",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m.",
        classesEligible: "IX-XII",
        duration: "6 minutes + 3 minutes (Stage setup)",
        participants: "A team of 6 students",
        rules: [
          "The students can sing a self-composed or improvised song in English.",
          "No additional songs or mashups are allowed.",
          "Teams should announce the name of the song and the artist prior to the performance",
          "Students must choose live instruments only. No pre-recorded tracks or autotune is allowed.",
          "Only western musical instruments are to be chosen.",
          "The lyrics of the song must contain language appropriate for schools.",
          "The drum kit, keyboard stands will be provided by the host school.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Vocal Performance",
          "Instrumental Skills",
          "Stage Presence and Coordination",
          "Creativity in Arrangement",
          "Overall Impact and Audience Engagement"
        ],
        incharges: {
          teacher: {
            name: "Mr. Vicky Thapa",
            email: "vickyt.csn@cambridgeschool.edu.in",
            mobile: "9149177846",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Suryansh Vedi" },
            { name: "Manan Soni" }
          ]
        },
        registration: {
          rules: "A maximum of ten entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/sahitZNqHFSCtue57"
        }
      },
      {
        name: "Nrityanjali (Fusion Dance)",
        venue: "Auditorium",
        date: "Wednesday, November 19, 2025",
        time: "11:00 a.m.",
        classesEligible: "III, IV & V",
        duration: "3-4 minutes",
        participants: "A team of 12-15 students (Participation from each class is compulsory)",
        rules: [
          "The participants must perform a fusion of folk and western dance of any one state.",
          "The selection of the song should be according to the theme. Songs with appropriate lyrics should be chosen. Film songs are not allowed.",
          "Costumes should be selected and worn as per the chosen dance form. Participants must maintain decorum with their costumes and dance moves.",
          "Props or usage of any digital background is not allowed.",
          "A pen drive with the specific song should be submitted at the time of arrival to the teacher in-charge.",
          "The name of the school should be clearly mentioned on the pen drive to avoid confusion.",
          "Points will be deducted for exceeding the time limit.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Technique of the dance form chosen",
          "Choreography, rhythm, group synchronization",
          "Costumes & Facial Expressions",
          "Overall Presentation"
        ],
        incharges: {
          teacher: [
            {
              name: "Ms. Debapriya Dutta",
              email: "debapriyad.csn@cambridgeschool.edu.in",
              mobile: "7703864002",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Mr. Irshad Ahmad",
              email: "irshada.csn@cambridgeschool.edu.in",
              mobile: "9718239096",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Saanvi Bhatia" },
            { name: "Anushka Shekhar" }
          ]
        },
        registration: {
          rules: "A maximum of ten entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/dB8F45DLNrek3sv67"
        }
      },
      {
        name: "Sur Sangam (Music - a Universal Language)",
        venue: "Dance Room",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m.",
        classesEligible: "III, IV & V",
        duration: "6 Minutes (Performance - 4 mins, Stage set up - 2 mins)",
        participants: "A team of 10-12 students",
        rules: [
          "The composition should be a fusion of Indian Classical/Light and Western Music.",
          "It has to be based on Indian Classical Ragas/ Light Music combined with Western Lyrics/ Western Instruments.",
          "Bollywood/Film Music is not allowed for the presentation. However, for Fusion, self composed Western / Indian Lyrics can be introduced.",
          "Traditional Bandish/Thumris can be used.",
          "Both Indian and Western Instruments are allowed.",
          "The participating team will be required to carry their own instruments; no instrument will be provided by the host school.",
          "Recorded or Background music like Karaoke Tracks is not permissible. No props will be allowed on stage. However, beats and rhythms on synthesizer/keyboard can be used.",
          "Participants should be dressed in plain Kurta Pyjama of any colour.",
          "Any 2 instruments can be used for the performance.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Composition",
          "Arrangement",
          "Melody and Rhythm",
          "Voice Synchronization",
          "Adherence to Time Duration (Marks will be deducted for increasing the time limit)"
        ],
        incharges: {
          teacher: [
            {
              name: "Mr. Rahul Chaudhary",
              email: "rahulc.csn@cambridgeschool.edu.in",
              mobile: "7982811624",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Mr. Shafi Azad",
              email: "shafiazad.csn@cambridgeschool.edu.in",
              mobile: "9654098327",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Angad Sharma" },
            { name: "Yoovika Jain" }
          ]
        },
        registration: {
          rules: "A maximum of eight entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/qzpSE3o5DUSpXjQ76"
        }
      },
      {
        name: "Kitchen Geniuses",
        venue: "AV Room",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m.",
        classesEligible: "IV & V",
        duration: "45 minutes",
        participants: "A team of 2 students (1 from each class)",
        rules: [
          "A team of two participants will prepare a healthy and nutritious platter keeping the theme in mind.",
          "The participants are allowed to bring pre-chopped ingredients for the event.",
          "The dish should be given an appropriate name and presented neatly. The team must display a placard showing the name of the dish along with the ingredients used.",
          "The participants are expected to have a thorough knowledge of the recipe in terms of its nutritional value, ingredients used and method of preparation.",
          "The participants should carry a table cloth.",
          "All required materials and tools should be brought by the participants.",
          "The participants should be dressed as little chefs keeping basic hygiene in mind. (Chef uniform, gloves, apron etc.)",
          "The preparation and the presentation should be done by the participants at the designated venue.",
          "All the participants must ensure neatness of their respective work station during the event.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Neatness and Presentation",
          "Creativity",
          "Nutritional value of the dish prepared",
          "Knowledge about the ingredients",
          "Taste of the dish prepared"
        ],
        incharges: {
          teacher: [
            {
              name: "Ms. Divya Wadhwa",
              email: "divyaw.csn@cambridgeschool.edu.in",
              mobile: "9891210668",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Ms. Anjana Arora",
              email: "anjanaa.csn@cambridgeschool.edu.in",
              mobile: "9310088873",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Preksha Bhatnagar" },
            { name: "Navya Kaur Lall" }
          ]
        },
        registration: {
          rules: "A maximum of ten entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/EjN5ntHr33yVE4SB6"
        }
      },
      {
        name: "ELAN: The Pulse Within (Western Dance Competition)",
        venue: "Auditorium",
        date: "Thursday, November 20, 2025",
        time: "11:00 a.m.",
        classesEligible: "VI-IX",
        duration: "3-5 Minutes",
        participants: "A team of 6-8 Students",
        rules: [
          "Each team will present a dance performance on pre-recorded music.",
          "The performance should align with the recommended theme and Western dance styles.",
          "All the music files must be mailed in advance in .mp3 format to the teacher incharge.",
          "Indecent attire or use of inappropriate steps and songs will lead to disqualification.",
          "The host school will provide no changing facility.",
          "Bollywood songs/music are not allowed.",
          "The participants are not allowed to carry phones.",
          "Teams who wish to make use of props are permitted to do so.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Choreography",
          "Costume",
          "Creativity and Expression",
          "Synchronization",
          "Overall Presentation"
        ],
        incharges: {
          teacher: {
            name: "Ms. Drishti Agrawal",
            email: "drishtia.csn@cambridgeschool.edu.in",
            mobile: "8299449660",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Kunjal Kalra" },
            { name: "Aashna Sharma" }
          ]
        },
        registration: {
          rules: "A maximum of ten entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration desk on the day of the event.",
          link: "https://forms.gle/Y7SmWZ4zfLD2hhvP9"
        }
      },
      {
        name: "नुक्कड़ नाटक (एक सामंजस्यपूर्ण राष्ट्र)",
        venue: "Stilted Area",
        date: "Thursday, November 20, 2025",
        time: "9:15 a.m.",
        classesEligible: "IV - V",
        duration: "10 minutes",
        participants: "A team of 8-10 students",
        rules: [
          "Each team will enact a Nukkad Natak in Hindi, based on the theme- एक सामंजस्यपूर्ण राष्ट्र",
          "Use of fire/water is strictly prohibited on the performing stage.",
          "Participants should adhere to the time limit.",
          "Props will be arranged by the teams themselves.",
          "Adult intervention is strictly prohibited.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Dialogue Delivery",
          "Expression, voice modulation and posture",
          "Relevance to the theme",
          "Overall Presentation"
        ],
        incharges: {
          teacher: {
            name: "Mr. Harish Verma",
            email: "harishv.csn@cambridgeschool.edu.in",
            mobile: "8800172212",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Paromita Barua" },
            { name: "Parth Shukla" }
          ]
        },
        registration: {
          rules: "A maximum of eight entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/vPUEhxMZUbKRRB5aA"
        }
      }
    ]
  },
  {
    eventName: "WORDWEAVE",
    subEvents: [
      {
        name: "TED Talk",
        venue: "Seminar Room",
        date: "Wednesday, November 19, 2025",
        time: "9:45 a.m.",
        classesEligible: "IX-XII",
        duration: "4-5 minutes",
        participants: "1 student",
        rules: [
          "Each participant will deliver a five-minutes talk on the theme - Global Diversity : Problems and Possibilities in the Modern World",
          "Personal stories, research, or real-life examples should be used to bring ideas to life and connect with the audience.",
          "Participants should share their own original and inspiring perspective.",
          "Plagiarism will lead to disqualification.",
          "The talk must always remain respectful, age-appropriate, and free from political references.",
          "Time management is important: a signal will be given at the end of four minutes, and marks will be deducted if the talk is too short or too long."
        ],
        judgementCriteria: [
          "Clarity of the message",
          "Relevance and depth of insight",
          "Confidence and delivery",
          "Structure and engagement"
        ],
        incharges: {
          teacher: [
            {
              name: "Ms. Aparajita",
              email: "aparajita.csn@cambridgeschool.edu.in",
              mobile: "9971600368",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Ms. Sanya Verma",
              email: "sanyav.csn@cambridgeschool.edu.in",
              mobile: "9818634813",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Deepika Rawat" },
            { name: "Aarush Varma" }
          ]
        },
        registration: {
          rules: "A maximum of eight entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/H4yxgbTzDV7SRjAE8"
        }
      },
      {
        name: "बातों - बातों में (हिन्दी पॉडकास्ट)",
        venue: "Seminar Room",
        date: "Wednesday, November 19, 2025",
        time: "11:00 a.m.",
        classesEligible: "VIII-IX",
        duration: "4-5 minutes",
        participants: "A team of 2 students",
        rules: [
          "प्रत्येक विद्यालय के दो प्रतिभागी दिए गए विषयों में से किसी एक विषय पर पॉडकास्ट प्रस्तुत करें।",
          "पॉडकास्ट मौलिक, तथ्यात्मक व सृजनात्मक होना चाहिए।",
          "पॉडकास्ट की भाषा-शैली सरल और संवेदनात्मक होनी चाहिए।",
          "पॉडकास्ट विषय से संबंधित होना चाहिए।",
          "वेशभूषा पॉडकास्ट के अनुसार होनी चाहिए।",
          "समय-सीमा का ध्यान रखना अनिवार्य है।"
        ],
        judgementCriteria: [
          "विषयवस्तु",
          "मौलिकता",
          "आत्मविश्वास",
          "उच्चारण-शुद्धता",
          "समग्र प्रस्तुति"
        ],
        incharges: {
          teacher: [
            {
              name: "Ms. Richa Sharma",
              email: "richas.csn@cambridgeschool.edu.in",
              mobile: "9990497227",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Ms. Vimal Tyagi",
              email: "vimalt.csn@cambridgeschool.edu.in",
              mobile: "9911905228",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Sara Thakur" },
            { name: "Mokshi Khari" }
          ]
        },
        registration: {
          rules: "दिए गए लिंक के माध्यम से 'पहले आओ – पहले पाओ' के आधार पर अधिकतम 10 प्रविष्टियों को ही पंजीकृत किया जाएगा। वर्ग का नाम और अंक प्रतिभागियों से पूर्व विद्यालय के पंजीकरण स्थल पर दिए जाएँगे।",
          link: "https://forms.gle/WEnHg3S8CA4PHnFg8"
        }
      },
      {
        name: "Flights of Poetic Fantasy (Poetry Writing Competition)",
        venue: "Room no. 7 and 8",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m.",
        classesEligible: "VI-VIII",
        duration: "60 minutes",
        participants: "A team of 2 students",
        rules: [
          "Participants will be given 60 minutes for writing a poem on the theme- 'Peace and Harmony'.",
          "A list of 20 words will be provided to the participants at the beginning of the event. They will use at least 10 words out of the given list and compose a poem, with a suitable title.",
          "The participants are required to write between 20 - 25 lines.",
          "The 10 words used from the list given must be underlined.",
          "The write-up should be in a neat handwriting.",
          "Students must write their school code and their name on the top of the sheet.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Theme",
          "Content",
          "Expression",
          "Manner of using the given words",
          "Overall Presentation"
        ],
        incharges: {
          teacher: {
            name: "Ms Souparni Paul",
            email: "souparnip.csn@cambridgeschool.edu.in",
            mobile: "9643142095",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Stuti Sharma" },
            { name: "Anandita Kapur" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/UtmwbW3j8n6Mb65i6"
        }
      },
      {
        name: "संस्कृत श्लोक गायन",
        venue: "Dance Room",
        date: "Wednesday, November 19, 2025",
        time: "11:00 a.m.",
        classesEligible: "VI-VIII",
        duration: "4-5 minutes",
        participants: "A team of 8-10 students",
        rules: [
          "अध्यापक/अध्यापिका अपनी रुचि के अनुसार श्लोक चयन कर अपनी प्रस्तुत देने के लिए स्वतंत्र है।",
          "लय, स्वर,ताल, आत्मविश्वास , उच्चारण व समय सीमा निर्णायक बिंदु होंगे।",
          "प्रतिभागी किसी भी भारतीय वाद्य-यंत्र का प्रयोग करने के लिए स्वतंत्र है।",
          "छात्र प्रस्तुति के अनुरूप वेश-भूषा धारण कर सकते हैं।",
          "श्लोक किसी यू ट्यूब आदि से न लिया गया हो।",
          "जीवंत प्रस्तुति के लिए आवश्यकतानुरूप दृश्य श्रव्य सामग्री का प्रयोग अपेक्षित है।",
          "निर्णायक मंडल का निर्णय ही अंतिम और सर्वमान्य होगा।"
        ],
        judgementCriteria: [
          "संवादात्मक प्रस्तुति",
          "सहायक सामग्री",
          "श्लोक स्मृति",
          "आत्मविश्वास",
          "लयात्मक प्रस्तुति",
          "वेशभूषा"
        ],
        incharges: {
          teacher: [
            {
              name: "Ms. Neelam Sharma",
              email: "neelams.csn@cambridgeschool.edu.in",
              mobile: "9868814556",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Ms. Vimal Tyagi",
              email: "vimalt.csn@cambridgeschool.edu.in",
              mobile: "9911905228",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Navya Sharma" },
            { name: "Gungun Mittal" }
          ]
        },
        registration: {
          rules: "छात्रों का पंजीकरण कराकर संस्कृत ज्ञान गंगा में छात्रों को अवगाहन करने का अवसर प्रदान कर हमें अनुगृहीत करें।",
          link: "https://forms.gle/vY4SR7zeCYjvT6R9A"
        }
      }
    ]
  },
  {
    eventName: "NAVRANG",
    subEvents: [
      {
        name: "Reimagine and Recreate (Chitrashala Jr. A)",
        venue: "School Ground",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m. - 11:30 a.m.",
        classesEligible: "III",
        duration: "2 hours",
        participants: "A team of 2 students",
        rules: [
          "A team of two (2) participants will create the artwork.",
          "Medium: Mixed Media",
          "A3 white sheets will be provided by the host school and other relevant stationery material should be brought by the students.",
          "Use of sharp props or materials is not allowed.",
          "Participants must carry child friendly scissors.",
          "The artworks created during competition will be collected and kept by the host school.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Creativity and originality",
          "Relevance to theme",
          "Neatness",
          "Aesthetic appeal and overall presentation"
        ],
        incharges: {
          teacher: [
            {
              name: "Mr. Vijay Kumar",
              email: "vijayk.csn@cambridgeschool.edu.in",
              mobile: "9968259189",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Ms. Viditi Khare",
              email: "viditik.csn@cambridgeschool.edu.in",
              mobile: "8828766290",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Paawni Gupta" },
            { name: "Ritisha Raturi" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/a6VVFdMtfJ3J9baU9"
        }
      },
      {
        name: "Paper Montage (Chitrashala Jr. B)",
        venue: "School Ground",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m. - 11:30 a.m.",
        classesEligible: "IV",
        duration: "2 hours",
        participants: "2 individual students",
        rules: [
          "Two individual participants will create a paper montage.",
          "Medium: Paper Collage",
          "A3 white sheets will be provided by the host school.",
          "Other relevant material should be brought by the students.",
          "Usage of child friendly scissors is advised.",
          "Usage of ready-made cut outs is not allowed.",
          "The artworks created during competition will be collected and kept by the host school.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Creativity and originality",
          "Relevance to theme",
          "Neatness",
          "Aesthetic appeal and overall presentation"
        ],
        incharges: {
          teacher: [
            {
              name: "Mr. Vijay Kumar",
              email: "vijayk.csn@cambridgeschool.edu.in",
              mobile: "9968259189",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Ms. Viditi Khare",
              email: "viditik.csn@cambridgeschool.edu.in",
              mobile: "8828766290",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Tanmaya Saini" },
            { name: "Esha Das" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/a6VVFdMtfJ3J9baU9"
        }
      },
      {
        name: "Canvas Painting (Chitrashala Jr. C)",
        venue: "School Ground",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m. - 11:30 a.m.",
        classesEligible: "V",
        duration: "2 hours",
        participants: "2 individual students",
        rules: [
          "Two (2) individual participants will create canvas paintings.",
          "Medium: Acrylic Colours",
          "A3 size canvas sheets will be provided by the host school.",
          "Other materials, colours, brushes, spray etc. should be brought by the students.",
          "Usage of ready-made materials is not allowed.",
          "The artworks created during competition will be collected and kept by the host school.",
          "The decision of the judges will be final."
        ],
        judgementCriteria: [
          "Creativity and originality",
          "Relevance to theme",
          "Neatness",
          "Aesthetic appeal and overall presentation"
        ],
        incharges: {
          teacher: [
            {
              name: "Mr. Vijay Kumar",
              email: "vijayk.csn@cambridgeschool.edu.in",
              mobile: "9968259189",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Ms. Viditi Khare",
              email: "viditik.csn@cambridgeschool.edu.in",
              mobile: "8828766290",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Saanvi Darbari" },
            { name: "Veda Bansal" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/a6VVFdMtfJ3J9baU9"
        }
      },
      {
        name: "Indian Renaissance Impact (Aesthetic Moves Sr. A)",
        venue: "School Ground",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m. - 11:30 a.m.",
        classesEligible: "VI-VIII",
        duration: "2 hours",
        participants: "2 individual participants",
        rules: [
          "2 individual participants are expected to create the painting",
          "Medium: Any water-based mediums like Water colour/ Poster Colour are allowed",
          "A3 size sheets will be provided by the host school.",
          "Other relevant stationery material should be brought by the students.",
          "The artworks created during competition will be collected and kept by the host school."
        ],
        judgementCriteria: [
          "Originality",
          "Creativity",
          "Colour Scheme",
          "Relevance to the Theme",
          "Overall Presentation"
        ],
        incharges: {
          teacher: {
            name: "Mr. Bappi Singha",
            email: "bappis.csn@cambridgeschool.edu.in",
            mobile: "9476350403",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Prabha Jain" },
            { name: "Dhruvi Paliwal" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/pPNvAaehx8XEtWqz6"
        }
      },
      {
        name: "Statuette (Aesthetic Moves Sr. B)",
        venue: "Room no. 16 and 17",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m. - 11:30 a.m.",
        classesEligible: "VI-VIII",
        duration: "2 hours",
        participants: "A team of 2 participants",
        rules: [
          "A team of two (2) participants",
          "Medium: Clay",
          "A board will be provided by the host school to create the Statuette",
          "Other relevant material like clay & spray etc should be brought by the students"
        ],
        judgementCriteria: [
          "Originality",
          "Creativity",
          "Colour Scheme",
          "Relevance to the Theme",
          "Overall Presentation"
        ],
        incharges: {
          teacher: {
            name: "Mr. Bappi Singha",
            email: "bappis.csn@cambridgeschool.edu.in",
            mobile: "9476350403",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Aldrich Boro" },
            { name: "Ansh Raj Johri" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/pPNvAaehx8XEtWqz6"
        }
      },
      {
        name: "Impressionist Landscape (Aesthetic Moves Sr. C)",
        venue: "School Ground",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m. - 11:30 a.m.",
        classesEligible: "IX-X",
        duration: "2 hours",
        participants: "2 individual participants",
        rules: [
          "Two (2) individual participants will create a knife painting on canvas",
          "Medium: Acrylic paints are allowed",
          "16\" X 20\" canvas sheets will be provided by the host school.",
          "Other relevant painting material should be brought by the students.",
          "The artworks created during competition will be collected and kept by the host school."
        ],
        judgementCriteria: [
          "Originality",
          "Creativity",
          "Colour Scheme",
          "Relevance to the Theme",
          "Overall Presentation"
        ],
        incharges: {
          teacher: {
            name: "Mr. Bappi Singha",
            email: "bappis.csn@cambridgeschool.edu.in",
            mobile: "9476350403",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Aaditya Kumar Chaurasia" },
            { name: "Mohd. Ayan" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/pPNvAaehx8XEtWqz6"
        }
      },
      {
        name: "Aesthetical Expression (Aesthetic Moves Sr. D)",
        venue: "School Ground",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m. - 11:30 a.m.",
        classesEligible: "XI-XII",
        duration: "2 hours",
        participants: "A team of 2 participants",
        rules: [
          "A team of two (2) participants",
          "Medium: Students may use any medium.",
          "A canvas sheet of 2ft X 2.5ft will be provided by the host school.",
          "The relevant painting material like paint, brush, spray etc. should be brought by the students."
        ],
        judgementCriteria: [
          "Originality",
          "Creativity",
          "Colour Scheme",
          "Relevance to the Theme",
          "Overall Presentation"
        ],
        incharges: {
          teacher: {
            name: "Mr. Bappi Singha",
            email: "bappis.csn@cambridgeschool.edu.in",
            mobile: "9476350403",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Avni Chaturvedi" },
            { name: "Nistha Pachauri" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/pPNvAaehx8XEtWqz6"
        }
      }
    ]
  },
  {
    eventName: "TECHNOLYMPICS",
    subEvents: [
      {
        name: "GameCraft",
        venue: "IRP Lab",
        date: "Wednesday, November 19, 2025",
        time: "10:00 a.m.",
        classesEligible: "IV-VI",
        duration: "1 hour",
        participants: "1 student",
        rules: [
          "Participants will have to create a game on a topic provided to them on the spot using Scratch 3.0 Offline Editor.",
          "The game controls must be kept simple & intuitive. If possible educational elements may be incorporated into the game, such as mathematical challenges, spelling quizzes, or science related questions.",
          "The participants must save the game file in .sb3 format on the desktop with their team name.",
          "They must carry their headphones / earplugs as per their requirement.",
          "The members of the team will showcase their game to the judges and respond to questions related to the source code during the presentation.",
          "The decision of the judges will be binding."
        ],
        judgementCriteria: [
          "Creativity & Originality",
          "Gameplay /Engagement",
          "Visual Design",
          "Educational Value",
          "Difficulty Level",
          "Overall Experience"
        ],
        incharges: {
          teacher: {
            name: "Ms. Vinoo Mehta",
            email: "vinoom.csn@cambridgeschool.edu.in",
            mobile: "9810855550",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Japeen Kaur" },
            { name: "Tanvee Ghai" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/StuvutrWQVWrdxfh9"
        }
      },
      {
        name: "Webolution",
        venue: "Multimedia Lab",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m.",
        classesEligible: "IX-XII",
        duration: "1 hour",
        participants: "A team of 2 students",
        rules: [
          "Participants will have to design a website on a topic provided on the spot.",
          "Websites must be developed using HTML, CSS, and JavaScript.",
          "VS Code software will be provided",
          "Images, videos and other media will be provided by the host school.",
          "Website must include at least 4 web pages (e.g., Home, About, Contact).",
          "Navigation should be clear and functional.",
          "Pages must be responsive and displayed properly on different screen sizes.",
          "Participants must try to create interactive web pages (forms, buttons, or simple animations).",
          "Any attempt to bypass website restrictions or access unauthorized content will result in disqualification.",
          "The decision of the judges will be final and binding"
        ],
        judgementCriteria: [
          "Design & Creativity",
          "Functionality & Navigation",
          "Code Quality & Best Practices",
          "Originality & Theme Relevance"
        ],
        incharges: {
          teacher: {
            name: "Ms. Sandhya Puri",
            email: "sandhyap.csn@cambridgeschool.edu.in",
            mobile: "9818122267",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Kshitij Gupta" },
            { name: "Shreyas Nair" }
          ]
        },
        registration: {
          rules: "A maximum of 10 entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/oz2yGNRKFSkqxqcYA"
        }
      },
      {
        name: "CrypteX",
        venue: "Online (Discord)",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m.",
        classesEligible: "IX-XII",
        duration: "24 hours",
        participants: "1 student",
        rules: [
          "Cryptic hunt will be live for 24 hours from 9:30 am November 19 to 9:30 am November 20.",
          "You have to share your Discord ID to the team and link for the discord will be shared via confirmation mail sent to your school and also via the WhatsApp group.",
          "Images to begin your challenges will be shared on our Discord Server.",
          "Hints will also be provided on our Discord Server.",
          "Google is your only companion.",
          "Anything and everything may be a clue to aid your progress to complete the challenges.",
          "Participants will have to decrypt images via clues obtained from Google and use decrypted data to obtain details regarding the next challenge.",
          "The top 3 teams to complete the most challenges in the fastest time will be the winners."
        ],
        judgementCriteria: [
          "The participant who completes the final CHALLENGE after completing all the levels before others will be the winner"
        ],
        incharges: {
          teacher: {
            name: "Ms. Shivani Narang",
            email: "shivanin.csn@cambridgeschool.edu.in",
            mobile: "9818832899",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Satish Garg" },
            { name: "Rishan Sharma" }
          ]
        },
        registration: {
          rules: "A discord server link will be provided by email to the school teacher incharge once the registration is confirmed.",
          link: "https://forms.gle/YCmg6FCPSDfUMcAd8"
        }
      },
      {
        name: "ChemCraft 3D",
        venue: "Atal Tinkering Lab",
        date: "Wednesday, November 19, 2025",
        time: "9:45 a.m.",
        classesEligible: "X-XII",
        duration: "1 hour (preparation time) + 2 minutes (presentation)",
        participants: "A team of 2 students",
        rules: [
          "Each team must design a 3D model in Blender of an assigned molecule and submit the .blend file along with a 2–3-page report (PDF). The report should cover geometry, bond types, polarity/symmetry, uses, and applications.",
          "The molecule to be designed will be revealed on the spot.",
          "Participants must bring their own laptops and chargers with Blender pre-installed and working.",
          "Using Internet during the event is not allowed.",
          "The time limit provided is 1 hour for both model designing and report writing.",
          "Each team must give a presentation to showcase and explain their design.",
          "The host school will not be responsible for the safety of any gadgets or materials brought by the participants",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Scientific Accuracy",
          "Creativity And Visualisation",
          "Quality Of Report",
          "Presentation"
        ],
        incharges: {
          teacher: {
            name: "Ms. Arpita Paul",
            email: "arpitap.csn@cambridgeschool.edu.in",
            mobile: "9810032729",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Devanshi Chauhan" },
            { name: "Aryav Thakur" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/WhTVh3jPKwKg9r587"
        }
      },
      {
        name: "Vista View",
        venue: "Designated Walls",
        date: "Wednesday, November 19, 2025",
        time: "9:30 a.m.",
        classesEligible: "IX-XII",
        duration: "3 hours",
        participants: "A team of 5 students",
        rules: [
          "Participants are required to create a 3D Wall installation using waste materials.",
          "The theme for the installation is 'Waste to Art for Sustainable Creation'.",
          "Teams must bring their own waste materials, paints, and adhesive materials.",
          "Suggestive waste materials: cardboard, discarded boxes, egg trays, plastic bottles, used pens and pencils, caps, e-waste, bubble wrap, clay,rope, jute, natural fibres, fabric scraps, newspaper, branches of trees, discarded metals, etc.",
          "Sharp and hazardous materials should not be used in the installation.",
          "Acrylic paints and spray paints can be used.",
          "Suggestive adhesives: Epoxy, POP, synthetic adhesive, etc.",
          "The art must be created within the wall mounted framed plywood board of area 4 ft × 3 ft.",
          "Each team will get 3 hours to create their 3D wall art.",
          "The 3D wall art will be retained by the host school.",
          "The host school will not be responsible for the safety of materials brought by participants.",
          "The decision of the judges will be final and binding on all participants."
        ],
        judgementCriteria: [
          "Thematic Relevance",
          "Creativity and Imagination",
          "Originality and Innovativeness",
          "Spatial Awareness"
        ],
        incharges: {
          teacher: {
            name: "Ms. Susmita Dey",
            email: "susmitad.csn@cambridgeschool.edu.in",
            mobile: "9953706461",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Manya Shukla" },
            { name: "Harsimran Kaur Chawla" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/uR55HQSbNumMRY526"
        }
      },
      {
        name: "Rube It Up!",
        venue: "Room no. 100",
        date: "Thursday, November 20, 2025",
        time: "9:30 a.m.",
        classesEligible: "IX-XII",
        duration: "30 minutes + 5 minutes (set-up)",
        participants: "A team of 2 students",
        rules: [
          "Each team must design and build a Rube Goldberg Machine — a chain-reaction invention that performs a simple task in an overly complicated and creative way.",
          "The final task is to knock down a stack of paper cups within 1 minute.",
          "Teams must bring their own paper cups.",
          "Machine size must not exceed 1m × 1m × 1m and should be stable, safe, and suitable for indoor use.",
          "The machine must be triggered by one simple human action and then run entirely on its own.",
          "Materials allowed include household items (cardboard, bottles, marbles, balls, strings, magnets, rubber bands, etc.), mechanical parts, and safe battery-operated electronics.",
          "Materials strictly prohibited include open flames, explosives, hazardous chemicals, pressurized gases, projectiles, live creatures, sharp weapons, or anything unsafe indoors.",
          "Each team will be given 30 minutes for assembling and 5 minutes final setup time before their demonstration.",
          "Each team will get two attempts; if both fail, partially completed steps will still be considered for judgement",
          "Each team must give a short oral presentation (max 5 minutes) explaining their design and working.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Creativity and Originality",
          "Complexity",
          "Engineering skills",
          "Presentation and explanation"
        ],
        incharges: {
          teacher: {
            name: "Ms. Nitu Dixit",
            email: "nitud.csn@cambridgeschool.edu.in",
            mobile: "9818634574",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Anahita Singh" },
            { name: "Reyaansh Pandey" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration desk on the day of the event",
          link: "https://forms.gle/i2SQTMLGK39yQ3yB6"
        }
      },
      {
        name: "EcoInnovators",
        venue: "AV Room",
        date: "Thursday, November 20, 2025",
        time: "9:30 a.m.",
        classesEligible: "VI-XI",
        duration: "5 minutes per team",
        participants: "A team of 2 students",
        rules: [
          "Participants are required to create an original, practical model that addresses a real-life ecological or environmental problem.",
          "The model must be based on 'Innovation for a Greener and Sustainable Future'",
          "Only sustainable, biodegradable, or recycled materials are to be used.",
          "The model must fit within the maximum display size of 4 ft × 2 ft. If the participant is using charts, they too must fit in the designated space.",
          "Each team will get 5 minutes to present their model to the judges during the event.",
          "Plug points will be provided, if required.",
          "The host school will not be responsible for the safety of materials brought by participants.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Thematic Relevance",
          "Creativity and Innovation",
          "Scientific Principle",
          "Sustainability Performance"
        ],
        incharges: {
          teacher: {
            name: "Dr. Isha Anand",
            email: "isha.csn@cambridgeschool.edu.in",
            mobile: "+91 98995 42285",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Sanvi Singh" },
            { name: "Swapna Sahoo" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration desk on the day of the event",
          link: "https://forms.gle/VkHbceZZrPw3nz5q9"
        }
      },
      {
        name: "Reel Harmony",
        venue: "Multimedia Lab",
        date: "Thursday, November 20, 2025",
        time: "9:30 a.m.",
        classesEligible: "VII-VIII",
        duration: "1 hour",
        participants: "A team of 2 students",
        rules: [
          "Participants will create a short animated story on the topic given on the spot based on the main theme of Image",
          "The final video must be in .mp4 format, include soft background music, not exceed 3 minutes in length and may include subtitles.",
          "The host school will provide Computers, OpenShot software for editing and a set of images and audio files for use.",
          "Participants must carry their own headphones for editing and audio mixing.",
          "Each team will narrate their story live before the judges.",
          "The host school will not be responsible for the safety of any gadgets or materials brought by participants.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Relevance to the theme",
          "Creativity & originality",
          "Technical execution (editing, audio-visual sync, subtitles if used)",
          "Quality of narration"
        ],
        incharges: {
          teacher: {
            name: "Ms. Vinoo Mehta",
            email: "vinoom.csn@cambridgeschool.edu.in",
            mobile: "9810855550",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Avni Chaturvedi" },
            { name: "Navya Barua" }
          ]
        },
        registration: {
          rules: "Participation is limited to the first 10 teams to register",
          link: "https://forms.gle/Do2iPgwhqJRdQ8pE7"
        }
      },
      {
        name: "GameSpark",
        venue: "Room no. 18",
        date: "Thursday, November 20, 2025",
        time: "9:15 a.m.",
        classesEligible: "IX-XII",
        duration: "10 minutes per team",
        participants: "A team of 2 students",
        rules: [
          "Participants must present their game pre-developed on the theme, \"Duality – Two opposite forces coexist, and you must balance them\", using any version of Unreal Engine or Unity.",
          "Free assets from the internet may be used, provided proper credits are given. Failure to acknowledge sources will result in disqualification.",
          "All work must be original and created exclusively by the participants.",
          "Each team will present their game to the judges within a time slot of 10 minutes.",
          "Students must bring their own laptops to present the game to the Judges.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Originality",
          "Functionality",
          "Creativity",
          "User Experience"
        ],
        incharges: {
          teacher: {
            name: "Ms. Shivani Narang",
            email: "shivanin.csn@cambridgeschool.edu.in",
            mobile: "9818832899",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Shaurya Pathak" },
            { name: "Ojas Goel" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration desk on the day of the event",
          link: "https://forms.gle/gxL3kqXmxEjCANtU7"
        }
      },
      {
        name: "Top Coders",
        venue: "IRP Lab",
        date: "Thursday, November 20, 2025",
        time: "9:30 a.m.",
        classesEligible: "IX-XII",
        duration: "1 hour",
        participants: "A team of 2 students",
        rules: [
          "Teams will be tasked to solve given programming problems in the time duration provided.",
          "The programming language for the event will be Python 3.13.",
          "Only the software and tools provided by the host school may be used.",
          "The use of the internet, mobile phones, or external storage devices is strictly prohibited.",
          "Code plagiarism or copying from others will lead to immediate disqualification.",
          "Teams must save their programs with their team name.",
          "Any form of unfair means or malpractice will result in disqualification.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Problem-Solving Ability",
          "Code Accuracy & Functionality",
          "Efficiency of Code",
          "Creativity & Innovation"
        ],
        incharges: {
          teacher: {
            name: "Ms. Sandhya Puri",
            email: "sandhyap.csn@cambridgeschool.edu.in",
            mobile: "9818122267",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Ishant Aggarwal" },
            { name: "Yashika Gupta" }
          ]
        },
        registration: {
          rules: "A maximum of 10 entries will be allowed to register through the link provided on first come first serve basis. Team numbers will be allotted at the registration desk on the day of the event",
          link: "https://forms.gle/5gr6zsz6gBUeqrEH9"
        }
      },
      {
        name: "IQrypt (Science & Technology Quiz)",
        venue: "Room no. 85 (Prelims), Auditorium (Finals)",
        date: "Thursday, November 20, 2025",
        time: "Prelim Round: 9:00 a.m. - 9:30 a.m., Final Round: 9:45 a.m. - 10:45 a.m.",
        classesEligible: "IX-XII",
        duration: "Prelims: 30 Mins and Final round: 1 hour",
        participants: "A team of 2 students",
        rules: [
          "Preliminary Round: This will be a pen-and-paper round.",
          "Both team members will collaboratively solve a written test within a given time limit.",
          "The top 6 scoring teams will qualify for the Final Round.",
          "Final Round: The finals will consist of 5 rounds of questions.",
          "Questions will cover a diverse range of topics from science and technology.",
          "Teams will be ranked based on their final score.",
          "The scoring scheme will be revealed on the spot."
        ],
        judgementCriteria: [
          "Score based on correct answers and speed"
        ],
        incharges: {
          teacher: {
            name: "Ms. Ayesha Khan",
            email: "ayeshak.csn@cambridgeschool.edu.in",
            mobile: "9810890596",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Hardik Kumar" },
            { name: "Arya Singh Tyagi" },
            { name: "Raunak Nayan" },
            { name: "Manya Aggarwal" },
            { name: "Avika Sharma" }
          ]
        },
        registration: {
          rules: "Team numbers will be allotted at the registration desk on the day of the event",
          link: "https://forms.gle/Nbkx2jvWz8RuqHd18"
        }
      }
    ]
  },
  {
    eventName: "AUREUS",
    subEvents: [
      {
        name: "Bid Blitz",
        venue: "Seminar Room",
        date: "Thursday, November 20, 2025",
        time: "9:00 a.m.",
        classesEligible: "X-XII",
        duration: "2 hours",
        participants: "A team of 2 students",
        rules: [
          "The teams will manage virtual funds to bid for the players using strategy and the game sense.",
          "Player details and the auction guidelines will be shared beforehand for preparation via WhatsApp group.",
          "The auction will run until completion with no fixed time limit.",
          "Teams must strictly fulfil the required squad composition.",
          "Use of gadgets/ digital devices are not allowed during the auction and will lead to disqualification.",
          "The decision of the judges will be final and binding."
        ],
        judgementCriteria: [
          "Auction Strategy",
          "Overall Strength and the balance of the final squad"
        ],
        incharges: {
          teacher: {
            name: "Mr. Mayank Arora",
            email: "mayanka.csn@cambridgeschool.edu.in",
            mobile: "9811933187",
            contactTiming: "any working day between 2 p.m. to 4 p.m."
          },
          student: [
            { name: "Saksham Kohli" },
            { name: "Mehar Kaur" }
          ]
        },
        registration: {
          rules: "The first eight registered teams will qualify for the auction",
          link: "https://forms.gle/81U3stCbeXUuzJpz6"
        }
      },
      {
        name: "Think Tank",
        venue: "Library",
        date: "Thursday, November 20, 2025",
        time: "9:00 a.m.",
        classesEligible: "IX-XII",
        duration: "6 minutes per team for Preliminary Round, 6 minutes per team for Final Round",
        participants: "A team of 2 students",
        rules: [
          "A team of two students from Class IX to XII shall participate in a group discussion on a topic related to the theme of Image 2025- वसुधैव कुटुम्बकम्",
          "Preliminary Round: Topic: \"Bridging the Gap: Reducing Global Inequalities for a Harmonious Future\". The top four teams will be shortlisted for the final round.",
          "Final Round: Topic: To be announced on the spot",
          "Time: 20 minutes for preparation, 6 minutes for presentation. (Global perspectives related to Environmentally sustainable and responsible lifestyle choices, Economic Policies, Social Issues, War and Peace, Armed Conflicts, etc.)",
          "Participants will not be allowed to use any external material or notes, as reference during the presentation.",
          "Judges will ask questions and may provide feedback on your presentation.",
          "Exceeding the time limit of 6 mins (for the preliminary round) and 6 mins (for the final round), as applicable will lead to negative marking.",
          "No Wi-Fi connectivity will be provided by the organizing school.",
          "The teams shall not reveal or wear their own identity or the identity of their school such as school uniform, I-card, taking school name while making presentation, etc.",
          "No character assassination, naming any individual (living or dead) is allowed. The same will lead to disqualification of the team.",
          "The teams shall speak without overlapping/interrupting other speakers.",
          "Mutual respect for each other's views shall be appreciated.",
          "Students should be dressed in formal attire.",
          "The decision of the panel of experts shall be final and binding in all situations, even though not mentioned otherwise in the list of rules, in the interest of justice."
        ],
        judgementCriteria: [
          "Depth of Knowledge: Critical Thinking, Clarity of thought and Coherence of the argument",
          "Originality and Innovation, Communication Skills",
          "Relevance and Applicability",
          "Time Management",
          "Confidence and Conviction: Adaptability and Flexibility"
        ],
        incharges: {
          teacher: [
            {
              name: "Mr. Jamal Ashraf",
              email: "jamala.csn@cambridgeschool.edu.in",
              mobile: "9990544434",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            },
            {
              name: "Ms. Jennifer D' Castro",
              email: "jenniferd.csn@cambridgeschool.edu.in",
              mobile: "9899188954",
              contactTiming: "any working day between 2 p.m. to 4 p.m."
            }
          ],
          student: [
            { name: "Swadha Upadhyay" },
            { name: "Juwariyah Mahmood" }
          ]
        },
        registration: {
          rules: "A maximum of 10 entries will be allowed to register through the link provided on a first come first serve basis. Team numbers will be allotted at the registration table on the day of the event.",
          link: "https://forms.gle/kHXxt2XZta7qudf89"
        }
      }
    ]
  }
];

const EventWebsite: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<SubEvent | null>(null);
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleEventExpansion = (eventName: string) => {
    setExpandedEvent(expandedEvent === eventName ? null : eventName);
  };

  const handleSubEventClick = (subEvent: SubEvent) => {
    setSelectedEvent(subEvent);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const backgroundImage = selectedEvent
  ? subEventBackgrounds[selectedEvent.name] || 'assets/default.jpg'
  : 'assets/default.jpg';

  return (
    <>
      <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>

      <div className="min-h-screen main-container">
        <div className="fixed inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>

        {isMobile && (
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed top-4 right-4 z-50 hamburger-btn"
          >
            <div className={`hamburger ${isSidebarOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        )}
        <div className={`content-wrapper ${!isMobile ? 'with-sidebar' : ''}`}>
          {selectedEvent ? (
            <EventDetails event={selectedEvent} />
          ) : (
            <div className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">IMAGE 2025</h1>
                <h2 className="hero-subtitle">वसुधैव कुटुम्बकम्</h2>
                <p className="hero-description">
                  One World • One Family • One Future
                </p>
                <button
                  className="hero-cta"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <span>Select an event to begin</span>
                  <svg className="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="sidebar-inner">
            <div className="sidebar-header">
              <h2 className="sidebar-title">EVENTS</h2>
            </div>
            <nav className="sidebar-nav">
              {Events.map((event, index) => (
                <div key={index} className="event-item">
                  <button
                    onClick={() => toggleEventExpansion(event.eventName)}
                    className="event-button"
                  >
                    <span className="event-name">{event.eventName}</span>
                    <svg
                      className={`event-arrow ${expandedEvent === event.eventName ? 'rotate' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <div className={`subevent-container ${expandedEvent === event.eventName ? 'expanded' : ''}`}>
                    {event.subEvents.map((subEvent, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => handleSubEventClick(subEvent)}
                        className={`subevent-button ${selectedEvent?.name === subEvent.name ? 'active' : ''
                          }`}
                      >
                        {subEvent.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isMobile && isSidebarOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
};

const EventDetails: React.FC<{ event: SubEvent }> = ({ event }) => {
  const teacherArray = Array.isArray(event.incharges.teacher)
    ? event.incharges.teacher
    : [event.incharges.teacher];

  return (
    <div className="event-details-container">
      <h1 className="event-title">{event.name}</h1>

      <div className="info-grid">
        <DetailItem label="Venue" value={event.venue} />
        <DetailItem label="Date" value={event.date} />
        <DetailItem label="Time" value={event.time} />
        <DetailItem label="Classes" value={event.classesEligible} />
        <DetailItem label="Duration" value={event.duration} />
        <DetailItem label="Team" value={event.participants} />
      </div>

      <div className="main-content-grid">
        <div className="left-column">
          <Section title="RULES">
            <div className="rules-box">
              <ul className="rules-list">
                {event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </Section>

          <Section title="JUDGEMENT CRITERIA">
            <div className="criteria-grid">
              {event.judgementCriteria.map((criteria, index) => (
                <div key={index} className="criteria-box">
                  <span className="criteria-number">{index + 1}</span>
                  <p className="criteria-text">{criteria}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div className="right-column">
          <Section title="INCHARGES">
            <div className="contact-section">
              {teacherArray.map((teacher, index) => (
                <div key={index} className="contact-info">
                  <p className="contact-name">{teacher.name}</p>
                  <p className="contact-detail">{teacher.email}</p>
                  <p className="contact-detail">{teacher.mobile}</p>
                  <p className="contact-timing">Contact: {teacher.contactTiming}</p>
                </div>
              ))}
              <div className="student-section">
                <p className="student-label">Student Incharges:</p>
                <div className="student-list">
                  {event.incharges.student.map((student, index) => (
                    <span key={index} className="student-name">
                      {student.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section title="REGISTRATION">
            <div className="register-section">
              <p className="register-info">{event.registration.rules}</p>
              <a
                href={event.registration.link}
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                <span>Register</span>
                <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="detail-item">
    <p className="detail-label">{label}</p>
    <p className="detail-value">{value}</p>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="section">
    <h3 className="section-title">{title}</h3>
    {children}
  </div>
);

// Add styles
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Color Variables */
:root {
  /* Primary Colors */
  --primary: #A03D37;
  --primary-dark: #8A2E28;
  --primary-light: #B54E48;
  
  /* Secondary Colors */
  --secondary: #3464A5;
  --secondary-dark: #245091;
  --secondary-light: #4573B4;
  
  /* Accent Colors */
  --accent: #C07D67;
  --accent-dark: #A66554;
  --accent-light: #D08E7A;
  
  /* Background Colors */
  --bg-primary: #EAD4B9;
  --bg-secondary: #DBCAB0;
  --bg-tertiary: #F5E8D8;
  --bg-card: rgba(255, 255, 255, 0.7);
  
  /* Text Colors */
  --text-primary: #110B0B;
  --text-secondary: #6E87AC;
  --text-light: #FFFFFF;
  --text-muted: #8A7968;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
  background: var(--bg-primary);
}

/* Loading Screen */
.loading-screen {
  position: fixed;
  inset: 0;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s, visibility 0.5s;
}

.loading-screen.fade-out {
  opacity: 0;
  visibility: hidden;
}

.loader {
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  border-top-color: var(--primary);
  border-right-color: var(--secondary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Main Container */
.main-container {
  position: relative;
  min-height: 100vh;
  background: transparent;
}

.bg-gradient-overlay {
  background: linear-gradient(135deg, 
    rgba(234, 212, 185, 0.5) 0%,
    rgba(192, 125, 103, 0.4) 50%,
    rgba(219, 202, 176, 0.5) 100%);
}

/* Content Wrapper */
.content-wrapper {
  position: relative;
  z-index: 10;
  padding: 1.5rem;
  min-height: 100vh;
  transition: margin-right 0.3s ease;
}

.content-wrapper.with-sidebar {
  margin-right: 180px;
}

/* Hero Section */
.hero-section {
  min-height: calc(100vh - 3rem);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}

.hero-content {
  max-width: 600px;
  width: 100%;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(45deg, var(--primary), var(--accent), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
  letter-spacing: -0.02em;
  filter: drop-shadow(0 0 20px rgba(160, 61, 55, 0.3));
}

.hero-subtitle {
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-weight: 400;
  text-shadow: 0 0 20px rgba(160, 61, 55, 0.5);
}

.hero-description {
  font-size: 0.9rem;
  color: var(--secondary);
  margin-bottom: 1.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* Update hero-cta styles */
.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-light);
  padding: 0.8rem 1.8rem;
  background: linear-gradient(45deg, var(--primary), var(--accent));
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  position: relative;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(160, 61, 55, 0.3);
}

.hero-cta:active {
  transform: translateY(-1px);
}

.cta-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.hero-cta:hover .cta-arrow {
  transform: translateX(3px);
}

/* Hamburger Button */
.hamburger-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border: 1px solid var(--primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 50;
  padding: 0;
}

.hamburger-btn:hover {
  background: rgba(255, 255, 255, 0.85);
  border-color: var(--accent);
}

/* Hamburger lines container */
.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
  display: block;
}

/* Hamburger lines */
.hamburger span {
  display: block;
  position: absolute;
  width: 24px;
  height: 3px;
  background: var(--primary);
  border-radius: 3px;
  left: 0;
  transition: transform 0.3s ease, opacity 0.3s ease, top 0.3s ease, bottom 0.3s ease;
}

/* Position the three lines */
.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger span:nth-child(3) {
  bottom: 0;
}

/* When active (sidebar open) - transform to X */
.hamburger.active span {
  background: var(--accent);
}

.hamburger.active span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: translateY(-50%) scale(0);
}

.hamburger.active span:nth-child(3) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

/* Optional: Add rotation to the button itself */
.hamburger-btn:active {
  transform: scale(0.95);
}

/* Sidebar */
.sidebar {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) translateX(calc(100% + 1rem));
  height: auto;
  max-height: 80vh;
  width: 160px;
  transition: transform 0.3s ease;
  z-index: 40;
}

.sidebar-open {
  transform: translateY(-50%) translateX(0);
}

.sidebar-inner {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid rgba(160, 61, 55, 0.2);
  box-shadow: 0 8px 32px rgba(17, 11, 11, 0.3);
}

.sidebar-header {
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(160, 61, 55, 0.2);
}

.sidebar-title {
  font-size: 0.75rem;
  color: var(--primary);
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  max-height: calc(80vh - 60px);
  overflow-y: auto;
  padding-right: 0.3rem;
}

.sidebar-nav::-webkit-scrollbar {
  width: 2px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: rgba(160, 61, 55, 0.1);
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 1px;
}

.event-item {
  margin-bottom: 0.2rem;
}

.event-button {
  width: 100%;
  padding: 0.5rem 0.6rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(160, 61, 55, 0.2);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 0.67rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.event-button:hover {
  background: rgba(160, 61, 55, 0.1);
  border-color: var(--primary);
  transform: translateX(-2px);
}

.event-arrow {
  width: 10px;
  height: 10px;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.event-arrow.rotate {
  transform: rotate(90deg);
}

.subevent-container {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.subevent-container.expanded {
  max-height: 300px;
  margin: 0.3rem 0;
}

.subevent-button {
  width: 100%;
  padding: 0.35rem 0.5rem 0.35rem 0.8rem;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 0.60rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0.1rem 0;
  border-radius: 4px;
  line-height: 1.2;
}

.subevent-button:hover {
  color: var(--text-primary);
  background: rgba(160, 61, 55, 0.05);
  padding-left: 1rem;
}

.subevent-button.active {
  color: var(--text-light);
  background: linear-gradient(135deg, var(--primary), var(--accent));
  font-weight: 600;
  border-left: 2px solid var(--primary);
}

/* Event Details */
.event-details-container {
  max-width: 1000px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.event-title {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(45deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  text-align: left;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.detail-item {
  padding: 0.8rem;
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(160, 61, 55, 0.2);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.detail-item:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
}

.detail-label {
  font-size: 0.65rem;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.detail-value {
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 400;
}

.main-content-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
}

.section {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.rules-box {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(160, 61, 55, 0.15);
  max-height: 300px;
  overflow-y: auto;
}

.rules-list {
  list-style: none;
  font-size: 0.75rem;
  color: var(--text-primary);
  line-height: 1.6;
}

.rules-list li {
  margin-bottom: 0.6rem;
  padding-left: 1.2rem;
  position: relative;
}

.rules-list li:before {
  content: "•";
  color: var(--primary);
  position: absolute;
  left: 0;
  font-size: 1rem;
}

.criteria-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}

.criteria-box {
  background: rgba(192, 125, 103, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 6px;
  padding: 0.8rem;
  position: relative;
  border: 1px solid rgba(192, 125, 103, 0.3);
  transition: all 0.2s ease;
}

.criteria-box:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.criteria-number {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 20px;
  height: 20px;
  background: var(--primary);
  color: var(--text-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
}

.criteria-text {
  color: var(--text-primary);
  font-size: 0.7rem;
  line-height: 1.4;
  padding-right: 1.5rem;
}

.contact-section,
.register-section {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(160, 61, 55, 0.15);
}

.contact-info {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(160, 61, 55, 0.1);
}

.contact-info:last-of-type {
  border-bottom: none;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
}

.contact-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.3rem;
}

.contact-detail {
  font-size: 0.7rem;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
  word-break: break-all;
}

.contact-timing {
  font-size: 0.65rem;
  color: var(--secondary);
  margin-top: 0.3rem;
}

.student-section {
  margin-top: 0.8rem;
}

.student-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.student-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.student-name {
  font-size: 0.65rem;
  color: var(--text-light);
  background: linear-gradient(45deg, var(--primary), var(--accent));
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-weight: 500;
}

.register-info {
  font-size: 0.75rem;
  color: var(--text-primary);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.register-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(45deg, var(--primary), var(--accent));
  color: var(--text-light);
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
}

.register-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(160, 61, 55, 0.3);
}

.button-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
}

.register-button:hover .button-icon {
  transform: translateX(2px);
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(17, 11, 11, 0.7);
  backdrop-filter: blur(5px);
  z-index: 30;
}

/* Scrollbar styles */
.rules-box::-webkit-scrollbar {
  width: 3px;
}

.rules-box::-webkit-scrollbar-track {
  background: rgba(160, 61, 55, 0.1);
}

.rules-box::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 1.5px;
}

/* Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 1rem;
  }
  
  .content-wrapper.with-sidebar {
    margin-right: 0;
  }
  
  .sidebar {
    right: 0;
    top: 0;
    transform: translateX(100%);
    height: 100vh;
    width: 200px;
    border-radius: 0;
  }
  
  .sidebar-open {
    transform: translateX(0);
  }
  
  .sidebar-inner {
    height: 100%;
    border-radius: 0;
  }
  
  .main-content-grid {
    grid-template-columns: 1fr;
  }
  
  .criteria-grid {
    grid-template-columns: 1fr;
  }
  
  .info-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
  }
}

@media (max-width: 480px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default EventWebsite;
