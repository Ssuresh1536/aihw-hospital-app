// Hardcoded pharmacy list
const pharmacies = [
  {
    "name": "Albany Community Pharmacy",
    "email": "Dispensing@albanypharmacy.com.au"
  },
  {
    "name": "Albany Dog Rock Chemist",
    "email": "dogrock@pharmacyalliance.net"
  },
  {
    "name": "Amcal Max Albany",
    "email": "scripts@amcalalbany.com.au"
  },
  {
    "name": "Orana Pharmacy Albany",
    "email": "admin@oranacommunitychemist.com.au"
  },
  {
    "name": "TerryWhite Chemmart Chester Pass Albany",
    "email": "dispensary@twcmchesterpass.com.au"
  },
  {
    "name": "Pharmacy World Discount Chemist",
    "email": "pharmacyworld40@hotmail.com"
  },
  {
    "name": "Greenleaf Pharmacy Alkimos",
    "email": "alkimos@greenleaf.au"
  },
  {
    "name": "Pharmacy 777 Applecross",
    "email": "applecross@pharmacy777.com.au"
  },
  {
    "name": "Pharmacy 777 Applecross Village",
    "email": "applecrossvillage@pharmacy777.com.au"
  },
  {
    "name": "Pharmacy 777 Canning Bridge",
    "email": "canningbridge@pharmacy777.com.au"
  },
  {
    "name": "TerryWhite Chemmart Applecross",
    "email": "applecross@terrywhitechemmart.com.au"
  },
  {
    "name": "Champion Drive In Pharmacy",
    "email": "championdrivepharmacy@gmail.com"
  },
  {
    "name": "Optimal Pharmacy Plus Armadale",
    "email": "pm-oppa@westnet.com.au"
  },
  {
    "name": "TerryWhite Chemmart Armadale",
    "email": "armadale@twcmgroup.com"
  },
  {
    "name": "Soul Pattinson Chemist Ascot Medical Ctr",
    "email": "ascotpharmacy@outlook.com"
  },
  {
    "name": "Ashfield Community Chemist",
    "email": "ashfieldchemist@optusnet.com.au"
  },
  {
    "name": "Atwell Community Pharmacy",
    "email": "atwellrx@bigpond.net.au"
  },
  {
    "name": "Harvest Lakes Discount Drug Store",
    "email": "hl@rkpharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Augusta",
    "email": "augusta@pharmacy777.com.au"
  },
  {
    "name": "Chemwise Pharmacy Australind",
    "email": "australind@chemwisepharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Aveley",
    "email": "aveley@pharmacy777.com.au"
  },
  {
    "name": "Baldivis Pharmacy",
    "email": "kate@baldivispharmacy.com.au"
  },
  {
    "name": "Blooms The Chemist Baldivis Stockland",
    "email": "baldivisstockland@blooms.net.au"
  },
  {
    "name": "Clinicare Compounding Pharmacy Baldivis",
    "email": "baldivis@clinicarepharmacy.com.au"
  },
  {
    "name": "Optimal Pharmacy Plus Balga",
    "email": "pm-oppba@westnet.com.au"
  },
  {
    "name": "Amcal Pharmacy Ballajura",
    "email": "malagapharmacy@gmail.com"
  },
  {
    "name": "TerryWhite Chemmart Banksia Grove",
    "email": "banksiagrove@twcmgroup.com"
  },
  {
    "name": "Wizard Pharmacy Banksia Grove",
    "email": "csc.banksiagrove1@wizardphy.com.au"
  },
  {
    "name": "Bassendean Pharmacy",
    "email": "bassendeanpharmacy@gmail.com"
  },
  {
    "name": "Home Care Pharmacy Bassendean",
    "email": "homecarepharmacybassendean@gmail.com"
  },
  {
    "name": "TerryWhite Chemmart Bayonet Head",
    "email": "bayonethead@terrywhitechemmart.com.au"
  },
  {
    "name": "Amcal Bayswater Drive-in Pharmacy",
    "email": "bdic@bigpond.com"
  },
  {
    "name": "Amcal Night And Day Pharmacy Bayswater",
    "email": "bayswater1@guardianpharm.net"
  },
  {
    "name": "Pharmacy 777 Bayswater",
    "email": "bayswater@pharmacy777.com.au"
  },
  {
    "name": "Beaconsfield Community Pharmacy",
    "email": "bcp115@outlook.com"
  },
  {
    "name": "Advantage Pharmacy Bedford",
    "email": "pharmacist@bedfordpharmacy.com.au"
  },
  {
    "name": "Healthlink Pharmacy Beechboro",
    "email": "healthlink.beechboro@outlook.com"
  },
  {
    "name": "Optimal Pharmacy Plus Altone Park",
    "email": "oppap@iinet.net.au"
  },
  {
    "name": "Beeliar Community Pharmacy",
    "email": "info@bcpchemist.com.au"
  },
  {
    "name": "Soul Pattinson Chemist Beeliar",
    "email": "spcbeeliar@gmail.com"
  },
  {
    "name": "Greenleaf Pharmacy Belridge",
    "email": "belridge@greenleaf.au"
  },
  {
    "name": "Amcal Epsom Ave Pharmacy",
    "email": "epsomavenue@amcal.net.au"
  },
  {
    "name": "TerryWhite Chemmart Bennett Springs",
    "email": "springschemmart@westnet.com.au"
  },
  {
    "name": "Gerald Burns Pharmacy",
    "email": "geraldburns.pharmacy@frednet.com.au"
  },
  {
    "name": "Terrywhite Chemmart Bindoon",
    "email": "bindoon@twcmgroup.com.au"
  },
  {
    "name": "Boddington Pharmacy",
    "email": "boddingtonpharmacy@gmail.com"
  },
  {
    "name": "Wizard Pharmacy Garden City (Kmart Mall)",
    "email": "pm.gardencity1@wizardphy.com.au"
  },
  {
    "name": "Boulder Pharmacy",
    "email": "boulderpharmacy@gmail.com"
  },
  {
    "name": "Boyanup Pharmacy",
    "email": "boyanuppharmacy@gmail.com"
  },
  {
    "name": "Boyup Brook Pharmacy",
    "email": "admin@boyupbrookpharmacy.com.au"
  },
  {
    "name": "Brentwood Pharmacy",
    "email": "pharmacist@brentwoodpharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Bridgetown",
    "email": "bridgetown@pharmacy777.com.au"
  },
  {
    "name": "Broome Pharmacy",
    "email": "dispensary@broomepharmacy.com.au"
  },
  {
    "name": "Kimberley Pharmacy Services (Broome)",
    "email": "kps@kimberleypharmacyservices.com.au"
  },
  {
    "name": "TerryWhite Chemmart Bullsbrook",
    "email": "admin@bullsbrookpharmacy.com.au"
  },
  {
    "name": "Bunbury Drive In Pharmacy",
    "email": "admin@bdicwa.com.au"
  },
  {
    "name": "Chemwise Pharmacy Bunbury",
    "email": "bunbury@chemwisepharmacy.com.au"
  },
  {
    "name": "TerryWhite Chemmart South City",
    "email": "webster@southcitypharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Usher Compounding",
    "email": "usher@pharmacy777.com.au"
  },
  {
    "name": "Wizard Pharmacy Bunbury Centrepoint",
    "email": "dispensary.bunbury3@wizardphy.com.au"
  },
  {
    "name": "Amcal Express Burswood",
    "email": "burswood@amcal.net.au"
  },
  {
    "name": "Broadwater Pharmacy Busselton",
    "email": "scripts@bwaterpharmacy.com.au"
  },
  {
    "name": "Busselton Discount Drug Store",
    "email": "disp@bsndds.com.au"
  },
  {
    "name": "Geographe Pharmacy",
    "email": "geographepharmacy@gmail.com"
  },
  {
    "name": "Pharmacy 777 Busselton",
    "email": "busselton.pharmacist@pharmacy777.com.au"
  },
  {
    "name": "Busselton Pharmacy",
    "email": "scripts@busseltonpharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Butler",
    "email": "butler@pharmacy777.com.au"
  },
  {
    "name": "Superchem Butler Pharmacy",
    "email": "butler@superchem.com.au"
  },
  {
    "name": "Byford Glades 7 Day Pharmacy",
    "email": "by@rkpharmacy.com.au"
  },
  {
    "name": "Priceline Pharmacy Byford",
    "email": "pp.byford@gmail.com"
  },
  {
    "name": "Canning Vale Pharmacy",
    "email": "info@canningvalepharmacy.com.au"
  },
  {
    "name": "Hamilton's Compounding Pharmacy",
    "email": "hamiltonshealth@westnet.com.au"
  },
  {
    "name": "Wizard Pharmacy Livingston",
    "email": "pm.livingston1@wizardphy.com.au"
  },
  {
    "name": "Market City Pharmacy",
    "email": "john@marketcitypharmacy.com"
  },
  {
    "name": "Amcal Pharmacy Cannington",
    "email": "cannington@amcal.net.au"
  },
  {
    "name": "Cannington Medical Centre Pharmacy",
    "email": "canningtonmedical.pharmacy@gmail.com"
  },
  {
    "name": "Wizard Pharmacy Cannington (Full)",
    "email": "pm.cannington1@wizardphy.com.au"
  },
  {
    "name": "Capel Pharmacy",
    "email": "capelpharmacy@hotmail.com"
  },
  {
    "name": "Caring Pharmacy Carlisle",
    "email": "Carlisle@caringpharmacy.com.au"
  },
  {
    "name": "Amcal Chemist Carnarvon",
    "email": "dispensary.carnarvon@amcal.net.au"
  },
  {
    "name": "Chidlow Pharmacy",
    "email": "chidlowpharmacy@yahoo.com.au"
  },
  {
    "name": "Island Pharmacy",
    "email": "cipharmg@pulau.cx"
  },
  {
    "name": "Herdsman Pharmacy",
    "email": "herdsmandispensary@gmail.com"
  },
  {
    "name": "Advantage Pharmacy Claremont",
    "email": "dispensary@claremontchemist.com.au"
  },
  {
    "name": "Michael's Chemist Claremont",
    "email": "claremont@michaelschemist.com.au"
  },
  {
    "name": "Stirling Highway Drive-In Pharmacy 777",
    "email": "dispensary@sdip.com.au"
  },
  {
    "name": "Pharmacy on Clarkson Station",
    "email": "clarksonpharmacy@iinet.net.au"
  },
  {
    "name": "Amcal Pharmacy Belmont City",
    "email": "amcalbc@optusnet.com.au"
  },
  {
    "name": "Wizard Pharmacy Belmont",
    "email": "kkho@wizardphy.com.au"
  },
  {
    "name": "Pharmacy 777 Cockburn",
    "email": "cockburn@pharmacy777.com.au"
  },
  {
    "name": "TerryWhite Chemmart Collie",
    "email": "collpharm@westnet.com.au"
  },
  {
    "name": "Community Pharmacy Amcal",
    "email": "pharmacist@comopharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Connolly",
    "email": "Connolly@pharmacy777.com.au"
  },
  {
    "name": "Optimal Pharmacy Plus Coolbellup",
    "email": "oppc@westnet.com.au"
  },
  {
    "name": "Woodbridge Pharmacy",
    "email": "woodbridge@feelgoodpharmacies.com.au"
  },
  {
    "name": "Corrigin Pharmacy",
    "email": "pharmacy@corriginpharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Cottesloe",
    "email": "cottesloe@pharmacy777.com.au"
  },
  {
    "name": "Pharmacy on Napoleon",
    "email": "admin.pon@phcy.com.au"
  },
  {
    "name": "Craigie Community Chemist",
    "email": "info@craigiecommunitychemist.com"
  },
  {
    "name": "Sunlander Pharmacy",
    "email": "sunlanderpharmacy@gmail.com"
  },
  {
    "name": "Dalwallinu Pharmacy",
    "email": "dalwallinupharmacy@gmail.com"
  },
  {
    "name": "Blooms The Chemist Darch",
    "email": "darch@blooms.net.au"
  },
  {
    "name": "Advantage Pharmacy Florida Beach",
    "email": "florida@fpgpharmacy.com.au"
  },
  {
    "name": "TerryWhite Chemmart Florida",
    "email": "florida@twcmgroup.com"
  },
  {
    "name": "Denmark Pharmacy",
    "email": "denmarkpharmacy@bigpond.com"
  },
  {
    "name": "Kimberley Pharmacy Services (Derby)",
    "email": "derby@kimberleypharmacyservices.com.au"
  },
  {
    "name": "Optimal Pharmacy Plus Dianella",
    "email": "pm-oppd@westnet.com.au"
  },
  {
    "name": "Dongara Pharmacy",
    "email": "dongarapharmacy@gmail.com"
  },
  {
    "name": "Donnybrook Pharmacy",
    "email": "donnybrookpharmacy@gmail.com"
  },
  {
    "name": "Duncraig Pharmacy",
    "email": "duncraigpharmacy6023@gmail.com"
  },
  {
    "name": "Pharmacy 777 Glengarry",
    "email": "glengarry@pharmacy777.com.au"
  },
  {
    "name": "Dunsborough Pharmacy",
    "email": "scripts@dunspharmacy.com.au"
  },
  {
    "name": "Caring Pharmacy East Fremantle",
    "email": "eastfreo@caringpharmacy.com.au"
  },
  {
    "name": "Affinity Pharmacy",
    "email": "laaanders@gmail.com"
  },
  {
    "name": "Next Step",
    "email": "pharmacy.dao@health.wa.gov.au"
  },
  {
    "name": "Pharmacy 777 East Perth",
    "email": "eastperth@pharmacy777.com.au"
  },
  {
    "name": "Priceline Pharmacy East Victoria Park",
    "email": "eastvicpark@theinfinitygroup.net.au"
  },
  {
    "name": "TerryWhite Chemmart Eaton",
    "email": "admin@twcmeaton.com.au"
  },
  {
    "name": "Home Care Pharmacy WA",
    "email": "admin@hcpwa.com.au"
  },
  {
    "name": "Bradshaws Pharmacy",
    "email": "dispensary@bradshawspharmacy.com.au"
  },
  {
    "name": "Castletown Chemist",
    "email": "office@castletownchemist.com"
  },
  {
    "name": "TerryWhite Chemmart Esperance",
    "email": "esperance@twcmgroup.com"
  },
  {
    "name": "Exmouth Pharmacy",
    "email": "exmouthpharmacy@westnet.com.au"
  },
  {
    "name": "Advantage Pharmacy Falcon",
    "email": "falconpharmacy@starpharmacy.com.au"
  },
  {
    "name": "Kimberley Pharmacy Services (Fitzroy Valley)",
    "email": "fitzroy@kimberleypharmacyservices.com.au"
  },
  {
    "name": "Priceline Pharmacy Fremantle",
    "email": "pricelinepharmacyfremantle@outlook.com"
  },
  {
    "name": "Chemist Discount Centre Fremantle",
    "email": "WCPFREO@gmail.com"
  },
  {
    "name": "Pharmacy 777 Fremantle",
    "email": "fremantle@pharmacy777.com.au"
  },
  {
    "name": "Optimal Pharmacy Plus Northgate",
    "email": "oppn@westnet.com.au"
  },
  {
    "name": "Pharmacy 777 Geraldton",
    "email": "geraldton@pharmacy777.com.au"
  },
  {
    "name": "Rangeway Amcal Pharmacy",
    "email": "rangeway@amcal.net.au"
  },
  {
    "name": "Terrywhite Chemmart Bluff Point",
    "email": "mail@bluffpointpharmacy.com.au"
  },
  {
    "name": "Gidgegannup Pharmacy",
    "email": "info@gidgepharmacy.com.au"
  },
  {
    "name": "Health First Goldfield Pharmacy",
    "email": "girra@health1stpharmacy.com.au"
  },
  {
    "name": "Glen Forrest Pharmacy",
    "email": "glenforrest@pharmacyalliance.net"
  },
  {
    "name": "Pharmacy 777 Glendalough",
    "email": "glendalough@pharmacy777.com.au"
  },
  {
    "name": "Golden Bay Pharmacy",
    "email": "goldenbay.phcy@gmail.com"
  },
  {
    "name": "Goomalling Pharmacy",
    "email": "info@gopharmacywa.com.au"
  },
  {
    "name": "Chemist Discount Centre Gosnells",
    "email": "gosnellsdispense@procp.com.au"
  },
  {
    "name": "Pharmacist Advice Gosnells",
    "email": "gosnellspharmacy@rocketmail.com"
  },
  {
    "name": "Green Head Chemist",
    "email": "greenheadchemist@westnet.com.au"
  },
  {
    "name": "TerryWhite Chemmart Greenwood",
    "email": "admin@greenwoodpharmacy.com.au"
  },
  {
    "name": "Waterhall Pharmacy",
    "email": "waterhallpharmacy@gmail.com"
  },
  {
    "name": "Gwelup Plaza Pharmacy",
    "email": "dispensary.gpp@phcy.com.au"
  },
  {
    "name": "The Bridge 7 Day Pharmacy (Full)",
    "email": "team@tbpharmacy.com.au"
  },
  {
    "name": "Optimal Pharmacy Plus Simms Road",
    "email": "simmsroad@opplus.com.au"
  },
  {
    "name": "Harvey Pharmacy",
    "email": "harveypharmacyscripts@gmail.com"
  },
  {
    "name": "Blooms The Chemist High Wycombe",
    "email": "highwycombe@blooms.net.au"
  },
  {
    "name": "High Wycombe Discount Chemist",
    "email": "hw.discountchemist@gmail.com"
  },
  {
    "name": "Pharmacy 777 High Wycombe",
    "email": "highwycombe@pharmacy777.com.au"
  },
  {
    "name": "Pharmacy 777 Whitford City",
    "email": "whitfordcity@pharmacy777.com.au"
  },
  {
    "name": "TerryWhite Chemmart Whitford City",
    "email": "dispensary.whitfordcity@twcmgroup.com"
  },
  {
    "name": "Pharmacy 777 Hilton",
    "email": "hilton@pharmacy777.com.au"
  },
  {
    "name": "Superchem Hocking",
    "email": "hocking@superchem.com.au"
  },
  {
    "name": "Caring Pharmacy Huntingdale",
    "email": "huntingdale@caringpharmacy.com.au"
  },
  {
    "name": "Huntingdale Village Pharmacy",
    "email": "huntpharm@westnet.com.au"
  },
  {
    "name": "Pharmacy 777 Inglewood",
    "email": "inglewood@pharmacy777.com.au"
  },
  {
    "name": "Innaloo Discount Drug Store",
    "email": "innaloo@discountdrugstores.com.au"
  },
  {
    "name": "Morris Compounding Pharmacy",
    "email": "morrispharmacy@bigpond.com"
  },
  {
    "name": "Wizard Innaloo Pharmacy",
    "email": "innaloo1@wizardphy.com.au"
  },
  {
    "name": "Pharmacy 777 Jindalee",
    "email": "jindalee@pharmacy777.com.au"
  },
  {
    "name": "HPS Pharmacies Lakeside",
    "email": "lakeside@hpspharmacies.com.au"
  },
  {
    "name": "Wizard Pharmacy Joondalup Dr",
    "email": "pm.joondalup2@wizardphy.com.au"
  },
  {
    "name": "Caring Pharmacy Joondanna",
    "email": "Joondanna@caringpharmacy.com.au"
  },
  {
    "name": "Jurien Pharmacy",
    "email": "jurpharm@westnet.com.au"
  },
  {
    "name": "Hills View Pharmacy Kalamunda",
    "email": "hillsview@medsolutions.net.au"
  },
  {
    "name": "Nightingales Pharmacy Kalamunda",
    "email": "Dispensary@nightingales.net.au"
  },
  {
    "name": "O'Hara's Pharmacy 777 Kalamunda",
    "email": "kalamunda@pharmacy777.com.au"
  },
  {
    "name": "Priceline Pharmacy Kalamunda",
    "email": "dispensary@pricelinepharmacykalamunda.com"
  },
  {
    "name": "Kalbarri Pharmacy",
    "email": "kalbarripharmacy42@yahoo.com"
  },
  {
    "name": "Wizard Pharmacy Hannans",
    "email": "pm.kalgoorlie3@wizardphy.com.au"
  },
  {
    "name": "Wizard Pharmacy Kalgoorlie Central",
    "email": "dispensary.kalgoorlie1@wizardphy.com.au"
  },
  {
    "name": "Dove's Pharmacy",
    "email": "contact@dovespharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Karratha",
    "email": "karratha@pharmacy777.com.au"
  },
  {
    "name": "Karrinyup St Luke Pharmacy",
    "email": "admin@stlukepharmacy.com.au"
  },
  {
    "name": "Great Southern Community Chemist",
    "email": "gscchemist@gmail.com"
  },
  {
    "name": "Katanning Pharmacy",
    "email": "info@katanningpharmacy.com.au"
  },
  {
    "name": "Kellerberrin Pharmacy",
    "email": "kellerberrin.phcy@gmail.com"
  },
  {
    "name": "Wizard Pharmacy Kelmscott Stargate",
    "email": "dispensary.kelmscott2@wizardphy.com.au"
  },
  {
    "name": "Kenwick Pharmacy",
    "email": "kenwickpharmacy@gmail.com"
  },
  {
    "name": "TerryWhite Chemmart Kingsley",
    "email": "kingsley@twcmgroup.com"
  },
  {
    "name": "Kojonup Pharmacy",
    "email": "kojonup.pharmacy@gmail.com"
  },
  {
    "name": "Koondoola Pharmacy",
    "email": "koondoolapharmacy@westnet.com.au"
  },
  {
    "name": "Kununurra Amcal Pharmacy",
    "email": "kpharm@iinet.net.au"
  },
  {
    "name": "Priceline Pharmacy Kwinana",
    "email": "pricelinepharmacykwinana@gmail.com"
  },
  {
    "name": "Lake Grace Community Pharmacy",
    "email": "admin@lakegracepharmacy.com.au"
  },
  {
    "name": "Lancelin Pharmacy",
    "email": "lancelinpharmacy@bigpond.com"
  },
  {
    "name": "Landsdale Compounding Pharmacy",
    "email": "erx@rkpharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Langford",
    "email": "langford@pharmacy777.com.au"
  },
  {
    "name": "Leeman Pharmacy",
    "email": "leemanpharmacy@westnet.com.au"
  },
  {
    "name": "Pharmacy 777 Lesmurdie",
    "email": "lesmurdie@pharmacy777.com.au"
  },
  {
    "name": "Pharmacy 777 Lynwood",
    "email": "lynwood@pharmacy777.com.au"
  },
  {
    "name": "Pharmacy 777 Maddington",
    "email": "maddington@pharmacy777.com.au"
  },
  {
    "name": "Mandurah Central Pharmacy",
    "email": "dispensary@mcpharmacy.net.au"
  },
  {
    "name": "Mandurah Wholelife Pharmacy and Healthfoods",
    "email": "mandurah@wholelife.com.au"
  },
  {
    "name": "Pharmacy 777 Mandurah",
    "email": "mandurah@pharmacy777.com.au"
  },
  {
    "name": "Priceline Pharmacy Mandurah East",
    "email": "mandurah@theinfinitygroup.net.au"
  },
  {
    "name": "TerryWhite Chemmart Peel",
    "email": "twcpeelpharmacy@gmail.com"
  },
  {
    "name": "Wizard Pharmacy Mandurah",
    "email": "pm.mandurah1@wizardphy.com.au"
  },
  {
    "name": "Ambassadors Pharmacy",
    "email": "ambassadors@manjimuppharmacy.com"
  },
  {
    "name": "Pharmacy 777 Manjimup",
    "email": "manjimup@pharmacy777.com.au"
  },
  {
    "name": "Priceline Pharmacy Margaret River",
    "email": "dispense2@pharmacymr.com.au"
  },
  {
    "name": "Pharmacy 777 Margaret River",
    "email": "margaretriver@pharmacy777.com.au"
  },
  {
    "name": "Amcal Pharmacy Maylands",
    "email": "maylands@amcal.net.au"
  },
  {
    "name": "Clinicare Compounding Pharmacy Maylands",
    "email": "info@maylandscompounding.com.au"
  },
  {
    "name": "Pharmacy 777 Maylands",
    "email": "maylands@pharmacy777.com.au"
  },
  {
    "name": "Meekatharra Pharmacy",
    "email": "meekapharmacy@gmail.com"
  },
  {
    "name": "Merredin Pharmacy",
    "email": "merredinpharmacyscripts@gmail.com"
  },
  {
    "name": "Midland Drive-In Pharmacy",
    "email": "mdip@live.com.au"
  },
  {
    "name": "Midland Pharmacy & Compounding Centre",
    "email": "info@midlandpharmacy.com.au"
  },
  {
    "name": "Optimal Pharmacy Plus Midland",
    "email": "oppmi@westnet.com.au"
  },
  {
    "name": "Pharmacy 777 Centrepoint Midland",
    "email": "midland@pharmacy777.com.au"
  },
  {
    "name": "Mindarie Keys Pharmacy",
    "email": "mindariepharmacy@outlook.com"
  },
  {
    "name": "Superchem Mirrabooka Village",
    "email": "mirrabooka@superchem.com.au"
  },
  {
    "name": "Moora Community Pharmacy",
    "email": "moorapharmacy@iinet.net.au"
  },
  {
    "name": "Just Pharmacy Morley",
    "email": "justpharmacymorley@ppsportal.com.au"
  },
  {
    "name": "Pharmacy 777 Morley",
    "email": "morley@pharmacy777.com.au"
  },
  {
    "name": "Mosman Drive-In Chemist",
    "email": "dispensary@mosmandriveinchemist.com"
  },
  {
    "name": "Mt Barker Country Chemist",
    "email": "mbccdispensary@alliancepharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Mt Hawthorn",
    "email": "mthawthorn@pharmacy777.com.au"
  },
  {
    "name": "Beaufort Chemist",
    "email": "info@beaufortchemist.com.au"
  },
  {
    "name": "Epic Pharmacy Mt Lawley",
    "email": "mtlawley@epicpharmacy.com.au"
  },
  {
    "name": "The Dispensary Mount Lawley",
    "email": "dispensary.td@tassone.com.au"
  },
  {
    "name": "Mundaring Amcal Pharmacy",
    "email": "mundaring@amcal.net.au"
  },
  {
    "name": "Mundaring Village Pharmacy",
    "email": "info@mundaringpharmacy.com.au"
  },
  {
    "name": "Mundijong Pharmacy",
    "email": "mundijongpharmacy@gmail.com"
  },
  {
    "name": "Fiona Stanley Hospital Pharmacy",
    "email": "barry.jenkins@health.wa.gov.au"
  },
  {
    "name": "Myaree Pharmacy",
    "email": "myareepharmacy@gmail.com"
  },
  {
    "name": "Narembeen Pharmacy",
    "email": "narembeenpharmacy@live.co.uk"
  },
  {
    "name": "Narrogin Guardian Pharmacy",
    "email": "narrogin@guardianpharm.net"
  },
  {
    "name": "Broadway Fair Pharmacy",
    "email": "admin@broadwayfairpharmacy.com.au"
  },
  {
    "name": "Boulevard Pharmacy",
    "email": "boulevard@newmanpharma.com.au"
  },
  {
    "name": "Hilditch Pharmacy",
    "email": "hilditchpharm@gmail.com"
  },
  {
    "name": "Nollamara Compounding Pharmacy 777",
    "email": "nollamaracompounding@pharmacy777.com.au"
  },
  {
    "name": "Pharmacy 777 Nollamara",
    "email": "nollamara@pharmacy777.com.au"
  },
  {
    "name": "TerryWhite Chemmart Noranda",
    "email": "dispense@norandachemmart.com.au"
  },
  {
    "name": "Greenleaf Pharmacy North Beach",
    "email": "script.northbeach@greenleaf.au"
  },
  {
    "name": "Leighton Beach Drive-In Pharmacy",
    "email": "leightonbeachchemist@gmail.com"
  },
  {
    "name": "Michael's Health Care Chemist North Perth",
    "email": "northperth@michaelschemist.com.au"
  },
  {
    "name": "Northam Discount Drug Store",
    "email": "dispensary@northamdds.com.au"
  },
  {
    "name": "Wheatbelt Health Centre Pharmacy",
    "email": "admin@wheatbeltpharmacy.com.au"
  },
  {
    "name": "Chemist Discount Centre Northbridge",
    "email": "northbridge@cdcpharmacy.com.au"
  },
  {
    "name": "Caring Pharmacy Northbridge",
    "email": "northbridge@caringpharmacy.com.au"
  },
  {
    "name": "Ocean Reef Pharmacy",
    "email": "oceanreefpharmacy@gmail.com"
  },
  {
    "name": "Osborne Park Pharmacy",
    "email": "opp@nunet.com.au"
  },
  {
    "name": "Formula Pharmacy",
    "email": "formulapharmacy@outlook.com"
  },
  {
    "name": "Paraburdoo Pharmacy",
    "email": "paraburdoopharmacy@gmail.com"
  },
  {
    "name": "Chisham Express Pharmacy",
    "email": "chishamave@frednet.com.au"
  },
  {
    "name": "Greenleaf Pharmacy Pearsall",
    "email": "pearsall@greenleaf.au"
  },
  {
    "name": "Pemberton Pharmacy",
    "email": "pembertonpharmacy@westnet.com.au"
  },
  {
    "name": "Chemist Discount Centre Perth CBD",
    "email": "perth@cdcpharmacy.com.au"
  },
  {
    "name": "Craven's Pharmacy",
    "email": "pharmacycravens@gmail.com"
  },
  {
    "name": "Pharmacy 777 Perth City",
    "email": "perthcity@pharmacy777.com.au"
  },
  {
    "name": "Superchem Perth Central",
    "email": "perth@superchem.com.au"
  },
  {
    "name": "Piara Waters Pharmacy",
    "email": "admin@piarawaterspharmacy.com.au"
  },
  {
    "name": "TerryWhite Chemmart Pinjarra",
    "email": "pharmacist@twcmpinjarra.com.au"
  },
  {
    "name": "Pharmacy 777 Port Hedland",
    "email": "porthedland@pharmacy777.com.au"
  },
  {
    "name": "Port Kennedy Pharmacy",
    "email": "services@pkpharmacy.com.au"
  },
  {
    "name": "St Clair Pharmacy & News",
    "email": "stclairpharmacynews@hotmail.com"
  },
  {
    "name": "Ravensthorpe Pharmacy",
    "email": "ravensthorpepharmacy@gmail.com"
  },
  {
    "name": "Ravenswood Amcal Pharmacy",
    "email": "dispensary@ravenswoodpharmacy.com.au"
  },
  {
    "name": "TerryWhite Chemmart Rivervale",
    "email": "info@rivervalechemmart.com.au"
  },
  {
    "name": "Infinity Pharmacy Rockingham",
    "email": "rockingham@theinfinitygroup.net.au"
  },
  {
    "name": "Sonic Rockingham Pharmacy",
    "email": "sonicpharmacy@frednet.com.au"
  },
  {
    "name": "Superchem Rockingham Beach Pharmacy",
    "email": "rockingham@superchem.com.au"
  },
  {
    "name": "TerryWhite Chemmart Rockingham Centre",
    "email": "dispensary.rockingham@twcmgroup.com"
  },
  {
    "name": "Roleystone Community Pharmacy",
    "email": "roleystonecommunitychemist@hotmail.com"
  },
  {
    "name": "Caring Pharmacy Malibu (Compounding Chemist)",
    "email": "malibu@caringpharmacy.com.au"
  },
  {
    "name": "Optimal Pharmacy Plus Scarborough",
    "email": "oppsc@iinet.net.au"
  },
  {
    "name": "Scarborough 7 Day Chemist",
    "email": "scarborough7daychemist@gmail.com"
  },
  {
    "name": "Scarborough Beach Pharmacy",
    "email": "scarboroughbeachpharmacy@gmail.com"
  },
  {
    "name": "Oasis Pharmacy",
    "email": "oasispharmacy.sh@gmail.com"
  },
  {
    "name": "Serpentine Pharmacy",
    "email": "serpentinepharmacy@bigpond.com"
  },
  {
    "name": "Shenton Pharmacy",
    "email": "shenton.pharmacy@frednet.com.au"
  },
  {
    "name": "Pharmacy 777 Shoalwater",
    "email": "shoalwater@pharmacy777.com.au"
  },
  {
    "name": "Pharmacy 777 Sorrento",
    "email": "Sorrento@pharmacy777.com.au"
  },
  {
    "name": "Greg's Discount Chemist South Fremantle",
    "email": "southfreo@ppsportal.com.au"
  },
  {
    "name": "South Hedland Pharmacy",
    "email": "shedlandpharmacy@westnet.com.au"
  },
  {
    "name": "Optimal Pharmacy Plus Southlakes",
    "email": "oppsl@iinet.net.au"
  },
  {
    "name": "Pharmacy 777 South Lake",
    "email": "southlake@pharmacy777.com.au"
  },
  {
    "name": "TerryWhite Chemmart Yunderup",
    "email": "yunderup@twcmgroup.com"
  },
  {
    "name": "Pharmacy 777 Spearwood",
    "email": "spearwood@pharmacy777.com.au"
  },
  {
    "name": "Phoenix Centre Pharmacy",
    "email": "phoenixcentrepharmacy@gmail.com"
  },
  {
    "name": "Botts Compounding Pharmacy",
    "email": "info@bottspharmacy.com.au"
  },
  {
    "name": "St James Newstart Pharmacy",
    "email": "info@sjnp.com.au"
  },
  {
    "name": "St Francis Pharmacy",
    "email": "enquiries@stfrancispharmacy.com.au"
  },
  {
    "name": "Greenleaf Pharmacy Subiaco",
    "email": "subiaco@greenleaf.au"
  },
  {
    "name": "Cockburn Super Clinic Pharmacy",
    "email": "info@csclinicpharmacy.com.au"
  },
  {
    "name": "Priceline Pharmacy Gateways",
    "email": "gateways@theinfinitygroup.net.au"
  },
  {
    "name": "Morrison Road Compounding Pharmacy",
    "email": "mrdip@bigpond.com"
  },
  {
    "name": "Thornlie Square Pharmacy",
    "email": "thornliesqphy@gmail.com"
  },
  {
    "name": "Sal's Pharmacy",
    "email": "salspharmacy@hotmail.com"
  },
  {
    "name": "Tom Price Pharmacy",
    "email": "tompricepharmacy@gmail.com"
  },
  {
    "name": "Trigg Medical Pharmacy",
    "email": "triggmedicalpharmacy@gmail.com"
  },
  {
    "name": "Amcal Tuart Hill",
    "email": "dispensary.tuarthill@amcal.net.au"
  },
  {
    "name": "Pharmacy 777 Dog Swamp",
    "email": "dogswamp@pharmacy777.com.au"
  },
  {
    "name": "Vasse Pharmacy",
    "email": "vassepharmacy@gmail.com"
  },
  {
    "name": "Wagin Pharmacy",
    "email": "waginpharmacy@gmail.com"
  },
  {
    "name": "Optimal Pharmacy Plus Waikiki",
    "email": "oppw@westnet.com.au"
  },
  {
    "name": "TerryWhite Chemmart Waikiki",
    "email": "Dispensary.waikiki@twcmgroup.com"
  },
  {
    "name": "Wangara Pharmacy",
    "email": "wangarapharmacy@outlook.com"
  },
  {
    "name": "Amcal Pharmacy Wanneroo",
    "email": "dispensary@wanneroopharmacy.com"
  },
  {
    "name": "Drovers Pharmacy Wanneroo",
    "email": "wanneroo@droverspharmacy.com.au"
  },
  {
    "name": "TerryWhite Chemmart Warwick",
    "email": "dispense@twcwarwick.com.au"
  },
  {
    "name": "Wattle Grove Pharmacy",
    "email": "wattlegrove6cpa@gmail.com"
  },
  {
    "name": "Wizard Pharmacy Wellard",
    "email": "pm.wellard1@wizardphy.com.au"
  },
  {
    "name": "Pharmacy 777 Wembley",
    "email": "wembley@pharmacy777.com.au"
  },
  {
    "name": "Wembley Pharmacy",
    "email": "wembley@pharmacyalliance.net"
  },
  {
    "name": "TerryWhite Chemmart Wembley Downs",
    "email": "wembleydowns@terrywhitechemmart.com.au"
  },
  {
    "name": "Terry White Chemmart West Leederville",
    "email": "westleederville@terrywhitechemmart.com.au"
  },
  {
    "name": "Wickham Pharmacy",
    "email": "wickhampharmacy@hotmail.com"
  },
  {
    "name": "Pharmacy 777 Willagee",
    "email": "willagee@pharmacy777.com.au"
  },
  {
    "name": "Pharmacy 777 Willetton",
    "email": "Willetton@pharmacy777.com.au"
  },
  {
    "name": "Wizard Pharmacy Willetton",
    "email": "pm.willetton1@wizardphy.com.au"
  },
  {
    "name": "Williams Pharmacy",
    "email": "williams.pharmacy@yahoo.com"
  },
  {
    "name": "Wongan Hills Pharmacy",
    "email": "wonganhillschemist@gmail.com"
  },
  {
    "name": "Woodvale Pharmacy",
    "email": "woodvalephcy@gmail.com"
  },
  {
    "name": "Pharmacy 777 Yanchep",
    "email": "yanchep@pharmacy777.com.au"
  },
  {
    "name": "Yanchep Community Pharmacy",
    "email": "yancheppharmacy@bigpond.com"
  },
  {
    "name": "Caring Pharmacy Yangebup",
    "email": "yangebup@caringpharmacy.com.au"
  },
  {
    "name": "Pharmacy 777 Flinders",
    "email": "flinders@pharmacy777.com.au"
  },
  {
    "name": "Royal Street Community Pharmacy",
    "email": "rscp@ppsportal.com.au"
  },
  {
    "name": "Amcal Yokine Pharmacy",
    "email": "dispensary@yokinepharmacy.com.au"
  },
  {
    "name": "Health Pharmacy York",
    "email": "dispensary@healthpharmacy.com.au"
  }
];

