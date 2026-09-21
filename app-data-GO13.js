/*
 * GO13 itinerary data
 * Full replacement file.
 * Updated: 2026-09-21
 *
 * Compatibility globals are intentionally exposed so the current app can read
 * the same data even if it references one of the common names used by older versions.
 */

const APP_DATA = {
  version: "GO13",
  buildName: "GO13",
  title: "GO-USA",
  timezoneNote: "Local times are used. Utah is one hour ahead of Nevada/Arizona/California during this trip.",
  days: {
    "2026-09-21": {
      date: "2026-09-21",
      day: "Mon",
      title: "New York → Las Vegas",
      city: "New York",
      heroImage: "added-later.jpg",
      summary: "Statue City Cruises, final packing and shopping, then JFK and the 21:39 JetBlue flight to Las Vegas.",
      events: [
        {
          id: "21-statue-transfer",
          start: "08:00",
          end: "08:45",
          title: "Hotel → Battery Park",
          from: "Home2 Suites Times Square",
          to: "Battery Park",
          toAddress: "Battery Park, New York, NY 10004",
          transport: "Uber / taxi",
          travelTime: "~20–30 min",
          stay: "15 min buffer",
          whatToDo: "Leave the hotel with the cruise confirmation and arrive early for security check-in.",
          booking: "Statue City Cruises",
          status: "CONFIRMED",
          bookingStatus: "CONFIRMED",
          next: "Be at the meeting/security area before 09:15.",
          nav: "Battery Park, New York, NY 10004",
          anchor: true,
          addedLater: false,
          image: "added-later.jpg"
        },
        {
          id: "21-statue-cruise",
          start: "09:15",
          end: "~11:30",
          title: "Statue City Cruises – Statue of Liberty / Ellis Island",
          from: "Battery Park",
          to: "Statue of Liberty / Ellis Island",
          toAddress: "Battery Park, New York, NY 10004",
          transport: "Cruise",
          travelTime: "Security check-in 09:15",
          stay: "~2h15",
          whatToDo: "General Admission cruise. Keep the confirmation ready. This is a fixed booking.",
          booking: "Statue City Cruises",
          status: "CONFIRMED",
          bookingStatus: "CONFIRMED",
          confirmation: "85639241 / 85639239",
          cost: "$52 / 2 people",
          next: "After the cruise, return to Midtown and keep the rest of the day light.",
          nav: "Battery Park, New York, NY 10004",
          anchor: true,
          addedLater: false,
          image: "added-later.jpg"
        },
        {
          id: "21-lunch",
          start: "12:00",
          end: "13:00",
          title: "Lunch + final packing",
          from: "Battery Park / Midtown",
          to: "NYC hotel",
          toAddress: "Home2 Suites Times Square, New York, NY",
          transport: "Walk / subway / Uber",
          travelTime: "~20–30 min",
          stay: "1h",
          whatToDo: "Fast final meal, return to hotel, finish packing and keep the day light.",
          bookingStatus: "NOT NEEDED",
          status: "LOCKED",
          next: "Be back at the hotel by 15:00.",
          nav: "Home2 Suites by Hilton New York / Times Square Area",
          anchor: false,
          addedLater: false
        },
        {
          id: "21-rest",
          start: "13:00",
          end: "15:00",
          title: "Final shopping / rest",
          from: "NYC hotel",
          to: "Midtown / hotel",
          transport: "Walk",
          travelTime: "Local",
          stay: "2h",
          whatToDo: "Only one relaxed outing if needed. Return to the hotel by 15:00.",
          bookingStatus: "OPTIONAL",
          status: "OPTIONAL",
          next: "Do not add another major attraction.",
          nav: "Midtown Manhattan",
          optional: true,
          addedLater: false
        },
        {
          id: "21-pack",
          start: "15:00",
          end: "17:30",
          title: "Shower + luggage + final hotel buffer",
          from: "Midtown",
          to: "NYC hotel",
          transport: "Walk",
          travelTime: "Local",
          stay: "2h30",
          whatToDo: "Fully packed, documents and flight ready. Protect the JFK buffer.",
          bookingStatus: "NOT NEEDED",
          status: "LOCKED",
          next: "Leave for JFK at 18:00.",
          nav: "Home2 Suites Times Square",
          anchor: false,
          addedLater: false
        },
        {
          id: "21-jfk",
          start: "18:00",
          end: "19:30",
          title: "Transfer + JFK check-in",
          from: "NYC hotel",
          to: "JFK Airport",
          toAddress: "JFK Airport, Queens, NY",
          transport: "Uber / taxi",
          travelTime: "~1h00–1h30",
          stay: "1h30",
          whatToDo: "Large NYC traffic buffer. Eat only as needed after security.",
          bookingStatus: "NOT NEEDED",
          status: "LOCKED",
          next: "Proceed to the JetBlue gate and verify flight/boarding details.",
          nav: "John F. Kennedy International Airport (JFK)",
          anchor: true,
          addedLater: false
        },
        {
          id: "21-flight",
          start: "21:39",
          end: "~01:00",
          title: "JetBlue: JFK → Las Vegas",
          from: "JFK",
          to: "Harry Reid International Airport (LAS)",
          toAddress: "5757 Wayne Newton Blvd, Las Vegas, NV 89119",
          transport: "Flight",
          travelTime: "~5h50",
          stay: "Flight",
          whatToDo: "Verify exact flight details on the ticket. On arrival, go directly to the Palazzo.",
          bookingStatus: "TICKET",
          status: "TICKET VERIFY",
          next: "Uber/Lyft to the Palazzo and sleep.",
          nav: "Harry Reid International Airport (LAS)",
          anchor: true,
          addedLater: false
        }
      ]
    },

    "2026-09-22": {
      date: "2026-09-22",
      day: "Tue",
      title: "Las Vegas – Strip + Outlets",
      city: "Las Vegas",
      heroImage: "canyon-bg.jpg",
      summary: "Palazzo base, easy morning at Venetian/Wynn, North Premium Outlets, recovery, then Caesars and Bellagio.",
      events: [
        {
          id: "22-hotel",
          start: "01:15",
          end: "01:45",
          title: "LAS → Palazzo check-in",
          from: "Harry Reid International Airport (LAS)",
          fromAddress: "5757 Wayne Newton Blvd, Las Vegas, NV 89119",
          to: "The Palazzo at The Venetian Resort",
          toAddress: "3325 S Las Vegas Blvd, Las Vegas, NV 89109",
          transport: "Uber / Lyft",
          travelTime: "~15–20 min",
          stay: "30 min",
          whatToDo: "Go directly to the hotel, check in and sleep. No extra stop after the overnight flight.",
          booking: "Hotel",
          bookingStatus: "BOOKED",
          status: "CONFIRMED",
          next: "Sleep until the slow morning start.",
          nav: "The Palazzo at The Venetian Resort",
          anchor: true,
          addedLater: false
        },
        {
          id: "22-breakfast",
          start: "09:00",
          end: "10:15",
          title: "Breakfast – Grand Lux Cafe",
          from: "Palazzo",
          to: "Grand Lux Cafe – Venetian",
          toAddress: "3355 S Las Vegas Blvd, Las Vegas, NV 89109",
          transport: "Walk",
          travelTime: "0–10 min",
          stay: "1h15",
          whatToDo: "Easy breakfast and slow start after the late arrival.",
          bookingStatus: "NOT NEEDED",
          status: "LOCKED",
          next: "Walk the Venetian canals and continue to Wynn.",
          nav: "Grand Lux Cafe Venetian",
          addedLater: false
        },
        {
          id: "22-venetian-wynn",
          start: "10:15",
          end: "11:40",
          title: "Venetian canals + Wynn",
          from: "Venetian / Palazzo",
          to: "The Venetian Resort / Wynn Las Vegas",
          toAddress: "3355 S Las Vegas Blvd / 3131 S Las Vegas Blvd, Las Vegas, NV",
          transport: "Walk",
          travelTime: "0–10 min",
          stay: "1h25",
          whatToDo: "Walk the canals and St Mark’s Square, then continue to Wynn gardens. Keep it light.",
          bookingStatus: "NOT NEEDED",
          status: "LOCKED",
          next: "Return to Palazzo for lunch.",
          nav: "The Venetian Resort / Wynn Las Vegas",
          addedLater: false
        },
        {
          id: "22-lunch",
          start: "11:40",
          end: "12:30",
          title: "Return to Palazzo + quick lunch",
          from: "Wynn / Strip",
          to: "The Palazzo",
          toAddress: "3325 S Las Vegas Blvd, Las Vegas, NV 89109",
          transport: "Walk / short Uber if needed",
          travelTime: "~10–15 min",
          stay: "50 min",
          whatToDo: "Cool down and eat quickly. Protect the shopping start time.",
          bookingStatus: "NOT NEEDED",
          status: "LOCKED",
          next: "Leave for North Premium Outlets at 13:30.",
          nav: "The Palazzo at The Venetian Resort",
          addedLater: false
        },
        {
          id: "22-outlets",
          start: "13:30",
          end: "17:30",
          title: "Las Vegas North Premium Outlets",
          from: "Palazzo",
          to: "Las Vegas North Premium Outlets",
          toAddress: "875 S Grand Central Pkwy, Las Vegas, NV 89106",
          transport: "Uber / Lyft",
          travelTime: "~10–20 min",
          stay: "4h",
          whatToDo: "Priority shops: Samsonite, BOSS, Nike/adidas/On, Ralph Lauren/Lacoste. Leave by 17:30.",
          bookingStatus: "NOT NEEDED",
          status: "LOCKED",
          next: "Request the rideshare from the main entrance.",
          nav: "Las Vegas North Premium Outlets",
          anchor: true,
          addedLater: false
        },
        {
          id: "22-recovery",
          start: "17:45",
          end: "19:15",
          title: "Rest / pool / shower",
          from: "Las Vegas North Premium Outlets",
          to: "Palazzo",
          toAddress: "3325 S Las Vegas Blvd, Las Vegas, NV 89109",
          transport: "Uber / Lyft",
          travelTime: "~10–20 min",
          stay: "1h30",
          whatToDo: "Real recovery block. Do not add attractions here.",
          bookingStatus: "HOTEL",
          status: "LOCKED",
          next: "Leave for dinner and Bellagio/Caesars around 19:30.",
          nav: "The Palazzo at The Venetian Resort",
          addedLater: false
        },
        {
          id: "22-evening",
          start: "19:30",
          end: "23:00",
          title: "Dinner + Caesars Palace + Bellagio",
          from: "Palazzo",
          to: "Bellagio / Caesars Palace",
          toAddress: "3570 S Las Vegas Blvd / 3600 S Las Vegas Blvd, Las Vegas, NV",
          transport: "Walk / Uber",
          travelTime: "~10–20 min each way",
          stay: "3h30",
          whatToDo: "Dinner, Bellagio Conservatory / fountains, Caesars atmosphere, then return to Palazzo.",
          bookingStatus: "Dinner optional",
          status: "LOCKED",
          next: "Return to Palazzo by 23:00 and sleep.",
          nav: "Bellagio Conservatory & Botanical Gardens",
          addedLater: false
        }
      ]
    },

    "2026-09-23": {
      date: "2026-09-23",
      day: "Wed",
      title: "Las Vegas – Sphere Day",
      city: "Las Vegas",
      heroImage: "canyon-bg.jpg",
      summary: "Easy breakfast, open morning for a short physical activity, recovery, then The Wizard of Oz at Sphere at 14:00.",
      events: [
        {
          id: "23-breakfast",
          start: "08:00",
          end: "08:45",
          title: "Breakfast",
          from: "Palazzo",
          to: "Grand Lux / Palazzo",
          transport: "Walk",
          travelTime: "0–10 min",
          stay: "45 min",
          whatToDo: "Light breakfast and prepare for the morning. Bring water.",
          bookingStatus: "NOT NEEDED",
          status: "LOCKED",
          next: "Morning activity is intentionally left flexible.",
          nav: "Grand Lux Cafe Venetian",
          addedLater: false
        },
        {
          id: "23-morning-tbd",
          start: "09:00",
          end: "12:00",
          title: "Short physical morning activity – TO BE CLOSED",
          from: "Palazzo",
          to: "Las Vegas activity area",
          transport: "Uber / Lyft",
          travelTime: "TBD",
          stay: "Up to 3h",
          whatToDo: "This replaces the previously listed off-road activity. No car is available; choose a short, age-appropriate physical activity reachable without a rental car.",
          bookingStatus: "OPEN",
          status: "OPEN / TBD",
          next: "Book only after the exact activity is chosen. Do not show the old off-road experience.",
          nav: "Las Vegas",
          optional: true,
          addedLater: true,
          image: "added-later.jpg"
        },
        {
          id: "23-recovery",
          start: "12:15",
          end: "13:45",
          title: "Lunch + shower + rest",
          from: "Morning activity",
          to: "Palazzo",
          toAddress: "3325 S Las Vegas Blvd, Las Vegas, NV 89109",
          transport: "Uber / Lyft",
          travelTime: "~15–25 min",
          stay: "1h30",
          whatToDo: "Eat, shower and recover. Be ready to leave for Sphere around 13:45.",
          bookingStatus: "NOT NEEDED",
          status: "LOCKED",
          next: "Transfer to Sphere.",
          nav: "The Palazzo at The Venetian Resort",
          addedLater: false
        },
        {
          id: "23-sphere",
          start: "13:45",
          end: "15:30",
          title: "The Wizard of Oz at Sphere",
          from: "Palazzo",
          to: "Sphere Las Vegas",
          toAddress: "255 Sands Ave, Las Vegas, NV 89169",
          transport: "Walk / short rideshare",
          travelTime: "~10–20 min",
          stay: "~1h30 incl. entry",
          whatToDo: "Fixed anchor. Keep the ticket/phone ready. Ticketed performance at 14:00.",
          booking: "Ticketmaster",
          bookingStatus: "PAID",
          status: "BOOKED / PAID",
          confirmation: "2 tickets; $258 total; Sec 406 Row 10 Seat 25 shown on one ticket.",
          next: "After the show, return for a relaxed dinner.",
          nav: "Sphere Las Vegas",
          anchor: true,
          addedLater: false
        },
        {
          id: "23-dinner",
          start: "19:30",
          end: "21:00",
          title: "Dinner",
          from: "Palazzo",
          to: "Venetian / Palazzo restaurant area",
          transport: "Walk",
          travelTime: "0–10 min",
          stay: "1h30",
          whatToDo: "Relaxed dinner and early night. No extra attraction needed.",
          bookingStatus: "OPTIONAL",
          status: "RECOMMENDED",
          next: "Rest before the rental-car / Grand Canyon day.",
          nav: "Venetian / Palazzo restaurant area",
          addedLater: false
        }
      ]
    },

    "2026-09-24": {
      date: "2026-09-24",
      day: "Thu",
      title: "Las Vegas → Grand Canyon",
      city: "Grand Canyon",
      heroImage: "canyon-bg.jpg",
      summary: "Pick up the rental car, drive to Grand Canyon South Rim, viewpoints and sunset, then The Outpost.",
      events: [
        { id:"24-rental", start:"09:00", end:"09:45", title:"Transfer + Alamo rental pickup", from:"Palazzo", to:"Harry Reid Rent-A-Car Center / Alamo", toAddress:"7135 Gilespie St, Las Vegas, NV 89119", transport:"Uber / Lyft", travelTime:"~10–20 min", stay:"45 min", whatToDo:"Inspect vehicle, photograph condition, odometer and fuel.", booking:"Alamo", bookingStatus:"PENDING TIME CONFIRMATION", status:"PENDING", next:"Get written confirmation for the 09:00 pickup time.", nav:"Harry Reid Rent-A-Car Center", anchor:true },
        { id:"24-drive-gc", start:"09:45", end:"14:45", title:"Drive to Grand Canyon South Rim", from:"LAS Rent-A-Car Center", to:"Grand Canyon South Entrance", toAddress:"South Entrance AZ-64", transport:"Rental car", travelTime:"~4h45–5h", stay:"5h block incl. drive", whatToDo:"One rest/fuel stop if needed. Keep the route direct.", bookingStatus:"NOT NEEDED", status:"LOCKED", next:"Enter the park and eat quickly.", nav:"Grand Canyon South Entrance" },
        { id:"24-entry", start:"14:45", end:"15:30", title:"Park entry + quick lunch", from:"Grand Canyon South Entrance", to:"Grand Canyon Visitor Center / Mather", toAddress:"36.0560,-112.1430", transport:"Rental car", travelTime:"~15 min", stay:"45 min", whatToDo:"Enter, eat fast and start the viewpoint sequence.", bookingStatus:"PASS / ENTRY", status:"LOCKED", next:"Mather + Yavapai + Rim Trail.", nav:"Grand Canyon Visitor Center" },
        { id:"24-viewpoints", start:"15:30", end:"17:30", title:"Mather + Yavapai + Rim Trail", from:"Grand Canyon Visitor Center", to:"Mather Point / Yavapai", toAddress:"36.0553,-112.1216", transport:"Walk / park shuttle as needed", travelTime:"Local", stay:"2h", whatToDo:"2–3 key viewpoints. Keep walking manageable.", bookingStatus:"NOT NEEDED", status:"LOCKED", next:"Move to the sunset position.", nav:"Mather Point" },
        { id:"24-sunset", start:"17:45", end:"18:35", title:"Sunset block", from:"Mather / South Rim", to:"Mather Point / Hopi area", transport:"Walk / shuttle as needed", travelTime:"Local", stay:"50 min", whatToDo:"Sunset target around 18:22. Stay for the light, then leave before it gets too late.", bookingStatus:"NOT NEEDED", status:"LOCKED", next:"Drive to The Outpost Grand Canyon.", nav:"Mather Point / Hopi Point" },
        { id:"24-outpost", start:"18:40", end:"19:30", title:"Drive to The Outpost Grand Canyon", from:"Grand Canyon South Rim", to:"The Outpost Grand Canyon", toAddress:"Valle, AZ", transport:"Rental car", travelTime:"~40–50 min", stay:"50 min", whatToDo:"Check in after sunset. Dinner on arrival as available.", booking:"Agoda", bookingStatus:"BOOKED", status:"BOOKED", confirmation:"702603347", next:"Sleep early for sunrise.", nav:"The Outpost Grand Canyon" }
      ]
    },

    "2026-09-25": {
      date: "2026-09-25", day:"Fri", title:"Grand Canyon → Page", city:"Page", heroImage:"canyon-bg.jpg",
      summary:"Sunrise, Desert View Drive, Page, Horseshoe Bend and a relaxed evening.",
      events:[
        {id:"25-sunrise",start:"05:45",end:"08:00",title:"Sunrise + breakfast + depart",from:"The Outpost",to:"South Rim",transport:"Rental car",travelTime:"~25–35 min",stay:"2h15",whatToDo:"Sunrise, short rim walk, breakfast.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Desert View Drive.",nav:"Mather Point"},
        {id:"25-desert",start:"08:00",end:"09:30",title:"Desert View Drive",from:"Grand Canyon",to:"Desert View Watchtower",toAddress:"Desert View Watchtower, AZ",transport:"Rental car",travelTime:"~1h30",stay:"1h30",whatToDo:"One or two viewpoints. Do not overextend.",status:"RECOMMENDED",bookingStatus:"NOT NEEDED",next:"Drive to Page.",nav:"Desert View Watchtower",optional:true},
        {id:"25-page-drive",start:"09:30",end:"12:15",title:"Drive to Page",from:"Desert View",to:"Home2 Suites Page",toAddress:"681 Scenic View Rd, Page, AZ",transport:"Rental car",travelTime:"~2h43",stay:"2h45",whatToDo:"Fuel/coffee if needed.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Lunch and luggage drop.",nav:"Home2 Suites Page"},
        {id:"25-lunch",start:"12:15",end:"13:15",title:"Lunch + luggage drop",from:"Home2 Page",to:"Home2 Suites Page",toAddress:"681 Scenic View Rd, Page, AZ",transport:"Car / walk",travelTime:"~5 min",stay:"1h",whatToDo:"Leave bags if check-in is not ready.",status:"BOOKED",bookingStatus:"BOOKED",next:"Check in later; depart for Horseshoe Bend.",nav:"Home2 Suites Page"},
        {id:"25-horseshoe",start:"15:45",end:"17:30",title:"Horseshoe Bend",from:"Page",to:"Horseshoe Bend",toAddress:"US-89 MM 545, Page, AZ",transport:"Rental car",travelTime:"~10 min",stay:"1h45",whatToDo:"0.6 mi each way. Water and sun protection.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Dinner and prepare for kayak.",nav:"Horseshoe Bend"},
        {id:"25-dinner",start:"18:00",end:"19:15",title:"Dinner + easy evening",from:"Page",to:"Page restaurant area",transport:"Car / walk",travelTime:"~10 min",stay:"1h15",whatToDo:"Pack for the next morning kayak.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Sleep on time.",nav:"Page restaurant area"}
      ]
    },

    "2026-09-26": {
      date:"2026-09-26", day:"Sat", title:"Lake Powell + Antelope Canyon", city:"Page", heroImage:"canyon-bg.jpg",
      summary:"Kayak at 09:30, recovery, then confirmed Upper Antelope Canyon at 16:00.",
      events:[
        {id:"26-breakfast",start:"07:45",end:"08:30",title:"Breakfast + gear",from:"Home2 Page",to:"Home2 Page",transport:"Walk",travelTime:"0",stay:"45 min",whatToDo:"Water shoes, sunscreen, dry clothes and water.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Drive to kayak launch.",nav:"Home2 Suites Page"},
        {id:"26-launch",start:"08:30",end:"09:00",title:"Drive to kayak launch",from:"Home2 Page",to:"Kayak Lake Powell launch",toAddress:"910 Coppermine Rd, Page, AZ",transport:"Rental car",travelTime:"~15 min",stay:"30 min",whatToDo:"Arrive early.",status:"CONFIRMED",bookingStatus:"CONFIRMED",next:"Check in for the tour.",nav:"910 Coppermine Rd / Kayak Lake Powell"},
        {id:"26-kayak",start:"09:30",end:"12:00",title:"Guided Lake Powell kayak",from:"Kayak launch",to:"Lake Powell / Antelope Canyon",transport:"Guided double kayak",travelTime:"0",stay:"2h30",whatToDo:"Guided kayak with gear and dry bags.",booking:"Kayak Lake Powell",bookingStatus:"CONFIRMED / PAID",status:"CONFIRMED",next:"Return, eat, change and rest.",nav:"Kayak Lake Powell",anchor:true},
        {id:"26-recovery",start:"12:15",end:"15:15",title:"Lunch + rest + change",from:"Lake Powell",to:"Home2 Page",transport:"Rental car",travelTime:"~10 min",stay:"3h",whatToDo:"No sightseeing. Recover before Upper Antelope.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Leave for Upper Antelope at ~15:30.",nav:"Home2 Suites Page"},
        {id:"26-antelope",start:"15:30",end:"17:40",title:"Upper Antelope Canyon",from:"Page",to:"Upper Antelope Canyon",toAddress:"22 S Lake Powell Blvd, Page, AZ",transport:"Rental car + tour 4x4",travelTime:"~10 min",stay:"2h10",whatToDo:"Arrive at 15:30 for the 16:00 confirmed tour.",booking:"Upper Antelope Canyon",bookingStatus:"CONFIRMED / PAID",status:"CONFIRMED",next:"Early dinner in Page.",nav:"Upper Antelope Canyon",anchor:true},
        {id:"26-dinner",start:"18:00",end:"19:15",title:"Dinner",from:"Upper Antelope Canyon",to:"Page restaurant area",transport:"Rental car",travelTime:"~10 min",stay:"1h15",whatToDo:"Early dinner and rest.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Sleep for Bryce day.",nav:"Page restaurant area"}
      ]
    },

    "2026-09-27": {
      date:"2026-09-27", day:"Sun", title:"Page → Bryce Canyon", city:"Bryce Canyon", heroImage:"canyon-bg.jpg",
      summary:"Drive to Bryce, optional Red Canyon, lunch and the strenuous Navajo + Peekaboo Combination Loop, then Cedar City.",
      events:[
        {id:"27-breakfast",start:"07:15",end:"08:00",title:"Breakfast + checkout",from:"Home2 Page",to:"Home2 Page",transport:"Walk",travelTime:"0",stay:"45 min",whatToDo:"Leave with water and layers.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Drive to Bryce.",nav:"Home2 Suites Page"},
        {id:"27-drive",start:"08:00",end:"10:45",title:"Drive to Bryce",from:"Page",to:"Bryce Canyon Shuttle Station",transport:"Rental car",travelTime:"~2h30–2h45",stay:"2h45",whatToDo:"Utah is +1h vs Page; watch the clock.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Optional Red Canyon only if early.",nav:"Bryce Canyon Shuttle Station"},
        {id:"27-red",start:"10:45",end:"11:10",title:"Optional: Red Canyon",from:"Bryce route",to:"Red Canyon Visitor Center",transport:"Rental car",travelTime:"~15 min",stay:"25 min",whatToDo:"Short stop only if ahead of time. Skip if late.",status:"OPTIONAL",bookingStatus:"NOT NEEDED",next:"Continue to Bryce lunch.",nav:"Red Canyon Visitor Center",optional:true},
        {id:"27-lunch",start:"11:15",end:"12:15",title:"Lunch",from:"Bryce route",to:"Bryce Canyon City",transport:"Car",travelTime:"Local",stay:"1h",whatToDo:"Light meal before the strenuous hike.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Enter the park.",nav:"Bryce Canyon City"},
        {id:"27-trail",start:"13:00",end:"16:45",title:"Navajo + Peekaboo Combination Loop",from:"Sunset Point",to:"Bryce Amphitheater",toAddress:"Bryce Canyon NP",transport:"Walk / park shuttle as needed",travelTime:"Local",stay:"3h45",whatToDo:"Strenuous; ~7.9 km. Recheck trail conditions the morning of the hike.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Leave for Cedar City.",nav:"Navajo Loop Trailhead",anchor:true},
        {id:"27-cedar",start:"17:00",end:"18:30",title:"Drive to Cedar City hotel",from:"Bryce",to:"Best Western Plus Cedar City",toAddress:"50 W 200 N, Cedar City, UT",transport:"Rental car",travelTime:"~1h30",stay:"1h30",whatToDo:"Dinner / check-in.",bookingStatus:"BOOKED",status:"BOOKED",next:"Sleep after the hike.",nav:"Best Western Plus Cedar City"}
      ]
    },

    "2026-09-28": {
      date:"2026-09-28", day:"Mon", title:"Cedar City → Outpost X", city:"Beryl, Utah", heroImage:"canyon-bg.jpg",
      summary:"Easy morning, fuel/groceries, drive to the Glass Cave Villa and enjoy the experience night.",
      events:[
        {id:"28-morning",start:"07:30",end:"10:00",title:"Breakfast + easy morning",from:"Best Western Cedar City",to:"Cedar City",transport:"Car / walk",travelTime:"Local",stay:"2h30",whatToDo:"Fuel and groceries. No strenuous activity.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Drive toward Beryl / Outpost X.",nav:"Cedar City, UT"},
        {id:"28-drive",start:"10:30",end:"15:00",title:"Drive toward Beryl + lunch + Outpost arrival",from:"Cedar City",to:"Outpost X",toAddress:"Beryl, UT",transport:"Rental car",travelTime:"~1h30 + buffer",stay:"4h30",whatToDo:"Lunch on route; arrive before the 15:00 check-in.",status:"BOOKED",bookingStatus:"BOOKED",next:"Check in to Glass Cave Villa.",nav:"Outpost X Glass Cave Villa"},
        {id:"28-outpost",start:"15:00",end:"20:30",title:"Outpost X – Glass Cave Villa experience",from:"Outpost X",to:"Glass Cave Villa",transport:"Stay on property",travelTime:"0",stay:"5h30",whatToDo:"Enjoy the property, sunset and experience night. No Zion today.",booking:"Outpost X",bookingStatus:"BOOKED",status:"BOOKED",next:"Sleep at Outpost X.",nav:"Outpost X Glass Cave Villa",anchor:true}
      ]
    },

    "2026-09-29": {
      date:"2026-09-29", day:"Tue", title:"Outpost X → Zion", city:"Springdale", heroImage:"canyon-bg.jpg",
      summary:"Use the Outpost morning, then Zion east side, Canyon Overlook and a light Springdale evening.",
      events:[
        {id:"29-morning",start:"08:00",end:"10:00",title:"Breakfast + checkout",from:"Outpost X",to:"Outpost X",transport:"Walk",travelTime:"0",stay:"2h",whatToDo:"Use the morning; checkout by 10:00.",status:"BOOKED",bookingStatus:"BOOKED",next:"Drive to Zion.",nav:"Outpost X"},
        {id:"29-zion-drive",start:"10:00",end:"11:30",title:"Drive to Zion",from:"Outpost X",to:"Zion National Park Visitor Center",toAddress:"Springdale / Zion, UT",transport:"Rental car",travelTime:"~1h30",stay:"1h30",whatToDo:"East Zion approach.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Canyon Overlook + east Zion.",nav:"Zion National Park Visitor Center"},
        {id:"29-canyon",start:"11:45",end:"14:30",title:"Canyon Overlook + east Zion",from:"Zion east",to:"Canyon Overlook Trailhead",toAddress:"Zion Canyon Overlook Trailhead, UT",transport:"Rental car + walk",travelTime:"~25 min",stay:"2h45",whatToDo:"Short hike and east Zion viewpoints. No shuttle required.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Drive to Hampton check-in.",nav:"Canyon Overlook Trailhead"},
        {id:"29-checkin",start:"14:30",end:"15:00",title:"Drive + Hampton check-in",from:"Zion east",to:"Hampton Suites Springdale / Zion",toAddress:"1127 Zion Park Blvd, Springdale, UT",transport:"Rental car",travelTime:"~15 min",stay:"30 min",whatToDo:"Check in from 15:00.",bookingStatus:"BOOKED",status:"BOOKED",next:"Easy town / Pa'rus walk.",nav:"Hampton Suites Springdale Zion National Park"},
        {id:"29-evening",start:"16:00",end:"18:00",title:"Pa'rus / Springdale walk",from:"Springdale",to:"Pa'rus Trailhead / Springdale",transport:"Walk / town shuttle",travelTime:"Local",stay:"2h",whatToDo:"Easy sunset activity and protect legs.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Dinner nearby.",nav:"Pa'rus Trailhead"},
        {id:"29-dinner",start:"18:30",end:"19:45",title:"Dinner",from:"Springdale",to:"Springdale restaurant area",transport:"Walk",travelTime:"Local",stay:"1h15",whatToDo:"Oscar's / Bit & Spur / similar; verify same-day hours.",status:"RECOMMENDED",bookingStatus:"OPTIONAL",next:"Sleep early for the long positioning day.",nav:"Springdale restaurant area"}
      ]
    },

    "2026-09-30": {
      date:"2026-09-30", day:"Wed", title:"Zion → Mammoth", city:"Mammoth Lakes", heroImage:"canyon-bg.jpg",
      summary:"Long positioning day from Springdale through Las Vegas and Bishop to Mammoth Mountain Inn.",
      events:[
        {id:"30-start",start:"05:15",end:"05:45",title:"Breakfast + pack",from:"Hampton Springdale",to:"Hampton Springdale",transport:"Walk",travelTime:"0",stay:"30 min",whatToDo:"Take breakfast to-go if needed. Leave by 06:00.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Drive toward Las Vegas.",nav:"Hampton Suites Springdale Zion National Park"},
        {id:"30-vegas",start:"06:00",end:"08:35",title:"Drive to Las Vegas area",from:"Springdale",to:"Las Vegas south",transport:"Rental car",travelTime:"~2h30–2h45",stay:"2h35",whatToDo:"Fuel only if needed. Live navigation on the day.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Fuel/bathroom/coffee.",nav:"Las Vegas south"},
        {id:"30-fuel",start:"08:35",end:"09:00",title:"Fuel + bathroom + coffee",from:"Las Vegas",to:"Las Vegas fuel stop",transport:"Rental car",travelTime:"0",stay:"25 min",whatToDo:"Fill tank.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Drive north through the desert.",nav:"Las Vegas fuel stop"},
        {id:"30-bishopdrive",start:"09:00",end:"13:00",title:"Drive via US-95 / US-395",from:"Las Vegas",to:"Bishop, CA",transport:"Rental car",travelTime:"~4h",stay:"4h",whatToDo:"Stretch as needed. Water/snacks in the car.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Lunch and fuel in Bishop.",nav:"Bishop, CA"},
        {id:"30-bishop",start:"13:00",end:"13:45",title:"Lunch + fuel",from:"Bishop",to:"Bishop restaurant area",transport:"Car",travelTime:"0",stay:"45 min",whatToDo:"Simple hot meal.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Drive to Mammoth.",nav:"Bishop, CA"},
        {id:"30-mammoth",start:"13:45",end:"16:00",title:"Drive + Mammoth check-in buffer",from:"Bishop",to:"Mammoth Mountain Inn",toAddress:"10400 Minaret Rd, Mammoth Lakes, CA",transport:"Rental car",travelTime:"~1h30–1h45",stay:"2h15",whatToDo:"Hotel check-in from 16:00; early arrival may be possible.",bookingStatus:"BOOKED",status:"BOOKED",next:"Check in, dinner and fuel.",nav:"Mammoth Mountain Inn"},
        {id:"30-evening",start:"16:00",end:"19:00",title:"Check-in + dinner + fuel",from:"Mammoth Mountain Inn",to:"Mammoth Lakes",transport:"Car / walk",travelTime:"Local",stay:"3h",whatToDo:"Fill fuel tonight and buy breakfast/snacks before Tioga/Yosemite.",bookingStatus:"BOOKED",status:"BOOKED",next:"Sleep early.",nav:"Mammoth Lakes"}
      ]
    },

    "2026-10-01": {
      date:"2026-10-01", day:"Thu", title:"Mammoth → Tioga → Yosemite → Burbank", city:"Yosemite / Burbank", heroImage:"canyon-bg.jpg",
      summary:"Very early Tioga departure, Yosemite Valley highlights, Tunnel View, then long drive to Burbank.",
      events:[
        {id:"1-breakfast",start:"05:45",end:"06:15",title:"Breakfast + depart",from:"Mammoth Mountain Inn",to:"Mammoth Mountain Inn",transport:"Walk",travelTime:"0",stay:"30 min",whatToDo:"Food and water in the car. Check Tioga road status before departure.",status:"HIGH RISK CHECK",bookingStatus:"NOT NEEDED",next:"Enter Tioga only if road is open.",nav:"Mammoth Mountain Inn"},
        {id:"1-tioga",start:"06:15",end:"07:30",title:"Lee Vining + Tioga entrance",from:"Mammoth",to:"Tioga Pass Entrance",toAddress:"Tioga Pass, CA",transport:"Rental car",travelTime:"~1h15",stay:"1h15",whatToDo:"Enter only if road is open. Recheck morning of 1 Oct.",status:"HIGH RISK CHECK",bookingStatus:"NOT NEEDED",next:"Continue across Tioga.",nav:"Tioga Pass Entrance"},
        {id:"1-stops",start:"07:30",end:"09:00",title:"Tuolumne / Tenaya / Olmsted stops",from:"Tioga Road",to:"Tenaya Lake / Olmsted Point",transport:"Rental car",travelTime:"~1h30",stay:"1h30",whatToDo:"Tuolumne optional; Tenaya + Olmsted. Skip any stop if behind schedule.",status:"LOCKED IF OPEN",bookingStatus:"NOT NEEDED",next:"Drive to Yosemite Valley.",nav:"Tenaya Lake / Olmsted Point",optional:true},
        {id:"1-valley",start:"09:00",end:"09:45",title:"Drive to Yosemite Valley",from:"Tioga Road",to:"Yosemite Valley",toAddress:"Yosemite Valley, CA",transport:"Rental car",travelTime:"~45 min",stay:"45 min",whatToDo:"Park once if possible.",status:"LOCKED IF OPEN",bookingStatus:"NOT NEEDED",next:"Valley highlights.",nav:"Yosemite Valley"},
        {id:"1-highlights",start:"09:45",end:"12:15",title:"El Capitan + Valley + Village",from:"Yosemite Valley",to:"Yosemite Village",transport:"Walk / local shuttle",travelTime:"Local",stay:"2h30",whatToDo:"Short walks and key highlights. No long hike.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Quick lunch.",nav:"Yosemite Village"},
        {id:"1-lunch",start:"12:15",end:"12:45",title:"Quick lunch",from:"Yosemite Valley",to:"Yosemite Village",transport:"Walk",travelTime:"0",stay:"30 min",whatToDo:"Packed lunch preferred.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Tunnel View.",nav:"Yosemite Village"},
        {id:"1-tunnel",start:"12:45",end:"14:15",title:"Buffer + Tunnel View",from:"Yosemite Valley",to:"Tunnel View",toAddress:"Tunnel View, Yosemite National Park, CA",transport:"Rental car",travelTime:"~15 min",stay:"1h30",whatToDo:"Tunnel View is the key final Yosemite stop. Cut buffer first if late.",status:"BUFFER",bookingStatus:"NOT NEEDED",next:"Start the long drive to Burbank.",nav:"Tunnel View"},
        {id:"1-burbank-drive",start:"14:15",end:"20:45",title:"Drive to Coast Burbank Hotel",from:"Tunnel View / Yosemite",to:"Coast Burbank Hotel",toAddress:"2011 W Olive Ave, Burbank, CA",transport:"Rental car",travelTime:"~6h+",stay:"6h30",whatToDo:"Hwy 41; dinner/fuel en route. LA traffic can add time.",status:"CAUTION",bookingStatus:"BOOKED",next:"Check in and sleep.",nav:"Coast Burbank Hotel"},
        {id:"1-sleep",start:"20:45",end:"21:15",title:"Check-in + sleep",from:"Coast Burbank",to:"Coast Burbank Hotel",transport:"Walk",travelTime:"0",stay:"30 min",whatToDo:"No late activity.",bookingStatus:"BOOKED",status:"BOOKED",next:"Sleep before Universal.",nav:"Coast Burbank Hotel"}
      ]
    },

    "2026-10-02": {
      date:"2026-10-02", day:"Fri", title:"Universal Studios Hollywood", city:"Los Angeles", heroImage:"canyon-bg.jpg",
      summary:"Full Universal day. Ticket is confirmed as purchased; verify date-specific hours close to the visit.",
      events:[
        {id:"2-transfer",start:"08:30",end:"10:00",title:"Breakfast + transfer/security to Universal",from:"Coast Burbank",to:"Universal Studios Hollywood",toAddress:"100 Universal City Plaza, Universal City, CA",transport:"Car / rideshare",travelTime:"~15–25 min",stay:"1h30",whatToDo:"Leave early, allow for security and target 10:00 opening.",bookingStatus:"BOOKED",status:"VERIFY HOURS",next:"Enter and start high-demand attractions.",nav:"Universal Studios Hollywood"},
        {id:"2-park-am",start:"10:00",end:"12:30",title:"Universal – morning block",from:"Universal entrance",to:"Universal Studios Hollywood",transport:"Walk / park transport",travelTime:"0",stay:"2h30",whatToDo:"Harry Potter, Studio Tour and key rides. Start high-demand attractions first.",bookingStatus:"BOOKED",status:"BOOKED",next:"Lunch inside the park.",nav:"Universal Studios Hollywood",anchor:true},
        {id:"2-lunch",start:"12:30",end:"13:15",title:"Lunch inside park",from:"Universal Studios Hollywood",to:"Universal food area",transport:"Walk",travelTime:"0",stay:"45 min",whatToDo:"Eat inside the park; do not leave the security zone.",bookingStatus:"NOT NEEDED",status:"LOCKED",next:"Second park block.",nav:"Universal Studios Hollywood"},
        {id:"2-park-pm",start:"13:15",end:"18:00",title:"Universal – second park block",from:"Universal Studios Hollywood",to:"Universal Studios Hollywood",transport:"Walk / park transport",travelTime:"0",stay:"4h45",whatToDo:"Use live wait times and finish core attractions by close.",bookingStatus:"NOT NEEDED",status:"LOCKED",next:"Early dinner at CityWalk / return to hotel.",nav:"Universal Studios Hollywood"},
        {id:"2-dinner",start:"18:00",end:"19:15",title:"Early dinner + return to hotel",from:"Universal CityWalk",to:"Coast Burbank",transport:"Car / rideshare",travelTime:"~15–25 min",stay:"1h15",whatToDo:"Skip HHN baseline; early sleep before the next drive.",bookingStatus:"NOT NEEDED",status:"LOCKED",next:"Sleep.",nav:"Coast Burbank Hotel"}
      ]
    },

    "2026-10-03": {
      date:"2026-10-03", day:"Sat", title:"Burbank → LAX Hotel", city:"Los Angeles / LAX", heroImage:"canyon-bg.jpg",
      summary:"Light LA morning, early lunch, long drive to the final LAX hotel and final packing.",
      events:[
        {id:"3-la",start:"08:00",end:"11:15",title:"Breakfast + Griffith + collect luggage",from:"Coast Burbank",to:"Griffith Observatory / Burbank",transport:"Rental car",travelTime:"~20 min each way",stay:"3h15",whatToDo:"One light LA stop only. Hotel checkout by 11:00.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Early lunch.",nav:"Griffith Observatory"},
        {id:"3-lunch",start:"11:15",end:"12:00",title:"Early lunch",from:"Burbank",to:"Burbank restaurant area",transport:"Car",travelTime:"Local",stay:"45 min",whatToDo:"Eat before I-15. Do not delay.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Drive to LAX hotel.",nav:"Burbank restaurant area"},
        {id:"3-drive",start:"12:00",end:"18:30",title:"Drive to Studio 6 Suites Los Angeles – LAX",from:"Burbank",to:"Studio 6 Suites Los Angeles - LAX",toAddress:"5101 W Century Blvd, Los Angeles, CA 90045",transport:"Rental car",travelTime:"~5–6h",stay:"6h30",whatToDo:"Saturday traffic; one planned stop. Preserve the early 4 Oct departure.",status:"CAUTION",bookingStatus:"BOOKED",next:"Check in and keep the final evening easy.",nav:"Studio 6 Suites Los Angeles - LAX"},
        {id:"3-final",start:"18:30",end:"20:30",title:"Check-in + easy final evening",from:"Studio 6 Suites LAX",to:"Studio 6 Suites LAX",transport:"Walk",travelTime:"0",stay:"2h",whatToDo:"Pack for the early LAX→LAS drive.",booking:"Booking.com",bookingStatus:"BOOKED",status:"BOOKED",next:"Sleep early.",nav:"Studio 6 Suites Los Angeles - LAX"}
      ]
    },

    "2026-10-04": {
      date:"2026-10-04", day:"Sun", title:"LAX → Las Vegas → Rental Return", city:"Las Vegas", heroImage:"canyon-bg.jpg",
      summary:"Very early departure from the LAX hotel, direct I-15 drive to LAS and rental return at 14:00 pending final confirmation.",
      events:[
        {id:"4-checkout",start:"05:30",end:"06:00",title:"Early checkout + depart",from:"Studio 6 Suites LAX",to:"I-15 north",transport:"Rental car",travelTime:"0",stay:"30 min",whatToDo:"Check out very early; breakfast/snack in the car.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Drive directly to Las Vegas.",nav:"Studio 6 Suites Los Angeles - LAX"},
        {id:"4-drive",start:"06:00",end:"11:00",title:"Drive directly to Las Vegas Airport / Alamo",from:"LAX hotel",to:"Harry Reid Rent-A-Car Center",toAddress:"7135 Gilespie St, Las Vegas, NV 89119",transport:"Rental car",travelTime:"~4h30–5h",stay:"5h",whatToDo:"I-15 north; allow one fuel/rest stop and traffic buffer.",status:"LOCKED",bookingStatus:"NOT NEEDED",next:"Arrive early and refuel if needed.",nav:"Harry Reid Rent-A-Car Center"},
        {id:"4-return",start:"11:00",end:"14:00",title:"Buffer + rental return at Alamo",from:"LAS rental center area",to:"Alamo – LAS Rent-A-Car Center",toAddress:"7135 Gilespie St, Las Vegas, NV 89119",transport:"Rental car",travelTime:"0",stay:"3h",whatToDo:"Arrive early, refuel, return vehicle at 14:00, keep receipt and photos.",booking:"Alamo",bookingStatus:"TIME PENDING",status:"PENDING ALAMO CONFIRMATION",next:"Get written confirmation that the requested 14:00 return time is accepted.",nav:"LAS Rent-A-Car Center",anchor:true}
      ]
    }
  }
};

// Flattened convenience view for apps that expect an array.
APP_DATA.itinerary = Object.values(APP_DATA.days).flatMap(day =>
  day.events.map(event => ({ ...event, date: day.date, day: day.day, dayTitle: day.title, city: day.city }))
);
APP_DATA.dayList = Object.values(APP_DATA.days);
APP_DATA.dates = Object.keys(APP_DATA.days);

// Compatibility aliases for older app.js versions.
window.APP_DATA = APP_DATA;
window.appData = APP_DATA;
window.TRIP_DATA = APP_DATA;
window.tripData = APP_DATA;
window.ITINERARY_DATA = APP_DATA;
window.itineraryData = APP_DATA;
window.itinerary = APP_DATA.itinerary;
window.DAYS = APP_DATA.days;
window.days = APP_DATA.days;

if (typeof console !== "undefined") {
  console.log("GO-USA app-data loaded:", APP_DATA.dates.length, "days", APP_DATA.itinerary.length, "events");
}
