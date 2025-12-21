export type Project = {
    title: string;
    category: string[];
    description: string;
    period: string;
    tech: string[];
    image: string;

    figmaLink?: string;
    githubLink?: string;
    youtubeLink?: string;
    externalLink?: string;
};

export const projectsData: Record<string, Project> = {
    clean_up: {
        title: "Clean Up Community App",
        category: ["Mobile Application", "UI/UX"],
        description: "Designed the UI/UX and developed a mobile application for organizing and discovering beach cleanup events, featuring an interactive map, event filtering by date, location, and type, and detailed event information.",
        period: "Oct 2024 - Ongoing",
        tech: ["Flutter", "Dart","Firebase", "Google Maps API", "Xcode","Android Studio","Figma","Adobe XD"],
        image: "/projects/cleanup_community_app_demo.png",
        figmaLink: "https://www.figma.com/community/file/1310540442867602574/cleanup-community-app",
        githubLink: "https://github.com/aafiqah/clean_up_community_app",
    },

    kad_pekerja: {
        title: "Kad Pekerja Madani Digital App",
        category: ["Mobile Application"],
        description: "Kad Pekerja Madani is a digital mobile application developed to support the Madani initiative by providing workers with secure digital identification and access to employment-related services.",
        period: "Oct 2025 – Nov 2025",
        tech: ["Flutter", "Dart", "Xcode", "Android Studio", "Postman"],
        image: "/projects/kad_pekerja_1.png",
    },
  
    pcari_booking: {
        title: "Pcari Booking App",
        category: ["Mobile Application"],
        description: "Pcari Booking is a mobile application designed to streamline the process of booking and managing appointments for various services.",
        period: "Sept 2024 - June 2025",
        tech: ["Flutter", "Dart", "Google Maps API","Xcode", "Android Studio", "Postman"],
        image: "/projects/pcari_booking_demo.png",
    },

    pcari_connect: {
        title: "Pcari Connect App",
        category: ["Mobile Application"],
        description: "Pcari Connect is a mobile application that facilitates seamless communication and connection between service providers and customers, enhancing user experience through real-time updates and notifications.",
        period: "Feb 2024 - June 2025",
        tech: ["Flutter", "Dart", "Google Maps API","Xcode", "Android Studio", "Postman"],
        image: "/projects/pcari_booking_demo.png",
    },

    week_habit: {
        title: "Week Habit UI/UX",
        category: ["UI/UX"],
        description: "A UI/UX design project focused on fostering positive weekly habits through a mobile application that helps users cultivate and track healthy routines over time.",
        period: "Aug 2023 - Sept 2023",
        tech: ["Figma", "Adobe XD", "Adobe Illustrator"],
        image: "/projects/weekhabit_demo.png",
        figmaLink: "https://www.figma.com/community/file/1310555917425548448/weekhabit-tracker-app",
    },

    personal_website_v1:{
        title: "Personal Website V1",
        category: ["Website"],
        description: "My first personal website built using Jekyll and hosted on GitHub Pages, serving as an online portfolio and digital representation of my professional journey.",
        period: "4 Nov 2023",
        tech: ["Jekyll", "SCSS", "JavaScript", "HTML", "GitHub Pages"],
        image: "/projects/v1_demo.png",
        githubLink: "https://github.com/aafiqah/aafiqah.github.io",
        externalLink: "https://aafiqah.github.io/",
    },
     
    personal_website_v2:{
        title: "Personal Website V2",
        category: ["Website"],
        description: "The second iteration of my personal website built with Gatsby and hosted on Netlify.",
        period: "24 Nov 2023",
        tech: ["Gatsby", "React", "Netlify"],
        image: "/projects/v2_demo.png",
        githubLink:"https://github.com/aafiqah/v2",
        externalLink:"https://alessaafiqahjohar.netlify.app/",
    },

    local_account:{
        title: "Local Account System",
        category: ["Desktop Application"],
        description: "A freelance desktop application designed to manage local accounting operations, including profit tracking, cash flow monitoring, supplier data management, and report generation.",
        period: "Aug 2022",
        tech: ["Java", "NetBeans", "MySQL", "phpMyAdmin"],
        image: "/projects/local_account_demo.png",
    },

    the_hub_app:{
        title: "The HUB App",
        category: ["Mobile Application"],
        description: "A cross-platform Android application that helps users easily order their food and beverages with accuracy and in a faster way.",
        period: "Apr 2021 - May 2021",
        tech: ["Java", "MySQL", "Firebase", "Android Studio"],
        image: "/projects/hub_app_demo.png",
    },

    smile_to_pay:{
        title: "Smile To Pay App",
        category: ["Mobile Application"],
        description: "A cross-platform Android application provides online transaction authentication by using a smile and face recognition.",
        period: "Nov 2021 – April 2022",
        tech: ["Java", "MySQL", "Firebase", "Android Studio"],
        image: "/projects/smile_to_pay_demo.png",
    },

    class_attendance_face_recognition:{
        title: "Class Attendance Using Face Recognition System",
        category: ["Desktop Application"],
        description: "A face recognition–based class attendance system developed as a solo diploma final year project, designed and completed within four months.",
        period: "Sept 2019 - Dec 2019",
        tech: [ "Java", "NetBeans", "MySQL", "phpMyAdmin", "Haar Cascade Classifier"],
        image: "/projects/class_face_demo.png",
        githubLink: "https://github.com/aafiqah/class_attendance",
        youtubeLink: "https://www.youtube.com/embed/uP9MlDTOUzs",
    },

    face_mask_detection:{
        title: "Face Mask Detection and Alert Message System",
        category: ["Desktop Application"],
        description: "A desktop application built using Python and TensorFlow to detect face masks, developed in an agile team of four for a digital image processing subject.",
        period: "Apr 2021 - May 2021",
        tech: ["Python", "PyCharm", "QT Designer", "Tensorflow", "Keras", "OpenCV"],
        image: "/projects/face_mask_demo.png",
        githubLink: "https://github.com/aafiqah/face_mask_detection",
        youtubeLink: "https://www.youtube.com/embed/cEa_2xrp7Aw",
    },

    medicine_halal_verification:{
        title: "Advanced Medicine Halal Verification App",
        category: ["Mobile Application"],
        description: "A cross-platform Android application that allows users to easily detect halal medicine, access registration status, and report any issues, fostering a safer and more transparent healthcare environment.",
        period: "Oct 2020 - June 2021",
        tech: ["Java", "MySQL", "Firebase", "Android Studio"],
        image: "/projects/medicine_halal_demo.png",
        githubLink: "https://github.com/aafiqah/advanced_medicine_halal",
        youtubeLink: "https://www.youtube.com/embed/mvzK-22mIq4",
    },

    bookstore:{
        title: "Bookstore System",
        category: ["Desktop Application"],
        description: "A desktop-based bookstore system featuring authentication, product listings, cart, and payment flow, developed collaboratively with a team of four.",
        period: "May 2020",
        tech: ["Java", "NetBeans", "MySQL", "phpMyAdmin"],
        image: "/projects/bookstore_online_demo.png",
    },
};