// Show status message
function showMessage(type, msg) {
  document.getElementById('response').innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
}

// Populate delete dropdown
function loadPharmacies() {
  const select = document.getElementById('delete-select');
  pharmacies.forEach(ph => {
    if (ph.email) {
      const option = document.createElement('option');
      option.value = ph.email;
      option.textContent = `${ph.name} (${ph.email})`;
      select.appendChild(option);
    }
  });
}

// Upload form
document.getElementById('upload-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const monFri = document.getElementById('valMonFri').value.trim();
  const sat = document.getElementById('valSat').value.trim();
  const sun = document.getElementById('valSun').value.trim();

  if (!name || !email || !monFri || !sat || !sun) {
    return showMessage('danger', 'All fields are required.');
  }

  const newPharmacy = {
    name,
    email,
    values: {
      "Mon-Fri": monFri,
      "Sat": sat,
      "Sun-Ph": sun
    }
  };

  console.log('📤 Uploaded pharmacy:', newPharmacy);
  showMessage('success', `Pharmacy "${name}" uploaded locally (not saved to database).`);
});

// Delete handler
document.getElementById('delete-btn').addEventListener('click', () => {
  const email = document.getElementById('delete-select').value;

  if (!email) {
    return showMessage('danger', 'Select a pharmacy to delete.');
  }

  console.log('🗑️ Deleted pharmacy:', email);
  showMessage('success', `Pharmacy with email "${email}" deleted locally.`);
});

window.onload = loadPharmacies;
