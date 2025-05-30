// Create components for each section of the CV
// CV Section components

// Header component for contact information
export const Header = () => {
  return (
    <header className="text-center py-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <h1 className="text-4xl font-bold mb-2">ELABBAS SALAH</h1>
      <h2 className="text-xl mb-4">Senior Software Engineer</h2>
      <div className="flex justify-center flex-wrap gap-4 text-sm">
        <p>Wolfgang-Brumme-Alle 13, 71034 Böblingen, Stuttgart, Germany</p>
        <p>
          <a href="tel:+4917672163785" className="hover:underline">(+49) 176-7216-3785</a>
        </p>
        <p>
          <a href="mailto:abassalah92@gmail.com" className="hover:underline">abassalah92@gmail.com</a>
        </p>
        <p>
          <a href="https://github.com/ELabbassalah56" className="hover:underline" target="_blank" rel="noopener noreferrer">GitHub: ELabbassalah56</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/elabbas-salah-hatata-442743179" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn: elabbas-salah-hatata-442743179</a>
        </p>
      </div>
    </header>
  );
};

// Summary component
export const Summary = () => {
  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-800 pb-2">PROFESSIONAL SUMMARY</h2>
        <p className="text-gray-700 leading-relaxed">
          Results-driven Software Engineer with 4+ years of specialized experience in automotive software integration, focusing on Adaptive AUTOSAR and Classic AUTOSAR architectures. Successfully delivered complex software solutions for premium automotive clients including Mercedes-Benz and Stellantis Group, reducing integration time by 30% and improving system reliability. Expert in QNX and Linux environments with advanced C++ development skills and deep understanding of automotive software architecture. Passionate about delivering high-quality, innovative solutions that meet rigorous industry standards while driving technological advancement in automotive systems.
        </p>
      </div>
    </section>
  );
};

