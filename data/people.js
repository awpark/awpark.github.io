/* PEOPLE
   CURRENT MEMBERS: copied from the old site. Update for recent personnel changes.
   To add someone: copy a block, paste it, and edit. Put their photo in images/people/ and
   set "photo" to its file name. If the photo is missing, their initials are shown instead.
   To move someone to alumni, cut their block from MEMBERS and paste it into ALUMNI. */

window.MEMBERS = [
  {
    name: "Andrew Park",
    role: "Principal investigator",
    pi: true,
    photo: "andrew-park.jpg",
    bio: "Andrew is a professor who develops theory to explain and predict the population and evolutionary biology of host\u2013parasite interactions.",
    links: [
      { label: "CV", url: "files/park-cv.pdf" }
    ]
  },
  {
    name: "Carlos Molinero",
    role: "PhD candidate, Ecology",
    photo: "carlos-molinero.jpg",
    bio: "Carlos studies the link between macroecology and disease ecology. He examines how ecological traits affect parasite sharing across bird species, and how that can inform conservation and forecasts of future zoonoses.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/carlos-molinero-868894183" },
      { label: "Email", url: "mailto:Carlos.molinero@uga.edu" }
    ]
  },
  {
    name: "Kane Moser",
    role: "PhD student",
    photo: "kane-moser.jpg",
    bio: "Kane combines empirical and theoretical approaches to understand the ecology of emerging infectious diseases at different scales. Their work focuses on the threats emerging fungal pathogens pose to animal, human and ecosystem health, and on how thermal tolerance, host\u2013parasite interactions and climate change drive fungal disease emergence.",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=pbpr4AUAAAAJ&hl=en&oi=ao" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Kane-Moser" },
      { label: "Email", url: "mailto:skmoser@uga.edu" }
    ]
  },
  {
    name: "Maya Risin",
    role: "PhD student, Ecology",
    photo: "maya-risin.jpg",
    bio: "Maya examines how heterogeneity in host\u2013pathogen interactions shapes disease dynamics across ecological and macroecological scales, with implications for biodiversity loss, wildlife conservation and cross-species transmission risk. She combines empirical synthesis and ecological theory to study multi-host systems.",
    links: [
      { label: "Email", url: "mailto:maya.risin@uga.edu" }
    ]
  },
  {
    name: "Samarth Mohan",
    role: "Undergraduate researcher",
    photo: "samarth-mohan.jpg",
    bio: "Samarth is analyzing how the rate of emergence of drug resistance depends on pathogen species, drug class, animal host species and country.",
    links: []
  }
];

/* ALUMNI: grouped by "group".
   "next" is the destination on leaving the lab (leave it out if unknown). It can contain links written as
   [link text](https://example.org). Bios describe the person's time in the lab. */
