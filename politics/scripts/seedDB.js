const mongoose = require("mongoose");
const db = require("../models");
// const mpSeed = require("./members");

// This file empties the Mps collection and inserts the mps below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/parliament"
);

const mpSeed = [/* 1 */
  {
    "hansardName": "BHUDA",
    "lastName": "Bhuda",
    "firstName": "Sibusisiwe",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 2 */
  {
    "hansardName": "G. BANDA",
    "lastName": "Banda",
    "firstName": "Gift",
    "otherNames": "",
    "constituency": "Lobengula",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "LOBENGULA \rMDC-A\r \rGender                        :Male\r \rDate of Birth   :  25 /04 /69\r \rPlace of Birth  : Bulawayo\r \rTitle                  :   Mr\r \rStatus                :  Married\r \rContact Details \r \rHome Address           : 114 Circular Drive Branside Bulawayo\r \r            \r \rCell Number    : 0772899599\r \rLandline Number       : 09 240883\r \rEmail Address : giftbanda@hotmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Insukamini Primary School\r \r \rSecondary       :Mpomama Secondary School\r \r \rAny other Forms of Training\rDiploma in Marketing\r \r \rParliamentary Career\rFirst elected Member of Parliament representing Lobengula during the 30 July 2018 harmonized elections.\r \rPolitical History\rMDC Alliance ProvincialChair (Bulawayo) \r \r \rCareer in General\rØ  Businessmen\rØ  Proprietor\r \rAreas of Interest\rØ  Sport\rØ  Mining \rØ  Construction",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-banda-gift",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/fedc90db8b13be1183c785d7eb0335c9_XS.jpg"
  },

  /* 3 */
  {
    "hansardName": "BILLAH",
    "lastName": "Billah",
    "firstName": "Royi",
    "otherNames": "",
    "constituency": "Chiredzi North",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 4 */
  {
    "hansardName": "S. BANDA",
    "lastName": "Banda",
    "firstName": "Samuel",
    "otherNames": "",
    "constituency": "Mount Pleasant",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "MOUNT PLEASANT\rMDC-A\r\r\rGender                        : Male\r \rDate of Birth   : 15 /07/1975\r \rPlace of Birth  : Harare\r \rTitle                  :  Dr Engineer\r \rStatus                :  \r \rHouse              :  National Assembly\r \rContact Details \r \rHome Address           : 7 Maxwell Road \r Mt Pleasant,  Harare\r \rCell Number    : 0715806004\r \rEmail Address : sambanda60@yahoo.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Njerere Primary S\r \rSecondary       : Leopard Takawira and         \r                          CCOSA College \r \r \rTertiary/University     :  \rØ  Harare Polytechnic NC and ND Civil Engineering, \rØ  Pentecostal Life University Masters in Business Management, \rØ  Aztec University at PHD Business Management\rAny other Forms of Training\rParliamentary Career\r2018 – 2023 Member of Parliament\rPolitical History\rJoined MDC in 1999\rCareer in General\rEngineer, Business Management and Consultancy\rAreas of Interest\rØ  Engineering\rØ  Commerce\rØ  Entrepreneurship \rØ  Finance.",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-banda-samuel",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/29e7ada72b2d6cbbca10c75790955922_XS.jpg"
  },

  /* 5 */
  {
    "hansardName": "BITI",
    "lastName": "Biti",
    "firstName": "Laxton",
    "otherNames": "Tendai",
    "constituency": "Harare East",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "BITI TENDAI\rHARARE EAST\rMDC A\r \rGender:            Male\r            \rDate of Birth:    6/08/1966\r            \rPlace of Birth:  Harare\r            \rTitle:                Mr\r                        \rStatus:              Married\r \rHouse:               National Assembly   \r \r \r \rContact Details \r \rHome Address:         2 Powland Glen Lorne \r            \r \rCell Number:         0712602401\r \rLandline Number:      \r \rEmail Address  dotito45@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:                     \r \r \rSecondary:   Goromonzi High School               \r            \r \rTertiary/ University: \r               \rAny other Forms of Training\r \r            \rParliamentary Career\rØ  Member of Parliament for Harare East 2000-2015\rØ  Re  elected in September 2018 to date\r \r \rPolitical History\r \rSecretary General for MDC- A 2006-2014\r \rCareer in General\rOne of the Zimbabwe’s leading Constitutional Lawyers\rAreas of Interest\rØ  Law\rØ  Economics\rØ  History\rØ  Humanities",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-biti-tendai",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/29e7ada72b2d6cbbca10c75790955922_XS.jpg"
  },

  /* 6 */
  {
    "hansardName": "CHAMISA",
    "lastName": "Chamisa",
    "firstName": "Starman",
    "otherNames": "",
    "constituency": "Mbare",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "CHAMISA STARMAN\rMBARE \rMDC-A\r \rGender                        : Male\r \rDate of Birth   : 23/07/1980\r \rPlace of Birth  : Gutu\r \rTitle                 : Mr.\r \rStatus             :  Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address; Block 5 B 2 Nenyere Flats Mbare\r \rCell Number    : 0712 758441\r \rLandline Number\r \rEmail Address : schamisa@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Humba\r \r \rSecondary       : Chiwara Makuva\r \rTertiary/ University    : Degree on Local  Government(University of Zimbabwe)\rAny other Forms of Training\rMarketing\r            \rParliamentary Career\rFirst elected Member of Parliament representing Mbare Constituency\rPolitical History\r \rTreasurer district\r \rCareer in General\rØ  Marketing \rØ  Accounting\r \rAreas of Interest\rØ  Mines and Energy\rØ  Healthy and Childcare\rØ  Transport and Communications",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chamisa-starman",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/29e7ada72b2d6cbbca10c75790955922_XS.jpg"
  },

  /* 7 */
  {
    "hansardName": "BUSHU",
    "lastName": "Bushu",
    "firstName": "Bramwell",
    "otherNames": "",
    "constituency": "Shamva South",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "BUSHU BRAMWELL\rSHAMVA SOUTH \rZANU PF\r \rGender                        : Male \r \rDate of Birth   : 11/09/1963\r \rPlace of Birth  : Shamva\r \rTitle                  :   Mr\r \rStatus                :   Married\r \r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           :Kajakata Village\rBushu Communal Lands \rShamva\r \rCell Number    : 0778251526\r \rEmail Address : bramwellbushu@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Bushu Primary School\r \r \rSecondary       : Howard Secondary and St Augustine High\r \r \rTertiary/ University    :  \rU Z -Bachelor of Business Studies\rAny other Forms of Training\r            \rInstitute of Marketing Diploma (SouthAfrica)\r \rParliamentary Career\rØ  First elected Member of Parliament representing Shamva South during the 30July 2018 harmonized elections.\r \rPolitical History\rØ  War collaborator in Shamva\rØ  Joined ZANU PF in 1980\rØ  Was a member of the Party at the University Avondale Branch in 1983\rØ  Currently a party member under Bushu District.\rØ  Responsible for legal affairs\rØ  Has held several positions within the district \r \rCareer in General\rØ  Captain of industry \rØ  Has worked with various companies in various positions e.g. BAT (ZIM) as Regional Sales Manager,\rØ   TA holding worked as a Marketing Director for Aroma Bakeries, Delta Beverages\rØ   Marketing Manager for Chibuku Breweries, \rØ  CAPs Pharmaceuticals as Marketing Director for QV Pharmacy\rØ  Harambe Holdings as Chief Operations Officer (2000– 2010),\rØ  President of CZI Mashonaland Chamber 2008 -2009\rØ  National Bakers Association President 2006-2010 \rØ  Currently a businessman focusing on farming and mining. \rØ  Industrialist for more than 30 years.\rAreas of Interest\rManufacturing and mining.",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-bushu-bramwell",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/29e7ada72b2d6cbbca10c75790955922_XS.jpg"
  },

  /* 8 */
  {
    "hansardName": "BVUTE",
    "lastName": "Bvute",
    "firstName": "Ozias",
    "otherNames": "",
    "constituency": "Goromonzi North",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 9 */
  {
    "hansardName": "CHADZAMIRA",
    "lastName": "Chadzamira",
    "firstName": "Ruvai",
    "otherNames": "Ezra",
    "constituency": "Masvingo West",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 10 */
  {
    "hansardName": "CHASI",
    "lastName": "Chasi",
    "firstName": "Fortune",
    "otherNames": "",
    "constituency": "Mazowe South",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "MAZOWE SOUTH\rZANU PF\r \rGender                        : Male\r \rDate of Birth   :  05 February 1965\r \rPlace of Birth  :  Bulawayo\r \rTitle                  :   Advocate\r \rStatus                :   Married\r \rHouse  :  National Assembly\r \r \rContact Details \r \rHome Address           :  1 Cheshire Road, Mount Pleasant\r \rCell Number    :   +263 713 606 070 / +263 772 160 379\r \rLandline Number       : 332420\r \rEmail Address : fortunechasi@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : \r \r \rSecondary       :\r \rTertiary/ University\rØ  BL (UZ)\rØ  LLB (UZ) \rØ  LLM (ESSEX) MIR, U.Z \rØ  LLM (CUMBRIA) Candidate D.Phil. (U.Z)\r \rAny other Forms of Training\r            \r \rParliamentary Career    : \rØ  Member of Parliament since 2013 in the National Assembly representing Mazowe South \rØ  Chaired the Parliamentary Legal Committee\rØ  Chaired the  Justice Committee\rØ  Deputy Minister of Energy and Development\r \rPolitical History:\rØ  Member of ZANU PF since 1977 \rØ  Member of the Politburo, \rØ  Chaired the Department of Legal Affairs in the Party\r \r \rCareer in General:\rØ  Prosecutor\rØ  Private Lawyer\rØ  Legal Counsel at RBZ 1985 -2013 \r \rAreas of Interest: \rØ  Finance\rØ  I.T\rØ  International relations",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chasi-fortune",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/29e7ada72b2d6cbbca10c75790955922_XS.jpg"
  },

  /* 11 */
  {
    "hansardName": "CHANDA",
    "lastName": "Chanda",
    "firstName": "Gorden",
    "otherNames": "",
    "constituency": "Gokwe Sesame",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "CHANDA GORDEN\rGOKWE SESAME \rZANU PF\r \rGender                        : Male\r \rDate of Birth   :  07 September\r \rPlace of Birth  :  Gokwe South\r \rTitle                  :  Mr\r \rHouse              :  National Assembly\r \r \rContact Details \r \rHome Address : 810 Nyaradza Gokwe\r \rCell Number    :   +263 779 516 426\r \rLandline Number:\r \rEmail Address :\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Dzire Primary\r \r \rSecondary       : St Boniface and Tare Sec \r \rTertiary/University     : \r \rAny other Forms of Training\rNational Youth Service Graduate, Red Cross Society           \r \rParliamentary Career\rFirst elected MP for Gokwe Sesame during the 30 July 2018 harmonized elections. \r \r \rPolitical History:\rStarted in 1999.\r ZANU PF Youth Officer\r \rCareer in General:\rCivil Servant for 10 years\r \rAreas of Interest: \r Reading novels and soccer.",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chanda-gorden",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/29e7ada72b2d6cbbca10c75790955922_XS.jpg"
  },

  /* 12 */
  {
    "hansardName": "CHIBAYA",
    "lastName": "Chibaya",
    "firstName": "Amos",
    "otherNames": "",
    "constituency": "Mkoba",
    "party": "MDC- Alliance",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 13 */
  {
    "hansardName": "CHIBAGU",
    "lastName": "Chibagu",
    "firstName": "Getrude",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "HON CHIBAGU GERTRUDE\rMBIRE GURUVE\rZANU PF\r \rGender                        : Female\r \rDate of Birth   :14/01/1947\r \rPlace of Birth  : Gutu\r \rTitle                 :   Ms\r \rStatus               : Married\r \rHouse                          : National Assembly\r \r \rContact Details \r \rHome Address           :Chitsungo Mission\r \rCell Number:0712381924\r \rLandline Number       :N\\A\r \rEmail Address :N\\A\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Chitsa Standard Six\r \rSecondary       :N\\A\r \rTertiary/ University: N\\A\r \r \r \rAny other Forms of Training\rCo-coordinator for Woman Projects\r \rParliamentary Career\rØ  2008-2013 Senator\rØ  2013-2018 Women’s Quarter \rØ  2018 Current Women’s Quarter\rPolitical History\rØ  Detained at Gonakudzingwa for Political Activism while still at school\rØ  1972 Detained at Gutsa Camp in Muzarabani\rØ  1975  Sent to  Chitsungo , Mushumbi Camp\rØ  1980 Secretary for Women’s League-Mbire\rØ  1982- Provincial Member- Women’s League\rØ  Secretary for Health, Lands, Information and Publicity\rØ  2008Member of the Central Committee\r \rCareer in General\r \rPolitically active from a young age up to now\rAreas of Interest\rØ  Projects\rØ  Governance\rØ  Health\rØ  Transport\rØ  Agriculture",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chibagu-gertrude",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/29e7ada72b2d6cbbca10c75790955922_XS.jpg"
  },

  /* 14 */
  {
    "hansardName": "J. CHIDAKWA",
    "lastName": "Chidakwa",
    "firstName": "James",
    "otherNames": "",
    "constituency": "Mabvuku-Tafara",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 15 */
  {
    "hansardName": "P. CHIDAKWA",
    "lastName": "Chidakwa",
    "firstName": "Patrick",
    "otherNames": "",
    "constituency": "Marondera East",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 16 */
  {
    "hansardName": "CHIDAMBA",
    "lastName": "Chidamba",
    "firstName": "Sydney",
    "otherNames": "",
    "constituency": "Mazowe Central",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "CHIDAMBA SYDNEY\rMAZOWE CENTRAL\rZANU PF\r \rGender                        :   Male\r \rDate of Birth   :  23/03/1969\r \rPlace of Birth  : Howard Hospital Mazowe District\r \rTitle                  :   Mr\r \rStatus                :  Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address             : Arda Farm Mvurwi\r \rCell Number               : 0772 390062 / 0719390062\r \rLandline Number       : \r \rEmail Address : sydneychidamba@gmail.comcom\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Haward Primary\r \r \rSecondary       : Marondera High    \r                        : Dombodombo Study Group\r \rTertiary/ University    :\rØ  Kushinga Phikelela \rØ  Diploma in Marketing and Administration\r \rAny other Forms of Training\rAgriculture\r \rParliamentary Career\rFirst elected Member of Parliament representing Mazowe Central during the 30 July 2018 harmonized elections.\r \rPolitical History\rØ  Held several positions \rØ  D.C.C up to province\rØ  Vice Provincial Chairman for Mashonaland Central ZANU PF\r \rCareer in General\rFarming\rAreas of Interest\rØ  Mining\rØ  Agriculture",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chidamba-sydney",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/fedc90db8b13be1183c785d7eb0335c9_XS.jpg"
  },

  /* 17 */
  {
    "hansardName": "CHIDZIVA",
    "lastName": "Chidziva",
    "firstName": "Happymore",
    "otherNames": "",
    "constituency": "Highfield West",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "CHIDZIVA HAPPMORE\rHIGHFIELD WEST\rMDC-A\r \rGender                        :  Male\r \rDate of Birth   :  27/12/1980\r \rPlace of Birth  :  Madziva Shamva\r \rTitle                  :  Mr\r \rStatus              :   Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address        : 6249 Western Triangle, Highfield, Harare\r \rCell Number            :  0777488530\r \rLandline Number     : N\\A\r \rEmail Address           : chidzivahappy@gmail.com\r \r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Makwechere Primary \r \rSecondary       :Dubugwani Secondary \r \rTertiary/ University    : \rØ  Social Development Studies\rØ  Computer Science: Kwekwe Polytechnic\r \rAny other Forms of Training\rLeadership\r \r \rParliamentary Career\rFirst elected MP in 2018\r \r \rPolitical History\rØ  Human Rights defender\rØ  MDC Alliance\rØ  NCA\rØ  COPAC\r \r \rCareer in General\rPolitician\r \rAreas of Interest\rØ  Security\rØ  International Relations \rØ  Mining\rØ  ICT\rØ  Youths",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chidziva-happmore",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/77b366dd254a43618bcbedaf86ab4031_XS.jpg"
  },

  /* 18 */
  {
    "hansardName": "CHIKOMBA",
    "lastName": "Chikomba",
    "firstName": "Leonard",
    "otherNames": "",
    "constituency": "Gokwe-Kabuyuni",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 19 */
  {
    "hansardName": "CHIKUDO",
    "lastName": "Chikudo",
    "firstName": "Rueben",
    "otherNames": "",
    "constituency": "Goromonzi South",
    "party": "MDC- Alliance",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 20 */
  {
    "hansardName": "CHIKOMBO",
    "lastName": "Chikombo",
    "firstName": "Wellington",
    "otherNames": "",
    "constituency": "Glen Norah",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 21 */
  {
    "hansardName": "CHIHURURU",
    "lastName": "Chihururu",
    "firstName": "Constance",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 22 */
  {
    "hansardName": "CHIKUNI",
    "lastName": "Chikuni",
    "firstName": "Esther",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 23 */
  {
    "hansardName": "CHIKWAMA",
    "lastName": "Chikwama",
    "firstName": "Berta",
    "otherNames": "",
    "constituency": "Gutu East",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 24 */
  {
    "hansardName": "CHIKWINYA",
    "lastName": "Chikwinya",
    "firstName": "Settlement",
    "otherNames": "",
    "constituency": "Mbizo",
    "party": "MDC- Alliance",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 25 */
  {
    "hansardName": "CHIKUKWA",
    "lastName": "Chikukwa",
    "firstName": "Miriam",
    "otherNames": "Rutendo",
    "constituency": "Proportional Representation",
    "party": "ZANU - PF",
    "province": "Harare",
    "bio": "HARARE METROPOLITAN\rZANU PF\r \r \rGender                        : Female \r \rDate of Birth   : 27/01/1963\r \rPlace of Birth  :Mutare\r \rTitle                 :   Ms\r \rStatus               : Single\r \rHouse                          :  National Assembly\r \r \rContact Details \r \rHome Address           :771 Milford Road Parktown Waterfalls\r \rCell Number    : 0712836376\r \rLandline Number       :\r \rEmail Address : miriamchikukwa@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Kagore School /Mt Mellary\r \rSecondary       : Howard Secondary School \r                         ZJC\r                         Morgan High School\r \rTertiary/ University    \rØ  UNISA- Bachelor of Social Science- Community Specialising in Community Development\rØ  ALGATE- MBA\rØ  Studying – PHD with Zim Open University- D-PHIL\r \rAny other Forms of Training\rØ  Newburg Seminary- Pastoral Leadership Degree\rØ  Zim- General Management Diploma\rØ  City Guilds Mat South  MST\rØ  Crown Agency – Purchasing \rØ  UK- Certificate in Purchasing Supply \r \r \rParliamentary Career\rØ  MP 2013-2018- Minister of State for Harare Metropolitan Province\rØ  World Peace Ambassador MP 2018-2023\r \rPolitical History\rØ  Joined ZANU PF in 1975 as  a war collaborator (chibwido)\rØ  Gender activist\rØ  Rose from Cell- Central Committee Member ZANU PF\r \rCareer in General\rØ  Registry Supervisor\rØ  Buyer- Central Purchasing Authority/ CMED\rØ  Purchasing manager NSSA\rØ  Admin and Service Manager- NSSA Service Pastor- Kingdom Church Zimbabwe\rØ  Chief Administrator in the Bishop’s Office- SADC\rØ  Bishop Climate Ministries \r \rAreas of Interest\rØ  Development\rØ  Religion \rØ  Peace",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chikukwa-miriam-rutendo",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/77b366dd254a43618bcbedaf86ab4031_XS.jpg"
  },

  /* 26 */
  {
    "hansardName": "CHIMBAIRA",
    "lastName": "Chimbaira",
    "firstName": "Goodrich",
    "otherNames": "",
    "constituency": "Zengeza East",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "CHIMBAIRA GOODRICH\rZENGEZA EAST\rMDC A\r            \rGender                                    : MALE\r            \rDate of Birth               : 25/10/1972\r            \rPlace of Birth              : Seke\r            \rTitle                             : MR \r                        \rStatus                          : Married\r \rHouse                          :National Assembly                 \r \r \r \rContact Details \r \rHome Address:          19517 Unit Seke, Chitungwiza            \r            \rCell Number:              0772859404  \r \rLandline Number:      \r \rEmail Address gchimbaira@gmail.com\r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:              Seke 1 Primary Chitungwiza\r \rSecondary:            Seke 1 High School   Chitungwiza  \r            \rTertiary/University:             \rDegree in Marketing( ZOU)\r \rAny other Forms of Training\r \r            \rParliamentary Career\r2005-2008 (MP for Zengeza Constituency)\r \r \rPolitical History\rØ  Member of Parliament for Zengeza East Constituency in 2006-2008 for MDC \rØ  National Chairperson for MDC from 2010 to 2013\rØ  Member of National Assembly for Zengeza East Constituency 2018\r \r \rCareer in General\rBusinessman in Transport Sector\rAreas of Interest\rØ  Mining and Energy\rØ  Health and Child Care\rØ  Transport and Communication",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chimbaira-goodrich",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/77b366dd254a43618bcbedaf86ab4031_XS.jpg"
  },

  /* 27 */
  {
    "hansardName": "CHIMINA",
    "lastName": "Chimina",
    "firstName": "Livingstone",
    "otherNames": "",
    "constituency": "Chiwundura",
    "party": "MDC- Alliance",
    "province": "Midlands",
    "bio": "CHIMINA LIVINGSTONE \rCHIWUNDURA \rMDC-A\r \rGender                        :  Male\r            \rDate of Birth   :  30/12/1980\r            \rPlace of Birth  :  Chikomba\r            \rTitle                 :  Mr\r                        \rStatus              :   Married\r \rHouse              :   National Assembly              \r \r \r \rContact Details \r \rHome Address:                       House No.2413-1, Mkoba 14, Gweru\r            \rCell Number:                 0773277268\r \rLandline Number:      \r \rEmailAddress             liviechimina@gmail.com\r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            :    Manyere Primary School\r \rSecondary       :    Neshangwe High School\r \rTertiary/University       \rAny other Forms of Training\rØ  Para-legal Training\rØ  Industrial Relations- IPMZ\rParliamentary Career\rFirst elected MP in 2018\r \rPolitical History\rØ  MDC Member since 1999\rØ  Currently MDC Youth Leader for Midlands Province\r \r \rCareer in General\rHuman Resources Practioneer\rAreas of Interest\rØ  Youth \rØ  Local Governance",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chimina-livingstone",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/77b366dd254a43618bcbedaf86ab4031_XS.jpg"
  },

  /* 28 */
  {
    "hansardName": "CHINANZVAVANA",
    "lastName": "Chinanzvavana",
    "firstName": "Consilia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland West",
    "bio": "CHINANZVAVANA CONCILIA\rPROPORTIONAL REPRESENTATION\rMDC A\r            \rGender             :           FEMALE\r            \rDate of Birth    :          07/09/1972\r            \rPlace of Birth   :         Chinhoyi\r            \rTitle                 :          Mrs\r                        \rStatus               :          Married\r \rHouse              :        National Assembly         \r \r \r \rContact Details \r \rHome Address:      Stand 828 B Kuwadzana Banket Chinhoyi            \r            \r \rCell Number      :    0772700134/ 0716 865472\r \rLandline Number:      064 24-3193\r \rEmail Addressccmasuku@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:              Chikonohono Primary Chinhoyi\r \r \rSecondary:           Nemakonde High School Chinhoyi\r \rTertiary/ University:               \rØ  BCOM in HR at ZOU\rØ  Diploma in Education at University of Zimbabwe\r \rAny other Forms of Training\rTeacher Training\r \rParliamentary Career\rFirst elected MP in the 8THParliament. \rServing in the following Portfolio Committees:\rØ  Education\rØ  Environment and Tourism \rØ  ZWPC member\r \r \rPolitical History\rØ  A member of the MDC party since inception in 1999\rØ  Provincial Women Chair Mashonaland West 2006-2011\rØ  National Executive member MDC-T 2011 to date\rØ  Secretary for National Healing and Social Welfare\rØ  Secretary for Cadreship Training and Development\r \rCareer in General\r \rA High School Teacher by profession who specialized in English /Phys-education 1994-2007\r \rAreas of Interest\rØ  Education\rØ  Gender\rØ  Industry and Commerce\rØ  Environment",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chinanzvavana-concilia",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/77b366dd254a43618bcbedaf86ab4031_XS.jpg"
  },

  /* 29 */
  {
    "hansardName": "CHINOMONA",
    "lastName": "Chinomona",
    "firstName": "Mabel",
    "otherNames": "Memory",
    "constituency": "Mutoko North",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 30 */
  {
    "hansardName": "CHINGOSHO",
    "lastName": "Chingosho",
    "firstName": "Christopher",
    "otherNames": "Peter",
    "constituency": "Headlands",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 31 */
  {
    "hansardName": "CHIPATO",
    "lastName": "Chipato",
    "firstName": "Angelline",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 32 */
  {
    "hansardName": "CHINOTIMBA",
    "lastName": "Chinotimba",
    "firstName": "Joseph",
    "otherNames": "",
    "constituency": "Buhera South",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "BUHERA SOUTH\rZANU PF\r \rGender             :  Male\r            \rDate of Birth    :   06/06/1957\r            \rPlace of Birth   :   Buhera\r            \rTitle                 :  Mr\r                        \rStatus               : Married\r \rHouse              :  National Assembly               \r \r \r \rContact Details \r \rHome Address:         2257 Cleveland Road, Malbereign, Harare         \rMushongwa Business Center, Buhera South, Buhera\r            \rCell Number:                0712869055\r \rLandline Number:      \r \rEmail Address             chinotimbaj@gmail.com\r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:                      \r \rSecondary:                  Form 2\r \rTertiary/University:                  N/A\r \rAny other Forms of Training\rSoldier (War Veteran)\r \rParliamentary Career \rMP representing Buhera South since 2013. Reelected in 2018.\r \rPolitical History\rA Member of ZANU PF since 1970\r \rCareer in General\rFarmer and Businessman\rAreas of Interest\rFarming",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chinotimba-joseph",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/77b366dd254a43618bcbedaf86ab4031_XS.jpg"
  },

  /* 33 */
  {
    "hansardName": "CHITANDO",
    "lastName": "Chitando",
    "firstName": "Winston",
    "otherNames": "",
    "constituency": "Gutu Central",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 34 */
  {
    "hansardName": "CHINYANGANYA",
    "lastName": "Chinyanganya",
    "firstName": "Muchineripi",
    "otherNames": "",
    "constituency": "Kadoma Central",
    "party": "MDC- Alliance",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 35 */
  {
    "hansardName": "CHITURA",
    "lastName": "Chitura",
    "firstName": "Lucia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "PROPORTIONAL REPRESENTATION\rZANU PF\r \rGender                        : Female\r \rDate of Birth   : 08/04/1954\r \rPlace of Birth  : Rusape General Hospital\r \rTitle                 :  Mrs\r \rStatus               : Married\r \rHouse              :  National Assembly\r \rContact Details \r \rHome Address           : Plot No 44 Tiny Extension\r                               Box 219 Rusape\r \rCell Number    :0777693604\r \rLandline Number:N\\A\r \rEmail Address : chituralucia@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Vengere Primary School Sub A to standard 6\rSecondary       : Mambo Junior Certificate\r \rTertiary/University     : N\\A\r \rAny other Forms of Training\rØ  NASCUZ\rØ  Leadership\rØ  Red Cross\rParliamentary Career\rØ  First elected 2013\rØ  Re-elected 2018\r \rPolitical History\rØ  Detained by the Rhodesian soldiers at Chiwetu Training Centre 1978 to 1979\rØ  1981- Chairperson Tikwiri District\rØ  1992- Provincial Secretary for Production Provincial woman’s league\rØ  2000 Secretary for Information and Publicity\rØ  2008- secretary for the disabled\rØ  2010- secretary for Disabled\rØ  2013- National secretary for Business Liaison and Central committee member\rCareer in General\r \rØ  Councilor M.R.D.C\rØ  Secretary for NASCUZ  Zimbabwe\rØ  Political Leader\rØ  Farmer- Master Farmer Certificate and advanced Master Certificate Farmer\rØ  Coordinator ZANU PF 13 years\rAreas of Interest\rØ  Going to Church\rØ  Politics\rØ  Reading\rØ  Watching television",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chitura-lucia",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/7183d1ac9023a88231141db68b1cff02_XS.jpg"
  },

  /* 36 */
  {
    "hansardName": "CHOMBO",
    "lastName": "Chombo",
    "firstName": "Marrian",
    "otherNames": "",
    "constituency": "Zvimba North",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 37 */
  {
    "hansardName": "CHIYANGWA",
    "lastName": "Chiyangwa",
    "firstName": "Philip",
    "otherNames": "",
    "constituency": "Zvimba South",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "ZVIMBA SOUTH\rZANU PF\r \rGender                        :  Male\r \rDate of Birth   :  03/02/1959\r \rPlace of Birth  :  Chegutu\r \rTitle                  :  Dr\r \rStatus                :  \r \rHouse              :  National Assembly\r \r \rContact Details \r \rHome Address           :  11 Crowhill Road Borrowdale, Harare,Zimbabwe\r \r            \rCell Number    :  0772411242\r \rLandline Number: +263733411971\r \rEmail Address:Philip.chiyangwa@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Chegutu Primary\r \rSecondary                  : St Francis School\r \rTertiary/ University    : \r \rAny other Forms of Training\rØ  Fellow of the institute of Proffessional Management and Admin (Jersey U.K)\rØ  Doctor of Philosophy in Business Leadership-Dominica,St Luma University.\r \rParliamentary Career\rØ  First elected M.P for Chinhoyi 2000-2005. Reelected during the 30 July 2018 harmonized elections2018.\r \r \rPolitical History\rØ  Member of ZANU PFfrom 1977. \rØ  Currently serves as Central Committee member. \rØ  Provincial Chairman 2001-2005-Mashonalad West Province. \r \r \rCareer in General\rØ  Businessman and Sports Administrator-ZIFA/COSAFA President and CAF Ex-Officio memberVice President CAF Afcon Games\r \rAreas of Interest\rØ  Soccer\rØ  Boxing \rØ  Wrestling",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-chiyangwa-phillip",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/7183d1ac9023a88231141db68b1cff02_XS.jpg"
  },

  /* 38 */
  {
    "hansardName": "DINAR",
    "lastName": "Dinar",
    "firstName": "Kennedy",
    "otherNames": "",
    "constituency": "Glenview North",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "GLENVIEW NORTH\rMDC-A\r \rGender:                       Male\r            \rDate of Birth:              09/03/1978    \r            \rPlace of Birth:             Harare   \r            \rTitle:                            Mr\r                        \rStatus:                       \r \rHouse:                         National Assembly      \r \r \r \rContact Details \r \rHome Address:                       8886 103 Crescent Glen View 8 Harare\r            \rCell Number:                           0773222610\r \rLandline Number:      \r \rEmail Address           kenyDinar@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:                      Ghana Primary School Kwekwe\r \rSecondary:                 Dewure High School \r \rTertiary/University:                \rØ  Harare Polytechnic College\rØ  Belvedere Teachers College \r \r \rAny other Forms of Training\rØ  Sports/Physical Education \rØ  Logistics Transport \rØ  Draughting \rØ  Designing Technology in Mechanical Engineering\r \rParliamentary Career\rFirst elected MP representing Glen View North during the 30 July 2018 harmonized elections.\r \r \rPolitical History\rØ  Harare Polytechnic Student Representative Council Member\rØ  Elections Secretary District-MDC Alliance\rØ  Information Secretary MDC Alliance\r \r \rCareer in General\rØ  Sports Administration \rØ  Health Education\rØ  Teaching\rØ  Transport and Logistics\r \rAreas of Interest\rØ  Mines and Energy\rØ  Health and Child Care\rØ  Transport and Communication",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/dinar-kennedy",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/52804e667e51a1ffe5b4b23ad3f56e8f_XS.jpg"
  },

  /* 39 */
  {
    "hansardName": "G. DUBE",
    "lastName": "Dube",
    "firstName": "Godfrey",
    "otherNames": "",
    "constituency": "Hwange West",
    "party": "MDC- Alliance",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 40 */
  {
    "hansardName": "P. DUBE",
    "lastName": "Dube",
    "firstName": "Patrick",
    "otherNames": "",
    "constituency": "Gwanda Central",
    "party": "MDC- Alliance",
    "province": "Matabeleland South",
    "bio": "GWANDA CENTRAL\rMDC A\r \rGender                                    : Male\r \rDate of Birth               : 12/02/1951\r \rPlace of Birth              :  Gwanda Hospital\r \rTitle                              :  Mr\r \rStatus                           :   Married\r \rHouse                          :  National Assembly\r \r \r \rContact Details \r \rHome Address           :  831 Jahunda, Gwanda\r \r            \r \rCell Number    :  0773672301\r \rLandline Number: \rEmail Address : patrickdube51@gmail.com\rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : STD 6 1969\r \r \rSecondary       : \r \r \rTertiary/ University    : \rAny other Forms of Training\r            \r \rParliamentary Career\r \rØ  First became an MP during the period 2008-2013\rØ  Member of the Agriculture Committee\rØ  Was an M.P at Pan African Parliament from 2008-2013.\rØ  Reelected in 2018.\r \r \rPolitical History\rØ  Chairperson of the ZAPU wing in 1975 crossed to Botswana \rØ  Was part of the administrators at ZAPU offices in SelebiPhikwe and Francistown camps, came back to Zimbabwe after General elections in 1980\r \r \rCareer in General\rØ  Miner \rØ  Farmer\r \rAreas of Interest\rØ  Agriculture\rØ  Mining",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-dube-patrick",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/7183d1ac9023a88231141db68b1cff02_XS.jpg"
  },

  /* 41 */
  {
    "hansardName": "DUTIRO",
    "lastName": "Dutiro",
    "firstName": "Patrick",
    "otherNames": "",
    "constituency": "Guruve South",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 42 */
  {
    "hansardName": "DZEPASI",
    "lastName": "Dzepasi",
    "firstName": "Girovah",
    "otherNames": "",
    "constituency": "Guruve North",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 43 */
  {
    "hansardName": "DZUMA",
    "lastName": "Dzuma",
    "firstName": "Soul",
    "otherNames": "",
    "constituency": "Buhera West",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 44 */
  {
    "hansardName": "B. DUBE",
    "lastName": "Dube",
    "firstName": "Brian",
    "otherNames": "",
    "constituency": "Gweru Urban",
    "party": "MDC- Alliance",
    "province": "Midlands",
    "bio": "GWERU URBAN\rMDC-A\r \rGender                        :   Male \r            \rDate of Birth   :   25/06/1980\r            \rPlace of Birth  :    Mberengwa\r            \rTitle                 :   Mr  \r                        \rStatus              :    Single       \r \rHouse              :   National Assembly\r \r \rContact Details \r \rHome Address:       No. 7 Towers, Flats 5th Street, Gweru\r \rCell Number:            0773078897    \r \rLandline Number:    054 211009\r \rEmail Address                   dubebrian2000@gmail.com\r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:  Chavengwa Primary                    \r \rSecondary:  Maringambizi Secondary                \r \rTertiary/University:       \rØ  Master of Law International Criminal Justice  at Open University of Tanzania\rØ   Bachelor of Laws Honours at University of Zimbabwe\r    \rAny other Forms of Training\rØ  Legal Drafting\rØ  International Criminal litigation\r            \rParliamentary Career\rFirst elected MP representing Gweru Urban during the 30July 2018 harmonized elections.\r \rPolitical History\rØ  Student Activist from 2000-2004\rØ  Human Rights   Activist from 2004 - date\r \r \rCareer in General\rØ  Legal Practitioner\rØ  Former Public Prosector\r \rAreas of Interest\rØ  Law \rØ  Human Rights",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/dube-brian",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/7183d1ac9023a88231141db68b1cff02_XS.jpg"
  },

  /* 45 */
  {
    "hansardName": "GARWE",
    "lastName": "Garwe",
    "firstName": "Daniel",
    "otherNames": "",
    "constituency": "Murewa North",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 46 */
  {
    "hansardName": "GANDAWA",
    "lastName": "Gandawa",
    "firstName": "Musavaya",
    "otherNames": "Ability",
    "constituency": "Hurungwe North",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 47 */
  {
    "hansardName": "GORERINO",
    "lastName": "Gorerino",
    "firstName": "Oscar",
    "otherNames": "",
    "constituency": "Shamva North",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 48 */
  {
    "hansardName": "GONESE",
    "lastName": "Gonese",
    "firstName": "Innocent",
    "otherNames": "Tinashe",
    "constituency": "Mutare Central",
    "party": "MDC- Alliance",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 49 */
  {
    "hansardName": "GEZI",
    "lastName": "Gezi",
    "firstName": "Tsitsi",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 50 */
  {
    "hansardName": "GABBUZA",
    "lastName": "Gabbuza",
    "firstName": "Joel",
    "otherNames": "Gabuza",
    "constituency": "Binga South",
    "party": "MDC- Alliance",
    "province": "Matabeleland North",
    "bio": "BINGA SOUTH\rMDC A\r \rGender                        :   Male\r \rDate of Birth   :  10/09/1967\r \rPlace of Birth  :  Binga\r \rTitle                  :   Mr\r \rStatus                :  Married\r \rHouse             :  National Assembly\r \r \rContact Details \r \rHome Address           :656 Binga Kaani\r                                    Manzasiya Village \r                                   Binga\r \r            \rCell Number    :   +263 778 666 188 /+263 716 689 851\r \rLandline Number :  N/A\r \rEmail Address : gabbuzaj@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary: Binga primary school\r \rSecondary       :Binga Secondary school O’levels& Mzingwane High School ‘A’ level\r \rTertiary/ University    : \rØ  University of Zimbabwe Degree in Geology/geography\rØ  NUST- MBA Executive, photography\r \rAny other Forms of Training:\rØ  Land survey \rØ  House wiring \rØ  Building drawings\r            \rParliamentary Career:\rØ  MP since 2000 Chair of mines and energy, environment committee\rØ  Member in Media, local government Committees\r \rPolitical History\rØ  Founder and member of MDC since 1999\rØ  District executive in 1999\rØ  Provincial treasurer\rØ  NEC Member- secretary for mines since 2000\r \rCareer in General:\rØ  Teacher/ Lecturer\rØ  Mining Geologist- kamativi\r \rAreas of Interest:\rØ  Mines/energy\rØ  Environment and tourism\rØ  Local government and water",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-gabbuza-joel",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/7183d1ac9023a88231141db68b1cff02_XS.jpg"
  },

  /* 51 */
  {
    "hansardName": "S. GUMBO",
    "lastName": "Gumbo",
    "firstName": "Sithembile",
    "otherNames": "",
    "constituency": "Lupane East",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 52 */
  {
    "hansardName": "J. GUMBO",
    "lastName": "Gumbo",
    "firstName": "Joram",
    "otherNames": "Macdonald",
    "constituency": "Mberengwa West",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 53 */
  {
    "hansardName": "GOZHO",
    "lastName": "Gozho",
    "firstName": "Cathrine",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Midlands",
    "bio": "PROPORTIONAL REPRESENTATION\rMDC-A\r \rGender:            Female\r \rDate of Birth:  10/03/1972\r \rPlace of Birth: Gokwe Nembudziya\r \rTitle:                Mrs\r \rStatus:             Married\r \rHouse:             National Assembly                      \r \rContact Details \r \rHome Address:      Shingai Primary School, P Bag 1054, Gokwe Nembudziya Shumba Dam\r \rCell Number:        0773517059\r \rLandline Number:      N\\A\r \rEmail Address:          N\\A\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:        Shingai Primary School, P Bag 1054,  Gokwe Nembudziya   \r \rSecondary: Dukaupfu Secondary School       \r Rotter View College, Rimuka Kadoma\r \rTertiary/ University:   \r \rAny other Forms of Training\r⦁ Community Healing\r⦁ Psychological Trauma\r⦁ Counseling Skills, Stress Management\r⦁ Building Resistance Basic Care and Supportive Skills\r \r \rParliamentary Career\rFirst elected MP in 2018\r \rPolitical History\r⦁ Joined MDC in 1999 at the formation of the party as an ordinary party member. \r⦁ Elected District Secretary for Women’s Assembly in 2000. \r⦁ Elected Vice Secretary in 2001 for Woman Affairs at Provincial Level. \r⦁ Elected as Secretary for Sports and Culture at National level in 2002-2010 \r⦁ Elected Provincial Chairperson in the Woman Assembly from 2013 to date.\r \r \rCareer in General\rMidlands Provincial Chairperson for Women Assembly\r \rAreas of Interest\r⦁ Mining \r⦁ Health",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-gozho-cathline",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/eb098a80079169f8b4bb4f0c2e92bf79_XS.jpg"
  },

  /* 54 */
  {
    "hansardName": "GUMBWANDA",
    "lastName": "Gumbwanda",
    "firstName": "Kaston",
    "otherNames": "Ringirisai",
    "constituency": "Zaka East",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 55 */
  {
    "hansardName": "GWANETSA",
    "lastName": "Gwanetsa",
    "firstName": "Kalisto",
    "otherNames": "Killion",
    "constituency": "Chiredzi South",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "CHIREDZI SOUTH\rZANU PF\rGender : Male\r \rDate of Birth : 02-08-1955\r \rPlace of Birth : Chiredzi\r \rTitle  :  Mr\r \rStatus                : Married\r \rHouse   :  National Assembly\r \rContact Details \r \rHome Address  : Farm 28 HVE. Chiredzi /288 Stephanie Ave Marlborough Harare\r \rCell Number : 0772101504\r \rLandline Number :\r \rEmail Address : kgwanetsa@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary : Hunduza School Standard 6\r \r \rSecondary :Lundi High School GCE “0” Level\r \r \rTertiary/ University : \r⦁ UZ: War and Strategy\r⦁ MSU: BA Hons Dev Studies\r⦁ MSU: Masters of Science in International Affairs\r⦁ NAT ABFUNI (USA) War and Strategy\r \rAny other Forms of Training\r⦁ Military training – During liberation struggle (Tanzania)\r⦁ Zimbabwe Military Academy\r⦁ Zimbabwe Staff College \r \rParliamentary Career\rMember of Parliament in 2007 to date\r \rPolitical History\r⦁ EX-Combatant ZAWCA\r⦁ ZANU PF legislator 2007 to date\r⦁ Military advisor United Nations Headquarters 1992-1995\r \r \rCareer in General\rRetired Brigadier General ZNA (ZDF)\rAreas of Interest\r⦁ Defence\r⦁ Agriculture",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-gwanetsa-callisto-killion",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/eb098a80079169f8b4bb4f0c2e92bf79_XS.jpg"
  },

  /* 56 */
  {
    "hansardName": "GWANONGODZA",
    "lastName": "Gwanongodza",
    "firstName": "Ephraim",
    "otherNames": "",
    "constituency": "Chivi Central",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "CHIVI CENTRAL\rZANU PF\r \rGender                        : Male \r \rDate of Birth   : 23/04/1966\r \rPlace of Birth  : Chivi District\r \rTitle                  : Mr\r \rStatus                : Married\r \rHouse              : National Assembly\r \rContact Details \r \rHome Address           :2722921 Zimre Park Masvingo\r \r \rCell Number    : 0773247015\r \rLandline Number       : N/A\r \rEmail Address :gwanongodzae5@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : King Mine Primary School\r \rSecondary       : Temeraire Secondary School\r \rTertiary/University     : \rHarare Polytechnic\r \r \r \rAny other Forms of Training\r Domboshava Training Centre\r \rParliamentary Career\rØ  National Assembly Member 2013-2018\rØ  Re-elected in 2018.\r \r \r \r \rPolitical History\rØ  A member of ZANU PF main Wing Masvingo Province \rØ  A war collaborator who participated during the liberation struggle in 1979 in Chivi District\r \r \r \r \rCareer in General\rØ  A trade unionist and local government veteran who joined Chivi RDC in 1985 and moved to Masvingo City Council in 1995until2013 when elected to the Parliament of Zimbabwe\r \r \r \rAreas of Interest\rWatching soccer",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-gwanongodza-ephraim",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/eb098a80079169f8b4bb4f0c2e92bf79_XS.jpg"
  },

  /* 57 */
  {
    "hansardName": "HAMAUSWA",
    "lastName": "Hamauswa",
    "firstName": "Shakespear",
    "otherNames": "",
    "constituency": "Warren Park",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "WARREN PARK\rMDC- A\r \rGender                        : Male\r \rDate of Birth   : 09/01/1981\r \rPlace of Birth  : Buhera\r \rTitle                  :  Mr\r \rStatus                : Married\r \rHouse                          : National Assembly\r \rContact Details \r \rHome Address           :1630 Glaudina Harare\r \r \rCell Number    :0774346053\r \rLandline Number       :\r \rEmail Address :shamauswa@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Chatido School\r \rSecondary       :Mavuradonha High School A level\r \r \rUniversity       : \rØ  University of Kwazulu Natal PHD Natural Resources Governance(submitted thesis)\rØ  University of Zimbabwe (Msc International Relations)\rØ  University of Zimbabwe Degree in Political Science \r \r \rAny other Forms of Training\rØ  Training management IPMZ\rØ  Research Methods (certificate) University of Zimbabwe\r \r \rParliamentary Career\rJoined Parliament in 2018\r \rPolitical History\rØ  A member of MDC since 2000\rØ  Participated in COPAC Constitution of Zimbabwe making process\r \rCareer in General\rØ  Lecturer Political Science (01-03-11 to 31-05-16)\rØ  Lecturer Political Science, International Relations and Development at Mulungushi University 01-04-14\r \rAreas of Interest\rØ  Media and Politics\rØ  Natural Resource Governance \rØ  International Relations",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-hamauswa-shakespear",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/fedc90db8b13be1183c785d7eb0335c9_XS.jpg"
  },

  /* 58 */
  {
    "hansardName": "HARITATOS",
    "lastName": "Haritatos",
    "firstName": "Vangelis",
    "otherNames": "Peter",
    "constituency": "Muzvezve",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "MUZVEZVE\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 08/04/1986\r \rPlace of Birth  : Kwekwe\r \rTitle                  :  Mr\r \rStatus                : Married\r \rHouse              : National Assembly\r \r \rContact Details \r \rHome Address           : 4Smith ST Kadoma\r \r \rCell Number    :0772249178/ 0774978149\r \rLandline Number       :068 23342\r \rEmail Address :haritatos4@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Eiffel Flats Primary School\r \rSecondary             :Jameson High School,   \rHarare International School \r \rTertiary/ University    : \rØ  John CABOT University\rØ  KANSAS State University\r \r \rAny other Forms of Training\r \r \rParliamentary Career\rFirst term in Parliament (2018-2023)\r \r \rPolitical History\rØ  District Sec for transport Youth League Ward 13 (2007 to 2008)\rØ  Mash West Provincial Dep Sec lands in Youth League (2008)\rØ  Mash West Provincial Sec for Finance in Youth League (2008 to date)\r \rCareer in General\rA Businessman\rDirector of several companies with interests in:\rØ  grain milling\rØ  bakeries\rØ  mining\rØ  retail \rØ  wholesale.\rAreas of Interest\rØ  Working\rØ  Soccer\rØ  Being with family and constituents",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-haritatos-vangelis-peter",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/eb098a80079169f8b4bb4f0c2e92bf79_XS.jpg"
  },

  /* 59 */
  {
    "hansardName": "HOUGHTON",
    "lastName": "Houghton",
    "firstName": "John",
    "otherNames": "Roland",
    "constituency": "Kariba",
    "party": "MDC- Alliance",
    "province": "Mashonaland West",
    "bio": "KARIBA\rMDC-A\r \rGender                        :Male\r \rDate of Birth   :09/09/1945\r \rPlace of Birth  :Harare\r \rTitle                  :   Mr\r \rStatus                : Divorced\r \rHouse              : National Assembly\r \r \rContact Details \r \rHome Address           : 608 Baobab Ridge Kariba\r \rCell Number    :0772565163\r \rLandline Number       :\r \rEmail Address :jhoughton@chitake.net\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : \r \rSecondary       : “O” Level and 1subject “A” Level\r \r \rTertiary/ University    : N/A\r \r \r \rAny other Forms of Training\r \rJourneyman ElectricianClass 1\r \r \rParliamentary Career\rFirst elected MP in 2018\r \r \rPolitical History\rMember MDC T since September 2003\r \rCareer in General\rVarious management positions\r \rAreas of Interest\rØ  Wildlife \rØ  Environment",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-houghton-john-roland",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/eb098a80079169f8b4bb4f0c2e92bf79_XS.jpg"
  },

  /* 60 */
  {
    "hansardName": "HWENDE",
    "lastName": "Hwende",
    "firstName": "Chalton",
    "otherNames": "",
    "constituency": "Kuwadzana East",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 61 */
  {
    "hansardName": "JAJA",
    "lastName": "Jaja",
    "firstName": "Joyce",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC - Alliance",
    "province": "Harare",
    "bio": "PROPORTIONAL REPRESENTATION\rMDC-A\r \rGender                        :   Female\r \rDate of Birth   :   01/ 01/1973\r \rPlace of Birth  : Chipinge\r \rTitle                  :  Mrs\r \rStatus                :  Married\r \r House              : National Assembly\r \r \rContact Details \r \rHome Address: 6812 Westlea, Harare\r                             \r \rCell Number    : +263 772 287 921\r                          \rLandline Number:\rEmail Address : joycejaja@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \r \r Primary           : Kondo Primary School\r \r Secondary      :  Warren Park High \r \rTertiary/ University    : N/A\r                            \rAny other Forms of Training: \rØ  Security\rØ  Sales Lady\rØ  Computer Literate\r \rParliamentary Career   :  \rØ  First elected to the National Assembly in 2018\rØ  Serving in the following Committees:\rØ  Higher and Tertiary Education, Science and Technology\rØ  Woman Affairs, Gender and Community Development   \r \rPolitical History: \rØ  Joined MDC in 1999\rØ  Harare Provincial Organising Secretary for the Women Assembly\r \rCareer in General:  \rØ  Worked for Nyore Nyore Zimbabwe  as a Sales Lady\rØ  Worked for Furnishers and Gauntlet Security as a Security Officer\rAreas of Interest:\rØ  Going to church\rØ  Listening to music\rØ  Sport.",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-jaja-joyce",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/2ce85df04f10d845d088abd07283ce75_XS.jpg"
  },

  /* 62 */
  {
    "hansardName": "KABOZO",
    "lastName": "Kabozo",
    "firstName": "Stephen",
    "otherNames": "",
    "constituency": "Mt Darwin South",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "KABOZO STEPHEN\rMT DARWIN SOUTH\rZANU PF\r \rGender                        : Male\r \rDate of Birth   :10/07/1974\r \rPlace of Birth  :Mt Darwin\r \rTitle                 :  Mr\r \rStatus               : Married\r \rHouse              :  National Assembly\r \rContact Details \r \rHome Address           :Yemukai B Village Matupe Mt Darwin\r \rCell Number    :0773752599\r \rLandline Number       :\r \rEmail Address :\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Chiunye School\r \rSecondary       :Chipadze High School \r \r \rTertiary/ University    : N/A\r \r \r \rAny other Forms of Training\rMaster farming \r \r \rParliamentary Career\rNational Assembly Member for Mt Darwin South, 2018-2023\r \r \r \rPolitical History\rSecretary of Welfare at District Level Main Wing 2012-2018\r \r \rCareer in General\rFarming \rMining \r \r \rAreas of Interest\rFarming",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-kabozo-stephen",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/2ce85df04f10d845d088abd07283ce75_XS.jpg"
  },

  /* 63 */
  {
    "hansardName": "KAMBAMWA",
    "lastName": "Kambamwa",
    "firstName": "Polite",
    "otherNames": "",
    "constituency": "Sanyati",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 64 */
  {
    "hansardName": "KANHUTU",
    "lastName": "Kanhutu",
    "firstName": "Irene",
    "otherNames": "Nzenza",
    "constituency": "Chikomba East",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 65 */
  {
    "hansardName": "KACHEPA",
    "lastName": "Kachepa",
    "firstName": "Newton",
    "otherNames": "",
    "constituency": "Mudzi North",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "KACHEPA NEWTEN\rMUDZI NORTH\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 10/02/1970\r \rPlace of Birth  :Nyahuku\r \rTitle                 :  Mr\r \rStatus               : Married\r \rHouse              :  National Assembly\r \rContact Details \r \rHome Address           : 432 Kotwa Growth Point\r \r \rCell Number    : 0773874206\r \rLandline Number       :\r \rEmail Address :newtenkachepa@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Nyahuku School Mudzi\r \rSecondary       : O’Level Dendera High \r \r \rTertiary/ University    : N/A\r \r \rAny other Forms of Training\rReceived training in Counseling and Community Mobilization\r \r \rParliamentary Career\r \rØ  National Assembly Member of Mudzi North 2008 to date \rØ  Served in the Justice, Legal and Parliamentary Affairs, Health and Child Care and SMEs.\r \r \rPolitical History\rJoined ZANU PF during the war and operated in the Chipinge area\r \r \rCareer in General\rØ  Served in the Air force of Zimbabwe from 1984 to 1985. \rØ  Thereafter concentrated in farming activities. \r \r \rAreas of Interest\rØ  Mining\rØ  Agriculture",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-kachepa-newten",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/2ce85df04f10d845d088abd07283ce75_XS.jpg"
  },

  /* 66 */
  {
    "hansardName": "KANKUNI",
    "lastName": "Kankuni",
    "firstName": "Winnie",
    "otherNames": "",
    "constituency": "Sunningdale",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "SUNNINGDALE\rMDC-A\r \rGender                        : Female\r \rDate of Birth   : 04/10/1954\r \rPlace of Birth  :Wedza\r \rTitle                 :  Mrs.\r \rStatus               : Married\r \rHouse             :  National Assembly\r \rContact Details \r \rHome Address            : 16011 5th Crescent Sunningdale 2 , Harare\r \rCell Number               :0774823487/ 0714 657 028\r \rLandline Number       :N/A\r \rEmail Address            : wkankuni@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            :  St Marrys Mission\r \rSecondary       : N/A\r \r \rTertiary/ University    : N/A\r \r \r \rAny other Forms of Training\rØ  Red Cross\rØ  Merchandising and Till Operation\r \r \rParliamentary Career\rFirst elected MP representing Sunningdale in 2018\r \rPolitical History\rØ  Joined MDC in 1999 up to date\rØ  District Chairperson Main Wing\r \rCareer in General\rØ  Youth\rØ  Sports\r \rAreas of Interest\rHealth Issues",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-kankuni-winnie",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/2ce85df04f10d845d088abd07283ce75_XS.jpg"
  },

  /* 67 */
  {
    "hansardName": "KARIKOGA",
    "lastName": "Karikoga",
    "firstName": "Tawanda",
    "otherNames": "",
    "constituency": "Gokwe Mapfungautsi",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 68 */
  {
    "hansardName": "KARENYI",
    "lastName": "Karenyi",
    "firstName": "Lynette",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 69 */
  {
    "hansardName": "KARORO",
    "lastName": "Karoro",
    "firstName": "Douglas",
    "otherNames": "",
    "constituency": "Mbire",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 70 */
  {
    "hansardName": "KAPUYA",
    "lastName": "Kapuya",
    "firstName": "Freddy",
    "otherNames": "",
    "constituency": "Mhondoro Mubaira",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "MHONDORO MUBAIRA\rZANU PF\r \rGender:                    Male\r            \rDate of Birth:           10/01/1970\r            \rPlace of Birth:           Harare\r            \rTitle:                         Mr\r                        \rStatus:                      Married\r \rHouse:                     National Assembly          \r \r \r \rContact Details \r \rHome Address:           Nyundo School P. O. Box 62, Mubaira\r \rCell Number:               0772680804\r \rLandline Number:      \r \rEmail Address     mhondoromubairaconstituency@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:           Nyundo School\r \rSecondary:         St Marks, Mhondoro         \r                        Zengeza High School\r \rTertiary/University: \rØ  Masters Degree in Business Intelligence \rØ  Diploma in Transport Management C.I.T UK\rØ  Excutive Diploma in Business Leadership at EDBC ( Institute of Management)\rØ  Certificate in Transport Management ( Harare Polytechnic)\r \r \rAny other Forms of Training\rCertificate in Leadership Chinhoyi University\r \r \rParliamentary Career\rElected Member of Parliament in 2018\r \r \rPolitical History\rØ  Zanu PF District Youth Chair Zengeza\rØ  Zanu PF District Youth Chair Redcliff\rØ  Secretary of Transport Main Wing Midlands\r \r \rCareer in General\rØ  Councilor Redcliff 2008-2013\rØ  Mayor Redcliff 2013-2018\rØ  Vice President (UCAZ)\rØ  Zimbabwe Cricket Director\r \r \rAreas of Interest\rØ  Local Government\rØ  Transport",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-kapuya-freddy",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/2ce85df04f10d845d088abd07283ce75_XS.jpg"
  },

  /* 71 */
  {
    "hansardName": "KASHAMBE",
    "lastName": "Kashambe",
    "firstName": "Munyaradzi",
    "otherNames": "Tobias",
    "constituency": "Seke",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 72 */
  {
    "hansardName": "KARUMAZONDO",
    "lastName": "Karumazondo",
    "firstName": "Makuwi",
    "otherNames": "Tichawona",
    "constituency": "Maramba Pfungwe",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "ZANU PF\r \r \rGender                        :  Male\r \rDate of Birth   :  20/11/1973\r \rPlace of Birth  : Murewa\r \rTitle                  :  Mr\r \rStatus                :  Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           :\r \rCell Number    :  +263 772 415 861\r \rLandline Number:\r \rEmail Address : ekarumazondoZ@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Mungari School\r \r \rSecondary       : Dindi Phonex College\r \r \rTertiary/ University    : \r \rAny other Forms of Training   :    \rØ  Farming and mining construction\rØ  Marketing and Civil Engineering\r \rParliamentary Career:\r2018 National Assembly\r \rPolitical History:\rØ  Joined ZANU PF as youth participated in the party events\rØ  Secretary for Gender and Culture Mashonaland East Province\r \r \rCareer in General:\rØ  Mining in Maramba-Pfungwe, farming since 2004 and construction\rØ  Marketing\r \rAreas of Interest:\rØ  Agriculture\rØ  Mining \rØ  Transport",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-karumazondo-tichawona-makuwi",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/2ce85df04f10d845d088abd07283ce75_XS.jpg"
  },

  /* 73 */
  {
    "hansardName": "KASHIRI",
    "lastName": "Kashiri",
    "firstName": "Cecil",
    "otherNames": "",
    "constituency": "Magunje",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 74 */
  {
    "hansardName": "KAZEMBE",
    "lastName": "Kazembe",
    "firstName": "Kazembe",
    "otherNames": "",
    "constituency": "Mazowe West",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 75 */
  {
    "hansardName": "M. KHUMALO",
    "lastName": "Khumalo",
    "firstName": "Martin",
    "otherNames": "",
    "constituency": "Lupane West",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 76 */
  {
    "hansardName": "S. KHUMALO",
    "lastName": "Khumalo",
    "firstName": "Sibangumuzi",
    "otherNames": "Sixtone",
    "constituency": "Tsholotsho North",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 77 */
  {
    "hansardName": "KUREVA",
    "lastName": "Kureva",
    "firstName": "Earthrage",
    "otherNames": "",
    "constituency": "Epworth",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 78 */
  {
    "hansardName": "T. KHUMALO",
    "lastName": "Khumalo",
    "firstName": "Thabitha",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Bulawayo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 79 */
  {
    "hansardName": "KWARAMBA",
    "lastName": "Kwaramba",
    "firstName": "Goodluck",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "PROPORTIONAL REPRESENTATION\rZANU PF\r \rGender                        : Female\r \rDate of Birth   : 07/10/1957\r \rPlace of Birth  :Harare\r \rTitle                 :Mrs\r \rStatus               : Widowed\r \rHouse              : National Assembly\r \r \r \rContact Details \r \rHome Address           : Chisanje Farm box 420 Karoi\r \r \rCell Number    :0777560325/ 0715 385 922\r \rLandline Number       :\r \rEmail Address :kwarambagood@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Mbizi Primary School\r \rSecondary       : Highfield Secondary School\r \r \rTertiary/ University    : \rØ  BED (APPS) Administration, Planning, Policy Studies 1997\rØ  MED Educational Administration, Planning, Policy Studies2007\r \r \rAny other Forms of Training\rMkoba Teacher’s College- Certificate in Education 1981-1983\r \r \rParliamentary Career\rØ  MP (Women’s Quota 2013-2018 \rØ  Reelected in 2018  to date\rØ  Chaired the Public Service Committee and has travelled outside the country representing my Committee. \rØ  Also represented the Health Committee in other countries and cities e.g. Johannesburg, Geneva, Senegal and Rome\r \rPolitical History\rØ  Joined the Armed Struggle in 1976\rØ  Came back home 1980 got demobised \rØ  Held several posts in ZANU PF \rØ  Provincial member 3rd Term in Office of Secretary for Gender- Mashonaland West\r \r \rCareer in General\rØ  A teacher by profession from 1984 to 2013 Substantive School Head until 2013 when elected as an MP. Reelected in 2018\r \r \rAreas of Interest\rØ  Enjoy reading \rØ  Politics\rØ  Farming \rØ  Religious Issues.",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-kwaramba-goodluck",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/851a3e9c866bd8216df247b9d7bec9b3_XS.jpg"
  },

  /* 80 */
  {
    "hansardName": "LABODE",
    "lastName": "Labode",
    "firstName": "Mafoko",
    "otherNames": "Ruth",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Matabeleland North",
    "bio": "PROPORTIONAL REPRESENTATION\rMDC-A\r \rGender             : Female\r \rDate of Birth    : 21/12/1958\r \rPlace of Birth   :Makoni\r \rTitle                 :  Dr\r \rStatus               : Married\r \rHouse                          : National Assembly\r \r \r \rContact Details \r \rHome Address            :15 Bongoland 13 Baires Avenue, Victoria Falls\r \r \rCell Number    :0775567503\r \rLandline Number       :09 888 144\r \rEmail Address :ruthlabode@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                       : Blue Gum Primary\r \rSecondary        : St Joseph’s Sec\r \r \rTertiary/ University    :\rØ  Sofia Medical Academy\rØ  University of Liverpool\r \r \rAny other Forms of Training\r \r \rParliamentary Career\rFirst served as MP during the period 2013-2018\rReelected in 2018\r \r \rPolitical History\rØ  ZAPU\rØ  ZANU\rØ  MDCT-MDC Alliance\r \r \rCareer in General\rØ  Medical Doctor- Public Health Specialist \rØ  Provincial Medical Director\r \rAreas of Interest\rØ  Health\rØ  Gender \rØ  Environmental Issues",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-labode-mafoko-ruth",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/851a3e9c866bd8216df247b9d7bec9b3_XS.jpg"
  },

  /* 81 */
  {
    "hansardName": "MABOYI",
    "lastName": "Maboyi",
    "firstName": "Ruth",
    "otherNames": "Mavhungu",
    "constituency": "Beitbridge West",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "BEITBRIDGE WEST\rZANU PF\r \r \rGender                        : Female\r \rDate of Birth   : 24/09/1957\r \rPlace of Birth  :Beitbridge\r \rTitle                 :  Mrs\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           :Makhado Outpan, P O Box Beitbridge 322 and 450 Limpopo View, Beitbridge\r \r \rCell Number    :0776090246\r \rLandline Number       :09/526036\r \rEmail Address :maboyiruth@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Tongwe (1963-1970), Zezani Mission (1970-1973)\r \rSecondary       :Victory Camp School Zambia (1976-1978)\r \r \rTertiary/ University    : \rØ  UZ- BED Management (1994-1998)\rØ  American University in Cairo- Masters in Public Administration (2003-2006)\rØ  WIC – Masters in Public Relations and Diplomacy (2006-2007)\r \rAny other Forms of Training\rØ  Teacher \rØ  Typing (Book keeping)\r \rParliamentary Career\rFirst elected to the National Assembly in 2013\r \r \rPolitical History\rØ  ZAPU Youth (1975-1977)\rØ  ZIPRA cadre Zambia (1977-1979)\rØ  ZNA Soldier (1980-1988)\rØ  Diplomat (2003-2013)Wife of Ambassador Maboyi -Egypt Cairo\r \rCareer in General\r \rØ  Farmer \rØ  Business Woman\r \rAreas of Interest\rØ  Education\rØ  Farming",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-maboyi-ruth-mavhungu",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/851a3e9c866bd8216df247b9d7bec9b3_XS.jpg"
  },

  /* 82 */
  {
    "hansardName": "MACHANDO",
    "lastName": "Machando",
    "firstName": "Prosper",
    "otherNames": "",
    "constituency": "Chirumanzu/Zibagwe",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 83 */
  {
    "hansardName": "MACHAKARIKA",
    "lastName": "Machakarika",
    "firstName": "Tinoda",
    "otherNames": "",
    "constituency": "Wedza South",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 84 */
  {
    "hansardName": "MACHINGAUTA",
    "lastName": "Machingauta",
    "firstName": "Coster",
    "otherNames": "",
    "constituency": "Budiriro",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 85 */
  {
    "hansardName": "MACHINGURA",
    "lastName": "Machingura",
    "firstName": "Raymore",
    "otherNames": "",
    "constituency": "Chipinge Central",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "CHIPINGE CENTRAL\rZANU PF\r \rGender                        :Male\r \rDate of Birth   : 05 \\03 \\1963\r \rPlace of Birth  : Chegutu\r \rTitle                 : Mr\r \rStatus                :  Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \r House Address: 817 Ultra Low Density Chipinge\r \rCell Number    :0772551715/ 0715189449\r \rLandline Number: 02272042599\r \rEmail Address : machingura.ra3@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Pfupajena Primary School Chegutu\r \r \rSecondary       :Harare High School\r                        : Lord Marvern High School\r \r \rTertiary/University     : N/A\r \rAny other Forms of Training\rØ  Diploma Telecommunications Technician\rØ  Certificate in Further Education Teachers \rØ  Diploma in Telecommunications Management\rØ  Certificate in Advanced Technical Training\rØ  Full Technological Certificate (T1-T5) \rØ  Certificate in Finance for Non Financial Managers\rØ  Certificate in T5 Organization and Planning\rØ  Certificate in GSM Siemens\rØ  Certificate in Project Planning\r \r \rParliamentary Career:\rØ  2013-2018 Member of Parliament for Chipinge Central and Re elected in 2018\rØ  2013-2018 IPU Delegation Member\rØ  2013-2018 Committee member of the following Portfolio Committees: \ri)CT Postal and Courier Services\rii) Higher and Tertiary Education, Science and Technology Development\riii) Foreign Affairs\rØ  War Collaborating Activities 1977 – 1978 for ZANLA Forces, Party Card\rØ  carrying member 1980-1986 ZANU PF, Committee Member District ZANU\rØ  PF Parly Structure (1986 – 1990), District Secretary for Information\rØ  1991-1996, District Secretary for Administration 1997-2000, District Vice\rØ  Chairman 2000-2005, District Secretary for Administration 2005 – 2008\rØ  District Chairman 2008 – 2011, DCC Secretary for Administration 2011-2012\rØ  Provincial Secretary for Disabled / Abled ZILIWA Co. 2009 – Present\rØ  Councillor for Ward 8 Urban Chipinge & Chairman of Technical Committee\r \r \rPolitical History\rØ  Prov. Member Ziliwaco Manicaland current\rØ  DCC Secretary for Administration (2013)\rØ  Secretary for Security District Ward 8. Chipinge\rØ  Ward Chairperson ward 8\rØ  Ward vice chairperson ward 8\rØ  Cell member Ultra Low Density Chipinge\rØ  Collaboration Chegutu\rØ  Collaboration Mutambara \r \rCareer in General\rØ  Trainer Telecommunication Technician 1982-1984\rØ  Instructor 1984-1985 \rØ  Telecommunications Manager 1991 -2008\rØ  Telecommunications Lecturer 1985 – 1991\rØ  Section Manager  Installations Planning 1991-1996\rØ  Area Manager Manicaland South 1996-2008 \rØ  ( Title changed to Operations Manager )\r \rAreas of Interest\rØ  Management\rØ  Telecommunications\rØ  Electricity\rØ  Engineering\rØ  Education\rØ  Environment",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-machingura-raymore",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/851a3e9c866bd8216df247b9d7bec9b3_XS.jpg"
  },

  /* 86 */
  {
    "hansardName": "MADZIMURE",
    "lastName": "Madzimure",
    "firstName": "Willias",
    "otherNames": "",
    "constituency": "Kambuzuma",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 87 */
  {
    "hansardName": "MADZIWA",
    "lastName": "Madziwa",
    "firstName": "Susan",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU - PF",
    "province": "Harare",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 88 */
  {
    "hansardName": "MADIRO",
    "lastName": "Madiro",
    "firstName": "Michael",
    "otherNames": "",
    "constituency": "Mutare North",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 89 */
  {
    "hansardName": "MADIWA",
    "lastName": "Madiwa",
    "firstName": "Chido",
    "otherNames": "",
    "constituency": "Mutasa North",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 90 */
  {
    "hansardName": "MADHUKU",
    "lastName": "Madhuku",
    "firstName": "Johnson",
    "otherNames": "",
    "constituency": "Bikita East",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 91 */
  {
    "hansardName": "MAFUTA",
    "lastName": "Mafuta",
    "firstName": "Senzeni",
    "otherNames": "V.",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland West",
    "bio": "PROPORTIONAL REPRESENTATION\rMDC-A\r \rGender                        : Female\r \rDate of Birth   : 31/08/1970\r \rPlace of Birth  :Kadoma\r \rTitle                 :  Mrs\r \rStatus                 :Married \r \rHouse              :  National Assembly\r \r \rContact Details \r \rHome Address           : 24114 Chegutu\r \r \rCell Number               :0772534175\r \rLandline Number       :\r \rEmail Address :vsmafuta@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Cam and Motor School\r \rSecondary       :Four year Secondary Education\r \r \rTertiary/University     : \r \r \rAny other Forms of Training\rØ  Trained as a hair dresser \rØ  Mining and women in politics \r \r \rParliamentary Career\rFirst elected MP during the 30 July 2018 harmonized elections.\r \r \rPolitical History\rØ  Member of MDC since its inception in 1999 to date \rØ  Held different positions\rØ  Member of the National Executive\r \r \rCareer in General\rHairdresser\r \rAreas of Interest\rØ  Mining\rØ  Politics \rØ  Health",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mafuta-virginia",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/851a3e9c866bd8216df247b9d7bec9b3_XS.jpg"
  },

  /* 92 */
  {
    "hansardName": "MAGO",
    "lastName": "Mago",
    "firstName": "Nyaradza",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC-ALLIANCE",
    "province": "Masvingo",
    "bio": "PROPORTIONAL REPRESENTATION\rMDC-A\r \r \rGender                        : Female\r \rDate of Birth   :18/9/1964\r \rPlace of Birth  :Chivi\r \rTitle                 : Mrs.\r \rStatus                : Married\r \rHouse              : National Assembly\r \r \r \rContact Details \r \r House Address:4986 Bauhinia Ave, Rhodene, Masvingo\r \rCell Number    :0773440866\r \rLandline Number: (039) 2262181\r \rEmail Address :nyariemago@gmail.com\r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Mandiva School-Grade 7\r            \rSecondary       :Thornhill High Sch. ‘O’ level\r \r Tertiary/ University   : \rZOU Bachelor of Management-Human Resources\r \rAny other Forms of Training\rØ  Computers\rØ  Train the Trainer 1& 2\r \rParliamentary Career\rFirst elected MP during the 30 July 2018 harmonized elections\r \r \rPolitical History\rØ  Joined MDC as amember then elected into structures and rose through the ranks from Ward to Province within the Women Assembly\rØ  Current Position –Masvingo Provincial Chairperson Women Assembly\r \rCareer in General\rHuman Resources Practitioner \r \rAreas of Interest\rØ  Labour and Social Services \rØ  Mining\rØ  Agriculture",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mago-nyaradzai",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/8fbb0968bd0c2a321a1bbb050e3eaac1_XS.jpg"
  },

  /* 93 */
  {
    "hansardName": "MAHLANGU",
    "lastName": "Mahlangu",
    "firstName": "Sichelesile",
    "otherNames": "",
    "constituency": "Pumula",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "PUMULA\rMDC-A\r \rGender                        :            Female\r \rDate of Birth   :           06/03/1977\r \rPlace of Birth:             Insinsa\r \rTitle                 :           Mrs\r \rStatus               :          Married\r \rHouse              :           National Assembly\r \r \rContact Details:\r \r House Address:         8037 Pumula East Bulawayo\r \rCell Number    :          0776727724, 0713 259 345\r \rLandline Number: N/A\r \rEmail Address :N/A\r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : \r            \rSecondary       :‘O’ Level\r \rUniversity       :       N/A\r \rAny other Forms of Training:\rChild Care Management         \rParliamentary Career:\rØ  First elected MP in 2018\rØ  Member of the Committee on Public service and Social Welfare\rØ  Member of the Committee on Health and Child Care\r \rPolitical History:\rØ  Joined MDC in 2003\rØ  Rose through the ranks and currently holds the position of Deputy Treasurer.\r \rCareer in General:\rØ  Child Care Worker\rØ  Behavior Change Facilitator\rØ  Politician\r \rAreas of Interest:\rØ  Socializing with children\rØ  Going to church",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mahlangu-sichelesile",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/8fbb0968bd0c2a321a1bbb050e3eaac1_XS.jpg"
  },

  /* 94 */
  {
    "hansardName": "MAJAYA",
    "lastName": "Majaya",
    "firstName": "Bacillia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland Central",
    "bio": "MAJAYA BACILLIA\rPROPORTIONAL REPRESENTATION\rMDC-A\r \rGender                        : Female\r \rDate of Birth   :06/09/1970\r \rPlace of Birth  :Guruve\r \rTitle                 : Mrs.\r \rStatus                : Widow\r \rHouse              : National Assembly\r \r \rContact Details \r \r House Address:Kanyemba Mbire, Box 214 Guruve\r \rCell Number    : 0774512671\r \rLandline Number: \r \rEmail Address :bacilliamajaya@gmail.com\r \r \r \r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : \r            \rSecondary       :‘O’ Level\r \rUniversity       : N/A\r \rAny other Forms of Training\rCertificate in Business Management  \r \rParliamentary Career\rØ  First elected MP in 2013\rØ  Reelected in 2018\rØ  Served in the Portfolio Committees on: \rØ  Mines and Energy \rØ  Health and Child Care\r \rPolitical History\rØ  Became active in Politics in 2005.\rØ  In 2006 elected District Treasurer\rØ  Elected  Provincial Treasurer in 2011\rØ  Currently Provincial Women’s Assembly Chairperson.\r \rCareer in General\rBusinesswoman \r \r \rAreas of Interest\rEntrepreneurship",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-majaya-bacillia",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/8fbb0968bd0c2a321a1bbb050e3eaac1_XS.jpg"
  },

  /* 95 */
  {
    "hansardName": "MAKONI",
    "lastName": "Makoni",
    "firstName": "Reselyn",
    "otherNames": "Roseweater",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "PROPORTIONAL REPRESENTATION\rZANU PF\r \rGender                        : Female\r \rDate of Birth   :1/08/1956\r \rPlace of Birth:  Kwekwe\r \rTitle                 : Ms\r \rStatus                : Single\r \rHouse              : National Assembly\r \r \rContact Details \r \r House Address:583 Mazorodze Close Nyameni,Marondera\r \rCell Number    : 0771 462 414\r \rLandline Number: \r \rEmail Address :\r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            :Itombo Primary\r            \rSecondary       :Chishawasha Secondary\r \rTertiary/University     : N/A\r \r \rAny other Forms of Training\r            \rParliamentary Career\rØ  Fisted elected MP in 2013\rØ  Reelected in 2018\r \rPolitical History\rØ  Youth Chairperson Marondera District. \rØ  W/W Dist. Chairperson\rØ  D.C.C Secretary for Women Affairs\rØ  Sec for Transport and Welfare Provincial Level\rØ  Vice Chairlady Provincial Level\rØ  Central Committee Member up to date\r \rCareer in General\rØ  Typist\rØ  Church Choir Leader\r \rAreas of Interest\rØ  Church choir\rØ  Zanu P.F Politics",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-makoni-roselyn-rosewater",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/8fbb0968bd0c2a321a1bbb050e3eaac1_XS.jpg"
  },

  /* 96 */
  {
    "hansardName": "MAKONYA",
    "lastName": "Makonya",
    "firstName": "Joyce",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Manicaland",
    "bio": "PROPORTIONAL REPRESENTATION\rMDC-A\r \rGender                        : Female\r \rDate of Birth   : 13-12-74\r \rPlace of Birth:    Rusape\r \rTitle                  : Ms\r \rStatus                : Widow\r \rHouse              : National Assembly\r \r \rContact Details \r \r House Address : 120 Hauna Growth Point Mutasa\r \rCell Number    :  0773 768 632\r \rLandline Number: \r \rEmail Address : joymakonya@gmail.com\r \r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            :  St Joseph Primary\r            \rSecondary       :         St Joseph Secondary\r \rTertiary/ University    : \r \rAny other Forms of Training\rØ  Business management\rØ  Conflict management  \r \rParliamentary Career\rM.P from 2013\r \r \rPolitical History\rJoined MDC Alliance in 2000 holding different positions in the Party\r \r \rCareer in General\rØ  Farming\rØ  Politics\r \r \rAreas of Interest\rØ  Going out (tourism)\rØ  Farming and Politics",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-makonya-joyce",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/8fbb0968bd0c2a321a1bbb050e3eaac1_XS.jpg"
  },

  /* 97 */
  {
    "hansardName": "MAMOMBE",
    "lastName": "Mamombe",
    "firstName": "Joanah",
    "otherNames": "",
    "constituency": "Harare West",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "HARARE WEST\rMDC-A\r \rGender:                       Female\r            \rDate of Birth:              18-06-1993\r            \rPlace of Birth:             Harare\r            \rTitle:                            Miss     \r                        \rStatus:                         Single       \r \rHouse:                         National Assembly                              \r \r \rContact Details \r \rHome Address:           30 Paarl Close Sunridge\r                                   Harare\r \rCell Number:              0773519914\r \rLandline Number:      N\\A\r \rEmail Address:    jojomamombe@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            :Bata,Mvuma\r \rSecondary       :Daramombe (2006 -2009), :Monte Casino (2010 – 2011)\r            \rTertiary/ University      : \rØ  Chinhoyi University of Technology [2012-2015]\rØ  University of Bergen, Norway [2016-2017]\rØ  University of Sussex, UK [2017-2018] \r \rAny other Forms of Training\rØ  Leadership Coaching\rØ  Human Rights\r            \rParliamentary Career\rElected 2018\r \rPolitical History\r \rØ  National Students Leader\rØ  ZINASU Gender Secretary [2013-2015]\rØ  Female Secretary General, Chinhoyi University [2013- 2014]\rØ  MDC Alliance Youth Member [2011 to Date]\rØ  2018 – Member of National Assembly \r \r \rCareer in General\rØ  MSC –Molecular Biology Speacialty In Parkinson’s Disease And Cancer\rØ  Biotechnology\rAreas of Interest\rØ  Public Health\rØ  Public Education and Higher and Tertiary",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mamombe-joanah",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/8fbb0968bd0c2a321a1bbb050e3eaac1_XS.jpg"
  },

  /* 98 */
  {
    "hansardName": "MANDIWANZIRA",
    "lastName": "Mandiwanzira",
    "firstName": "Supa",
    "otherNames": "Collins",
    "constituency": "Nyanga South",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 99 */
  {
    "hansardName": "MANGWIRO",
    "lastName": "Mangwiro",
    "firstName": "John",
    "otherNames": "Chamunorwa",
    "constituency": "Chikomba West",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 100 */
  {
    "hansardName": "MARIKISI",
    "lastName": "Marikisi",
    "firstName": "Norman",
    "otherNames": "",
    "constituency": "Mt Darwin East",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 101 */
  {
    "hansardName": "MARKHAM",
    "lastName": "Markham",
    "firstName": "Allan",
    "otherNames": "Norman",
    "constituency": "Harare North",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "HARARE NORTH \rMDC-A\r \rGender                        : Male\r \rDate of Birth   : 19/05/1960\r \rPlace of Birth  :Choma Zambia\r \rTitle                 :  Mr\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           : 84 Ridgeway North, Borrowdale, Harare \r \r \rCell Number               :0772278460\r \rLandline Number       :0242882167\r \rEmail Address :rusty@adas.co.zw\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : John Cowie, Rusape\r \rSecondary       :Mutare Boys High\r \r \rUniversity       : \rGwebi Agricultural College, Harare\r \r \rAny other Forms of Training\r \rParliamentary Career\rFirst term 2018-2023\r \rPolitical History\rØ  Joined party in 2000\rØ  Councilor in Harare’s ward 18 from 2013 to 2018 \r \r \rCareer in General\r \rØ  Agriculture in a Southern African role, both farming and agronomy\rØ  Director of company since 2004\rØ  Trustee of Harare Wetlands Trust, Stratford Road Community Trust, Hatcliffe Development Trust\r \rAreas of Interest\rØ  Local Government, Environment\rØ  Public Accounts, Finance\rØ  Agriculture",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-markham-allan-norman",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/8fbb0968bd0c2a321a1bbb050e3eaac1_XS.jpg"
  },

  /* 102 */
  {
    "hansardName": "MARONGE",
    "lastName": "Maronge",
    "firstName": "Cladious",
    "otherNames": "",
    "constituency": "Masvingo South",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "MASVINGO SOUTH\rZANU PF\r \rGender                        : Male\r \rDate of Birth   :10/06/1978\r \rPlace of Birth:Chiredzi\r \rTitle                 : Mr\r \rStatus               : Married\r \rHouse              : National Assembly\r \r \rContact Details \r \r House Address :Stand no 27 Musvovi Business Centre, Masvingo\r \rCell Number    :0774 477 634\r \rLandline Number: \r \rEmail Address:claudiosmaronge@gmail.com\rmarongeclaudios@gmail.com                                                                                                                                                                                                                                                    \r \r \r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Musvovi Primary School\r            \rSecondary       :Madzvivanyika High School - “O’ Level”\r \rTertiary/University     :\rØ  Diploma in Primary Education-Morgenster Teacher’s College\rØ  Great Zimbabwe University- Bachelor of Education\r \rAny other Forms of Training\rØ  MarketingManagement-Masvingo Polytechnic College (2002)\r \rParliamentary Career\rRecently elected Member of Parliament for Masvingo South\r \r \rPolitical History\rØ  2000 to 2013 District Secretary for Education \rØ  2013 to date District Secretary for Security\r \rCareer in General\r \r Substantive Deputy Head for five years and 15 years’ experience in the education sector\rAreas of Interest\rØ  Mining\rØ  Education\rØ  Sports",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-maronge-claudios",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/83d805430a76a62d95bd944b328ed4da_XS.jpg"
  },

  /* 103 */
  {
    "hansardName": "MASANGO",
    "lastName": "Masango",
    "firstName": "Chinhamo",
    "otherNames": "Precious",
    "constituency": "Mhangura",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 104 */
  {
    "hansardName": "MASENDA",
    "lastName": "Masenda",
    "firstName": "Ngoni",
    "otherNames": "T",
    "constituency": "Hurungwe East",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "ZANU PF\r \rGender                        : Male\r \rDate of Birth   :05/03/1954\r \rPlace of Birth : Makoni\r \rTitle                 : Mr\r \rStatus               : Married\r \rHouse              : National Assembly\r \r \rContact Details \rHouse Address:Makorokoto Farm Plot 1 Box 49, Tengwe\r \rCell Number    :0714 006 660\r \rLandline Number: 0773966466(WhatsApp)\r \rEmail Address :ngoni1954@gmail.com\r \r \r \r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Chitenderano School-Standard 6\r            \rSecondary       :Ranche House College “A Level”\r \rTertiary/University     :\rØ  Certificate in Education\rØ  T3-ST Paul’s T.T College, Musami\rØ  U.Z -Bachelor of Business Studies, Hons Degree BBS (Hons)\r \rAny other Forms of Training\r            \rParliamentary Career\rFirst elected MP in2018\r \r \rPolitical History\rWar Veteran 1975 up to date\r \r \rCareer in General\rØ  Teacher\rØ  Farmer\r \rAreas of Interest\rØ  Agriculture\rØ  Education\rØ  Security\rØ  Finance",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-masenda-ngoni-takundwa",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/83d805430a76a62d95bd944b328ed4da_XS.jpg"
  },

  /* 105 */
  {
    "hansardName": "MANGORA",
    "lastName": "Mangora",
    "firstName": "Brightness",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland East",
    "bio": "MANGORA BRIGHTNESS\rPROPORTIONAL REPRESENTATION\rMDC-A\r \r \rGender                        : Female\r \rDate of Birth   : 08-08-1977\r \rPlace of Birth  : Kadoma\r \rTitle                  : Ms\r \rStatus                : Single\r \rHouse              : National Assembly\r \r \rContact Details \r \r House Address  : 2252 Morningside, Marondera\r \rCell Number      :  0773 363 613\r \rLandline Number: \r \rEmail Address : bmongora@gmail.com\r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Grade 1-7 Mupawose Primary School, Kadoma\r            \rSecondary       : O’ Level Marondera Nyameni Secondary School\r \rTertiary/ University    : N/A\r \rAny other Forms of Training\rPre School (Nursery School)\r            \r Parliamentary Career\rFirst elected MP in 2018\r \r \rPolitical History\rØ  Joined MDC on its inception and rose through the ranks from District up to National Executive Committee\r \r \rCareer in General\rØ  Doves Brooker\rØ  Merchandiser\rØ  Pre-School\r \r \rAreas of Interest\rØ  Gender \rØ  Health issues",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mangora-brightness",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/8fbb0968bd0c2a321a1bbb050e3eaac1_XS.jpg"
  },

  /* 106 */
  {
    "hansardName": "MASHONGANYIKA",
    "lastName": "Mashonganyika",
    "firstName": "Dorothy",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 107 */
  {
    "hansardName": "MASIYA",
    "lastName": "Masiya",
    "firstName": "Denford",
    "otherNames": "",
    "constituency": "Chiredzi East",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 108 */
  {
    "hansardName": "P. MASUKU",
    "lastName": "Masuku",
    "firstName": "Phelela",
    "otherNames": "",
    "constituency": "Nketa",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 109 */
  {
    "hansardName": "E. MASUKU",
    "lastName": "Masuku",
    "firstName": "Elizabeth",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 110 */
  {
    "hansardName": "MATAMBANADZO",
    "lastName": "Matambanadzo",
    "firstName": "Masango",
    "otherNames": "",
    "constituency": "Kwekwe Central",
    "party": "NPF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 111 */
  {
    "hansardName": "MARAPIRA",
    "lastName": "Marapira",
    "firstName": "Davison",
    "otherNames": "",
    "constituency": "Masvingo North",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 112 */
  {
    "hansardName": "MASHAKADA",
    "lastName": "Mashakada",
    "firstName": "Tapiwa",
    "otherNames": "",
    "constituency": "Hatfield",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 113 */
  {
    "hansardName": "MATARUSE",
    "lastName": "Mataruse",
    "firstName": "Peter",
    "otherNames": "",
    "constituency": "Chinhoyi",
    "party": "MDC- Alliance",
    "province": "Mashonaland West",
    "bio": "CHINHOYI\rMDC A\r \rGender                        : Male\r \rDate of Birth   : 14/04/1959\r \rPlace of Birth  :Ndanga District\r \rTitle                 :  Dr\r \rStatus               : Married\r \rHouse              :  National Assembly\r \rContact Details \r \rHome Address : 3650 Greenwood Terrace Mzari Extension Chinhoyi\r \r \rCell Number    :0712407566\r \rLandline Number:0267 24442\r \rEmail Address :drmataruse@yahoo.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Musenyereku Pry School \r( Gr 1-5)\r                        :Bangala Mission ( Gr 6-7)\r \rSecondary       : St Anthonys (  Form 1-4)\r                        : Gokomere High ( Form 5-6)\r \rTertiary/ University    : \rØ  MBCHB\rØ  DOP \rØ  Bachelor of Medicine and Bachelor of Surgery.\rØ  Diploma of ophthalmology at UZ\r \rAny other Forms of Training\r \r \rParliamentary Career\rØ  First elected MP in 2013\rØ  Reelected in 2018\r \rPolitical History\rMayor of Chinhoyi 1999\r \rCareer in General\rMedical Doctor\rAreas of Interest\rHealth",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mataruse-peter",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/83d805430a76a62d95bd944b328ed4da_XS.jpg"
  },

  /* 114 */
  {
    "hansardName": "MATARANYIKA",
    "lastName": "Mataranyika",
    "firstName": "Dudzai",
    "otherNames": "Misheck",
    "constituency": "Makoni South",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "MAKONI SOUTH\rZANU PF\r \rGender                        :   Male\r            \rDate of Birth   : 05 July 1967\r            \rPlace of Birth  : Harare\r            \rTitle                 :  Mr.                  \r                         \rStatus              : Married          \r \rHouse              :National Assembly                             \r \rContact Details \r \rHome Address:     Rukweza Secondary School PO Box 96, Nyazura\r                                 \rCell Number:     0772 515 736    \r \rLandline Number:      N\\A\r \rEmail Address:    mdmataranyika@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary: Rukweza Primary School, Nyazura                    \r \rSecondary: St. Faith Mission, Rusape and Fletcher  High \r \rTertiary/University:  \rØ  University of Zimbabwe- Specialist Diploma In Medical Laboratory Sciences\rØ  University Of South Africa- Bachelor of Laws\rAny other Forms of Training\rØ  Certificate in Management\rØ  Diploma in Marketing\r \rParliamentary Career\rElected MP in 2018\r \rPolitical History\rØ  Joined ZANU PF in 2001 in Highfields, became Secretary for Security, Health and Economic Affairs in the Robert Mugabe District.\rØ   Due to academic pressure took a laid back position. \rØ  In 2017 Co-opted as Secretary for Security in the Main wing of Paruware Branch, Denzva District in Nyazura.\r \rCareer in General\rØ  Worked as a Medical Scientist at Harare Hospital and Parirenyatwa Hospital\rØ  Sales Representative-Diagnostics products at Johnson and Johnson\rØ  Diagnostics Divisional Manager- Marketing at Johnson and Johnson\rØ  Managing Director Statmed Private Limited\rAreas of Interest\rØ  Insurance Law and Environment\rØ  Commercial Law\rØ  Medical Law\rØ  Environmental Law",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mataranyika-misheck-dudzai",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/83d805430a76a62d95bd944b328ed4da_XS.jpg"
  },

  /* 115 */
  {
    "hansardName": "MATEWU",
    "lastName": "Matewu",
    "firstName": "Caston",
    "otherNames": "",
    "constituency": "Marondera Central",
    "party": "MDC- Alliance",
    "province": "Mashonaland East",
    "bio": "MARONDERA CENTRAL\rMDC A\r \rGender                        : Male\r \rDate of Birth   : 12-04-82\r \rPlace of Birth  :Buhera \r \rTitle                 :  Mr\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           : 5 Matongo Marondera\r \r \rCell Number    :0776367881\r \rLandline Number       :\r \rEmail Address :cmatewu@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Admiral Task\r \rSecondary       :Ruya High\r                        : Benard Mizeki College\r \r \rTertiary/ University    :\rØ  BSC Environmental Sciences and Health- University of East London\rØ  Msc Risk Management- University of London ( England)\r \rAny other Forms of Training\rØ  Chartered Management\rØ  Institute of  Risk Managers\r \rParliamentary Career\rFirst elected MP in 2018\r \rPolitical History\rØ  Joined MDC in 2004\rØ  UK Youth District Chairman-2007\rØ  UK Provincial Youth Chair-2011\rØ  National Secretary for Policy and Research- 2014 to date\r \rCareer in General\r \rA University Director by profession\r \rAreas of Interest\rØ  Public Health\rØ  Monetary Policy\rØ  Youth Empowerment\rØ  Education\rØ  Sport",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-matewu-caston",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/83d805430a76a62d95bd944b328ed4da_XS.jpg"
  },

  /* 116 */
  {
    "hansardName": "MATHE",
    "lastName": "Mathe",
    "firstName": "Stars",
    "otherNames": "",
    "constituency": "Nkayi South",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "NKAYI SOUTH\rZANU PF\r \rGender                        : Female \r \rDate of Birth   : 12/02/1964\r \rPlace of Birth  :Nkayi\r \rTitle                 :  Miss\r \rStatus               : Single\r \rHouse              :  National Assembly\r \r \rContact Details \r \rHome Address           :Mathetshaneni Primary School Box 9 Nkayi\r \r \rCell Number    :0772322656/0716045003\r \rLandline Number       :\r \rEmail Address :Starsmathe@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Mathetshaneni Primary School\r \rSecondary       :Komayanga Secondary School (5 O’Levels)\r \r \rTertiary/ University    : \r \rAny other Forms of Training\r \r \rParliamentary Career\r \rØ  Member of Parliament Nkayi South Constituency \rØ  Member of the Committee on Health and Child Care\rØ  Member of the  Committee on Primary and Secondary Education\rØ  Member of the Pan African Parliament\r \r \rPolitical History\r \rØ  Youth PF ZAPU 1978-1980\rØ  Councilor City of Bulawayo 10 years\rØ  Provincial Commissioner Bulawayo Province 5 years\rØ  Provincial Sec for Finance Mat North 5 years \r \rCareer in General\rBeen in main stream politics since 1978\rAreas of Interest\rØ  Participating in General Developing Programs in society for Betterment of the general Public",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mathe-stars",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/83d805430a76a62d95bd944b328ed4da_XS.jpg"
  },

  /* 117 */
  {
    "hansardName": "MATIZA",
    "lastName": "Matiza",
    "firstName": "Biggie",
    "otherNames": "Joel",
    "constituency": "Murewa South",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 118 */
  {
    "hansardName": "MAPHOSA",
    "lastName": "Maphosa",
    "firstName": "Lindiwe",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC-Alliance",
    "province": "Matabeleland South",
    "bio": "PROPORTIONAL REPRESENTATION\rMDC-A\r \rGender                        : Female\r \rDate of Birth   :04/07/1981\r \rPlace of Birth:Gwanda\r \rTitle                 : Ms\r \rStatus                : Single\r \rHouse              : National Assembly\r \r \rContact Details \r \r House Address:Makorokoro Primary School, P.Bag 3858, Bulilimamangwe\r \rCell Number    :0773243902\r \rLandline Number: \r \rEmail Address:maphosalindiwe20@gmail.com\r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            :  Colleen Bawn Primary \r            \rSecondary       :Colleen Bawn Secondary \r \rTertiary/University     : \rGwanda Polytechnic\r \r \rAny other Forms of Training\r \rN.C Human Resources Management\r \rParliamentary Career\r \r2018-2023\r \rPolitical History\rØ  District Secretary (youth)\rØ  Provincial Gender representative (youth)\rØ  Provincial Secretary (youth)\rØ  Provincial Chairperson(youth)\r \rCareer in General\rØ  Temporary Teaching\rØ  Field Officer World Vision \rØ  General hand\r \r \rAreas of Interest\rØ  Gender\rØ  Health\rØ  Mines\rØ  Youth Issues",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-maphosa-lindiwe",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/8fbb0968bd0c2a321a1bbb050e3eaac1_XS.jpg"
  },

  /* 119 */
  {
    "hansardName": "MATEMADANDA",
    "lastName": "Matemadanda",
    "firstName": "Victor",
    "otherNames": "",
    "constituency": "Gokwe Central",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 120 */
  {
    "hansardName": "MATANGIRA",
    "lastName": "Matangira",
    "firstName": "Toendepi.",
    "otherNames": "Remigious",
    "constituency": "Bindura South",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 121 */
  {
    "hansardName": "MATSUNGA",
    "lastName": "Matsunga",
    "firstName": "Susan",
    "otherNames": "",
    "constituency": "Mufakose",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 122 */
  {
    "hansardName": "MAVHUNGA",
    "lastName": "Mavhunga",
    "firstName": "Maxwell",
    "otherNames": "",
    "constituency": "Chitungwiza South",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 123 */
  {
    "hansardName": "MAVIMA",
    "lastName": "Mavima",
    "firstName": "Paul",
    "otherNames": "",
    "constituency": "Gokwe Sengwa",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 124 */
  {
    "hansardName": "MAWITE",
    "lastName": "Mawite",
    "firstName": "Dumezweni",
    "otherNames": "",
    "constituency": "Zvishavane Ngezi",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "ZVISHAVANE NGEZI\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 22/09/1977\r \rPlace of Birth  :Zvishavane\r \rTitle                 :  Eng.\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           : 1347 MandavaZvishavane\r \r \rCell Number    :0712442536\r \rLandline Number       :0777318690\r \rEmail Address :mawited77@gmail.com\r \r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Lundi Primary School\r                              Sinami Primary School\r \rSecondary       :Masase High School\r \rTertiary/University     : \rØ  Gweru Polytechnic-National Certificate Machine Shop Engineering\rØ  Bulawayo Polytechnic- National Certificate Millwright Engineering\rØ  University of Johannesburg- BEng. (Mechanical Engineering)\r \r \rAny other Forms of Training\rØ  Apprenticeship training at Shabani and Mashaba Mines as a Millwright Technician \rParliamentary Career\rFirst elected MP in 2018\r \r \rPolitical History\rØ  Started politics as a youth in 1998 in Zvishavane and rose through the ranks to became MP in 2018\r \r \rCareer in General\rBusinessman managing own chrome mining company\rAreas of Interest\rØ  Mining\rØ  Agriculture\rØ  Sports",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mawite-dumezweni",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/9e742c00b6831ce5ef1ecffa26793251_XS.jpg"
  },

  /* 125 */
  {
    "hansardName": "MAVENYENGWA",
    "lastName": "Mavenyengwa",
    "firstName": "Robson",
    "otherNames": "",
    "constituency": "Zaka North",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "ZAKA NORTH\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 24/03/1971\r \rPlace of Birth  :Zaka, Masvingo\r \rTitle                 :  Mr\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           :Mavenyengwa Village, Chief Nhema Zaka\r \r \rCell Number    :0772835156/0715709215\r \rLandline Number       :\r \rEmail Address :mavenyengwarr@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : \r \rSecondary       :Form 4\r \r \rTertiary/University     : \rØ  Diploma in Human Resources\rØ  ZOU- Development Studies (Current)\r \rAny other Forms of Training\rN/A\r \rParliamentary Career\rØ  First elected MP in 2013\rØ  Reelected in 2018\r \r \rPolitical History\rØ  Joined ZANU PF as a Youth \rØ  Now Provincial Member\r \r \rCareer in General\r \rØ  Served for 23 years in the ZRP as a Police Officer\rØ  Retired as a Superintendent\r \rAreas of Interest\rØ  Soccer\rØ  Watching TV",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mavenyengwa-robson",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/83d805430a76a62d95bd944b328ed4da_XS.jpg"
  },

  /* 126 */
  {
    "hansardName": "MBONDIYA",
    "lastName": "Mbondiya",
    "firstName": "Memory",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 127 */
  {
    "hansardName": "MATSIKENYERE",
    "lastName": "Matsikenyere",
    "firstName": "Nokuthula",
    "otherNames": "",
    "constituency": "Chimanimani West",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "CHIMANIMANI WEST\rZANU PF\r \rGender                        : Female\r \rDate of Birth   : 07/06/1964\r \rPlace of Birth  :Mberengwa\r \rTitle                 :Mrs\r \rStatus               : Married\r \rHouse              : National Assembly\r \r \r \rContact Details \rHome Address : Muuyu weburi P.A Biriwiri, Mhakwe Turn off Chimanimani\r \r \rCell Number    :0772476956/0716410227 \r \rLandline Number       :774776/719774\r \rEmail Address :nokumatsix@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Makuva Primary School\r \rSecondary       :Masume Sec School\r \r \rTertiary/ University    : \rBachelor of Arts Educational Development (BED)- University of Zimbabwe\r \rAny other Forms of Training\rDiploma in Education (n UZ)\r \rParliamentary Career\rØ  First elected MP in 2016\rØ  Reelected in 2018\rØ  Serving under the following Committees:  Justice  and Parliamentary Legal Affairs, Primary and Secondary Education \rØ   Public Accounts\r \rPolitical History\rØ  1980- Youth League/chairperson\rØ  1986- Youth league Admin\rØ  1990-Women’s League\rØ  1995- Women’s League\rØ  2000-Provincial Vice Chairlady\rØ  2013-Provincial Chairlady\rØ  2015-Provincial Vice Chairlady\rØ  2018- Provincial Vice Chairlady\r \rCareer in General\rTeacher for 15 years\rAreas of Interest\rØ  Music\rØ  Watching TV\rØ  Computers",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-matsikenyere-nokuthula",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/83d805430a76a62d95bd944b328ed4da_XS.jpg"
  },

  /* 128 */
  {
    "hansardName": "MAVETA",
    "lastName": "Maveta",
    "firstName": "Tatenda",
    "otherNames": "Annastacia",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 129 */
  {
    "hansardName": "MGUNI",
    "lastName": "Mguni",
    "firstName": "Sonny",
    "otherNames": "Key",
    "constituency": "Bubi",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 130 */
  {
    "hansardName": "MGUNI",
    "lastName": "Mguni",
    "firstName": "Obedingwa",
    "otherNames": "",
    "constituency": "Mangwe",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 131 */
  {
    "hansardName": "MHERE",
    "lastName": "Mhere",
    "firstName": "Edmond",
    "otherNames": "",
    "constituency": "Masvingo Central",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "MASVINGO CENTRAL\rZANU PF\r \rGender                        :   Male\r \rDate of Birth   : 09/08/ 1954\r \rPlace of Birth  :  Masvingo\r \rTitle                  :  Mr\r \rStatus                : Married\r \rHouse             :  National Assembly\r \r \rContact Details \r \rHome Address: 7 Hellet Street\r                             Masvingo\r   \rCell Number    :   +263 773 897 337\r                             \r \rLandline Number:  \r \rEmail Address : emhere96@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Bondolfi Mission\r                     \rSecondary:  Berejena Secondary School\rLower Gweru Secondary School\rUniversity/Tertiary: \rBachelor of Business Administration\r \rAny other forms of Training\rTraining of the trainer certificate\r \rParliamentary Career: \rNational Assembly since 2013\rReelected in 2018\r \rPolitical History: \rØ  Joined in 1976\rØ  Been Provincial Member for a total of 20 years\rØ  Currently a Member of Central Committee\r \rCareer in General\rBusinessman\rAreas of Interest:\rØ  Education\rØ  Golf",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mhere-edmond",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/9e742c00b6831ce5ef1ecffa26793251_XS.jpg"
  },

  /* 132 */
  {
    "hansardName": "MHLANGA",
    "lastName": "Mhlanga",
    "firstName": "Jennifer",
    "otherNames": "N.",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 133 */
  {
    "hansardName": "MKARATIGWA",
    "lastName": "Mkaratigwa",
    "firstName": "Edmond",
    "otherNames": "",
    "constituency": "Shurugwi South",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 134 */
  {
    "hansardName": "MKWANDA",
    "lastName": "Mkwanda",
    "firstName": "Judith",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Bulawayo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 135 */
  {
    "hansardName": "MLAMBO",
    "lastName": "Mlambo",
    "firstName": "Mathias",
    "otherNames": "Matewu",
    "constituency": "Chipinge East",
    "party": "MDC- Alliance",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 136 */
  {
    "hansardName": "M. MLISWA",
    "lastName": "Mliswa",
    "firstName": "Mary",
    "otherNames": "T",
    "constituency": "Hurungwe West",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 137 */
  {
    "hansardName": "T. MLISWA",
    "lastName": "Mliswa",
    "firstName": "Temba",
    "otherNames": "Peter",
    "constituency": "Norton",
    "party": "Independent",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 138 */
  {
    "hansardName": "MHONA",
    "lastName": "Mhona",
    "firstName": "Felix",
    "otherNames": "Tapiwa",
    "constituency": "Chikomba Central",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 139 */
  {
    "hansardName": "MNKANDLA",
    "lastName": "Mnkandla",
    "firstName": "Moli",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 140 */
  {
    "hansardName": "MNANGAGWA",
    "lastName": "Mnangagwa",
    "firstName": "Tongai",
    "otherNames": "Mafidi",
    "constituency": "Harare South",
    "party": "ZANU PF",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 141 */
  {
    "hansardName": "MAYIHLOME",
    "lastName": "Mayihlome",
    "firstName": "Levi",
    "otherNames": "",
    "constituency": "Umzingwane",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 142 */
  {
    "hansardName": "MODI",
    "lastName": "Modi",
    "firstName": "Rajeshkumar",
    "otherNames": "Indukant",
    "constituency": "Bulawayo South",
    "party": "ZANU PF",
    "province": "Bulawayo Metropolitan",
    "bio": "BULAWAYO SOUTH\rZANU PF\r \rGender                        :            Male\r            \rDate of Birth   :           04/02/1959\r            \rPlace of Birth  :            India\r            \rTitle                 :            Mr\r                                    \rHouse              :            National Assembly\r \r \r \rContact Details \r \rHome Address:       1 Sanimarino HumePark Rd Bulawayo  \r            \r \rCell Number:             0732 122 732\r \rLandline Number:      09-2250108\r \rEmail Address rkimodi@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:                M. R. Vidyalay\r \rSecondary:                  A. V. High School \r            \rTertiary/ University:                \rB.A with Economics \rSouth Gujarat University India\r \rAny other Forms of Training\rBusiness Management\r            \rParliamentary Career\rØ  National Assembly Member 2018-2023\rØ  Deputy Minister for Industry and Commerce\r \rPolitical History\rZANU – PF Provincial Secretary for Finance Bulawayo \r \rCareer in General\rBusiness \rAreas of Interest\rØ  Politics \rØ  Economics\rØ  Sports",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-modi-rajeshkumar-indukant",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/52804e667e51a1ffe5b4b23ad3f56e8f_XS.jpg"
  },

  /* 143 */
  {
    "hansardName": "MOLOKELA-TSIYE",
    "lastName": "Molokela-Tsiye",
    "firstName": "Fortune",
    "otherNames": "Daniel",
    "constituency": "Hwange Central",
    "party": "MDC- Alliance",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 144 */
  {
    "hansardName": "C. Moyo",
    "lastName": "Moyo",
    "firstName": "Charles",
    "otherNames": "",
    "constituency": "Pelandaba-Mpopoma",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 145 */
  {
    "hansardName": "P. Moyo",
    "lastName": "Moyo",
    "firstName": "Peter",
    "otherNames": "",
    "constituency": "Southerton",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "MWENENZI WEST\rZANU PF\r            \rGender:                Female\r            \rDate of Birth:       16/11/1958\r            \rPlace of Birth:       Kadoma \r            \rTitle:                       Mrs\r                        \rStatus:                    Married\r \rHouse:                  National Assembly \r \r \r \rContact Details \r \rHome Address:      27 Ridgeway North Borrowdale Harare \r            \r \rCell Number:         0772370942\r \rLandline Number:      \r \rEmail Address pfungwa.moyo@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:            ST Micheals Mission\r \r \rSecondary:        ST Johns High School\r            \r \r \rTertiary/ University:         \rCertificate in Economics - UNISA\rAny other Forms of Training\r \rParliamentary Career\rNational Assembly Member 2018-2023\r \r \r \rPolitical History\rMember of Masvingo Provincial Women’s League\r \rCareer in General\rComputer Programmer\rAreas of Interest\r \rManagement in General",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-moyo-priscilla",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/9e742c00b6831ce5ef1ecffa26793251_XS.jpg"
  },

  /* 146 */
  {
    "hansardName": "P. Moyo",
    "lastName": "Moyo",
    "firstName": "Priscilla",
    "otherNames": "",
    "constituency": "Mwenezi West",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "MWENENZI WEST\rZANU PF\r            \rGender:                Female\r            \rDate of Birth:       16/11/1958\r            \rPlace of Birth:       Kadoma \r            \rTitle:                       Mrs\r                        \rStatus:                    Married\r \rHouse:                  National Assembly \r \r \r \rContact Details \r \rHome Address:      27 Ridgeway North Borrowdale Harare \r            \r \rCell Number:         0772370942\r \rLandline Number:      \r \rEmail Address pfungwa.moyo@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:            ST Micheals Mission\r \r \rSecondary:        ST Johns High School\r            \r \r \rTertiary/ University:         \rCertificate in Economics - UNISA\rAny other Forms of Training\r \rParliamentary Career\rNational Assembly Member 2018-2023\r \r \r \rPolitical History\rMember of Masvingo Provincial Women’s League\r \rCareer in General\rComputer Programmer\rAreas of Interest\r \rManagement in General",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-moyo-priscilla",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/9e742c00b6831ce5ef1ecffa26793251_XS.jpg"
  },

  /* 147 */
  {
    "hansardName": "E. Moyo",
    "lastName": "Moyo",
    "firstName": "Edgar",
    "otherNames": "",
    "constituency": "Matobo North",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 148 */
  {
    "hansardName": "R. Moyo",
    "lastName": "Moyo",
    "firstName": "Richard",
    "otherNames": "",
    "constituency": "Umguza",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "UMGUZA\rZANU PF\r \r \rGender:                       Male\r            \rDate of Birth:              02/08/1971\r            \rPlace of Birth:             Mpilo, Bulawayo\r            \rTitle:                             Mr\r                        \rStatus:                         Married      \r \rHouse:                         National Assembly      \r \r \r \rContact Details \r \rHome Address:     Marsland Farm lot 6 of Hellensvale block            \r            \r \rCell Number:             0778137527/0712 517759\r \rLandline Number:      0979366/0979310\r \rEmail Address\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            :    Dingane Primary School, Hwange\r \r \rSecondary       :    Detema Secondary School\r            \r \rTertiary/ University:   N/A\r \rAny other Forms of Training\rAgriculture\rParliamentary Career\rFirst elected in 2018\r \r \rPolitical History\rMember of ZANU PF since 1987 up to date\r \r \rCareer in General\rØ  Business man \rØ  Farmer\r \rAreas of Interest\rØ  Environment\rØ  Transport\rØ  Mining\rØ  Agriculture",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-moyo-richard",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/52804e667e51a1ffe5b4b23ad3f56e8f_XS.jpg"
  },

  /* 149 */
  {
    "hansardName": "T. Moyo",
    "lastName": "Moyo",
    "firstName": "Tonderayi",
    "otherNames": "",
    "constituency": "Gokwe-Chireya",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 150 */
  {
    "hansardName": "MCHENJE",
    "lastName": "Mchenje",
    "firstName": "Sipiwe",
    "otherNames": "Muchaneta",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 151 */
  {
    "hansardName": "MPARIWA",
    "lastName": "Mpariwa",
    "firstName": "Paurina",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC - Alliance",
    "province": "Harare",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 152 */
  {
    "hansardName": "MPAME",
    "lastName": "Mpame",
    "firstName": "Cuthbert",
    "otherNames": "",
    "constituency": "Zvishavane Runde",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "ZVISHAVANE-RUNDE\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 12/03/1963\r \rPlace of Birth  : Zvishavane\r \rTitle                 :  Adv.\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           :   \rMpame Village\rChief Masunda\rZvishavane\rOr \rC. Mpame and Associates Legal Practitioners, Number 5 Durban Road, Belgravia\rHarare\r \rCell Number    : 0776464974\r \rLandline Number:N\\A\rEmail Address :cuthbertmpame@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary : Marovanidze Primary School Zvishavane\r \rSecondary       : O level Dadaya High school Zvishavane-1980\rA level St Augustine’s School Penhalonga\r \rTertiary/ University    : \rØ  Bachelor of Law (Hons) UZ 1985\rØ  Bachelor of Laws (LLB) UZ 1986\r \r \rAny other Forms of Training\rN\\A\r \rParliamentary Career\rFirst elected MP in 2018\r \rPolitical History\rØ  Joined the liberation struggle in 1977 as a mujibha.\rØ  Member of ZANU PF since 1980 to date. \rØ  Member of Midlands Province- Deputy Secretary for Education since 2017 \rØ  January 2018 to date Secretary for Legal Affairs in the Midlands Province \r \rCareer in General\r \rØ  Admitted as a Legal Practitioner of the High Court of Zimbabwe 27-01-1987\rØ  Joined Sawyers and Mkushi Legal Practitioners\rØ  Founded C.Mpame and Associates legal Practitioner June 2000 to date\rØ  Businessman (land development)\rAreas of Interest\rØ  Commercial Law\rØ  Farming\rØ  Land development \rØ  Local Governance\rØ  Mining and developmental Issues",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mpame-cuthbert",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/9e742c00b6831ce5ef1ecffa26793251_XS.jpg"
  },

  /* 153 */
  {
    "hansardName": "A. Mpofu",
    "lastName": "Mpofu",
    "firstName": "Alum",
    "otherNames": "",
    "constituency": "Mberengwa South",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 154 */
  {
    "hansardName": "M. Mpofu",
    "lastName": "Mpofu",
    "firstName": "Mtokozisi",
    "otherNames": "Manoki",
    "constituency": "Silobela",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "ZANU PF\r \rGender            : Male\r \rDate of Birth   :   26/ 11/1962\r \rPlace of Birth  :  Kwekwe\r \rTitle                  :  Mr\r \rStatus                :  Married\r \rHouse                : National Assembly\r \r \rContact Details \r \rHome Address: 8234 Silobela\r                             Cross roads, Kwekwe\r                           \rCell Number    : +263 773 744 483\r                          +263 773 744 479\r                           +263 715 813 209\r                          \rLandline Number: 055 08 405\rEmail Address: \rsilobelarup@gmail.com\rmtokozisimanokL@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\rPrimary            : Ntobe Primary School\r \rSecondary       :  Cyrene Mission\r \rTertiary/ University:\r \rAny other Forms of Training: \rØ  Business Management\rØ  Diesel Motor Mechanics\r \rParliamentary Career   :  \rØ  First elected MP in 2013\rØ  Reelected in 2018\rØ  Served on the Small and Medium Enterprises and Transport and Infrastructure Development Committees \r \rPolitical History: \rØ  Joined ZAPU in 1978 as a youth\rØ  Later joined ZANU PF in 1987 up to now.\rØ  Provincial Secretary for Economic Affairs for Midlands Province\r \rCareer in General:  \rØ  Businessman\rØ  Miner \rØ  Logistics in transport\rAreas of Interest:\rØ  Agriculture\rØ  Mining\rØ  Transport",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mpofu-mtokozisi-manoki",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/f346e026708bd9bfa4c258b6d0707a5d_XS.jpg"
  },

  /* 155 */
  {
    "hansardName": "R. Mpofu",
    "lastName": "Mpofu",
    "firstName": "Rossy",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "PROPORTIONAL REPRESENTATION\rZANU PF\r            \rGender:                Female\r            \rDate of Birth:          05/12/1960\r            \rPlace of Birth:         Bulawayo\r            \rTitle:                  Ms\r                        \rStatus:                   Married\r \rHouse:                  National Assembly \r \r \r \rContact Details:\r \rHome Address:      Mbuya Village Box 40 Maphisa  \r            \rCell Number:             0716 009 934/0774 680 661\r \rLandline Number:      \r \rEmail Address\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:    Lotshe Primary School\r \r \rSecondary: Sobukhazi Secondary School\r            \r \rTertiary/ University:   N/A\rAny other Forms of Training\r \rParliamentary Career:\rØ  First elected MP in 2013\rØ  Served on the Portfolio Committees on Gender and Women’s Affairs and \rØ  Local Government and National Housing\r \rPolitical History:\rØ  Liberation War heroine\rØ  ZANU PF cadre since 1980\rØ  ZANU PF Central Committee Member for 12 years\r \r \r \rCareer in General:\rØ  Farmer and dedicated to development and socio-economic issues in my District \rØ  Passion for Youth and Women empowerment issues\rAreas of Interest:\rØ  Singing\rØ  Art",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mpofu-rossy",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/f346e026708bd9bfa4c258b6d0707a5d_XS.jpg"
  },

  /* 156 */
  {
    "hansardName": "MUCHIMWE",
    "lastName": "Muchimwe",
    "firstName": "Percy",
    "otherNames": "Teedzai",
    "constituency": "Mutare West",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 157 */
  {
    "hansardName": "MUCHINGURI",
    "lastName": "Muchinguri",
    "firstName": "Oppah",
    "otherNames": "Chamu",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 158 */
  {
    "hansardName": "MUDARIKWA",
    "lastName": "Mudarikwa",
    "firstName": "Simbaneuta",
    "otherNames": "",
    "constituency": "Uzumba",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 159 */
  {
    "hansardName": "MUDYIWA",
    "lastName": "Mudyiwa",
    "firstName": "Magna",
    "otherNames": "",
    "constituency": "Mudzi West",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "MUDZI WEST\rZANU PF\r \rGender                        :   Female\r \rDate of Birth   :   22/10/1962\r \rPlace of Birth  : Mutoko\r \rTitle                  :  Mrs\r \rStatus                :   Widow\r \rHouse                 :  National Assembly\r \r \rContact Details \r \rHome Address:   Magauze Village,\r                            Changwena\r                             Secondary School\r                             P.Bag 39, Mudzi\r \rCell Number    : +263 772 888 288\r                          +263 712 800 513\rLandline Number:\rEmail Address : magnamudyiwa@yahoo.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\rPrimary            : Masarakufa Primary School\r \rSecondary       :  Monte Casino Mission \r \rTertiary/University     : \rØ  Bachelor of Technology in Computer Information and Technology ( BTCIT) -Chinhoyi University of Technology \rØ  Master of Science in Strategic Management- Chinhoyi University\r \r \rAny other Forms of Training: \rØ  Diploma in Computers\rØ  Adult Education Teacher’s Diploma \rØ  Management courses\rØ  ICDL\r \rParliamentary Career   :  \rØ  National Assembly since 2015\rØ  Served in the following Portfolio Committees:\rØ  ICT\rØ  Women affairs\rØ  Chairperson of Labour and Social Welfare Committee since December 2017\rØ  Deputy Minister of Energy and Power Development September 2018 to date\r \rPolitical History   :  \rA member of ZANU PF since 1980\rCurrently Secretary for Education in Mashonaland East Province Women’s League\r \rCareer in General:  \rØ  Served in the President’s Department since 1980 and promoted to the rank of PIO up to retirement in 2015\rØ  Served as Presidents Department Administration Officer in  2015\r \rAreas of Interest:\rØ  Computers\rØ  Environment and Tourism\rØ  Labour and Social welfare\rØ  Information communication technologies\rØ  Community Development",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mudyiwa-magna",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/f346e026708bd9bfa4c258b6d0707a5d_XS.jpg"
  },

  /* 160 */
  {
    "hansardName": "MUGIDHO",
    "lastName": "Mugidho",
    "firstName": "Machirairwa",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC-ALLIANCE",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 161 */
  {
    "hansardName": "MUGWENI",
    "lastName": "Mugweni",
    "firstName": "Campion",
    "otherNames": "Takura",
    "constituency": "Mazowe North",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "MAZOWE NORTH\rZANU PF\r \rGender:                    Male\r            \rDate of Birth:           11/06/1984\r            \rPlace of Birth:           Mutare\r            \rTitle:                         Mr\r                        \rStatus:                      Single\r \rHouse:                     National Assembly         \r \r \r \rContact Details \r \rHome Address:        49 Michael R.D,Mvurwi            \r            \rCell Number:           0719 118 247 /0774118247   \r \rLandline Number:      \r \rEmail Address:campionmugweni75@gmail.com\r \r \r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:        North Park\r \rSecondary:   Watershed, Peterhouse O’ Level\r \rTertiary/ University:      \rAbilene Christian University \r University Of Texas in Arlington B.S Acc\r \r \rAny other Forms of Training\rTobacco\r \rParliamentary Career\rNational Assembly Member 2018-2023\r \r \rPolitical History\rMash  Central ZANU PF Structurers\r \r \rCareer in General\r \rØ  Farmer\rØ  Miner\rØ  Director Roadport\rØ  Director Campion Financial\rØ  Director Rickman Ent\rØ  Director CaprcendInv\r \rAreas of Interest\rØ  Mining\rØ  Agriculture",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mugweni-campion-takura",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/f346e026708bd9bfa4c258b6d0707a5d_XS.jpg"
  },

  /* 162 */
  {
    "hansardName": "MUKAPIKO",
    "lastName": "Mukapiko",
    "firstName": "Dzikamai",
    "otherNames": "Lloyd",
    "constituency": "Redcliff",
    "party": "MDC- Alliance",
    "province": "Midlands",
    "bio": "REDCLIFF CONSTITUENCY\rMDC-A\r \rGender                        : Male\r \rDate of Birth   : 06 – 03- 79\r \rPlace of Birth  : Redcliff\r \rTitle                 : Mr\r \rStatus               : Married \r \rPolitical Party  : MDC A\r \rConstituency    : Redcliff\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           :  Q386  Torwood Redcliff\r \rCell Number    : 0775355330\r \rLandline Number       : 055 2563310\r \rEmail Address :  lyodmukapiko@outlook.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                        : Torwood Pry\r \rSecondary                  : Maramnge High\r \rTertiary/ University    :  N/A\r \r \rAny other Forms of Training\rØ  Brickling\rØ  Welding\r \rParliamentary Career\r 2018 elected to represent  Redcliff Constituency\rServing under the following portfolio Committees:\ri)                    Transport and Infrastructure Development\rii)                  Industry and Commerce\r \rPolitical History\rSince 1999 as a card carrying member and later elected as a District Youth Chairperson  for Redcliff and final elected to be the Provincial Youth Organizer for Midlands North\r \rCareer in General\r \rBoiler Maker\r \rAreas of Interest\rØ  Mining\rØ  Soccer",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mukapiko-dzikamai-lloyd",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/f346e026708bd9bfa4c258b6d0707a5d_XS.jpg"
  },

  /* 163 */
  {
    "hansardName": "MUPONORA",
    "lastName": "Muponora",
    "firstName": "Noveti",
    "otherNames": "",
    "constituency": "Mt Darwin North",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 164 */
  {
    "hansardName": "MUKUNYAIDZE",
    "lastName": "Mukunyaidze",
    "firstName": "Spiwe",
    "otherNames": "Elizabeth",
    "constituency": "Marondera West",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 165 */
  {
    "hansardName": "MURAI",
    "lastName": "Murai",
    "firstName": "Erick",
    "otherNames": "",
    "constituency": "Highfield East",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 166 */
  {
    "hansardName": "MUNETSI",
    "lastName": "Munetsi",
    "firstName": "James",
    "otherNames": "",
    "constituency": "Makoni North",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 167 */
  {
    "hansardName": "MURAMBIWA",
    "lastName": "Murambiwa",
    "firstName": "Ophias",
    "otherNames": "",
    "constituency": "Zaka West",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "ZAKA WEST\rZANU PF\r \rGender                        : Male\r            \rDate of Birth   : 14/04/1973\r            \rPlace of Birth  : Zaka\r            \rTitle                 : Mr\r                        \rStatus              : Married\r \rHouse              : National Assembly    \r \r \rContact Details:\r \rHome Address: Harava School P Bag 60 Jerera        \r            \r \rCell Number: 0772776195/0716991599\r \rLandline Number:      \r \rEmail Address:omurambiwa395@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary: Chivingwi Primary School\r \r \rSecondary: Chivingwi Secondary School\r            \rTertiary/University: \rØ  Great Zimbabwe University Bachelor of Education [2012]  \rØ  Master of Education [Sociology] 2015\rØ  Studying for a P.H.D with UNISA \r \rAny other Forms of Training:\rØ  Trained as a Teacher at Morgenster Teachers College from 1996-1998.\rØ  Attended induction course for deputy head in 2017 \r \rParliamentary Career:\rFirst elected MP in 2018\r \rPolitical History:\rØ  Joined ZANU PF from birth\rØ  Secretary for Education Youth League 2001-2006 Tasungana ward 12\rØ  Secretary for Education main wing 2007-2013 Mutonhori ward 22\rØ  Provincial Member -Secretary for the Welfare of the Disabled Masvingo Province 2013to date \r \r \rCareer in General:\rØ  A teacher by profession\rØ  Joined the Ministry of Education on 01/01/99 after having completed my Diploma in Education at Morgenster Teachers College in 1998 became substantive Deputy Head at Harava in November 2016\rØ  Acted as Head at Veza from 15/09/17 up to the time of resignation in August 2018\r \rAreas of Interest:\rWorking with the community.",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-murambiwa-ophias",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/fedc90db8b13be1183c785d7eb0335c9_XS.jpg"
  },

  /* 168 */
  {
    "hansardName": "MURIRE",
    "lastName": "Murire",
    "firstName": "Joshua",
    "otherNames": "",
    "constituency": "Musikavanhu",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 169 */
  {
    "hansardName": "MUSABAYANA",
    "lastName": "Musabayana",
    "firstName": "David",
    "otherNames": "",
    "constituency": "Wedza North",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "WEDZA NORTH\rZANU PF\r \rGender                        :       Male       \r            \rDate of Birth   :       27/06/1981       \r            \rPlace of Birth          Mutare\r            \rTitle                 :        Dr.\r                        \rStatus              :       Married   \r \rHouse              :      National Assembly\r \r \r \rContact Details \r \rHome Address:           10 Trail Road, Mt Pleasant, Harare\r            \rCell Number:                0777067444\r \rLandline Number:        0772277588\r \rEmail Address            dmusa@zol.co.zw\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:              Munyarari Primary School       \r \rSecondary:          Sakubva Secondary School     \r            \rTertiary/University:          \rØ  University of Zimbabwe, BSC Hons Economics (UZ)\rØ  MBA ‘Nottingham Trend University’ U.K (2013)\rØ  DBA ‘London School of Business UK (2018)\rØ  Chartered Institute Of Management Accountants (CIMA) U.K    \r \rAny other Forms of Training\rICDL ‘Computers’    \r \rParliamentary Career\rØ  First elected MP in 2015\rØ  Reelected in 2018\r \r \rPolitical History\rØ  ZANU PF 1994 to date\rØ  District Chairman 2008\rØ  Provincial Member 2014 to date \r \rCareer in General\rØ  Financial Analyst - ECONET\rØ  Group Corporate Accountant - RTG\rØ  Mineral Economist U.Z\rØ  Provincial Chairman - Zimbabwe Commercial Farmers Union\rØ  President ZATA ‘Zimbabwe Association of Tobacco Growers 2012-2013\r \rAreas of Interest\rØ  Agriculture\rØ  Mining\rØ  ICT \rØ  Economics",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-musabayana-david",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/f346e026708bd9bfa4c258b6d0707a5d_XS.jpg"
  },

  /* 170 */
  {
    "hansardName": "MUKUHLANI",
    "lastName": "Mukuhlani",
    "firstName": "Tavengwa",
    "otherNames": "",
    "constituency": "Mhondoro-Ngezi",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 171 */
  {
    "hansardName": "MUSAKWA",
    "lastName": "Musakwa",
    "firstName": "Elia",
    "otherNames": "",
    "constituency": "Bikita West",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "BIKITA WEST\rZANU PF\r \rGender                        :  Male\r \rDate of Birth   : 24/07/1968\r \rPlace of Birth  : Bikita\r \rTitle                  :Engineer\r \rStatus                : \r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address            :  Mandara School Bag 577 Nyika Bikita\r \rCell Number    :  0717937213/0772237054\r \rLandline Number: 0242 620120\r \rEmail Address : musakwane@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Mandara School Bikita\r \rSecondary       : Zimuto Mission and Pamushana Mission \r \r \rTertiary/University      : \rØ  Management College of Southern Africa MBA\rØ  Certified Plant Engineer-Mechanical –Institution of Plant Engineer U.K \rØ  Diploma in Mechanical Plant Eng.-Harare Polytechnic\rØ  Diploma Business Admin-London\rØ  Certificate in Currency Management and Processing-Germany\rØ  Central Banking Course-Harare\rAny other Forms of Training\r            \rØ  Central Bank Currency management -Germany\rØ  Central Bank Security Systems Course Siemens- Germany\rØ  Building Services Engineering Course -RSA\r \rParliamentary Career\rMember of Parliament-Bikita West 2018-2023\r \r \rPolitical History\rØ  Member of ZANU PF since 1976\rØ  Occupied positions-Branch Youth Chairman\rØ  District Commissar –Ward 5 Bikita\rØ  Province –DeputySecretary Indegenisation\rØ  Secretary for Finance \rØ  Secretary for Economic Affairs\rØ  Committee Member 2\r \rCareer in General\rØ  Ministry of Public Construction-Higher Technician\rØ  Mechanical Maintenance (Mash Central)\rØ  Carnad Metal Box –Fitter Machinist \rØ  Wankie Colliery-Shift Charge Technician: Mechanical Underground\rØ  Held the following positions at Reserve Bank of Zimbabwe of Zimbabwe  from 1994 to 2007:\r \ri)Mechanical Engineer\r \rii)Head Premises and Maintenance\riii) Divisional Chief - Technical and Logistics\rØ  Served on the following Boards:\ri)Broadcasting Authority of Zimbabwe\rii)National Arts Council of Zimbabwe\riii)Kingstons Pvt Ltd and ZESA Enterprises\rØ  Group Chairman- ELIZEM Holdings\rAreas of Interest\rØ  Mechanical Engineering\rØ  Management\rØ  Technical and Logistics",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-musakwa-elia",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/f346e026708bd9bfa4c258b6d0707a5d_XS.jpg"
  },

  /* 172 */
  {
    "hansardName": "MUSANHI",
    "lastName": "Musanhi",
    "firstName": "Kenneth.",
    "otherNames": "Shupikai",
    "constituency": "Bindura North",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 173 */
  {
    "hansardName": "MUSHAYI",
    "lastName": "Mushayi",
    "firstName": "Miriam",
    "otherNames": "",
    "constituency": "Kuwadzana",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 174 */
  {
    "hansardName": "MUSHONGA",
    "lastName": "Mushonga",
    "firstName": "Priscilla",
    "otherNames": "Misihairambwi",
    "constituency": "Proportional Representation",
    "party": "MDC-T",
    "province": "Bulawayo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 175 */
  {
    "hansardName": "MUSHORIWA",
    "lastName": "Mushoriwa",
    "firstName": "Edwin",
    "otherNames": "",
    "constituency": "Dzivarasekwa",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "DZIVARASEKWA\rMDC A\r            \rGender                        :      Male\r            \rDate of Birth   :  15/05/1973\r            \rPlace of Birth  :  Chivhu\r            \rTitle                 :  Mr\r                        \rStatus              :   Married\r \rHouse              :   National Assembly\r \r \r \rContact Details \r \rHome Address: 8085, Nenyasha Marwede    \r                          Harare\r \rCell Number:    077281181\r \rLandline Number:   N\\A\r \rEmail Address: edmush2002@yahoo.co.uk\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:       Chimowa Primary School\r \rSecondary:   Zengeza 3 High School\r \rA’ Level: Mabvuku High School\r            \rUniversity:    \rØ  Bachelor of Banking and Finance at ZOU \rØ  Masters in Banking and Finance at NUST \rAny other Forms of Training\rØ  Diploma in Banking- Credit Management\rØ  Diploma in Banking at Institute of Bankers of Zimbabwe (I.O.B.Z.)\r            \rParliamentary Career\rØ  First elected MP in 2000-2005\rØ  Reelected in 2005 to 2008\rØ  2018 to date\r \rPolitical History\r \rCareer in General\rØ  Banker by profession- ZB 1991-2000\rØ  Financial Consultant – MUSHLINK Consultancy 2002 to date\rAreas of Interest\rØ  Industry and  Economics\rØ  International Trade\rØ  Public Accounting",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-mushoriwa-edwin",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/fedc90db8b13be1183c785d7eb0335c9_XS.jpg"
  },

  /* 176 */
  {
    "hansardName": "MUSIKAVANHU",
    "lastName": "Musikavanhu",
    "firstName": "Dumo",
    "otherNames": "Augustine",
    "constituency": "Chiredzi West",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "CHIREDZI WEST\rZANU PF\r \rGender:                                   Male\r            \rDate of Birth:              11/02/1962\r            \rPlace of Birth:             Rusape\r            \rTitle:                            Mr.\r                        \rStatus:                         Married         \r \rHouse:                         National Assembly                              \r \rContact Details \r \rHome Address:           414 Sabi Drive Chiredzi\r \rCell Number:                0772264771\r \rLandline Number:       N\\A\r \rEmail Address:  faraimusikavanhu@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            :  Dangamvura, Mutare                   \r \rSecondary       : St Augustine’s Mission  Penhalonga  “O” and “A” Levels 1976 to 1981\r            \rTertiary/ University:    \rØ  University Of Zimbabwe- B.Sc. Crop Science 1982 - 1984\rØ  UNISA-Management Development Program 1996\rØ  Currently enrolled for Master of Science in Strategic Management with Chinhoyi University of Technology\r \rAny other Forms of Training\rVarious Management Programmes\r            \rParliamentary Career\rFirst elected MP in 2018\r \rPolitical History\rØ  Grew up in a political family as a son of young brother to late VP Joseph Msika \rØ  Student activist UZ-1982-1984\rØ  Provincial Council Member, Masvingo 2004 to 2006\rØ  Chiredzi Ward 2 District Executive Member 2007-2018\rØ  ZANU-PF Chiredzi West MP Candidate 2018 Harmonized Elections \rCareer in General\rØ  Crop Science lecturer Gwebi Agriculture College January to February 1985\rØ  Graduate Trainee Triangle March to December 1985\rØ  Agronomist Triangle Ltd 1986 -1992\rØ  Agriculture Manager Triangle Ltd 1993 – 2006\rØ  Agriculture Director Triangle Ltd and Hippo Valley Estates of Tongaat Hullet Zimbabwe 2007 - 2016\rØ  Sugarcane farmer Mkwasine Chiredzi District 2003 to date\rØ  Masvingo Development Trust Agriculture Advisor 2017 - 2018\rAreas of Interest\rØ  Agriculture\rØ  Commerce \rØ  Industry",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-musikavanhu-dumo-augustine-farai",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/fedc90db8b13be1183c785d7eb0335c9_XS.jpg"
  },

  /* 177 */
  {
    "hansardName": "MUTODI",
    "lastName": "Mutodi",
    "firstName": "Energy",
    "otherNames": "",
    "constituency": "Goromonzi West",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 178 */
  {
    "hansardName": "MUTOMBA",
    "lastName": "Mutomba",
    "firstName": "William",
    "otherNames": "",
    "constituency": "Buhera North",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 179 */
  {
    "hansardName": "MUTSEYAMI",
    "lastName": "Mutseyami",
    "firstName": "Chapfiwa",
    "otherNames": "Prosper",
    "constituency": "Dangamvura/Chikanga",
    "party": "MDC- Alliance",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 180 */
  {
    "hansardName": "MYAMBO",
    "lastName": "Myambo",
    "firstName": "Annah",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC - Alliance",
    "province": "Harare",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 181 */
  {
    "hansardName": "A. Ncube",
    "lastName": "Ncube",
    "firstName": "Abedinico",
    "otherNames": "",
    "constituency": "Gwanda South",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 182 */
  {
    "hansardName": "S. Ncube",
    "lastName": "Ncube",
    "firstName": "Soul",
    "otherNames": "",
    "constituency": "Matobo South",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 183 */
  {
    "hansardName": "MUSWERE",
    "lastName": "Muswere",
    "firstName": "Jenfan",
    "otherNames": "",
    "constituency": "Makoni West",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 184 */
  {
    "hansardName": "OPHAR. Ncube",
    "lastName": "Ncube",
    "firstName": "Ophar",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Bulawayo",
    "bio": "PROPORTIONAL REPRESENTATION\rZANU PF\r \rGender                        :   Female\r \rDate of Birth   : 01/04/1952\r \rPlace of Birth  :  Tsholotsho\r \rTitle                  :  Ms\r \rStatus                : Single\r \rHouse             :  National Assembly\r \r \r \rContact Details \r \rHome Address: 14936 Nkulumane\r                            12\rCell Number    :   +263 712 539 112\rLandline Number:  09 484984\rEmail Address : \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Standard 2 \r                     \rSecondary:  N/A\r \rUniversity N/A\rAny other forms of Training\rTailor, Women’s clubs\r \rParliamentary Career: \rNational Assembly \rLands\rMember of the Zimbabwe Women Parliamentary Caucus\r \rPolitical History: \r1969-organiser (ZAPU)\r1972- Provincial Member Women’s League- Security Officer\r2008-Central Committee Member\r(Two terms)\r2013- Elected National Assembly Member\r2018-elected Central Committee Member to date\rCareer in General\r \rAreas of Interest:\rProject Management\rSports\rHealth\rReading",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-ncube-ophar",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/fedc90db8b13be1183c785d7eb0335c9_XS.jpg"
  },

  /* 185 */
  {
    "hansardName": "MUSIYIWA",
    "lastName": "Musiyiwa",
    "firstName": "Richard",
    "otherNames": "",
    "constituency": "Mutoko East",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "MUTOKO EAST\rZANU PF\r            \rGender:                Male\r            \rDate of Birth:       07/11/1966\r            \rPlace of Birth:       Lomagundi\r            \rTitle:                      Mr\r                        \rStatus:                   Married\r \rHouse:                  National Assembly \r \r \rContact Details \r \rHome Address:      Chimoyo Primary School  Box 60 Mutoko         \r            \r \rCell Number:             0774 012 763\r \rLandline Number:      \r \rEmail Addressrichardmuiyiwa.rm@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:              Mhandu Primary School     \r                             1974-1980\r \r \rSecondary:           St. Peters Kubatana High \r                             1982-1985\r \r \rTertiary/University:  \rØ  Teachers training at Nyadire Teachers College from 1988-1990\rØ  Certificate in Education\r \rAny other Forms of Training\r \rParliamentary Career\rFirst elected MP in 2018\r \rPolitical History\rØ  Joined ZANU PF youth wing in 1980-Branch Youth wing Hatfield Harare\rØ  Secretary for Security-Cell Kapondoro 2007-2013\rØ  Secretary for Economic Affairs Kapondoro District main board 2013 to date\r \rCareer in General\rØ  Taught at Chimoyo Primary School from 1991 to 2011\rØ  Resigned from teaching in 2011\r \rAreas of Interest\rØ  Education\rØ  Sports\rØ  Agriculture\rØ  Mining",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-musiyiwa-richard",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/f346e026708bd9bfa4c258b6d0707a5d_XS.jpg"
  },

  /* 186 */
  {
    "hansardName": "O. Ncube",
    "lastName": "Ncube",
    "firstName": "Owen",
    "otherNames": "",
    "constituency": "Gokwe Kana",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 187 */
  {
    "hansardName": "MUTAMBISI",
    "lastName": "Mutambisi",
    "firstName": "Colleta",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 188 */
  {
    "hansardName": "E. Ncube",
    "lastName": "Ncube",
    "firstName": "Emma",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "PROPORTIONAL REPRESENTATION\rZANU PF\r \rGender                        : Female\r \rDate of Birth   : 19/01/1961\r \rPlace of Birth  :Gutu\r \rTitle                 :  Ms\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \rContact Details \r \rHome Address           :Farm 37/SD3 Hippo Valley Settlement Chiredzi\r \rCell Number    :0772631518\r \r \rLandline Number       :N/A\r \rEmail Address :emmancube61@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Masvingise School Gutu\r \rSecondary       :Mucheke High School \r                        :Masvingo Form 1-4\r \r \rTertiary/University     : \rØ  Great Zimbabwe College- Shorthand and Typing\r \r \rAny other Forms of Training\rSecretarial Studies 1983-1986\r \rParliamentary Career\rFirst elected MP in 2018\r \r \rPolitical History\rØ  Deputy Secretary for Security 2000-2007\rØ  Provincial Secretary for Administration 2008-2013\rØ  Member of Central Committee 2013-2023\r \rCareer in General\rSecretary in the Office of the President and Cabinet ( 1983)\rAreas of Interest\rØ  Farming- Sugarcane \rØ  Poultry",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-ncube-emma",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/41ba7f77c770a5c3a2110354f4d18992_XS.jpg"
  },

  /* 189 */
  {
    "hansardName": "F. Ncube",
    "lastName": "Ncube",
    "firstName": "Francisca",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 190 */
  {
    "hansardName": "NDEBELE",
    "lastName": "Ndebele",
    "firstName": "Anele",
    "otherNames": "",
    "constituency": "Magwegwe",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "MAGWEGWE\rMDC -A\r \rGender                        : Male\r \rDate of Birth   : 16/07/72\r \rPlace of Birth  :Bulawayo\r \rTitle                 :  Mr\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           : 3510 Magwegwe North Bulawayo\r \r \rCell Number    :0772114510\r \rLandline Number       :292-521707\r \rEmail Address :anelendex@yahoo.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : McKeurtan Primary School\r \rSecondary       :Inyathi High School\r \r \rTertiary/University     :\rØ  Bachelor of laws-UZ\rØ  BSc Hons Media and Society Studies – MSU\rØ  Master of Commerce Marketing Strategy (MSU) \rØ  Dip Education –UZ, \rØ  Dip Humanitarian Assistance (LSTM), Public Health Policy (Emory)\r \r \r \rAny other Forms of Training\rØ  Public Health Policy\rØ  Law \rØ  Computers (ICDL)\rØ  Further Teachers Education\r \r \rParliamentary Career\rØ  Member of the 8th and 9th Parliament\rØ  Delegate to SADC PF\r \r \rPolitical History\rØ  Member of MDC since 1999\rØ  Current Chairman Magwegwe District – Main Wing\r \r \rCareer in General\rØ  Worked extensively in the non-profit making sector \rØ  More than 25 years’ experience in the Development Sector\rØ  Has undertaken substantial Development Consultancy\r \rAreas of Interest\rØ  Mining Law\rØ  Media Laws\rØ  Constitutional Law",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-ndebele-anele",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/41ba7f77c770a5c3a2110354f4d18992_XS.jpg"
  },

  /* 191 */
  {
    "hansardName": "NDIWENI",
    "lastName": "Ndiweni",
    "firstName": "Doubt",
    "otherNames": "",
    "constituency": "Hurungwe Central",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "Hon. Ndiweni Dought\rHurungwe Central\rZANU PF\r \rGender             : Male\r \rDate of Birth    : 03-08-63\r \rPlace of Birth   : Gokwe\r \rTitle                 :     Mr\r \rStatus               : Married\r \rHouse                          :  National Assembly\r \r \rContact Details \r \rHome Address : 27 Palmer St Karoi\r  \rCell Number       : 0772239105\r \rEmail Address    : doughtndiweni@gmail.com\r  \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                :  Amaveni Primary School\r \rSecondary           : Amaveni Secondary School\r \r \rUniversity           : University of Zimbabwe- Pharmacy (Hons)\r                      \rParliamentary Career\r2018 National Assembly\r \rPolitical History\rJoined ZANU PF in 1988\rDistrict treasurer Takawira District 1992-2018\rChairman Karoi Town Council 1995-96\r2000-2001, 2003-2004\r \rCareer in General\r \rPharmacist\rPresident Retail Pharmacy Association 2009-2013\rVice President Pharmacist council 2015-2020\r  \rAreas of Interest\rSoccer",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-ndiweni-dought",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/52804e667e51a1ffe5b4b23ad3f56e8f_XS.jpg"
  },

  /* 192 */
  {
    "hansardName": "S. Ndlovu",
    "lastName": "Ndlovu",
    "firstName": "Stella",
    "otherNames": "",
    "constituency": "Luveve",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "LUVEVE\rMDC-A\r \rGender                        : Female\r \rDate of Birth   : 12/08/1958\r \rPlace of Birth  :BuliliMangwe\r \rTitle                 :Mrs\r \rStatus               : Widow\r \r \rContact Details \r \rHome Address           : 5384 Luveve Bulawayo\r \r \rCell Number    :0772897956\r \rLandline Number       :09-520989\r \rEmail Address :stellandlovu2@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : \r \rSecondary       :O’Level \r \r \r \r \r \r \rTertiary/University     : \r \rAny other Forms of Training\rØ  Book keeping\rØ  Dress Design\rØ  Business Women\r \r \rParliamentary Career\rFirst elected MP in 2018\r \r \rPolitical History\rØ  Joined politics in 2008 and rose through the structures to District chairperson.\rØ  2013 contested as a ward councilor and lost\r \rCareer in General\rØ  Trained as a Book keeper \rØ  worked at Eland Group of Hotels as a book keeper \rØ  Manageress for Windermere Hotel. \rØ  A business woman \r \rAreas of Interest\rGender especially looking at a girl child",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-ndlovu-stella",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/41ba7f77c770a5c3a2110354f4d18992_XS.jpg"
  },

  /* 193 */
  {
    "hansardName": "M. Ndlovu",
    "lastName": "Ndlovu",
    "firstName": "Nqobizitha",
    "otherNames": "Mangaliso",
    "constituency": "Bulilima East",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 194 */
  {
    "hansardName": "N. Ndlovu",
    "lastName": "Ndlovu",
    "firstName": "Nomathemba",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC- Alliance",
    "province": "Matabeleland South",
    "bio": "PROPORTIONAL REPRESENTATION \rMDC-A\r \rGender                        :   Female\r \rDate of Birth   : 23/10/1974\r \rPlace of Birth  :  Chirumanzi\r \rTitle                  :  Miss\r \rStatus                : Single\r \rContact Details \r \rHome Address: 94 Vubachikwe\r                             Gwanda\r   \rCell Number    :   +263 773 576 435\r                             \r \rLandline Number:  \r \rEmail Address : nomathembandlo@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Silozwe Pry School\r                     \rSecondary:  Leopard Takawira Sec\r                 : Sabiwa High School\r \rUniversity:  N/A\r \rAny other forms of Training\rICDL\r \rParliamentary Career: \rMP since 2013\r \rPolitical History: \rJoined MDC in 1999 and holding different positions\r \rCareer in General\rPolitics\r \rAreas of Interest:\rØ  Tourism\rØ  Health\rØ  Church",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-ndlovu-nomathemba",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/41ba7f77c770a5c3a2110354f4d18992_XS.jpg"
  },

  /* 195 */
  {
    "hansardName": "A. Ndlovu",
    "lastName": "Ndlovu",
    "firstName": "Alice",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 196 */
  {
    "hansardName": "E. Ndlovu",
    "lastName": "Ndlovu",
    "firstName": "Evelyn",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 197 */
  {
    "hansardName": "NDUNA",
    "lastName": "Nduna",
    "firstName": "Dexter",
    "otherNames": "",
    "constituency": "Chegutu West",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 198 */
  {
    "hansardName": "NGOME",
    "lastName": "Ngome",
    "firstName": "Jefry",
    "otherNames": "",
    "constituency": "Mutare South",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 199 */
  {
    "hansardName": "NGULUVHE",
    "lastName": "Nguluvhe",
    "firstName": "Albert",
    "otherNames": "",
    "constituency": "Beitbridge East",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "BEITBRIDGE EAST\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 11/11/1958\r \rPlace of Birth  :Beitbridge\r \rTitle                 :  Mr\r \rStatus               : Married\r \rHouse                          :  National Assembly\r \r \r \rContact Details \r \rHome Address           : 633 Baobab Rd, Beitbridge\r \r \rCell Number    :0773047913\r \rLandline Number       :0286 23593 \r \rEmail Address :Nguluvheagmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Chapangwe School \r \rSecondary       :Manama Gwanda\r \r \rTertiary/University     : \rBachelor of Criminology-UNISA\r \r \r \rAny other Forms of Training\rN/A\r \rParliamentary Career\rFirst elected MP in 2018\r \r \rPolitical History\rØ  Joined ZANU PF in 1977\rØ  Held position of Detachment Commander under ZIPRA\r \rCareer in General\rWorked in the President’s department.\r \rAreas of Interest\rØ  Farming\rØ  Shooting \rØ  Sport",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-nguluvhe-albert",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/41ba7f77c770a5c3a2110354f4d18992_XS.jpg"
  },

  /* 200 */
  {
    "hansardName": "NGWENYA",
    "lastName": "Ngwenya",
    "firstName": "Stephen",
    "otherNames": "",
    "constituency": "Gokwe-Gumunyu",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "GOKWE GUMUNYU\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 25/04/1973\r \rPlace of Birth  :Makoni\r \rTitle                 :  Mr\r \rStatus               : Married\r \rHouse                 :  National Assembly\r \r \rContact Details \r \rHome Address           : Village 15D Chaminuka, Msadzi Gokwe North\r \r \rCell Number    :0772881361\r \rLandline Number       :\r \rEmail Address :stephngwenya@gmail.com\r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Mzilikazi Primary\r \rSecondary       :Mzilikazi High School\r                        Dzivaresekwa High School\r \r \rTertiary/University     : \rCurrently studying for a law degree with UNISA\r \r \rAny other Forms of Training\rØ  Certificate in Prosecution \rØ  Certificate in Recruitment\r \r \rParliamentary Career\rNational Assembly 2018\r \r \rPolitical History\rZANU PF Party from 1989 in youth wing\r \r \rCareer in General\rØ  Served in the ZRP and attained the rank of Assistant Inspector\rØ  Public Prosecutor\r \rAreas of Interest\rØ  Law\rØ  Mining\rØ  Farming \rØ  Foreign Affairs",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-ngwenya-stephen-1",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/fedc90db8b13be1183c785d7eb0335c9_XS.jpg"
  },

  /* 201 */
  {
    "hansardName": "NHAMBO",
    "lastName": "Nhambo",
    "firstName": "Ferescah",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 202 */
  {
    "hansardName": "NHARI",
    "lastName": "Nhari",
    "firstName": "Vairet",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 203 */
  {
    "hansardName": "NKANI",
    "lastName": "Nkani",
    "firstName": "Andrew",
    "otherNames": "",
    "constituency": "Chakari",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 204 */
  {
    "hansardName": "NKOMO",
    "lastName": "Nkomo",
    "firstName": "Male",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 205 */
  {
    "hansardName": "NYABANI",
    "lastName": "Nyabani",
    "firstName": "Tendai",
    "otherNames": "",
    "constituency": "Rushinga",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "Hon. Nyabani Tendai\rRushinga\rZANU PF\r \r \r \rGender             : Male\r \rDate of Birth    : 25-01-73\r \rPlace of Birth   : Rusenga\r \rTitle                 :   (Miss/ Ms/Mrs/Dr/Prof/Adv. etc.)  Mr\r \rStatus               : Married\r \rHouse                          :  National Assembly\r \r \rContact Details \r \rHome Address : stand No 1228 Rushinga\r  \rCell Number       : 0772207384\r \r \rEmail Address    : tendainyabani@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                :  Nyanheve\r \rSecondary           : Marymount\r \r \rUniversity           : N/A\r                                                       \rAny other Forms of Training\r   \r \r \rParliamentary Career\rNational Assembly 2018\r \rPolitical History\r \rSecretary for Health\rDeputy Secretary for disabled\rDeputy sector of Education\rVice chairman\rSecretary for Production and  Labour\r \r \rCareer in General\r \rBusinessman\rFarming\rMining\r \rAreas of Interest\rFarming \rMining\rBusiness",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-nyabani-tendai",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/52804e667e51a1ffe5b4b23ad3f56e8f_XS.jpg"
  },

  /* 206 */
  {
    "hansardName": "NYAMUDEZA",
    "lastName": "Nyamudeza",
    "firstName": "Sibonile",
    "otherNames": "",
    "constituency": "Chipinge West",
    "party": "MDC- Alliance",
    "province": "Manicaland",
    "bio": "Hon.Nyamudeza Sibonile\rChipinge West\rMDC-A\r \rGender             : Male\r \rDate of Birth    :  10 March 1967\r \rPlace of Birth   : Chipinge\r \rTitle                  :  Mr\r \rStatus                :  Married\r \rHouse                          :  National Assembly\r \r \r \rContact Details \r \rHome Address : Tanganda Halt P.O Box 330 Chipinge\r \r                \r \rCell Number        :  +263 774 018 069\r \rLandline Number:  \r \rEmail Address     :  sibonilenyamudeza@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                :  \r \r \rSecondary           : O’ Level 1985\r                               \r \r \rUniversity           :  Mutare Technical College 1986-1988\r \rAny other Forms of Training   :  Fitter and turner\r \rParliamentary Career:  2008 up to date\r \r \r \rPolitical History   : \rZanu Ndonga 1990-1999\rMDC 1999 to date\r \rCareer in General: \rBusinessman\rAreas of Interest \rMining, Home affairs and defense, small to medium enterprises",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-nyamudeza-sibonile",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/919acbd93a09198eef55d141863c0dbb_XS.jpg"
  },

  /* 207 */
  {
    "hansardName": "NYASHANU",
    "lastName": "Nyashanu",
    "firstName": "Mathew",
    "otherNames": "",
    "constituency": "Buhera Central",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "BUHERA CENTRAL\rZANU PF\rGender                       : Male\rDate of birth             : 09-03-1973\rPlace of Birth            : Buhera\rTitle                           : Dr\rStatus                        : Married\rPolitical Party          : ZANU PF\rHouse                       : National Assembly\rContact Details\rHome Address        : 35 White ladies lane\r                                   Borrowdale\rCell Number            : 0772 276082/ 0772989148\rLandline Number    : 782149\rEmail Address         : salmaholdings@gmail.com\rAcademic Qualifications (Institutions Attended and Qualifications Attained)\rPrimary: Nechavava Primary School\rSecondary: Chitsa High School “A” level\rTertiary/ University: \rØ  Graduate  of Banking and Finance  (S.A. Institute of Bankers)\rØ   Associate  of the Institute of Bankers of Bankers of Zimbabwe (AIBZ ) \rØ   Masters of  Business Administration  ( Management College of Southern Africa)\rØ  Doctor of Philosophy PhD in Management of Technology and Innovation: Majored in Sustainable development and Development Finance  ( Davinci  University of South Africa)\rAny other forms of Training\r3 years accelerated Training Programme at Barclays Bank of Zimbabwe\rParliamentary Career\rØ  Elected 2018 to represent Buhera Central Constituency\rØ  A member of Standing Rules and Orders\rØ   Member of the Portfolio Committee on Public Accounts\rØ  Member of the Portfolio Committee on  Energy and Power Development\r \rPolitical History\rØ  Joined ZANU PF as Child Parliamentarian in 1991\rØ  Was a district member of the Party until 2013\rØ  Became Secretary for Science and technology for Zanu PF Manicaland Province in 2013\rCareer in General\rØ  Worked as a Bank Manager for 12 years\rØ  Founded a Plastic Manufacturing Company and have been its Managing Director for 15 years\rAreas of Interest\rØ  Finance\rØ  Industry and Commerce",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-nyashanu-mathew",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/41ba7f77c770a5c3a2110354f4d18992_XS.jpg"
  },

  /* 208 */
  {
    "hansardName": "NYATHI",
    "lastName": "Nyathi",
    "firstName": "Ronald",
    "otherNames": "Robson",
    "constituency": "Shurugwi North",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "SHURUGWI NORTH\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 06/11/1962\r \rPlace of Birth  :Mutare\r \rTitle                 :Mr\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           : Triangle Farm 1 Brown Lee Rd, Box 340 Shurugwi\r \r \rCell Number    :0712421150/0774949345\r \rLandline Number       :0526293\r \rEmail Address :rennyathi@yahoo.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Chingozi Primary School\r \rSecondary       : Through Correspondence\r \r \rTertiary/ University    : \rØ  Masters in Business Studies at Midlands State University\rØ  National Higher Diploma in Marketing Management at Harare Polytechnic \r \r \rAny other Forms of Training\rMilitary Air Force of Zimbabwe from 1980-1987\r \rParliamentary Career\rFirst elected MP in 2018\r \r \rPolitical History\rØ  Mujiba branch- Secretary for Finance 2000 \rØ  Deputy Political Commissar 2010- Provincial Secretary for Health Child welfare and Elderly \rØ  Currently Secretary for finance midlands province ZANU PF\r \rCareer in General\rØ  Consultant- farming – transport, business and mining \rØ  ZINWABoard member\r \rAreas of Interest\rØ  Mining \rØ  Farming",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-nyathi-ronald-robson",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/41ba7f77c770a5c3a2110354f4d18992_XS.jpg"
  },

  /* 209 */
  {
    "hansardName": "NYERE",
    "lastName": "Nyere",
    "firstName": "Christina",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "Hon. Nyere Christine\rMashonaland West PR\rZanu Pf\r \rGender             :  Female\r \rDate of Birth    :  29 May 1953\r \rPlace of Birth   : Manicaland Makoni\r \rTitle                  :  Mrs\r \rStatus                :  married\r \rHouse                          :  National Assembly\r \r  \rContact Details \r \rHome Address : A5 Africa Block Gava Kariba\r \r       \r \rCell Number        :  +263 776 821 694\r \rLandline Number:  \r \rEmail Address     : \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                :  \r \r \rSecondary           : Bvumba High Manicaland\r \r \rUniversity           : \r \rAny other Forms of Training   :  Leadership training \r \r \rParliamentary Career: \r\r 2013 up to date\r \r  Political History   :\rfrom 76 to independence support Zanla forces from 81 nyika vanhu Branch chairman from 86-88- Secretary for Mbuya Nehanda District\rFrom 89-92 Mbuya Nehanda District\rFrom 2002 secretary for disabled with Province\r2004 secretary for security\r2013 secretary for production women’s league\r2018 secretary for security main wing\r \rCareer in General:  politician farmer and christian\r \r \rAreas of Interest  \rGoing to church, reading and watching TV",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-nyere-christine",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/52804e667e51a1ffe5b4b23ad3f56e8f_XS.jpg"
  },

  /* 210 */
  {
    "hansardName": "NYOKANHETE",
    "lastName": "Nyokanhete",
    "firstName": "Jacob",
    "otherNames": "",
    "constituency": "Masvingo Urban",
    "party": "MDC- Alliance",
    "province": "Masvingo",
    "bio": "MASVINGO URBAN\rMDC A\r            \rGender                        :             Male\r            \rDate of Birth   :           22/06/1982\r            \rPlace of Birth  :           Nyanga\r            \rTitle                 :          Mr\r                        \rStatus              :           Married\r \rHouse              :           National Assembly\r \r \rContact Details \r \rHome Address:           4729 Rovambira Street Rujeko B Masvingo\r            \r \rCell Number:             0773246400\r \rLandline Number:      \r \rEmail Address jnjackie40@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:                     Chitenderano Primary School-Gutu\r \r \rSecondary:                Rumhizha Secondary  Olevel\r            \rTertiary/University: \rØ  Holder of CIS from the CIS Institute of Chartered Secretaries and Administrators in Zimbabwe(ICSAZ)\r \rAny other Forms of Training\rParliamentary Career\rFirst elected MP in 2018\r \rPolitical History\rØ  Joined MDC in 2006.\rØ  Rose from the Branch position to the current position of Provincial Executive Member for Masvingo Province\rØ  Student’s leader-(ZINASU) at Masvingo Polytechnic from 2001 to 2003\r \rCareer in General\rØ  District Accountant-DDF from January 2005 to May 2006\rØ  Provincial Accountant at Zimbabwe National Family Planning Council –Masvingo Province from January 2009 up to August 2018\rAreas of Interest\rØ  Financial/Management\rØ  Corporate Governance and Public Accounting",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-nyokanhete-jacob",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/22e0f27f718beb2c1f57cf0e3dece31b_XS.jpg"
  },

  /* 211 */
  {
    "hansardName": "I. Nyoni",
    "lastName": "Nyoni",
    "firstName": "Ilos",
    "otherNames": "",
    "constituency": "Bulawayo East",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 212 */
  {
    "hansardName": "S. Nyoni",
    "lastName": "Nyoni",
    "firstName": "Sithembiso",
    "otherNames": "G.",
    "constituency": "Nkayi North",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 213 */
  {
    "hansardName": "OMAR",
    "lastName": "Omar",
    "firstName": "Joosbi",
    "otherNames": "",
    "constituency": "Mwenezi East",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 214 */
  {
    "hansardName": "K. Paradza",
    "lastName": "Paradza",
    "firstName": "Kindness",
    "otherNames": "",
    "constituency": "Makonde",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 215 */
  {
    "hansardName": "J. Paradza",
    "lastName": "Paradza",
    "firstName": "John",
    "otherNames": "",
    "constituency": "Gutu West",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 216 */
  {
    "hansardName": "PHUTI",
    "lastName": "Phuti",
    "firstName": "Dingumuzi",
    "otherNames": "",
    "constituency": "Bulilima West",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 217 */
  {
    "hansardName": "PHULU",
    "lastName": "Phulu",
    "firstName": "Kucaca",
    "otherNames": "Ivumile",
    "constituency": "Nkulumane",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 218 */
  {
    "hansardName": "PORUSINGAZI",
    "lastName": "Porusingazi",
    "firstName": "Enock",
    "otherNames": "",
    "constituency": "Chipinge South",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 219 */
  {
    "hansardName": "RUNGANI",
    "lastName": "Rungani",
    "firstName": "Annah",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 220 */
  {
    "hansardName": "SAMAMBWA",
    "lastName": "Samambwa",
    "firstName": "Edmore",
    "otherNames": "",
    "constituency": "Zhombe",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 221 */
  {
    "hansardName": "SAMSON",
    "lastName": "Samson",
    "firstName": "Aliginia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 222 */
  {
    "hansardName": "SAMUKANGE",
    "lastName": "Samukange",
    "firstName": "Jonathan",
    "otherNames": "Tawonana",
    "constituency": "Mudzi South",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 223 */
  {
    "hansardName": "RWODZI",
    "lastName": "Rwodzi",
    "firstName": "Barbara",
    "otherNames": "",
    "constituency": "Chirumanzu",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 224 */
  {
    "hansardName": "SACCO",
    "lastName": "Sacco",
    "firstName": "Joshua",
    "otherNames": "Kurt",
    "constituency": "Chimanimani East",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 225 */
  {
    "hansardName": "RAIDZA",
    "lastName": "Raidza",
    "firstName": "Marko",
    "otherNames": "",
    "constituency": "Mberengwa East",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "Hon. Raidza Marko\rMberengwa East\rZanu Pf\r \rGender                        :   Male\r \rDate of Birth   :  06 October 1976\r \rPlace of Birth  : Musume Hospital Mberengwa\r \rTitle                  :  Mr\r \rStatus                :  Married\r \rHouse             :  National Assembly\r \r \r \rContact Details \r \rHome Address:  Chiwara Primary School\r                           P.O Box 633 Zvishavane\r \rCell Number    :   +263 719 991 188\r                            +263 784 991 188\rLandline Number: \r \rEmail Address : mraidza@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Chiwara Primary School\r \rSecondary: Mbuyanehanda High School\r   Zvishavane  \r \rUniversity: \rInternational University of Management\rMasters in Business Administration\rInternational University of Management –Namibia\rBachelors Degree in Human Resources Management\rUnisa-Diploma in Taxation\rUnisa-Certificate in Practical bookkeeping\r \r Any other Forms of Training: \rDiploma in real Estate Management-Namibia Estate and agents Board\r \rParliamentary Career: \rNational Assembly 2018\r \rPolitical History: \rBeen member of Zanu Pf since 1990\rBranch youth Chairperson- Chomukuzhe 1991-1997\rSecretary for Economic Affairs-Glen Norah District 2002-2012\rCommittee member madozvo district 2013 November\rCareer in General:\rPractice Manager-Furai Chapmany and Partners Legal Practitioners 1998-2005\r \rManaging Consultant- Upper grade consulting group 2006 up to date \r(Zimbabwe/Namibia)\r \rAreas of Interest:\rLegal\rFinance\rHuman Resources",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-raidza-marko",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/22e0f27f718beb2c1f57cf0e3dece31b_XS.jpg"
  },

  /* 226 */
  {
    "hansardName": "SANSOLE",
    "lastName": "Sansole",
    "firstName": "Tose",
    "otherNames": "Wesley",
    "constituency": "Hwange East",
    "party": "MDC- Alliance",
    "province": "Matabeleland North",
    "bio": "SANSOLE TOSE WESLEY\rHWANGE EAST\rMDC-A\r \rGender                        : Male\r \rDate of Birth   :  28 March 1957\r \rPlace of Birth  : Hwange\r \rTitle                  :  Mr\r \rStatus                :  \r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           :668 Marula Cres, Victoria Falls\r            \r \rCell Number    :  +263 772 249 138\r \rLandline Number:\r \rEmail Address : twsansole@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Chinotimba Primary School \r \rSecondary:      Tegwani secondary school O’Level\r                        Mziklikazi High School  \r                         A’ Level\r \r \rTertiary/ University    : \rUNISA, left to pursue articles in accounting\r \rAny other Forms of Training:  Institute of Chartered Accountants of Zimbabwe articled accountant\rØ  Zimbabwe institute of Management\rØ  Diploma in General Management\rØ  IPMZ certificate in personal management\r \rParliamentary Career:\rØ  MP for Hwange east from 2008 to date\rØ  Member of the Following Portfolio Committees: \ri)                    Public Accounts\rii)                  Finance and Economic Development \r \rPolitical History   : \rØ  Joined PF Zapu since 1974 to late 1980’s \rØ  Then joined MDC T since 2000 which is now MDC Alliance\r \rCareer in General: \rØ  Completed articles in Accountancy and worked for a firm of Cchartered Accountants\rØ  Worked as Area Manager for UTC (UNITED Touring Company)\rØ  Worked as Executive Mayor in Victoria Falls up to 2008\rØ  Member of Parliament for Hwange East since 2008 to date\r \r \rAreas of Interest\rSoccer",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-sansole-tose-wesley",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/22e0f27f718beb2c1f57cf0e3dece31b_XS.jpg"
  },

  /* 227 */
  {
    "hansardName": "SANYATWE",
    "lastName": "Sanyatwe",
    "firstName": "Chido",
    "otherNames": "",
    "constituency": "Nyanga North",
    "party": "ZANU PF",
    "province": "Manicaland",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 228 */
  {
    "hansardName": "SARUWAKA",
    "lastName": "Saruwaka",
    "firstName": "Trevor",
    "otherNames": "Jones",
    "constituency": "Mutasa Central",
    "party": "MDC- Alliance",
    "province": "Manicaland",
    "bio": "Hon. Saruwaka Trevor J.L\rMutasa Central\rMDC A\r \rGender                        :   Male\r \rDate of Birth   :  17 May 1975\r \rPlace of Birth  : Mutasa\r \rTitle                  :  Mr\r \rStatus                :  Married\r \rHouse             :  National Assembly\r \r \r \rContact Details \r \rHome Address:  Saruwaka Village\r                           Chief Mutasa\r \rCell Number    :   +263 772 713 547\r                            \rLandline Number: \r \rEmail Address : saruwakatjl@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Kosten (grade 1) \r                    Imbeza (grade 2)\r                    Hartfield (grade 3-7)\rSecondary:  ST Augustine (form 1-4)\rMarist brothers form (5-6)\rUniversity: Nelson Mandela Metropolitan (RSA)\rBindura University (BUSE)\r \rParliamentary Career: \rNational Assembly since 2008\r \rPolitical History: \r \rJoined MDC T in 1999\rProvincial spokesperson-Manicaland 2014 to date\rCareer in General:\r \rForester\rSport Administrator\r \rAreas of Interest:\rEnvironment conservation\rSport\rHuman Rights",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-saruwaka-trevor-j-l",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/22e0f27f718beb2c1f57cf0e3dece31b_XS.jpg"
  },

  /* 229 */
  {
    "hansardName": "SEREMWE",
    "lastName": "Seremwe",
    "firstName": "Bannwell",
    "otherNames": "",
    "constituency": "Mt Darwin West",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 230 */
  {
    "hansardName": "SHAVA",
    "lastName": "Shava",
    "firstName": "Josephine",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 231 */
  {
    "hansardName": "SHAMU",
    "lastName": "Shamu",
    "firstName": "Webster",
    "otherNames": "Kotiwani",
    "constituency": "Chegutu East",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 232 */
  {
    "hansardName": "SHIRICHENA",
    "lastName": "Shirichena",
    "firstName": "Ellina",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 233 */
  {
    "hansardName": "SEWERA",
    "lastName": "Sewera",
    "firstName": "Jonah",
    "otherNames": "Nyikadzino",
    "constituency": "Murewa West",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 234 */
  {
    "hansardName": "SHONGEDZA",
    "lastName": "Shongedza",
    "firstName": "Elizabeth",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 235 */
  {
    "hansardName": "SHUMBAMHINI",
    "lastName": "Shumbamhini",
    "firstName": "Hebert",
    "otherNames": "",
    "constituency": "Mutoko South",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "MUTOKO SOUTH\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 10/01/1978\r \rPlace of Birth  :Murewa\r \rTitle                 :   N\\A\r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \rContact Details \r \rHome Address           : 8219 Cold Comfort\r                               Harare\r \rCell Number    :0772717909\r \rLandline Number       :N\\A\r \rEmail Address :shumbamhinih@gmail.com\r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary            : Kushinga Primary School\r \rSecondary       :Kushinga Secondary School\r \r \rTertiary/ University    : N\\A\r \r \rAny other Forms of Training\r \rN\\A\rParliamentary Career\rNational Assembly 2018\r \rPolitical History\rØ  Started active politics in 2000\rØ  2000-2005 Secretary for Transport in Munhenga District Goromonzi\rØ  2005-2008 same position\rØ  2008- transferred to Mutoko and coopted as District Member\rØ  2009-2013 District Chairman\rØ  2013 to date Provincial Member\rØ  Currently the Mashonaland East Political Commissar\rCareer in General\rFarmer\rAreas of Interest\rØ  Mining \rØ  Farming",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-shumbamhini-hebert",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/22e0f27f718beb2c1f57cf0e3dece31b_XS.jpg"
  },

  /* 236 */
  {
    "hansardName": "D. Sibanda",
    "lastName": "Sibanda",
    "firstName": "Dubeko",
    "otherNames": "Prince",
    "constituency": "Binga North",
    "party": "MDC- Alliance",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 237 */
  {
    "hansardName": "Z. Sibanda",
    "lastName": "Sibanda",
    "firstName": "Zenzo",
    "otherNames": "",
    "constituency": "Tsholotsho South",
    "party": "ZANU PF",
    "province": "Matabeleland North",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 238 */
  {
    "hansardName": "M. Sibanda",
    "lastName": "Sibanda",
    "firstName": "Madodana",
    "otherNames": "",
    "constituency": "Gwanda North",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 239 */
  {
    "hansardName": "S. Sibanda",
    "lastName": "Sibanda",
    "firstName": "Dorcas",
    "otherNames": "Staff",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Bulawayo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 240 */
  {
    "hansardName": "O. Sibanda",
    "lastName": "Sibanda",
    "firstName": "Omega",
    "otherNames": "",
    "constituency": "Vungu",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "SIBANDA OMEGA\rVUNGU\rZANU PF\r \rGender                        :   Male\r \rDate of Birth   :  09 June 1966\r \rPlace of Birth  :  Gweru\r \rTitle                  :  Mr\r \rStatus                :  Married\r \rHouse             :  National Assembly\r \r \r \rContact Details \r \rHome Address: \r3 Claremont Road, Bulawayo, Madinga village.\r            \rCell Number    :   +263 773 332 504\r \rLandline Number: 09 77664\r \rEmail Address : locdistributors@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :    \r \rSecondary: \r \r \rUniversity: \rDiploma in strategic management\rCurrently studying MBA\r \rAny other Forms of Training: \rAutomotive Engineer at Bulawayo Polytech\rCMED manager\rParliamentary Career:\rNational Assembly 2018\r \rPolitical History: \rØ  Youth member in Mpopoma/Pelandaba in 1994.\rØ  Transferred to Mguza District in 2000-2003.\rØ  Went back to Mpopoma-Pelandaba constituency and was a campaign manager for Hon. Dr. Ndlovu and again for Honorable J. Tshuma\r \rCareer in General:\rØ  Automotive Engineer at Bulawayo Polytech and worked there as an artisan then foreman and Manager.\r \rØ  Owned a business 1999 of hospitality and commodity broking\rØ  Football- current ZIFA vice President with many years of football administration\r \r \rAreas of Interest:\rØ  Business- commodity broking and new business opportunities\rØ  Football",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-sibanda-omega",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/21f17c9e863ce68047046a2d88bbdae5_XS.jpg"
  },

  /* 241 */
  {
    "hansardName": "SIKHALA",
    "lastName": "Sikhala",
    "firstName": "Job",
    "otherNames": "",
    "constituency": "Zengeza West",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "Hon. Sikhala Job\rZengeza West\rMDC A\r \r \rGender                        :   Male\r \rDate of Birth   : 30 October 1972\r \rPlace of Birth  :  Guzu\r \rTitle                  :  Adv\r \rStatus                :  Married\r \rHouse             :  National Assembly\r \r \r \rContact Details \r \rHome Address:  56987 Mary’s Chitungwiza\rCell Number    :   +263 773 756 658\r                            +263 772 914 357\rLandline Number: \r \rEmail Address : jobsikhala@gmail.com\r \r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Malema primary School, Gutu\r \rSecondary: Mazungunye High School, Bikita\r \rUniversity:  Bachelor of Law (Honours) \r(UZ)\rBachelor of Arts (History and economic history)  \rAny other forms of training\r \rParliamentary Career: \rNational Assembly since 2000\r \rPolitical History: \rFounder Member of the MDC\rSecretary for Security and Intelligence 2000-2008\rCurrently secretary for legal affairs\r \rCareer in General\rPracticing Legal practitioner\rKoto and company legal practitioners\r \rAreas of Interest:\rFootball",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-sikhala-job",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/21f17c9e863ce68047046a2d88bbdae5_XS.jpg"
  },

  /* 242 */
  {
    "hansardName": "SIMBANEGAVI",
    "lastName": "Simbanegavi",
    "firstName": "Yeukai",
    "otherNames": "",
    "constituency": "Gutu North",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 243 */
  {
    "hansardName": "SINGO",
    "lastName": "Singo",
    "firstName": "Lisa",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "Hon. Singo Lisa\rBeitbridge\rZANU PF\r \rGender             : Female\r \rDate of Birth    : 10-05-74\r \rPlace of Birth   : Beitbridge\r \rTitle                 :   \r \rStatus               : Single\r \rHouse                          :  National Assembly\r \r \r \rContact Details \r \rHome Address : House No 913 Medium Density Beitbridge\r \r \rCell Number       : 0772623648/0735061548\r \rLandline Number           : \r \rEmail Address    : lissas338@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                :  \r \rSecondary           : O’level\r \r \rUniversity           : \r                               \r                                \r \rAny other Forms of Training\r   \r \r \r \r \rParliamentary Career\r \rNational Assembly 2018\r \r \rPolitical History\r \rBegan  politics at the age of 13 years as a  ZANU PF youth and has been  active in politics since then.\r \r \r \r \r \rCareer in General\r \rSelf employed\r \rAreas of Interest\rGender Issues",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-singo-lisa",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/21f17c9e863ce68047046a2d88bbdae5_XS.jpg"
  },

  /* 244 */
  {
    "hansardName": "J. Sithole",
    "lastName": "Sithole",
    "firstName": "James",
    "otherNames": "",
    "constituency": "Makokoba",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "Hon. Sithole James\rMakokoba\rMDC A\r \rGender                        :   Male\r \rDate of Birth   :   06 April\r \rPlace of Birth  :    Mutare\r \rTitle                  :   Mr\r \rStatus                :   Married\r \rPolitical Party  :   MDC Alliance\r \rConstituency     :  Makokoba\r \rHouse               :   National Assembly\r \r \r \rContact Details \r \rHome Address:   1982, 2nd Street Makokoba, Bulawayo\r \r                                \rCell Number    :   +263 773 385 879\r \rLandline Number:  09 60609\r \rEmail Address : \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary             : Lotshe Primary School\r \r \rSecondary       :  Mzilikazi Secondary School\rUniversity       :  \r \r \rAny other Forms of Training   : Accounting - cost and finance\r Purchasing and stores management Association of chartered certified accountant (ACCA)\rIntermediate Diploma\r \r \rParliamentary Career   : \r \r \r \r \r \rPolitical History   :   Has been active member of the Party since 2000. I have held several positions in the structures and I am presently the organizing secretary of the Bulawayo Province\r \r \rCareer in General:   Has worked in accounts costing of stocks, work in progress and finished goods getting up bills of materials and quantities, Production planning. \rLocal government- councilor for ten years \rSocial work – working with children  \r \rAreas of Interest:  Investment and production enhancement planning local government and finance",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-sithole-james",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/21f17c9e863ce68047046a2d88bbdae5_XS.jpg"
  },

  /* 245 */
  {
    "hansardName": "K. Sithole",
    "lastName": "Sithole",
    "firstName": "Godfrey",
    "otherNames": "Karakadzayi",
    "constituency": "Chitungwiza North",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 246 */
  {
    "hansardName": "JOSIAH",
    "lastName": "Sithole",
    "firstName": "Josiah",
    "otherNames": "",
    "constituency": "Bikita South",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 247 */
  {
    "hansardName": "S. Sithole",
    "lastName": "Sithole",
    "firstName": "Spare",
    "otherNames": "",
    "constituency": "Insiza South",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "SITHOLE SPARE\rINSIZA NORTH\rZANU PF\r \r \rGender                        :   Male\r \rDate of Birth   :  10/12/1961\r \rPlace of Birth  :Filabusi\r \rTitle                  :  Cde\r \rStatus                :  Married\r \rHouse               :  National Assembly\r \r \r \r \rContact Details \r \rHome Address:\rPioneers Rest Farm sub division one\rBox 181 Filabusi\rCell Number    :   +263 712 786 867\r \rLandline Number:\r \rEmail Address :cde Spare Sithole@gmail.com\r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary: Tshalimbe Primary\r \rSecondary:N/A\r \r \rTertiary/ University: N/A\r \rAny other Forms of Training:\rSecurity as Zimbabwe PARA Military Force\r \rParliamentary Career:\rFirst elected MP in 2018\r \rPolitical History: \rØ  ZANU PF Matabeleland South Provincial Secretary for Security\rØ  Zimbabwe National Liberation War Collaborators Association\r \rCareer in General:\rSecurity Company and Businessman\r \rAreas of Interest:\rØ  Defence and Security\rØ  Mining",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-sithole-spare",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/21f17c9e863ce68047046a2d88bbdae5_XS.jpg"
  },

  /* 248 */
  {
    "hansardName": "SVUURE",
    "lastName": "Svuure",
    "firstName": "Davison",
    "otherNames": "",
    "constituency": "Zaka Central",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 249 */
  {
    "hansardName": "TAPERA",
    "lastName": "Tapera",
    "firstName": "Saizi",
    "otherNames": "",
    "constituency": "Muzarabani South",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "MUZARABANI SOUTH\rZANU PF\r \rGender                        :   Male\r \rDate of Birth   :   10/10/1971\r \rPlace of Birth  : Rushinga\r \rTitle                  :  Mr\r \rStatus                :  Married\r \r House            :      National Assembly\r \r \rContact Details \r \rHome Address: Plot No.38 Drumada Farm Centenary\r                             \r \rCell Number    : +263 772 404 525\r                          +263 772 737 936\r+263 772 737 936\r                          \rLandline Number:\rEmail Address : tsaizi.st@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\rPrimary            : Marymount Primary School\r \rSecondary       :  Marymount High School\r \rTertiary/ University    : \rØ  Bachelor of Business Administration-UNISA \rØ  Master of Administration- Zimbabwe      Open University\rØ  Diploma in Business Bookkeping and Accounts- College of Professional Management\rØ  Diploma in Office Management and Administration- College of Professional Management\rØ  Secretariat Course at Pitman Examinations Institute ( 1993)\r \rAny other Forms of Training: \rØ   Health Services Administration at St Albert’s Mission Hospital\rØ  Company Secretary at Asphalt Africa ( Pvt) Limited\rØ   Bookkeeper at Rushinga Multi- Purpose Training Center\rØ  Projects Coordinator at CADEC- Marymount Mission\rParliamentary Career   :  \rElected Member of Parliament for Muzarabani North Constituency  2018-2023\r \r \rPolitical History: \rØ  ZANU PF Member since 1994 under Chimugwariti Branch, Bopoma Political District in Rushinga\rØ  Vice Secretary for Information and Publicity under the Youth League in 1981\rØ  Secretary for Labour and Production under Kamanika Political District in Rushinga Constituency\rØ  Joined Atuwi Political District under Muzarabani South Constituency and was appointed a Committee Member\rØ  Secretary for labour  and Production until transfer to Bopoma Political District in Rushinga in 2013 and was appointed Deputy Secretary  for Gender and Culture\rØ  Provincial Member  under Rushinga in 2013\rØ   Provincial Secretary for Health and Child Care at the  Provincial Coordinating Committee\rØ  Current Member of Parliament for Muzarabani South Constituency\r \r \rCareer in General:  \rØ  Farmer\rØ  Administrator\r \rAreas of Interest:\rØ  Reading about health issues\rØ  Following on current affairs",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-tapera-saizi",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/615033493d84468fb165029946f0c44e_XS.jpg"
  },

  /* 250 */
  {
    "hansardName": "TARUSENGA",
    "lastName": "Tarusenga",
    "firstName": "Unganai",
    "otherNames": "Dickson",
    "constituency": "St Marys",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 251 */
  {
    "hansardName": "TARUVINGA",
    "lastName": "Taruvinga",
    "firstName": "Farai",
    "otherNames": "",
    "constituency": "Insiza North",
    "party": "ZANU PF",
    "province": "Matabeleland South",
    "bio": "INSIZA NORTH\rZANU PF\r \rGender                        : Male\r \rDate of Birth   : 26-11-71\r \rPlace of Birth  :Harare\r \rTitle                 :   Mr \r \rStatus               : Married\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           : Stand 21 Village 14 Gwatemba, Filabusi\r \r \rCell Number    :0783128761/0775574477\r \rLandline Number       :\r \rEmail Address : fbhudha@progressmines.co.zw\r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : \r \rSecondary       :O’Level\r \r \rTertiary/ University    : \r \r \r \rAny other Forms of Training\r \rØ  Mining\rØ  Farming\rØ  Business Management\r \r \rParliamentary Career\r \rNational Assembly Member of Parliament 2018- 2023\r \r \rPolitical History\r \rZANU PF District Chairperson\r \r \rCareer in General\r \rØ  Miner\rØ  Farmer\rAreas of Interest\rØ  Mining\rØ  Farming",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-taruvinga-farai",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/615033493d84468fb165029946f0c44e_XS.jpg"
  },

  /* 252 */
  {
    "hansardName": "TEKESHE",
    "lastName": "Tekeshe",
    "firstName": "David",
    "otherNames": "",
    "constituency": "Makoni Central",
    "party": "MDC- Alliance",
    "province": "Manicaland",
    "bio": "MAKONI CENTRAL\rMDC A\r \rGender             :   Male\r \rDate of Birth    : 19/02/ 1959\r \rPlace of Birth   :  Mutare\r \rTitle                  :  Mr\r \rStatus                :  Married\r \rHouse             :  National Assembly\r \r \r \rContact Details \r \rHome Address:  Tekeshe Supermarket\r                            Chiendambuya Township\r                             Headlands\r \rCell Number    :   +263 772 967 929\r                            \rLandline Number:  \r \rEmail Address : tekeshedave@gmai.com\r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Samarinya School\r \rSecondary: Daramombe High School\r \r \rTertiary/ University: N/A\r \rAny other forms of training \rBusiness Management\r \rParliamentary Career: \rNational Assembly Member 2018-2023\r \rPolitical History: \rØ  Began his political career in ZANU PF \rØ  Joined MDC in 1999 and contested in 2013 in Headlands constituency\r \rCareer in General\rBusinessman\r \rAreas of Interest:\rØ  Farming\rØ  Community Service",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-tekeshe-david",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/615033493d84468fb165029946f0c44e_XS.jpg"
  },

  /* 253 */
  {
    "hansardName": "TOFFA",
    "lastName": "Toffa",
    "firstName": "Jasmine",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Bulawayo",
    "bio": "TOFFA JASMINE\rPROPORTIONAL REPRESENTATION\rMDC A\r \rGender                        : Female\r \rDate of Birth   :11/12/1964\r \rPlace of Birth  : Kwekwe\r \rTitle                  :  Ms\r \rStatus                :  Divorcee\r \rHouse              :  National Assembly\r \r \r \rContact Details \r \rHome Address           :28 Marimba Road,Matshemhlope, Bulawayo \r \rCell Number    :  +263 782 745 859\r \rLandline Number: N/A\r \rEmail Address : jasminetoffa@gmail.com\r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary                      : Grade 7 Trenance Primary and McKeurtain Primary School\r \r \rSecondary       :Founders High School-Bulawayo\r \r \rTertiary/ University    : \r \r \rAny other Forms of Training   : \rØ  Secretarial Course Pitmans  Speciss College\rØ  Book keeping Intermediate\rØ  Typing Intermediate ( Shorthand)\r \rParliamentary Career:\rProportional Representation MP since 2013   to date - Bulawayo Metropolitan\r \r \r \rPolitical History   : \rØ  MDC member since 1999\rØ  Bulawayo Provincial Treasurer- MDC - 1999\r \rCareer in General: \rØ  Sales Representative at Vita foam PVT Ltd 1994-1999\rØ   Sales and Marketing Executive at Ply foam 1999-2007\rØ  ZDDT- Provincial Development Officer 2011-2013\rØ  R. Chitrin and Company Sales Secretary  1990-1993\r \rAreas of Interest\rØ  Health\rØ  Mining\rØ  Environment\rØ  Youth and Women\rØ   Community Service",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-toffa-jasmine",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/919acbd93a09198eef55d141863c0dbb_XS.jpg"
  },

  /* 254 */
  {
    "hansardName": "TOGAREPI",
    "lastName": "Togarepi",
    "firstName": "Pupurai",
    "otherNames": "",
    "constituency": "Gutu South",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 255 */
  {
    "hansardName": "TONGOFA",
    "lastName": "Tongofa",
    "firstName": "Mathias",
    "otherNames": "",
    "constituency": "Chivi North",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "CHIVI NORTH\rZANU PF\r \rGender                        :   Male\r \rDate of Birth   : 14 December 1974\r \rPlace of Birth  :  Chibi\r \rTitle                  :  Mr\r \rStatus                : Married\r \rHouse             :  National Assembly\r \r \rContact Details \r \rHome Address: Mbizvo Village Headman\r                          Madyangove, Chivi\r                          Masvingo\r   \rCell Number    :   +263 772 616 428\r                           +263 712 882 315\r                           +263 733 866 347\rLandline Number:  N/A\r \rEmail Address : mathstongeza@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     : Cheteni Primary School\r                    Chidyamakono Primary School \r                     \rSecondary:  Zvishavane Secondary School\r                    Chegato High School\r \r Tertiary/ University: \rØ  University of Zimbabwe Bachelor of Pharmacy Honors degree\rØ  Masters of Business Administration\r \rAny other forms of Training\rMilitary Training (ZMA)\r \rParliamentary Career: \rØ  National Assembly since 2013\rØ  Deputy Minister of Youth, Indigenization and Economic Empowerment from 2013to 2017\rØ  Chairperson of the Portfolio Committee on Youth, Sports, Arts and Recreation\r \rPolitical History: \rØ  Secretary for Indigenization- NAZU PF in Masvingo Provincial Executive Committee- 2013 to date\rØ  Youth Deputy Chairperson Masvingo Provincial Youth Executive-2010-2013\r \rCareer in General\rØ  Rtd Major- Zimbabwe National Army\rØ  Pharmacist  2003 to date\rØ  Owns Pharmacies in retail sector\r \rAreas of Interest:\rØ  Health and child care\rØ  Youth, Sports, Arts and Recreation\rØ  Transport",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-tongofa-mathias",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/615033493d84468fb165029946f0c44e_XS.jpg"
  },

  /* 256 */
  {
    "hansardName": "TSHUMA",
    "lastName": "Tshuma",
    "firstName": "Dingilizwe",
    "otherNames": "",
    "constituency": "Emakhandeni-Entumbane",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "ENTUMBABE- EMAKHANDENI\rMDC A\r \rSurname:             Tshuma\r            \rName:                  Dingilizwe\r            \rGender:                Male\r            \rDate of Birth:       24/07/1968\r            \rPlace of Birth:       Insiza\r            \rTitle:                      Mr\r                        \rStatus:                   Married\r \rHouse:                  National Assembly\r \r \rContact Details \r \rHome Address:           30969/16 Emakhandeni\r \rCell Number:               0778 693 526\r \rLandline Number:      0292403688\r \rEmail Address tshumads@gmail.com\r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary:                Nyamande Primary School\r \r \rSecondary:                 Mpopoma High School 'O Level'\r \rTertiary/University:      \rØ  Diploma in Education with a distinction in Teaching Practice -1993 \rØ   UZ - BA \rØ  Honours in Health Studies (2008)-Liverpool John Moores University\rAny other Forms of Training:\rComputing\r \rParliamentary Career:\rØ  National Assembly Member 2013\rØ  Re-elected in 2018\r \r \rPolitical History:\rØ  MDC Provincial Deputy  Treasurer 2013-2018\rØ  MDC Vice Secretary Ward 10\r \r \rCareer in General:\rØ  Teacher\rØ  Secondary School Headmaster\r \rAreas of Interest\rØ  Education\rØ  Health\rØ  Farming",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-tshuma-dingilizwe",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/615033493d84468fb165029946f0c44e_XS.jpg"
  },

  /* 257 */
  {
    "hansardName": "TSUNGA",
    "lastName": "Tsunga",
    "firstName": "Regai",
    "otherNames": "",
    "constituency": "Mutasa South",
    "party": "MDC- Alliance",
    "province": "Manicaland",
    "bio": "MUTASA SOUTH\rMDC A\r \rGender                        :   Male\r \rDate of Birth   : 20/11/1964\r \rPlace of Birth  :  Mutare\r \rTitle                  :  Mr\r \rStatus                :  Married\r \rHouse             :  National Assembly\r \r \r \rContact Details \r \rHome Address:  9 Batanai Road \r                               Morningside, Mutare\r \rCell Number    :   +263 777 286 338\r                            \rLandline Number:  020 6629\r \rEmail Address : regaitsunga@gmail.com\r \r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Nyamande School\r \rSecondary: Njube High School\r \rTertiary/ University: \rØ  Freestate University -Masters Degree in Development Studies\rØ  UZ- Bachelor of Education ( Bed) \rØ  Zimbabwe Open University\rØ  (ZOU)-Masters in Education\r \rAny other forms of training \rGrant Management\rPersonnel Management\r \rParliamentary Career: \rNational Assembly 2018\r \rPolitical History: \rØ  MDC T Card carrying member- 2013 \rØ  Provincial Treasurer PDP- Manicaland- 2014-2018\r \rCareer in General\rØ  1987-89 Teacher\rØ  1989-2003 School Head\rØ  2004-2005 Public Service Commission- Inspector \rØ  2005-2018 Director CSO and development sector\rØ  Education Commissioner-Anglican Church\rØ  Part Time Tutor- ZOU\r \rAreas of Interest:\rØ  Leadership\rØ  Golf\rØ  Watching English Premier League Soccer\rØ  Research \rØ  Reading",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-tsunga-regai",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/615033493d84468fb165029946f0c44e_XS.jpg"
  },

  /* 258 */
  {
    "hansardName": "TSVANGIRAI",
    "lastName": "Tsvangirai",
    "firstName": "Java",
    "otherNames": "Vimbayi",
    "constituency": "Glenview South",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 259 */
  {
    "hansardName": "TUNGAMIRAYI",
    "lastName": "Tungamirayi",
    "firstName": "Tawanda",
    "otherNames": "",
    "constituency": "Zvimba East",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 260 */
  {
    "hansardName": "WADYAJENA",
    "lastName": "Wadyajena",
    "firstName": "Justice",
    "otherNames": "Mayor",
    "constituency": "Gokwe-Nembudziya",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 261 */
  {
    "hansardName": "TSUURA",
    "lastName": "Tsuura",
    "firstName": "Nyarai",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "PROPORTIONAL REPRESENTATION\rZANU PF\r \rGender                        :   Female\r \rDate of Birth   : 16/11/1967\r \rPlace of Birth  :  Mutoko\r \rTitle                  :  Miss\r \rStatus                :  Single\r \rHouse             :  National Assembly\r \r \r \rContact Details \r \rHome Address:  Plot A8, v11, 23\r                          Nyadire Resettlement\r \rCell Number    :   +263 775 770 139\r                            \rLandline Number:  \r \rEmail Address : \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Kaunye Primary School\r \rSecondary: Makosa Secondary School\r \r \rTertiary/ University: \r ZOIC- Mutare Training Centre- Vocational Business Management  \r                  \r                   \r \rAny other forms of training \rBusiness Management\rParliamentary Career: \rNational Assembly Member 2018-2023\r \rPolitical History: \rØ  1993-1995 Cell Chairperson\rØ  1995-2000 Branch Secretary\rØ  2000-2001 District Vice Chairperson\rØ  DCC Secretary 2001-2005\rØ  2006-2007 Vice Secretary for Security in Women’s League\rØ  2005-2009 Secretary for Production-Provincial Women’s league\rØ  2014-2017 Provincial Political Commissar Women’s League\rØ  2015 up to date Provincial Chairperson\r \rCareer in General\rØ  A shopkeeper for six years\rØ  Worked at G.M.B Mutoko 2006\rØ  A farmer from 2010 to date\r \rAreas of Interest:\rØ  Music\rØ  Health\rØ  Gender Issues\rØ  Debates",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-tsuura-nyarai",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/615033493d84468fb165029946f0c44e_XS.jpg"
  },

  /* 262 */
  {
    "hansardName": "ZHEMU",
    "lastName": "Zhemu",
    "firstName": "Soda",
    "otherNames": "",
    "constituency": "Muzarabani North",
    "party": "ZANU PF",
    "province": "Mashonaland Central",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 263 */
  {
    "hansardName": "T. Zhou",
    "lastName": "Zhou",
    "firstName": "Tafanana",
    "otherNames": "",
    "constituency": "Mberengwa North",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 264 */
  {
    "hansardName": "P. Zhou",
    "lastName": "Zhou",
    "firstName": "Perseverence",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Midlands",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 265 */
  {
    "hansardName": "WATSON",
    "lastName": "Watson",
    "firstName": "Nicola",
    "otherNames": "Jane",
    "constituency": "Bulawayo Central",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan",
    "bio": "WATSON NICOLA JANE\rBULAWAYO CENTRAL\rMDC-A\r \rGender                        :   Female\r \rDate of Birth   :  10 July 1955\r \rPlace of Birth  : Bulawayo\r \rTitle                  :  Ms\r \rStatus                :  Single\r \rHouse             :  National Assembly\r \r \r \rContact Details \r \rHome Address:  84 Cecil Avenue Hillside \r                            Bulawayo\r \rCell Number    :   +263 772 284 592\r                            \rLandline Number : \r \rEmail Address : nikkibrowncil@gmail.com\r \r \r \r \r \r \rAcademic Qualifications (institutions Attended and qualifications attained)\r \rPrimary     :  Hillside Primary\r                    \rSecondary:  Townsend Secondary\r \rTertiary/ University:  Capetown\r \rParliamentary Career: \rNational Assembly Member 2018-2023\r \rPolitical History: \rJoined MDC T in 2000\r \rCareer in General:\rAccountant\rAreas of Interest:\rØ  Education\rØ  Health\rØ  Finance/ Economics",
    "bioHref": "https://www.parlzim.gov.zw/component/k2/hon-watson-nicola-jane",
    "imageHref": "https://www.parlzim.gov.zw/media/k2/items/cache/615033493d84468fb165029946f0c44e_XS.jpg"
  },

  /* 266 */
  {
    "hansardName": "ZIMURA",
    "lastName": "Zimura",
    "firstName": "Lilian",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland East",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 267 */
  {
    "hansardName": "ZIVHU",
    "lastName": "Zivhu",
    "firstName": "Killer",
    "otherNames": "",
    "constituency": "Chivi South",
    "party": "ZANU PF",
    "province": "Masvingo",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 268 */
  {
    "hansardName": "ZIYAMBI",
    "lastName": "Ziyambi",
    "firstName": "Ziyambi",
    "otherNames": "",
    "constituency": "Zvimba West",
    "party": "ZANU PF",
    "province": "Mashonaland West",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 269 */
  {
    "hansardName": "ZWIZWAI",
    "lastName": "Zwizwai",
    "firstName": "Murisi",
    "otherNames": "",
    "constituency": "Harare Central",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  },

  /* 270 */
  {
    "hansardName": "ZENGEYA",
    "lastName": "Zengeya",
    "firstName": "Virginia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC - Alliance",
    "province": "Harare",
    "bio": "",
    "bioHref": "",
    "imageHref": ""
  }]

db.Member
  .remove({})
  .then(() => db.Member.collection.insertMany(mpSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
