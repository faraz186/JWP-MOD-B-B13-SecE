// Ternary Operator (alternate if else statement)

let age = 18;
let gender = "female";


let check = age >= 18 ?

    gender === "male" ?

        "allowed" : "not allowed" :

    "age not match";

console.log(check)


if (age >= 18) {
    if (gender === "male") {
        console.log("allowed..")
    }
    else {
        console.log("not allowed")
    }
}
else {
    console.log("age not match")
}


let check = age >= 18 ? "allowed.." :
    "not allowed..";



console.log(check)

if (age >= 18) {
    console.log("allowed..")
}
else {
    console.log("not allowed..")
}

    let marks = 32;

    let check = marks >= 33 && marks <= 50 ? console.log('C Grade') :
        marks >= 51 && marks <= 60 ? console.log('B Grade') :
            marks >= 61 && marks <= 70 ? console.log('A Grade') :
                marks >= 71 && marks <= 90 ? console.log('A+ Grade') : console.log('Failed..')



    // Short Circuit

    // let a = 1; // true
    // let a = 0; // false
    // let a = undefined; false
    // let a = null; false
    // let a = ""; false
    // let a = " " true
    // let a = true;
    // let a = false; false


    if (a) {
        console.log("true")
    }
    else {
        console.log("false")

    }


    console.log("" && "faraz");

    let age = "20";

    let check = age === 20 &&

        "allowed";

    console.log(check)


    let marks = 32;

    if (marks >= 33 && marks <= 50) {
        console.log("c grade..")
    }


    console.log(0 || 0);

    let a = 2;

    let exp = "faraz" + true && undefined && (false + 6);


    console.log(exp)

    //      Destructing of Array

    let [, ele2, ele3, ele4, ele5] = ["faraz", "farooq", "adil", "ali", "ahmed"];

    let [ele1, ele2, ele3, ele4, ele5] = arr

    console.log(ele2, ele3, ele4, ele5);

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);



    //      Destructing of Object

    let obj = {
        name: "faraz",
        city: "karachi",
        email: "faraz@gmail.com"
    }

    obj.school = "Jawan Pakistan"

    console.log(obj)


    function foo({ name, city }) {
        console.log(name, city)
    }

    foo({ name: "faraz", city: "karachi" })

    let obj = {
        name: "faraz",
        city: "karachi",
        email: "faraz@gmail.com"
    }

    let [va1, val2, val3] = Object.values(obj);

    console.log(Object.freeze(obj))


    for (var key in obj) {
        console.log(obj[key])
    }