// Experience component
export const Experience = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-800 pb-2">PROFESSIONAL EXPERIENCE</h2>
        
        {/* VECTOR Informatik */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">VECTOR Informatik (Contract)</h3>
            <p className="text-gray-600 italic">Stuttgart, Germany | Apr 2023 - Present</p>
          </div>
          <p className="font-semibold text-blue-700 mb-2">SENIOR SOFTWARE ENGINEER - Adaptive AUTOSAR | PES8</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Led integration of Adaptive MICROSAR into Mercedes-Benz and Stellantis Group projects, reducing deployment time by 25% through optimized workflows</li>
            <li>Provided expert consultation on architecture, implementation, and integration strategies, resolving 40+ critical technical challenges for key customers</li>
            <li>Configured and optimized Adaptive MICROSAR modules, improving system performance by 15% across communication and diagnostic services</li>
            <li>Developed and implemented Modern C++ enhancements to Vector's BSW components, ensuring 100% compatibility with customer software requirements</li>
            <li>Debugged complex issues in Adaptive MICROSAR communications, diagnostics, and OS behavior in QNX and Linux systems, reducing critical bugs by 35%</li>
            <li>Conducted in-depth QNX system analysis using Momentics and command-line tools, creating comprehensive documentation that improved team troubleshooting efficiency</li>
            <li>Participated in multiple Mercedes-Benz technical workshops, contributing to architectural decisions and implementation strategies</li>
            <li>Implemented Agile methodologies that improved team velocity by 20% and enhanced cross-functional collaboration</li>
          </ul>
        </div>
        
        {/* Valeo - Standard Software Engineer */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Valeo</h3>
            <p className="text-gray-600 italic">Cairo, Egypt | Oct 2021 - Apr 2023</p>
          </div>
          <p className="font-semibold text-blue-700 mb-2">STANDARD SOFTWARE ENGINEER - Classic AUTOSAR | V-Core</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Analyzed and implemented software requirements for multiple AUTOSAR projects, achieving 100% compliance with specifications</li>
            <li>Integrated, configured, and tested AUTOSAR stacks (Diagnostic, Communication, Memory, Mode management, Network management), reducing integration issues by 30%</li>
            <li>Specialized in configuration and integration of AUTOSAR Ethernet Stack, improving network performance by 25%</li>
            <li>Applied UDS protocol [ISO 14229-1] expertise to enhance diagnostic capabilities across multiple vehicle platforms</li>
            <li>Implemented MISRA-C rules and Valeo naming conventions, achieving 95% compliance in code quality metrics</li>
            <li>Developed expertise in AUTOSAR E2E protocols, particularly VW E2E, ensuring data integrity across communication channels</li>
            <li>Created automation scripts using Vector tools and Python that reduced configuration and testing time by 40%</li>
            <li>Contributed to A-SPICE L2 deployment, helping the team achieve certification on schedule</li>
            <li>Utilized Agile workflow to improve team collaboration and project delivery timelines</li>
          </ul>
        </div>
        
        {/* Valeo - Intern Software Engineer */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Valeo</h3>
            <p className="text-gray-600 italic">Cairo, Egypt | Nov 2020 - Aug 2021</p>
          </div>
          <p className="font-semibold text-blue-700 mb-2">INTERN SOFTWARE ENGINEER - Adaptive AUTOSAR | Geeds</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Gained comprehensive knowledge of Adaptive AUTOSAR workflow (development, integration, deployment)</li>
            <li>Developed understanding of Service-oriented Architecture concepts and implementation strategies</li>
            <li>Built expertise in service UCM sub-module, Centralized service UCM-Master and Fundamental Stack (ara::Com, ara::EXEC)</li>
            <li>Applied knowledge of Yocto Project, Qemu, and POSIX to create development environments</li>
            <li>Utilized Linux commands and OS concepts to troubleshoot and optimize system performance</li>
            <li>Implemented SOME/IP communication protocols for inter-process communication</li>
          </ul>
        </div>
        
        {/* MasterTechCo */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">MasterTechCo</h3>
            <p className="text-gray-600 italic">Alexandria, Egypt | Jul 2020 - Sep 2020</p>
          </div>
          <p className="font-semibold text-blue-700 mb-2">INTERN ELECTRONICS ENGINEER</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Restructured various machines including CNC, shellers, servers, Cisco Centrals, and Cisco cell phones</li>
            <li>Designed relevant circuits for ECUs, improving functionality and reliability</li>
            <li>Implemented power supplies for small and critical control circuits, ensuring stable operation</li>
          </ul>
        </div>
        
        {/* Sprints */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Sprints (Mentorship by Vodafone UK)</h3>
            <p className="text-gray-600 italic">Cairo, Egypt | Jul 2020 - Aug 2020</p>
          </div>
          <p className="font-semibold text-blue-700 mb-2">INTERN DEVOPS ENGINEER</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Trained on CI/CD technologies and best practices</li>
            <li>Utilized Docker, Git, Jenkins, and bash scripts to automate development workflows</li>
            <li>Successfully implemented a CI/CD pipeline for the Sprints School Platform, reducing deployment time by 50%</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Projects component
export const Projects = () => {
  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-800 pb-2">KEY PROJECTS</h2>
        
        {/* IDC Project */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">IDC Project - Mercedes-Benz</h3>
            <p className="text-gray-600 italic">Stuttgart, Germany | Nov 2023 - Present</p>
          </div>
          <p className="font-semibold text-blue-700 mb-2">AUTOMOTIVE PROJECT</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Integrated and tested all IDC applications on new Adaptive Platform from Vector, ensuring 100% compatibility</li>
            <li>Analyzed and adapted 30+ patches applied to Vector delivery, resolving integration conflicts and improving system stability</li>
            <li>Developed comprehensive testing methodology for all integrated systems, validating behavior across multiple variants</li>
            <li>Created detailed analysis documentation for each release, highlighting new features and improvements</li>
            <li>Resolved 25+ critical bugs related to Adaptive MICROSAR and applications, improving system reliability</li>
            <li>Conducted knowledge-sharing sessions on new features and troubleshooting techniques for QNX and Adaptive MICROSAR</li>
            <li><strong>Impact:</strong> Reduced integration time by 30% while improving system reliability by 25%, directly contributing to on-time project delivery</li>
          </ul>
        </div>
        
        {/* RTCU Project */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">RTCU Project - STLA Groups</h3>
            <p className="text-gray-600 italic">Stuttgart, Germany | Apr 2023 - Nov 2023</p>
          </div>
          <p className="font-semibold text-blue-700 mb-2">AUTOMOTIVE PROJECT</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Successfully migrated MICROSAR project from TACO CMake to Yocto compatibility, creating qemuarm image based on arm32-bit</li>
            <li>Implemented comprehensive diagnostic services in Adaptive MICROSAR, meeting 100% of customer requirements</li>
            <li>Adapted modeling and DEXT components to ensure compatibility with new MICROSAR versions</li>
            <li>Developed innovative workaround solutions for system execution, reducing dependency on Execution Manager</li>
            <li>Created custom solution to integrate Taco CMake with Yocto Recipe for building Adaptive MICROSAR</li>
            <li><strong>Impact:</strong> Reduced build time by 35% and improved system flexibility, allowing for faster development cycles</li>
          </ul>
        </div>
        
        {/* Platform VW Projects */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Platform VW Projects</h3>
            <p className="text-gray-600 italic">Cairo, Egypt | Mar 2022 - Apr 2023</p>
          </div>
          <p className="font-semibold text-blue-700 mb-2">AUTOMOTIVE PROJECT</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Developed E2E Handler meeting VW Requirements Specifications with 100% compliance</li>
            <li>Integrated Lin Protocol as Slave and created simulated system for comprehensive testing</li>
            <li>Implemented and configured multiple diagnostic services integrated with memory management</li>
            <li>Developed ECU Hard and Soft reset functionality specifically for VM specifications</li>
            <li>Created and executed test cases achieving 95% code coverage for implemented features</li>
            <li>Designed and implemented VM Knock-Out Component Feature for ECU and Communication</li>
            <li><strong>Impact:</strong> Improved system reliability by 40% and reduced diagnostic response time by 30%</li>
          </ul>
        </div>
        
        {/* Other projects can be added similarly */}
      </div>
    </section>
  );
};

// Skills component
export const Skills = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-800 pb-2">TECHNICAL SKILLS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Configuration Tools</h3>
            <p className="text-gray-700">DaVinci Developer Tool, Vector Developer Tool, Vector DaVinci Configurator, Vector DaVinci Scripting, Vector DaVinci Cmd</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Industry Standards</h3>
            <p className="text-gray-700">Adaptive AUTOSAR, Classic AUTOSAR, Unified Diagnostic Services (ISO 14229), A-SPICE</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Software Tools</h3>
            <p className="text-gray-700">Momentics QNX, Docker, Vector CANoe, GDB, AUTOSAR XML Editor, Vector VTT, Enterprise Architect, Doxygen, Vector Cast, VS Code, Eclipse</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Software Management</h3>
            <p className="text-gray-700">GitLab, Jira, SWf (Mercedes-Benz), CoreALM (TeamForge), Nexus, Git, Git Extension, GitHub, Conan</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Operating Systems</h3>
            <p className="text-gray-700">QNX (Advanced), Linux (Advanced), Yocto (Intermediate)</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Programming Languages & Technologies</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>C/C++ (Modern C++) - Advanced</li>
              <li>Object-Oriented Programming - Advanced</li>
              <li>Bash/Batch Scripting - Intermediate</li>
              <li>CAPEL, UML - Intermediate</li>
              <li>Groovy, CMake (TACO), Bazel, Make - Intermediate</li>
              <li>Matlab, GTest - Intermediate</li>
              <li>Rust - Basic</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Soft Skills</h3>
            <p className="text-gray-700">Teamwork, Mentorship, Communication, Leadership, Adaptability, Problem-Solving, Critical Thinking</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Languages</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Arabic (Native)</li>
              <li>English (Professional)</li>
              <li>German (Basic)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Training component
export const Training = () => {
  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-800 pb-2">PROFESSIONAL TRAINING</h2>
        
        {/* Self-Study */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Self-Study</h3>
            <p className="text-gray-600 italic">Stuttgart, Germany | Aug 2023 - Present</p>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Embedded Linux (Bootlin)</li>
            <li>Modern C++ and STL (GeeksforGeeks and Udacity)</li>
          </ul>
        </div>
        
        {/* Vector Training */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Vector Training</h3>
            <p className="text-gray-600 italic">Stuttgart, Germany | Apr 2023 - Present</p>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>QNX Operating System</li>
            <li>Adaptive AUTOSAR Architecture and Implementation</li>
            <li>Communication Microsar</li>
            <li>Embedded Linux (Bootlin)</li>
            <li>Modern C++ and STL (GeeksforGeeks and Udacity)</li>
          </ul>
        </div>
        
        {/* Valeo Training */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Valeo Training</h3>
            <p className="text-gray-600 italic">Cairo, Egypt | Oct 2021 - Apr 2023</p>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>AUTOSAR Communication Stack</li>
            <li>AUTOSAR Diagnostics Stack</li>
            <li>AUTOSAR Ethernet Stack</li>
            <li>AUTOSAR Application Software (RTE)</li>
            <li>AUTOSAR Requirement Management across Software Life Cycle</li>
            <li>Introduction to Adaptive AUTOSAR</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Education component
export const Education = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-800 pb-2">EDUCATION</h2>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Alexandria University of Engineering</h3>
            <p className="text-gray-600 italic">Alexandria, Egypt | Sep 2016 - Aug 2021</p>
          </div>
          <p className="font-semibold text-blue-700 mb-2">Bachelor of Engineering in Electronics and Communications</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Graduated with Good grade (Equivalent to 3.0/4.0 GPA)</li>
            <li>Relevant Coursework: Embedded Systems, Digital Signal Processing, Computer Architecture, Communication Systems</li>
            <li>Senior Project: "Update And Configuration Management in Adaptive AUTOSAR Platform" - Received Excellence Award</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Why Hire Me component
export const WhyHireMe = () => {
  return (
    <section className="py-6 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-800 pb-2">WHY HIRE ME?</h2>
        
        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li><strong>Proven Expertise:</strong> Successfully delivered complex automotive software solutions for premium clients including Mercedes-Benz and Stellantis Group</li>
          <li><strong>Technical Mastery:</strong> Deep expertise in Adaptive AUTOSAR, QNX, and Linux systems with advanced C++ development skills</li>
          <li><strong>Problem Solver:</strong> Exceptional troubleshooting and debugging abilities with focus on system reliability and performance optimization</li>
          <li><strong>Innovation Driver:</strong> Passionate about developing cutting-edge solutions that advance automotive software engineering</li>
          <li><strong>Collaborative Leader:</strong> Skilled at working across teams and organizations to deliver integrated solutions that exceed expectations</li>
        </ul>
      </div>
    </section>
  );
};

// Footer component
export const Footer = () => {
  return (
    <footer className="py-4 bg-blue-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Elabbas Salah. All rights reserved.</p>
    </footer>
  );
};
