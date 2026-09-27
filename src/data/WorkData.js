export const BodAsData = [
  {
    title: "BodAs Frontend",
    desc: "Designed and implemented a modern web application as the new frontend for BodAs.",
    tech: ["AngularJS", "Angular Material", "Leaflet", "ngx-charts"],
    gitlink: "//github.com/TillDetermann/BodAsFrontend",
    site: "//",
  },
  {
    title: "Bearing App",
    desc: "Created an Android application for warehouse use to support logistics and inventory management.",
    tech: ["Java", "Android Studio", "Volley"],
    gitlink: "//github.com/TillDetermann/AndroidLagerApp",
    site: "//",
    description:
      "Mobile stock management application for industrial warehouse operations. Enables seamless photo documentation with barcode scanning, optimized for unstable WLAN environments with robust local storage and secure TCP transmission.",

    techStack: [
      {
        category: "Frontend",
        items: [
          "Java",
          "Android Studio 2024.4.1",
          "XML",
          "Material Design",
          "OkHttp",
        ],
      },
      {
        category: "Backend",
        items: ["C#", ".NET Framework", "TCP Protocol", "Visual Studio 2022"],
      },
      {
        category: "Infrastructure",
        items: ["Windows File System", "Local Storage", "WLAN"],
      },
    ],

    keyFeatures: [
      {
        icon: "📷",
        title: "Photo Capture & Compression",
        desc: "Camera integration with intelligent compression algorithms for bandwidth efficiency",
      },
      {
        icon: "🔢",
        title: "Barcode Scanning",
        desc: "Integrated barcode reader with input validation and pattern checking",
      },
      {
        icon: "🔐",
        title: "Secure Transfer",
        desc: "TCP-based secure transmission with error handling and verification",
      },
      {
        icon: "📂",
        title: "Smart Organization",
        desc: "Automatic folder structure by department (warehouse, office, workshop)",
      },
      {
        icon: "⚡",
        title: "Offline-First",
        desc: "Local image storage independent of app status for reliability",
      },
      {
        icon: "🎛️",
        title: "Remote Configuration",
        desc: "Server-side parameter management (compression, package size, storage paths)",
      },
    ],
    challenges: [
      {
        problem: "Unstable WLAN Environment",
        solution:
          "Implemented robust offline storage and queued transmission with retry logic to ensure reliable operation in poor connectivity conditions",
      },
      {
        problem: "Large Image Handling",
        solution:
          "Configurable compression rates and efficient gallery loading via pagination to handle high-resolution camera captures",
      },
      {
        problem: "Workflow Enforcement",
        solution:
          "State management preventing photo transfer without valid barcode entry, ensuring data integrity and proper documentation",
      },
    ],
    implementation: {
      architecture:
        "Three-tier structure: UI Layer (XML), Business Logic (Activities), Utility Classes (Adapter, Proxy, StorageManager)",
      highlights: [
        "Main Activity orchestrates image capture, compression pipeline, and TCP transmission with sophisticated state management",
        "StorageManager abstracts file system operations for platform independence and flexibility",
        "Proxy pattern for server communication with configurable endpoints and automatic retry mechanisms",
        "Adaptive UI layout tailored to various device specifications and screen sizes",
      ],
    },
    references: [
      {
        category: "Source Code Repository",
        items: [{ name: "GitHub", link: "https://github.com/" }],
      },
      {
        category: "Official Documentation",
        items: [
          { name: "Java", link: "https://docs.oracle.com/javase/" },
          {
            name: "C#",
            link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
          },
          { name: ".NET", link: "https://learn.microsoft.com/en-us/dotnet/" },
          { name: "OkHttp", link: "https://square.github.io/okhttp/" },
        ],
      },
    ],
  },
  {
    title: "BodAs Simulation Tools",
    desc: "Developed simulation tools to verify BodAs functionality via CAN telegrams.",
    tech: ["C#", ".NET", "CAN", "XAML"],
    gitlink: "//github.com/TillDetermann/BodAs-PumpEmulation",
    site: "//...",
    title: "BODAS Pump Emulation",
    desc: "A program that simulates the behavior of a hydraulic air pump and its control unit in order to test the reaction of the BodAs safety software.",
    tech: ["C#", "WPF", "OxyPlot"],
    gitlink: "https://github.com/",
    site: "",
    description:
      "A flexible and portable test environment program that simulates hydraulic air pump behavior and control units without requiring physical hardware setup. The project integrates a WPF-based UI interface for user simulation and C# logic for pump behavior simulation, enabling continuous communication with the BodAs safety software through CAN telegrams.",

    techStack: [
      {
        category: "Frontend",
        items: [
          "WPF (Windows Presentation Foundation)",
          "OxyPlot",
          "XAML",
          "Toggle View Pattern",
        ],
      },
      {
        category: "Backend",
        items: [
          "C#",
          ".NET Framework",
          "BodasSockets",
          "Multithreading",
          "CAN Protocol",
        ],
      },
      {
        category: "Infrastructure",
        items: ["Visual Studio 2022", "MVVM Design Pattern", "CSV File System"],
      },
    ],

    keyFeatures: [
      {
        icon: "🔧",
        title: "Pump Modeling",
        desc: "Complete modeling of pump with valves and pressure relief behavior for accurate simulation",
      },
      {
        icon: "📡",
        title: "CAN Communication",
        desc: "Communication via CAN telegrams with the safety software BodAs for real-time data exchange",
      },
      {
        icon: "📊",
        title: "Dual View Interface",
        desc: "Toggle view enabling both status view and graph view with pressure development visualization",
      },
      {
        icon: "⚡",
        title: "Parallel Processing",
        desc: "Multithreading architecture for encapsulated parallel execution of pump logic components",
      },
    ],

    challenges: [
      {
        problem: "Complex Pump Simulation",
        solution:
          "Implemented detailed modeling of pump valves and pressure relief behavior using multithreaded C# logic to accurately simulate real hardware behavior",
      },
      {
        problem: "Real-time Communication",
        solution:
          "Integrated BodasSockets for CAN telegram communication with safety software, enabling constant real-time data exchange and verification",
      },
      {
        problem: "UI Overload Prevention",
        solution:
          "Designed toggle view system switching between status view and graph view to display comprehensive data without overwhelming the interface",
      },
    ],

    implementation: {
      architecture:
        "MVVM (Model View ViewModel) design pattern with three distinct layers: View (WPF UI), ViewModel (data binding and logic coordination), and Model (pump logic, communication, and processing)",
      highlights: [
        "ViewModel handles bidirectional data exchange between View and Model, managing all UI-related logic and state management",
        "Model layer includes multiple parallel components: socket communication handler, thread manager, CAN telegram factory, and core pump logic",
        "CAN telegram mapping to C# data structures (API typesetting) for type-safe communication with BodAs safety software",
      ],
    },

    references: [
      {
        category: "Source Code Repository",
        items: [{ name: "GitHub", link: "https://github.com/" }],
      },
      {
        category: "Official Documentation",
        items: [
          {
            name: "C#",
            link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
          },
          { name: ".NET", link: "https://learn.microsoft.com/en-us/dotnet/" },
          {
            name: "WPF",
            link: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/",
          },
          { name: "Oxyplot", link: "https://oxyplot.github.io/" },
        ],
      },
    ],
  },
];