// Assignment 2 nested Object data



    var mobiles = {
  iphone: {
    iphone7: {
      processor: "Snapdragon 8 Gen 2",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: 200,
          ultrawide: 12,
          telephoto: 10,
          telephotoPeriscope: 10,
        },
        front: 10,
      },
      battery: 5000,
      operatingSystem: "Android 13",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone8: {
      processor: "Snapdragon 12 Gen 5",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: 180,
          ultrawide: 15,
          telephoto: 10,
          telephotoPeriscope: 20,
        },
        front: 12,
      },
      battery: 8000,
      operatingSystem: "iphone 8",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone8plus: {
      processor: "Snapdragon 5 Gen 6",
      memory: {
        ram: 8,
        storage: 128,
      },
      camera: {
        rear: {
          main: 160,
          ultrawide: 18,
          telephoto: 10,
          telephotoPeriscope: 8,
        },
        front: 16,
      },
      battery: 5000,
      operatingSystem: "iphone 8",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphoneX: {
      processor: "Snapdragon 5 Gen 4",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: 130,
          ultrawide: 16,
          telephoto: 10,
          telephotoPeriscope: 18,
        },
        front: 14,
      },
      battery: 6000,
      operatingSystem: "iphone X",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone11: {
      processor: "Snapdragon 7 Gen 9",
      memory: {
        ram: 16,
        storage: 512,
      },
      camera: {
        rear: {
          main: 150,
          ultrawide: 24,
          telephoto: 16,
          telephotoPeriscope: 10,
        },
        front: 20,
      },
      battery: 10000,
      operatingSystem: "iphone 11",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
  },
  xiomi: {
    redmiA2: {
      modelName: "Mi 12 Pro",
      display: {
        size: 6.73,
        resolution: "3200 x 1440",
        panelType: "AMOLED",
        refreshRate: 120,
      },
      processor: "Snapdragon 8 Gen 1",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 4600,
      operatingSystem: "Android 12",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
    redmi10: {
      modelName: "Mi 8 Pro",
      display: {
        size: 5.73,
        resolution: "3000 x 1320",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      processor: "Snapdragon 7 Gen 5",
      memory: {
        ram: 12,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 5000,
      operatingSystem: "Android 11",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi11: {
      modelName: "Mi 14 Pro",
      display: {
        size: 6.0,
        resolution: "3000 x 1240",
        panelType: "AMOLED",
        refreshRate: 150,
      },
      processor: "Snapdragon 8 Gen 4",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 8000,
      operatingSystem: "Android 12",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi12: {
      modelName: "Mi 12 Pro",
      display: {
        size: 7.4,
        resolution: "3200 x 1440",
        panelType: "AMOLED",
        refreshRate: 180,
      },
      processor: "Snapdragon 12 Gen 1",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 8000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi13: {
      modelName: "Mi 14 Pro",
      display: {
        size: 8.03,
        resolution: "4200 x 1540",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      processor: "Snapdragon 8 Gen 6",
      memory: {
        ram: 12,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 10000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi13C: {
      modelName: "Mi 14 Pro",
      display: {
        size: 8.43,
        resolution: "4200 x 1340",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      processor: "Snapdragon 9 Gen 5",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 10000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
  },
  realme: {
    realmiNote50: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "6.5 inches",
        resolution: "FHD+ (1080 x 2400 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
      memory: {
        ram: "8GB",
        storage: "128GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "16MP",
        },
      },
      battery: {
        capacity: "5000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmiC67: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "6.7 inches",
        resolution: "FHD+ (1280 x 2100 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
      memory: {
        ram: "8GB",
        storage: "256GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "14MP",
        },
      },
      battery: {
        capacity: "5000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 11",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmiC53: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "7. 1inches",
        resolution: "FHD+ (1180 x 2500 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
      memory: {
        ram: "12GB",
        storage: "128GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "18MP",
        },
      },
      battery: {
        capacity: "8000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmi9: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "7.2 inches",
        resolution: "FHD+ (1180 x 2200 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
      memory: {
        ram: "12GB",
        storage: "256GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "24MP",
        },
      },
      battery: {
        capacity: "10000mAh",
        fastCharging: "75W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmi9i: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "6.9 inches",
        resolution: "FHD+ (1480 x 2400 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
      memory: {
        ram: "12GB",
        storage: "512GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "16MP",
        },
      },
      battery: {
        capacity: "2000mAh",
        fastCharging: "70W",
      },
      operatingSystem: "Android 13",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
  },
  samsung: {
    samsung_Galaxy_S24: {
      brand: "Samsung",
      model: "Galaxy S24 Ultra", // Replace with specific model

      // Display
      displaySize: 6.8, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 8 Gen 2", // Replace with actual processor
      ram: 12, // GB
      storage: 512, // GB

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 5000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      os: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S51: {
      brand: "Samsung",
      model: "Galaxy S51 Pro", // Replace with specific model

      // Display
      displaySize: 7.2, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 9 Gen 4", // Replace with actual processor
      ram: 8, // GB
      storage: 256, // GB

      // Cameras
      rearCamera: {
        megapixel: 112,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 8000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      os: "Android 11",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_Prime: {
      brand: "Samsung",
      model: "Galaxy Prime Ultra", // Replace with specific model

      // Display
      displaySize: 7.4, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 8 Gen 10", // Replace with actual processor
      ram: 8, // GB
      storage: 256, // GB

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 5000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      os: "Android 13",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S46: {
      brand: "Samsung",
      model: "Galaxy S46 Ultra", // Replace with specific model

      // Display
      displaySize: 5.11, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 8 Gen 2", // Replace with actual processor
      ram: 12, // GB
      storage: 512, // GB

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 20000, // mAh
      fastCharging: "65W Super Fast Charging",

      // Operating System
      os: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S77: {
      brand: "Samsung",
      model: "Galaxy S77 Ultra", // Replace with specific model

      // Display
      displaySize: 8.5, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 12 Gen 24", // Replace with actual processor
      ram: 12, // GB
      storage: 512, // GB

      // Cameras
      rearCamera: {
        megapixel: 158,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 20000, // mAh
      fastCharging: "85W Super Fast Charging",

      // Operating System
      os: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: true,
    },
  },
};
