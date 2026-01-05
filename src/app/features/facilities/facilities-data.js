const achievementsData = [
  {
    id: 'open-access-resources',
    title: 'OPEN ACCESS RESOURCES',
    description: [
      '**ICT Enabled Tools and Resources** available in the Institute'
    ],
    contentType: 'table',
    tables: [
      {
        title: 'Open Access Journals',
        columns: [
          { header: 'Sl. No.', accessorKey: 'slNo' },
          { header: 'Initiatives', accessorKey: 'initiatives' },
          { header: 'URL', accessorKey: 'url' },
          { header: 'No. of Journals', accessorKey: 'noOfJournals' },
        ],
        data: [
          { slNo: 1, initiatives: 'BioMed Central', url: { href: 'http://www.biomedcentral.com/', text: 'http://www.biomedcentral.com/' }, noOfJournals: 258 },
          { slNo: 2, initiatives: 'PubMed Central', url: { href: 'http://www.ncbi.nlm.nih.gov/pubmed', text: 'http://www.ncbi.nlm.nih.gov/pubmed' }, noOfJournals: '1445+' },
          { slNo: 3, initiatives: 'PLoS', url: { href: 'http://www.plos.org/', text: 'http://www.plos.org/' }, noOfJournals: 7 },
          { slNo: 4, initiatives: 'Bioline International', url: { href: 'http://www.bioline.org.br/', text: 'http://www.bioline.org.br/' }, noOfJournals: 36 },
          { slNo: 5, initiatives: 'Indian Academy of Science', url: { href: 'http://www.ias.ac.in/', text: 'http://www.ias.ac.in/' }, noOfJournals: 11 },
          { slNo: 6, initiatives: 'Indian National Science Academy', url: { href: 'http://www.insa.ac.in/', text: 'http://www.insa.ac.in/' }, noOfJournals: 4 },
          { slNo: 7, initiatives: 'The National Academy of Science, India', url: { href: 'http://www.nasi.org.in/abst.htm', text: 'http://www.nasi.org.in/abst.htm' }, noOfJournals: 3 },
          { slNo: 8, initiatives: 'MedIND', url: { href: 'http://medind.nic.in/', text: 'http://medind.nic.in/' }, noOfJournals: 66 },
          { slNo: 9, initiatives: 'NISCAIR Research Journals', url: { href: 'http://www.niscair.res.in/sciencecommunication/researchjournals/rejour/rejour1.htm', text: 'http://www.niscair.res.in/sciencecommunication/researchjournals/rejour/rejour1.htm' }, noOfJournals: 17 },
          { slNo: 10, initiatives: 'Indianjournals.com', url: { href: 'http://www.indianjournals.com/ijor.aspx?target=open_access_publications_list', text: 'http://www.indianjournals.com/ijor.aspx?target=open_access_publications_list' }, noOfJournals: 10 },
          { slNo: 11, initiatives: 'Medknow Publications', url: { href: 'http://www.medknow.com/', text: 'http://www.medknow.com/' }, noOfJournals: 41 },
          { slNo: 12, initiatives: 'Kamla-Raj Enterprises', url: { href: 'http://www.krepublishers.com/KREInf/index.html', text: 'http://www.krepublishers.com/KREInf/index.html' }, noOfJournals: 21 },
          { slNo: 13, initiatives: 'OJAS@INFLIBNET Centre', url: { href: 'http://www.inflibnet.ac.in/ojs/', text: 'http://www.inflibnet.ac.in/ojs/' }, noOfJournals: 14 },
        ],
      },
      {
        title: 'Directories of Open Access Journals',
        columns: [
          { header: 'Sl. No.', accessorKey: 'slNo' },
          { header: 'Initiatives', accessorKey: 'initiatives' },
          { header: 'URL', accessorKey: 'url' },
          { header: 'No. of Journals', accessorKey: 'noOfJournals' },
        ],
        data: [
          { slNo: 1, initiatives: 'Directory of Open Access Journals', url: { href: 'http://www.doaj.org/', text: 'http://www.doaj.org/' }, noOfJournals: 9744 },
        ],
      },
      {
        title: 'Institutional Repositories',
        columns: [
          { header: 'Sl. No.', accessorKey: 'slNo' },
          { header: 'Institutional Repositories-World', accessorKey: 'repository' },
          { header: 'URL', accessorKey: 'url' },
        ],
        data: [
          { slNo: 1, repository: 'Arxiv.org e-Print Archive', url: { href: 'http://arxiv.org/', text: 'http://arxiv.org/' } },
          { slNo: 2, repository: 'Social Science Research Network', url: { href: 'http://ssrn.com/en/', text: 'http://ssrn.com/en/' } },
          { slNo: 3, repository: 'Smithsonian/NASA Astrophysics Data System', url: { href: 'http://adsabs.harvard.edu/', text: 'http://adsabs.harvard.edu/' } },
          { slNo: 4, repository: 'Europe PubMed Central', url: { href: 'http://europepmc.org/', text: 'http://europepmc.org/' } },
          { slNo: 5, repository: 'Research Papers in Economics', url: { href: 'http://repec.org/', text: 'http://repec.org/' } },
          { slNo: 6, repository: 'CiteSeerX', url: { href: 'http://citeseerx.ist.psu.edu/index', text: 'http://citeseerx.ist.psu.edu/index' } },
          { slNo: 7, repository: 'HAL Institute National de Recherche en Informatique et en Automatique Archive Ouverte', url: { href: 'http://hal.inria.fr/', text: 'http://hal.inria.fr/' } },
          { slNo: 8, repository: 'University of California eScholarship Repository', url: { href: 'http://escholarship.org/', text: 'http://escholarship.org/' } },
          { slNo: 9, repository: 'CERN Document Server', url: { href: 'http://cds.cern.ch/', text: 'http://cds.cern.ch/' } },
          { slNo: 10, repository: 'Virginia Tech University Digital Library and Archives', url: { href: 'http://scholar.lib.vt.edu/', text: 'http://scholar.lib.vt.edu/' } },
          { slNo: 11, repository: 'Open Access Repository Publications of Fellows of the Indian Academy of Sciences', url: { href: 'http://repository.ias.ac.in/', text: 'http://repository.ias.ac.in/' } },
          { slNo: 12, repository: 'Indian Institute of Science Bangalore Institutional', url: { href: 'http://eprints.iisc.ernet.in/', text: 'http://eprints.iisc.ernet.in/' } },
          { slNo: 13, repository: 'Central Marine Fisheries Research Institute Institutional Repository', url: { href: 'http://eprints.cmfri.org.in/', text: 'http://eprints.cmfri.org.in/' } },
          { slNo: 14, repository: 'National Institute of Oceanography India Digital Repository', url: { href: 'http://drs.nio.org/drs/index.jsp', text: 'http://drs.nio.org/drs/index.jsp' } },
          { slNo: 15, repository: 'Information and Library Network Centre Institutional Repository', url: { href: 'http://ir.inflibnet.ac.in/', text: 'http://ir.inflibnet.ac.in/' } },
          { slNo: 16, repository: 'National Institute of Technology Rourkela eThesis', url: { href: 'http://ethesis.nitrkl.ac.in/', text: 'http://ethesis.nitrkl.ac.in/' } },
          { slNo: 17, repository: 'OpenMed National Informatics Centre India', url: { href: 'http://openmed.nic.in/', text: 'http://openmed.nic.in/' } },
          { slNo: 18, repository: 'International Crops Research Institute for the Semi-Arid Tropics Open Access Repository', url: { href: 'http://oar.icrisat.org/', text: 'http://oar.icrisat.org/' } },
          { slNo: 19, repository: 'Indian Institute of Astrophysics Institutional Repository', url: { href: 'http://prints.iiap.res.in/', text: 'http://prints.iiap.res.in/' } },
          { slNo: 20, repository: 'National Aerospace Laboratories Institutional Repository', url: { href: 'http://nal-ir.nal.res.in/', text: 'http://nal-ir.nal.res.in/' } },
        ],
      },
      {
        title: 'Electronic Books',
        columns: [
          { header: 'Sl. No.', accessorKey: 'slNo' },
          { header: 'Name of Resources', accessorKey: 'name' },
          { header: 'URL', accessorKey: 'url' },
          { header: 'No. of Ebooks', accessorKey: 'ebooks' },
        ],
        data: [
          { slNo: 1, name: 'Project Gutenberg', url: { href: 'http://www.gutenberg.org/', text: 'http://www.gutenberg.org/' }, ebooks: 42000 },
          { slNo: 2, name: 'HathiTrust Digital Library', url: { href: 'http://www.hathitrust.org/', text: 'http://www.hathitrust.org/' }, ebooks: 5712433 },
          { slNo: 3, name: 'OAPEN', url: { href: 'http://www.oapen.org', text: 'http://www.oapen.org' }, ebooks: 2045 },
          { slNo: 4, name: 'Directory of Open Access Books', url: { href: 'http://www.doabooks.org/', text: 'http://www.doabooks.org/' }, ebooks: 1806 },
        ],
      },
      {
        title: 'Open Courseware',
        columns: [
          { header: 'Sl. No.', accessorKey: 'slNo' },
          { header: 'Open Courseware Initiatives', accessorKey: 'initiative' },
          { header: 'URL', accessorKey: 'url' },
        ],
        data: [
          { slNo: 1, initiative: 'Open Yale Courseware', url: { href: 'http://oyc.yale.edu/', text: 'http://oyc.yale.edu/' } },
          { slNo: 2, initiative: 'MIT Open Courseware', url: { href: 'http://ocw.mit.edu/about/', text: 'http://ocw.mit.edu/about/' } },
          { slNo: 3, initiative: 'U-Now', url: { href: 'http://unow.nottingham.ac.uk/', text: 'http://unow.nottingham.ac.uk/' } },
          { slNo: 4, initiative: 'Open Courseware Consortium', url: { href: 'http://www.ocwconsortium.org/', text: 'http://www.ocwconsortium.org/' } },
          { slNo: 5, initiative: 'Coursera', url: { href: 'https://www.coursera.org/', text: 'https://www.coursera.org/' } },
          { slNo: 6, initiative: 'Udacity', url: { href: 'https://www.udacity.com/', text: 'https://www.udacity.com/' } },
          { slNo: 7, initiative: 'ePG Pathshala', url: { href: 'http://epgp.inflibnet.ac.in/', text: 'http://epgp.inflibnet.ac.in/' } },
          { slNo: 8, initiative: 'NPTEL', url: { href: 'http://www.nptel.iitm.ac.in', text: 'http://www.nptel.iitm.ac.in' } },
          { slNo: 9, initiative: 'e-Gyankosh', url: { href: 'http://www.egyankosh.ac.in', text: 'http://www.egyankosh.ac.in' } },
          { slNo: 10, initiative: 'Learning Object Repository CEC', url: { href: 'http://www.cec-lor.edu.in', text: 'http://www.cec-lor.edu.in' } },
        ],
      },
      {
        title: 'Metadata Harvesting Services',
        columns: [
          { header: 'Sl. No.', accessorKey: 'slNo' },
          { header: 'Initiatives', accessorKey: 'initiatives' },
          { header: 'URL', accessorKey: 'url' },
        ],
        data: [
          { slNo: 1, initiatives: 'Google Scholar', url: { href: 'http://scholar.google.co.in/', text: 'http://scholar.google.co.in/' } },
          { slNo: 2, initiatives: 'OaISTER', url: { href: 'http://www.oclc.org/oaister', text: 'http://www.oclc.org/oaister' } },
          { slNo: 3, initiatives: 'OARiNZ', url: { href: 'http://akoaotearoa.ac.nz/mi/project/te-panetakiao/resources/pages/open-access-repositoriesnz-oarinz', text: 'http://akoaotearoa.ac.nz/mi/project/te-panetakiao/resources/pages/open-access-repositoriesnz-oarinz' } },
          { slNo: 4, initiatives: 'NCSTRL', url: { href: 'http://www.ncstrl.org/', text: 'http://www.ncstrl.org/' } },
          { slNo: 5, initiatives: 'Search Digital Libraries', url: { href: 'http://drtc.isibang.ac.in/sdl', text: 'http://drtc.isibang.ac.in/sdl' } },
          { slNo: 6, initiatives: 'MetaMED', url: { href: 'http://indmeddb.nic.in/metamed.html', text: 'http://indmeddb.nic.in/metamed.html' } },
          { slNo: 7, initiatives: 'Open Index Initiative', url: { href: 'http://oii.igidr.ac.in', text: 'http://oii.igidr.ac.in' } },
        ],
      },
    ],
  },
  {
    id: 'smart-class-room',
    title: 'SMART CLASS ROOM',
    description: [
      '**Enhanced Learning Environment** - A Smart Classroom is the ultimate self-service, presenter-friendly environment and conducive to the teaching / learning process.',
      'The required resources of the faculty are permanent classroom placed in simple, easy-to-use configurations. Collaborative learning environment, simple, friendly and non-intimidating classroom technology inspire the presenters who rely on improvisation, spontaneity and audience participation.',
      'Classroom computer supports interactive learning, facilitating a shift from disclosing information to processing information from 70% presentation and 30% demonstration. These changes in the teaching and learning process enhance the students who are more actively engaged in the classroom environment.',
      'All the classrooms are ‘smart’, with high-speed data networks and LCD projectors for audio and video. ICT Enabled Smart Class Rooms - ICT Enabled Tools and Resources available in the Institute'
    ],
    contentType: 'table',
    tables: [],
  },
  {
    id: 'green-campus-initiative',
    title: 'GREEN CAMPUS INITIATIVE',
    description: [
      '**Green Campus Initiative** includes the following institutional initiatives for greening the campus:',
      '• Restricted entry of automobiles',
      '• Use of Bicycles/ Battery powered vehicles',
      '• Pedestrian Friendly pathways',
      '• Ban on use of Plastic',
      '• Landscaping with trees and plants',
      'Since inception, the institution has maintained as a green environment. This eco-friendly campus had put the effort to prepare plantations, lawns and gardens and have made sure well maintained. The landscaping provides the most scenic beauty for mind refreshment for the students and also captures the mind of visitors. The campus is also maintained as a plastic free campus.',
      '**1. RESTRICTED ENTRY OF AUTOMOBILES**: At present the pollution is the major problem in the world. The major pollution is generated by automobiles. To minimize the pollution inside the campus GP College of Pharmacy  is having a policy. The automobiles are restricted inside the campus from entrance of the college to class room around 500 meter distance and from entrance to hostel is around 800 meter.',
      '**2. USE OF BICYCLES/ BATTERY POWERED VEHICLES**: Students are encouraged to use bicycles within the campus. Although the in-campus distances are small the travel to and from the hostel can utilize the benefits of bicycles. For local commutation from one location to another location Battery powered vehicle is used. Electric motor power: 250 W | Battery recharge time: 6 to 8 hours | Mileage: 70kms for each charge',
      '**3. PEDESTRIAN FRIENDLY PATHWAYS**: The road inside the campus is pedestrian friendly with all the vehicles orderly parked in the parking area. The pedestrian platforms are laid on the sides of the main approach road towards all buildings in the campus. Well planned drainage systems across the roads are running throughout the campus to avoid stagnation of rain water.',
      '**4. BAN ON USE OF PLASTIC**: Efforts are taken by the institute to maintain a plastic free campus. Students and staffs are counseled against the use of plastic in the campus. Students can make use of the water cooler to refill their water bottles and are advised not to use plastic bottles. Banners and slogans are displayed at the prominent locations to create awareness on ill effects of plastics.',
      '**5. LANDSCAPING WITH TREES AND PLANTS**: Trees are natural resources of Oxygen and are greatly responsible in the reduction of greenhouse gases (CO2). Hence care is taken to increase the green cover in the campus and conserve the environment. The trees give more fresh air. The green lush of lawn enhances the beauty of the campus. The green walk way relaxes mind.'
    ],
    contentType: 'table',
    tables: [],
  },
  {
    id: 'barrier-free-environment',
    title: 'BARRIER FREE ENVIRONMENT',
    description: [
      '**BARRIER FREE ENVIRONMENT REPORT** - Ensuring accessible infrastructure for all students and staff members.'
    ],
    contentType: 'table',
    tables: [
      {
        title: 'Barrier Free Environment',
        columns: [
          { header: 'S.No', accessorKey: 'sNo' },
          { header: 'Barrier Free Environment', accessorKey: 'environment' },
          { header: 'Links', accessorKey: 'links' },
        ],
        data: [],
      },
    ],
  },
  {
    id: 'multi-gym',
    title: 'MULTI-GYM',
    description: [
      '**Multi-Power Gym** is opened for students and staff in the year of 2014. Gym is equipped with Modern equipment such as ten station. Students enthusiastically use this facility for their daily workout.',
      'Physical Director D.Sathyakumar motivates the students to maintain their physical fitness for better performance in sports and other events.'
    ],
    contentType: 'table',
    tables: [
      {
        title: 'Available Facilities',
        columns: [
          { header: 'Equipment', accessorKey: 'equipment' },
        ],
        data: [
          { equipment: 'Ten station' },
          { equipment: 'Luxury Rubberized Dumbells' },
          { equipment: 'Push up BAR' },
          { equipment: 'Gym Ball' },
          { equipment: 'Rubberized Weight Plates' },
          { equipment: 'Olympic rod-6ft' },
          { equipment: 'Magnetic Cycle' },
          { equipment: 'Twister with sitting and Standing' },
          { equipment: 'Aerobic Dumbbells' },
          { equipment: 'Squad Stant' },
          { equipment: 'Declined bench Press' },
          { equipment: 'Flat and Inclined Bench press' },
          { equipment: 'Adjustable cable cross' },
          { equipment: 'Table twist' },
          { equipment: 'Abdomen crunch' },
          { equipment: '45 deg Abdomen board' },
        ],
      },
    ],
  },
  {
    id: 'internet-wi-fi',
    title: 'INTERNET & WI-FI',
    description: [
      '**Flexible Learning** through comprehensive internet connectivity.',
      'GP College of Pharmacy  entered in to an e-revolution by making its entire campus with Wi-Fi facility. This provides laptop users with a seamless mobile connection to the corporate network (intranet and Internet) for browsing, presentations and documents around the campus.',
      'College have 55 Mbps Internet connection, locally networked and connected through Wi-Fi also to the central server which are available for students project work and preparing seminar presentations. It accesses e-books, study materials, previous question papers, daily circulars and etc. through the college Local Area Network.',
      'Internet facility has been given in the well-equipped internet lab with high speed connectivity and the student can surf the net to get unlimited information. The internet can be accessed across the entire campus. The campus intranet has important details about Test Schedules, Time Tables, Examination Schedules, Campus News and etc., and a wealth of information about the college. This allows learning to move outside the classroom where students can discuss, learn and grow.',
      'The institute has a leased line and each student is provided with an IP address of his own. All the websites browsed by him/her are regularly monitored. Wi-Fi facility in the campus is a milestone in the history of this institution as it puts the college on the road to paperless administration and functioning. In addition, the college provides internet and intranet facility to all the students and staff for instructional purpose on par with colleges internationally.'
    ],
    contentType: 'table',
    tables: [],
  },
  {
    id: 'waste-management',
    title: 'WASTE MANAGEMENT',
    description: [
      '**Comprehensive Waste Management System** for maintaining clean and green campus.',
      'Our Institution is highly conscious of the responsibilities to maintain the campus clean and green hence different kinds of waste management practices are adopted to keep the campus clean and hygienic. The different kinds of waste materials available in the premises of the institution are safely disposed by various methods in respect to the intensity of the waste materials.',
      '**The following are the measures involved in the best waste management criteria:**',
      '**1. SOLID WASTE MANAGEMENT** - Solid waste management refers to the collecting, treating, and disposing of solid material that is discarded or is no longer useful. Solid waste materials available in the campus are papers – Used papers in the office, Exam papers and used newspapers – and leaf litters and vegetable wastes. The paper scraps amounts to 100 Kilo gram approximately every semester and are disposed to the paper scrap dealer.',
      'Solid waste materials like leaf litter effectively converted into compost, a natural manure for supplementing nutritional supply to the garden. Leaf litters collected and dried are used in the biogas plant with supplement of cow dung as inoculums to generate methane gas. Vegetable litters are collected properly and segregated and dried for the production of compost and biogas. The campus is provided with the composting facility and biogas production plant. Organic waste available in the campus is converted in to compost in the pit available in the garden and the organic manure produced in the compost yard is used to maintain the garden.',
      '**2. LIQUID WASTE MANAGEMENT** - The drained water from bathroom, kitchen, and lavatories are collected and treated in the sewage water plants are called waste water. It contains various organic and inorganic pollutants, microorganisms, bacteria of different diseases etc. This liquid waste/ sewage water and the waste water generated during the RO process is diverted to the garden and the Farm located in the campus thus providing the garden and the farm with water irrigation independent of any bore well and waste water from RO Plant.',
      '**Hazardous waste and Biomedical waste management**: Discharge of chemistry laboratory waste water: All the experiments carried out in the chemistry laboratory non-hazardous in nature. Direct usage of strong acidic or basic solutions are not involved in the laboratory experiments. Radioactive and hazardous chemicals are strictly not used in the laboratory. The strength of the solution used during the experiments is less. The laboratory solvents and solutions are diluted when completing the experimental procedure. Further, this solution is getting diluted using water before discharge through the safe disposal of the chemical laboratory spent waste water. Public health and environmental safety are high priority for our Institution. The Institution is maintaining safe and secure living environment in and around the campus.',
      '**3. BIO-MEDICAL WASTE MANAGEMENT** - No biomedical waste materials are generated in the campus. The Institution is maintaining safe and secure living environment in and around the campus.',
      '**4. E WASTE MANAGEMENT** - The E–waste generated from the campus is handed over to the authorized dealers who purchase the E-scraps and turn them into useful products. Apart from this a special training during laboratory session is given to the students to rectify the faults observed in the electrical devices and thereby minimizing the generation of E-waste.'
    ],
    contentType: 'table',
    tables: [],
  },
  {
    id: 'transport',
    title: 'TRANSPORT',
    description: [
      '**Comprehensive Transport Facilities** for students and staff.',
      'A full fledged Transport department functions in the college to provide transport facility to students and staff from various places. This service is offered ensuring a hassle-free and safe transportation.',
      'The College runs 13 buses for providing transport facility to students from various places in the city. The number of buses will be increased corresponding to the increase in the intake of students. The transport facility provided by the College will cover most parts of the town and nearby areas with the brand new fleet. College modern buses provide convenient and comfortable travel. Our drivers are well-educated with experience. They provide a safe journey to our students.',
      'Student\'s own transport arrangements (two-wheelers and cars) are not permitted, in order to prevent accidents and late-comers to college. All the buses reach the campus before 08.30 a.m. so that students and faculty can have their breakfast and get ready to attend the classes at 08.50 a.m. The buses leave the campus at 5.00 pm, which helps students to reach home early and safe.',
      '**PUBLIC TRANSPORT FACILITIES SERVING THE CAMPUS:**',
      '• From Tiruchengode to Sankari – every 10 minutes',
      '• From Sankari to Tiruchengode – every 10 minutes',
      '**Location Details:**',
      '• 7 Km from Tiruchengode and Sankari',
      '• Nearest Railway Junction: Sankari (7 Km)',
      '• Nearest Airport: Coimbatore (140 km)'
    ],
    contentType: 'table',
    tables: [
      {
        title: 'Student - Bus Utilization Details',
        columns: [
          { header: 'Student Details', accessorKey: 'details' },
          { header: 'Number of Boys', accessorKey: 'boys' },
          { header: 'Number of Girls', accessorKey: 'girls' },
        ],
        data: [
          { details: 'Total No. of Students', boys: 1268 },
        ],
      },
      {
        title: 'College Bus Details',
        columns: [
          { header: 'S.No', accessorKey: 'sNo' },
          { header: 'Bus No.', accessorKey: 'busNo' },
          { header: 'Route', accessorKey: 'route' },
        ],
        data: [],
      },
    ],
  },
  {
    id: 'maintenance',
    title: 'MAINTENANCE',
    description: [
      '**Comprehensive Infrastructure Maintenance System**',
      'Maintenance of the physical Infrastructure and Utilization: The maintenance and upkeep of the infrastructure facilities are carried out the surveillance of the campus supervisor. All the Departments and various functioning units of the institute are provided with all the required infrastructure facilities like class rooms, seminar halls, faculty rooms, Common room, laboratories etc.',
      '**1. Laboratories** - One faculty and technical supporting staff are deputed as incharge for the overall functioning/maintenance of each laboratory. Calibration of equipment /machineries are carried out at the end of every semester.',
      '**2. Maintenance of Computers** - An exclusive department (CCC) with IT manager, one assistant system admin and 03 hardware engineers is functioning in the institute to cater to the needs of day–today computer maintenance.',
      '**3. Library** - The requirement and list of books is collected from the concerned departments and HoDs. The finalized list of required books is duly approved and signed by the Principal. The proper account of visitors (students and staff) on daily basis is maintained. Other issues such as weeding out of old titles, schedule of issue/ return of books etc are chalked out / resolved by the library committee.',
      '**4. Upkeep and maintenance** - All departments shall strictly follow the laid down procedures and guidelines of the institute with regard to cleanliness and preventive and corrective maintenance of infrastructure. This shall include the following. Regular cleaning of class rooms, Seminar halls, Labs etc. UPS and GENSET maintenance are carried over by AMC periodically.',
      '**5. Electrical Maintenance** - Includes all electrical facilities in academic blocks, hostels Generator, Air conditioners, etc. Electrician / Office i/c maintain a list of electrical devices that require regular maintenance. The maintenance operation will include all components and systems in Electrical are switches, outlets, GFI outlets, Light fixtures, exit lights, emergency lights, lightning arresters, earth bits and electrical panel boxes. For Generator, a logbook is maintained.',
      '**6. Building Maintenance** - Building maintenance is comprised of plumbing, painting, carpentry and minor construction. The maintenance operation will include all components and systems in the areas Class rooms, seminar halls, tutorial halls, carpet, floors, walls and ceilings, Doors exterior/interior, Window and Hardware, Restrooms/Plumbing fixtures (Commode, Lavatories, Urinals, restroom partition, mirrors, exhaust fans).',
      '**7. Rain Water Harvesting** - Rain Water Harvesting is implemented throughout the campus and one Rain water harvesting well has been installed.',
      '**8. Water Tank** - The main overhead water tanks are to be cleaned at least once in six months. Testing of water sample is to be carried out before and after cleaning.',
      '**Sports** - Sports facilities are maintained and upgraded from time to time by the sports department. Major maintenance and repaired are reported to administration for taking proper steps through Pharmacy department. The committee supervises maintenance and repair works.',
      '**Hostel** - Looks into the grievances/complaints of the Students. Keeps Rules and Regulations with regard to incoming and outgoing of Students from the hostel. Looks after the quality of food served in the hostel. Maintenance of common facilities, cleanliness in the hostel and the meeting will be held once in a month.'
    ],
    contentType: 'table',
    tables: [],
  },
  {
    id: 'hostel',
    title: 'HOSTEL',
    description: [
      '**Comfortable and Secure Hostel Accommodation** for students.',
      'GP provides accommodation to students wishing to reside in the hostels. Hostel in the institute is an independent unit in respect to its internal administration under the overall supervision is done by the Principal and the Hostel Management.',
      'The hostel is administered by a Warden appointed by the Chairman and he/she will be assisted by the assistant warden. Hostel has a Hostel Council which is an advisory body comprising the Warden (as its Chairman), the assistant warden and the elected student secretaries as its members.',
      'The Hostel Council plans the students activities for a year which includes preparation for the sports budget, recreational and other social activities and is also responsible for the functioning of mess with the help of the mess committee.',
      'The Hostel Office is located within the hostel premises. The Office maintains all the files, registers, records, ledgers, account books, suppliers bill, payment registers and etc., pertaining to the hostel residents, mess and the employees. The Hostel Office will be in service on all weekdays.',
      'Every student who has been admitted in the institution is required to pay the prescribed hostel fee and establishment charges along with a refundable hostel mess caution deposit. These fee are subjected to revision. The change in rooms is effected in accordance with the rules followed by hostel and with the warden\'s approval.',
      '**Each room is provided with:** cot, table, chair, bookshelf, and ceiling fan. Residents cannot move the furniture or fittings from one room to another. Private cooking in the rooms is prohibited. Smoking, consumption of alcoholic drinks and use of narcotic drugs is strictly prohibited.',
      '**Guest Policy:** Guests of the residents may be permitted to stay in the hostel by the Chairman on necessary payment in the office. During night time guests will be permitted in a student room with the warden\'s prior permission. Boys are not allowed to visit girls hostel and vice-versa.',
      '**Recreational Facilities:** A number of recreational, sports, literary and social activities take place in the hostel during the academic year. A few rooms in the hostel are used for common facilities such as the Library, Computer Room, Indoor Sports etc. Laundry facilities is available in the hostel.',
      '**Common Room:** Students can relax in the evenings or on holidays or spend their leisure time in the Common Room which is equipped with a T.V, music system, newspapers and magazines. The Hostel Library has a good collection of general books, fiction, comics etc.',
      '**Security:** An external security agency is contracted for providing security and it is monitored by the Warden and the Assistant Warden.',
      'Application for Admission to the Hostel shall be made in the prescribed form.',
      '**Contact Details:**',
      '• **Mobile Number:** 7373595999, 7373691999',
      '• **Email ID:** hostel@shanmugha.edu.in'
    ],
    contentType: 'table',
    tables: [],
  },
  {
    id: 'alternate-energy-resource',
    title: 'ALTERNATE ENERGY RESOURCE',
    description: [
      '**Sustainable Energy Solutions** for campus operations.',
      'The Institution has facilities for Alternate Source of Energy and Energy conservation measures.'
    ],
    contentType: 'table',
    tables: [
      {
        title: 'Alternate Source of Energy',
        columns: [
          { header: 'S.No', accessorKey: 'sNo' },
          { header: 'Alternate Source of Energy', accessorKey: 'source' },
          { header: 'Links', accessorKey: 'links' },
        ],
        data: [],
      },
    ],
  },
  {
    id: 'transport-committee',
    title: 'TRANSPORT COMMITTEE',
    description: [
      '**Organized Transport Management System**',
      'A full-fledged Transport department functions in the college to provide transport facility to students and staff from various places. This service is offered ensuring a hassle-free and safe transportation.',
      'The College runs 13 buses for providing transport facility to students from various places in the city. The number of buses will be increased corresponding to the increase in the intake of students. The transport facility provided by the College will cover most parts of the town and nearby areas with the brand new fleet. College modern buses provide convenient and comfortable travel. Our drivers are well-educated with experience. They provide a safe journey to our students.',
      'Student\'s own transport arrangements (two-wheelers and cars) are not permitted, in order to prevent accidents and late-comers to college. All the buses reach the campus before 08.30 a.m. so that students and faculty can have their breakfast and get ready to attend the classes at 08.50 a.m. The buses leave the campus at 5.00 pm, which helps students to reach home early and safe.',
      'The Transport Committee shall consist of the following:',
      '• Principal - Chairman',
      '• Transport Coordinator',
      '• Members of the Transport Committee'
    ],
    contentType: 'table',
    tables: [],
  },
    {
    id: 'sports',
    title: 'SPORTS',
    description: [
      '**Comprehensive Sports and Fitness Program**',
      'GP College of Pharmacy  is evincing keen interest in developing the sports activities of the students inside the campus. Students are provided with all facilities to participate actively in sports and games at district, state and national level. Athletic, Volleyball, Shuttle grounds and Basketball are major highlights of facilities.',
      'Sports and games in an Pharmacy college is not only a recreational activity to refresh the mind but when channeled in the right manner, it can also be used to improve the inner qualities of an individual himself/herself in sports and thus it helps to instill in him/her an attitude of team spirit and when he/she enters the work force, this will help to enhance his/her team efforts.',
      'In today\'s world one may face lot of setbacks. An engineer involved in sports will be able to face any situation with confidence and positive win attitude and at the same time if any setback is experienced, he/she will not get disheartened easily. Finally as the saying goes "A healthy mind resides in a healthy body", sports will improve the overall fitness, making the person active.',
      'Yogic values are being taught by qualified and eminent teachers. The college provides ample opportunity for the students to take part in all indoor and outdoor sports activities. Sports complex is located adjacent to the college and has facilities for playing and practicing Tennis, Volleyball, Basketball, Badminton Football and Cricket. Our Basketball court is laid to international standards.',
      'A well-equipped gymnasium including a multi gym is being planned to be kept open throughout the day. Inter college tournaments, inter class matches and annual athletic meet are regular features in the sports section. Many of the students represent the university and the state in various sports.',
      'Given the need to balance sports & academics, we focus on selected games and sports. Students who have represented the National and International level tournaments for the following games and sports are eligible to apply for the sports quota admissions. Every year we are giving Pharmacy seats for the sports quota in Athletics, Basketball, Badminton, Cricket, Chess, Table Tennis, Tennis and Squash Racket.',
      '**2. ANNUAL SPORTS ACTIVITIES**',
      '• Participation in Anna University zonal and inter zonal tournaments',
      '• Participation in South Zone and All India inter university tournaments',
      '• Participation in invitational inter–collegiate tournaments',
      '• Participation in Tamil Nadu Inter Pharmacy Sports (TIES) meet',
      '• Conducting the College Annual Sports day',
      '**3. SPORTS STAR OF GP (2012-2013)**',
      'Ms. S. Mythili, First B.E., Department of Computer Science and Pharmacy, secured First Place in 200 meters, Discuss Throw, and Shot-put. She has also secured second place in 400 meters and third place in 100 meters.'
    ],
    contentType: 'table',
    tables: [],
  },
  {
    id: 'food-court',
    title: 'FOOD COURT',
    description: [
      '**Modern and Hygienic Food Services**',
      'Isthara – Being pioneers from the hospitality industry, we are experts in transforming conventional College / Institutional/ Corporate ‘canteens’ into "Smart Food Courts". Gone are the days of running a ‘Canteen’ by a single person / family. Multiple vendors, choice of multiple cuisines and ‘Food Courts’ are the need of the hour, and we at Isthara facilitate you with just that!!',
      'Isthara transforms the traditional Canteen into a ‘Smart Food court’ – giving you the following:',
      '• Multi Vendor System – we have a large ecosystem of Vendors of multi various cuisines who have partnered with us. We curate food experiences based on the demographics of the college / institute / Corporate.',
      '• The existing ‘canteen’ space is efficiently remodelled to be a multi vendor food court.',
      '• Capitalizing on the spending capacity of the students by providing them more variety / choice of cuisines for them to have.',
      '• Generating revenue for the college / Institute / Corporate by facilitating the food court setup.',
      '• ‘Smart’ Food court – as we are Tech enabled with our own inhouse developed app.',
      '• Providing highest Sanitization / Hygiene standards with FSSAI standard quality checks.'
    ],
    contentType: 'table',
    tables: [],
  },
  {
    id: 'water-conservation',
    title: 'WATER CONSERVATION',
    description: [
      '**Sustainable Water Management Practices**',
      'Comprehensive water conservation measures implemented across the campus to ensure sustainable usage and environmental responsibility.'
    ],
    contentType: 'table',
    tables: [
      {
        title: 'Water Conservation Facilities',
        columns: [
          { header: 'S.No', accessorKey: 'sNo' },
          { header: 'Water Conservation Facilities', accessorKey: 'facilities' },
          { header: 'Links', accessorKey: 'links' },
        ],
        data: [],
      },
    ],
  },
  {
    id: 'yoga-centre',
    title: 'YOGA CENTRE',
    description: [
      '**Holistic Wellness and Mental Health** through Yoga',
      'Yoga is a way of life and not only Asanas, as opposed to popular belief. Therefore practical applications of yoga in daily life includes the simple philosophies behind the techniques of yoga that helps to make life worth and living better.',
      'The techniques of yoga aims at removing the cause of the physical illness if any, further improves the mental attributes to have a calm mind (concentrated and steady) thereby realizing one\'s own spiritual self and purpose of life.'
    ],
    contentType: 'table',
    tables: [],
  },
  {
    id: 'cultural-activities',
    title: 'CULTURAL ACTIVITIES',
    description: [
      '**Vibrant Cultural and Artistic Environment**',
      'Our Institution providing heart full support to promote cultural activities among the students. For conducting cultural activities we have auditoriums with a seating capacity of 248, centralized Air Conditioner, sound system, Recording Facility with handy cam. Various on stage and off-stage events were conducted annually.',
      'Movies and short films were projected in auditoriums (75”X100” LED Display, BOSE sound system, with AC) providing state-of-the-art audiovisual experience for students.'
    ],
    contentType: 'table',
    tables: [],
  },
];
export default achievementsData;