export const AiAgentData = [
  {
    title: "Mini Unsplash",
    desc: "A platform that allows you to enjoy the beauty of high-quality imagery right at your fingertips",
    tech: ["Vue.js", "APIs", "Sass", "Axios"],
    gitlink: "",
    site: "//mini-unsplash-clone.vercel.app/",
  },
];

export const RenewableData = [
  {
    title: "Sunflower Web App",
    desc: "A comprehensive web application for planning and simulating solar thermal power plants with advanced visualization and optimization result analysis.",
    tech: ["Angular", "Angular Material", "Leaflet", "ngx-charts"],
    gitlink: "https://github.com/",
    site: "",
    description:
      "Web-based platform designed for planning and simulating solar thermal power plants. Features an interactive dashboard for visualizing power plant distributions on a geospatial map, along with sophisticated optimization result displays. The application enables users to efficiently manage project data through filtering, import/export capabilities, and comprehensive performance analysis through hierarchical visualization and efficiency heat maps.",

    techStack: [
      {
        category: "Frontend Framework",
        items: ["Angular", "Angular Material UI Library", "TypeScript", "RxJS"],
      },
      {
        category: "Visualization Libraries",
        items: ["Leaflet", "ngx-charts", "Tailwind CSS"],
      },
      {
        category: "Infrastructure",
        items: ["Node.js", "NPM/Yarn", "Responsive Web Design"],
      },
    ],

    keyFeatures: [
      {
        icon: "📊",
        title: "Dynamic Dashboard",
        desc: "Project-specific data retrieved and processed from backend with dynamic filtering and structured visualization capabilities",
      },
      {
        icon: "📥",
        title: "Import/Export Functionality",
        desc: "Comprehensive data management enabling users to upload new project datasets and export existing data for external analysis",
      },
      {
        icon: "📈",
        title: "Hierarchical Visualization",
        desc: "Complete plotting of all hierarchy levels providing comprehensive overview of system structure and component relationships",
      },
    ],

    challenges: [
      {
        problem: "Complex Data Visualization",
        solution:
          "Integrated multiple specialized libraries (Leaflet for maps, ngx-charts for data visualization) with a cohesive Angular architecture to handle diverse visualization requirements",
      },
      {
        problem: "Real-time Backend Data Processing",
        solution:
          "Designed data architecture with RxJS observables for efficient retrieval, transformation, and reactive updates of project-specific data from backend systems",
      },
    ],

    implementation: {
      architecture:
        "Angular-based SPA (Single Page Application) with Material Design UI, featuring reactive data flows and modular component structure for dashboard and result visualization",
      highlights: [
        "Dynamic dashboard component retrieving and processing backend project data with real-time filtering capabilities for user-driven customization",
        "Interactive Leaflet-based world map component visualizing geographic distribution of solar thermal power plants using coordinate-based location mapping",
        "Import/export functionality allowing users to upload new project datasets and export existing data for external analysis and documentation",
        "Heat map visualization using color gradients to represent efficiency values at each hierarchy level for performance comparison",
        "RxJS-based reactive data management for efficient state management and real-time dashboard updates",
      ],
      dashboardAndVisualization: {
        dataPreparation:
          "Backend-driven project-specific data aggregation and transformation enabling dynamic filtering and real-time dashboard updates",
        filterableDisplay:
          "Advanced filtering mechanisms allowing users to sort, search, and customize project data visualization based on multiple criteria",
        worldMap:
          "Geospatial visualization component displaying power plant locations on an interactive Leaflet map for geographic overview and analysis",
        dataManagement:
          "Comprehensive import and export functionality for projects enabling data portability, backup, and external integration",
        heatmapVisualization:
          "Multi-level optimization results displayed through color-coded heat maps showing efficiency metrics per level, with gradient-based intensity representation for quick visual analysis",
      },
    },
    references: [
      {
        category: "Source Code Repository",
        items: [{ name: "GitHub", link: "https://github.com/" }],
      },
      {
        category: "Official Documentation",
        items: [
          { name: "Angular", link: "https://angular.io/docs" },
          { name: "Angular Material", link: "https://material.angular.io/" },
          { name: "LeafletJS", link: "https://leafletjs.com/" },
          {
            name: "ngx-chartts",
            link: "https://swimlane.gitbook.io/ngx-charts/",
          },
        ],
      },
    ],
  },
];