window.ALUMNI = [
  /* Postdoctoral associates */
  { group: "Postdoctoral associates", name: "Krisztian Magori", role: "Postdoctoral associate", photo: "krisztian-magori.jpg",
    bio: "Krisztian is a quantitative disease ecologist. He coordinated much of the lab\u2019s epizootic hemorrhagic disease research, developed methods to detect how fast pathogens cross the species barrier from sequence data alone, and worked on eco-evolutionary feedbacks in pathogen escape from imperfect vaccines.",
    next: "Faculty position, Eastern Washington University" },
  { group: "Postdoctoral associates", name: "Suzanne O\u2019Regan", role: "Postdoctoral associate", photo: "suzanne-oregan.png",
    bio: "Suzanne is a mathematical biologist interested in dynamical systems and infectious disease dynamics. She used modeling to study disease\u2013diversity relationships.",
    next: "Independent postdoctoral associate position, NIMBioS" },
  { group: "Postdoctoral associates", name: "Eamon O\u2019Dea", role: "Postdoctoral associate", photo: "eamon-odea.png",
    bio: "Eamon worked jointly with John Drake and Andrew on using critical slowing down to give early warning of infectious disease emergence.",
    next: "Data scientist in the private sector" },
  { group: "Postdoctoral associates", name: "Chris Dibble", role: "Postdoctoral associate", photo: "chris-dibble.png",
    bio: "Chris worked jointly with John Drake and Andrew on using critical slowing down to give early warning of infectious disease emergence.",
    next: "Research scientist, Battelle" },
  { group: "Postdoctoral associates", name: "James Haven", role: "Postdoctoral associate", photo: "james-haven.jpg",
    bio: "James researched the evolutionary ecology of host\u2013parasite interactions, including the role of superinfection in virulence evolution and the evolution of parasite life-history traits driven by vector phenology and host immunology.",
    next: "Health informatics" },

  /* Graduate students */
  { group: "Graduate students", name: "TJ Odom", role: "PhD, 2025; IDEAS trainee", photo: "tj-odom.jpeg",
    bio: "TJ was jointly supervised with Sonia Altizer. He studied how climate change may affect host\u2013parasite interactions, including parasite-mediated competition across an Appalachian salamander hybrid zone." },
  { group: "Graduate students", name: "Annakate Schatz", role: "PhD, 2024", photo: "annakate-schatz.jpg",
    bio: "Annakate is broadly interested in spatial modeling, model evaluation and species\u2019 range dynamics. Her PhD research investigated how hosts\u2019 parasite communities change between native and non-native ranges across terrestrial mammals.",
    next: "Postdoctoral fellow, USDA-ARS (spatiotemporal epidemiology of livestock disease)" },
  { group: "Graduate students", name: "Daniel Suh", role: "PhD, 2024; IDEAS trainee", photo: "daniel-suh.png",
    bio: "Daniel studied how abiotic and biotic factors interact to influence the transmission dynamics of generalist parasites.",
    next: "Postdoctoral fellow in disease ecology, Virginia Tech" },
  { group: "Graduate students", name: "John Vinson", role: "PhD", photo: "john-vinson.jpeg",
    bio: "John studied the relationship between host diversity and parasite transmission.",
    next: "Postdoctoral researcher focused on the effects of land-use change on parasite transmission, working with Drs. [Richard Hall](http://halllab.ecology.uga.edu/), John Drake, and Nicole Gottdenker at UGA" },
  { group: "Graduate students", name: "David Vasquez", role: "Graduate student, IDEAS trainee", photo: "david-vasquez.jpg",
    bio: "David researched how ecological and environmental conditions affect the fitness and geographic range of parasites." },
  { group: "Graduate students", name: "Ash Griffin", role: "PhD", photo: "ash-griffin.jpg",
    bio: "Ash completed his PhD on the spatial spread of white pox disease in Elkhorn coral populations.",
    next: "Data scientist, Mailchimp" },
  { group: "Graduate students", name: "Chris Cleveland", role: "Master\u2019s", photo: "chris-cleveland.jpg",
    bio: "Chris finished his master\u2019s degree in population health, advised by Danny Mead and Andrew. He studied how metacommunity ecology links environmental drivers to Culicoides communities and hemorrhagic disease reports in the southeastern United States.",
    next: "PhD with Michael Yabsley, UGA" },
  { group: "Graduate students", name: "Brett Berry", role: "Master\u2019s", photo: "brett-berry.jpg",
    bio: "Brett completed his master\u2019s degree studying the effects of a bacterial parasite on endangered Elkhorn coral in Florida.",
    next: "Associate, Georgia Environmental Protection Division" },

  /* Research assistants and undergraduates (newest first) */
  { group: "Research assistants and undergraduates", name: "Claire Morgan", role: "Undergraduate researcher", photo: "claire-morgan.jpg",
    bio: "Claire investigated parasite specificity across mammalian orders.",
    next: "Graduate student in the Global One Health graduate program, NC State University" },
  { group: "Research assistants and undergraduates", name: "Finn Walsh", role: "Undergraduate researcher", photo: "finn-walsh.jpg",
    bio: "Finn majored in Genetics and Spanish and presented her research at the 2025 CURO symposium. She investigated how a marine versus terrestrial environment affects parasite transmission.",
    next: "Master\u2019s degree in the UK as a Marshall Scholar" },
  { group: "Research assistants and undergraduates", name: "Grant Foster", role: "Undergraduate, Ecology/Biology honors", photo: "grant-foster.jpg",
    bio: "Grant studied the specificity of complex life cycle parasites.",
    next: "PhD position in disease ecology" },
  { group: "Research assistants and undergraduates", name: "Amanda Perofsky", role: "Research assistant", photo: "amanda-perofsky.jpg",
    bio: "Amanda graduated with a double major in Ecology and Biology and joined the lab for six months. She built a large database on deer morbidity and mortality from hemorrhagic disease viruses and ran preliminary analyses against land cover.",
    next: "PhD in Biology, University of Texas at Austin, with Lauren Ancel Meyers" },
  { group: "Research assistants and undergraduates", name: "Laura Alexander", role: "Research assistant", photo: "laura-alexander.jpg",
    bio: "Laura graduated from UGA in Ecology and Microbiology. She worked full time in the lab as a research assistant on Ebola projects.",
    next: "Berkeley, working with Mike Boots (fall 2015)" },
  { group: "Research assistants and undergraduates", name: "Kamran Mohammad", role: "Undergraduate", photo: "kamran-mohammad.jpg",
    bio: "Kamran worked in the lab as a senior majoring in Mass Media Arts with a minor in Biology. He completed two research projects: one relating age structure and infection history to influenza epidemiology, and one on the emergence of drug resistance in macroparasites." },
  { group: "Research assistants and undergraduates", name: "John Roquet", role: "Undergraduate, CURO", photo: "john-roquet.jpg",
    bio: "John was a CURO research student who applied statistical modeling to infectious disease problems." },
  { group: "Research assistants and undergraduates", name: "Scott Saunders", role: "Undergraduate", photo: "scott-saunders.jpg",
    bio: "Scott studied how climate change affects the predicted distribution of strains of the Lyme disease agent, using climate models to project summer and winter temperature differences across US regions and feeding them into a mathematical model.",
    next: "Graduate school, Caltech" },
  { group: "Research assistants and undergraduates", name: "Brad White", role: "Undergraduate", photo: "brad-white.jpg",
    bio: "Brad worked on the spread of epizootic hemorrhagic disease, an arbovirus of white-tailed deer in the US. He used computer models with environmental and temporal variables to explain and predict its population dynamics." },
  { group: "Research assistants and undergraduates", name: "Jenna Lea", role: "Undergraduate, CURO fellow", photo: "jenna-lea.jpg",
    bio: "Jenna was a CURO fellow in spring and summer 2017. Her interests are in disease ecology, ticks and their pathogens, and patterns of tick diversity across the mammalian phylogeny." }
];
