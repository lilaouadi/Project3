const mongoose = require("mongoose");
const db = require("../models");
// const mpSeed = require("./members");

// This file empties the Mps collection and inserts the mps below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/parliament"
);

const mpSeed = [
  /* 1 */
  {
    "lastName": "Nyoni",
    "firstName": "Ilos",
    "otherNames": "",
    "constituency": "Bulawayo East",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 2 */
  {
    "lastName": "Watson",
    "firstName": "Nicola",
    "otherNames": "Jane",
    "constituency": "Bulawayo Central",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 3 */
  {
    "lastName": "Tshuma",
    "firstName": "Dingilizwe",
    "otherNames": "",
    "constituency": "Emakhandeni-Entumbane",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 4 */
  {
    "lastName": "Banda",
    "firstName": "Gift",
    "otherNames": "",
    "constituency": "Lobengula",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 5 */
  {
    "lastName": "Modi",
    "firstName": "Rajeshkumar",
    "otherNames": "Indukant",
    "constituency": "Bulawayo South",
    "party": "ZANU PF",
    "province": "Bulawayo Metropolitan"
  },

  /* 6 */
  {
    "lastName": "Ndlovu",
    "firstName": "Stella",
    "otherNames": "",
    "constituency": "Luveve",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 7 */
  {
    "lastName": "Ndebele",
    "firstName": "Anele",
    "otherNames": "",
    "constituency": "Magwegwe",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 8 */
  {
    "lastName": "Sithole",
    "firstName": "James",
    "otherNames": "",
    "constituency": "Makokoba",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 9 */
  {
    "lastName": "Masuku",
    "firstName": "Phelela",
    "otherNames": "",
    "constituency": "Nketa",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 10 */
  {
    "lastName": "Phulu",
    "firstName": "Kucaca",
    "otherNames": "Ivumile",
    "constituency": "Nkulumane",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 11 */
  {
    "lastName": "Moyo",
    "firstName": "Charles",
    "otherNames": "",
    "constituency": "Pelandaba-Mpopoma",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 12 */
  {
    "lastName": "Mahlangu",
    "firstName": "Sichelesile",
    "otherNames": "",
    "constituency": "Pumula",
    "party": "MDC- Alliance",
    "province": "Bulawayo Metropolitan"
  },

  /* 13 */
  {
    "lastName": "Machingauta",
    "firstName": "Coster",
    "otherNames": "",
    "constituency": "Budiriro",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 14 */
  {
    "lastName": "Sithole",
    "firstName": "Godfrey",
    "otherNames": "Karakadzayi",
    "constituency": "Chitungwiza North",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 15 */
  {
    "lastName": "Mavhunga",
    "firstName": "Maxwell",
    "otherNames": "",
    "constituency": "Chitungwiza South",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 16 */
  {
    "lastName": "Mushoriwa",
    "firstName": "Edwin",
    "otherNames": "",
    "constituency": "Dzivarasekwa",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 17 */
  {
    "lastName": "Chikombo",
    "firstName": "Wellington",
    "otherNames": "",
    "constituency": "Glen Norah",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 18 */
  {
    "lastName": "Dinar",
    "firstName": "Kennedy",
    "otherNames": "",
    "constituency": "Glenview North",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 19 */
  {
    "lastName": "Tsvangirai",
    "firstName": "Java",
    "otherNames": "Vimbayi",
    "constituency": "Glenview South",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 20 */
  {
    "lastName": "Zwizwai",
    "firstName": "Murisi",
    "otherNames": "",
    "constituency": "Harare Central",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 21 */
  {
    "lastName": "Biti",
    "firstName": "Laxton",
    "otherNames": "Tendai",
    "constituency": "Harare East",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 22 */
  {
    "lastName": "Markham",
    "firstName": "Allan",
    "otherNames": "Norman",
    "constituency": "Harare North",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 23 */
  {
    "lastName": "Mnangagwa",
    "firstName": "Tongai",
    "otherNames": "Mafidi",
    "constituency": "Harare South",
    "party": "ZANU PF",
    "province": "Harare Metropolitan"
  },

  /* 24 */
  {
    "lastName": "Mamombe",
    "firstName": "Joanah",
    "otherNames": "",
    "constituency": "Harare West",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 25 */
  {
    "lastName": "Kureva",
    "firstName": "Earthrage",
    "otherNames": "",
    "constituency": "Epworth",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 26 */
  {
    "lastName": "Mashakada",
    "firstName": "Tapiwa",
    "otherNames": "",
    "constituency": "Hatfield",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 27 */
  {
    "lastName": "Murai",
    "firstName": "Erick",
    "otherNames": "",
    "constituency": "Highfield East",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 28 */
  {
    "lastName": "Chidziva",
    "firstName": "Happymore",
    "otherNames": "",
    "constituency": "Highfield West",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 29 */
  {
    "lastName": "Madzimure",
    "firstName": "Willias",
    "otherNames": "",
    "constituency": "Kambuzuma",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 30 */
  {
    "lastName": "Chamisa",
    "firstName": "Starman",
    "otherNames": "",
    "constituency": "Mbare",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 31 */
  {
    "lastName": "Banda",
    "firstName": "Samuel",
    "otherNames": "",
    "constituency": "Mount Pleasant",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 32 */
  {
    "lastName": "Matsunga",
    "firstName": "Susan",
    "otherNames": "",
    "constituency": "Mufakose",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 33 */
  {
    "lastName": "Hwende",
    "firstName": "Chalton",
    "otherNames": "",
    "constituency": "Kuwadzana East",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 34 */
  {
    "lastName": "Moyo",
    "firstName": "Peter",
    "otherNames": "",
    "constituency": "Southerton",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 35 */
  {
    "lastName": "Mushayi",
    "firstName": "Miriam",
    "otherNames": "",
    "constituency": "Kuwadzana",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 36 */
  {
    "lastName": "Chidakwa",
    "firstName": "James",
    "otherNames": "",
    "constituency": "Mabvuku-Tafara",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 37 */
  {
    "lastName": "Tarusenga",
    "firstName": "Unganai",
    "otherNames": "Dickson",
    "constituency": "St Marys",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 38 */
  {
    "lastName": "Kankuni",
    "firstName": "Winnie",
    "otherNames": "",
    "constituency": "Sunningdale",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 39 */
  {
    "lastName": "Hamauswa",
    "firstName": "Shakespear",
    "otherNames": "",
    "constituency": "Warren Park",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 40 */
  {
    "lastName": "Chimbaira",
    "firstName": "Goodrich",
    "otherNames": "",
    "constituency": "Zengeza East",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 41 */
  {
    "lastName": "Sikhala",
    "firstName": "Job",
    "otherNames": "",
    "constituency": "Zengeza West",
    "party": "MDC- Alliance",
    "province": "Harare Metropolitan"
  },

  /* 42 */
  {
    "lastName": "Mutomba",
    "firstName": "William",
    "otherNames": "",
    "constituency": "Buhera North",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 43 */
  {
    "lastName": "Nyashanu",
    "firstName": "Mathew",
    "otherNames": "",
    "constituency": "Buhera Central",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 44 */
  {
    "lastName": "Chinotimba",
    "firstName": "Joseph",
    "otherNames": "",
    "constituency": "Buhera South",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 45 */
  {
    "lastName": "Dzuma",
    "firstName": "Soul",
    "otherNames": "",
    "constituency": "Buhera West",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 46 */
  {
    "lastName": "Sacco",
    "firstName": "Joshua",
    "otherNames": "Kurt",
    "constituency": "Chimanimani East",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 47 */
  {
    "lastName": "Matsikenyere",
    "firstName": "Nokuthula",
    "otherNames": "",
    "constituency": "Chimanimani West",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 48 */
  {
    "lastName": "Machingura",
    "firstName": "Raymore",
    "otherNames": "",
    "constituency": "Chipinge Central",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 49 */
  {
    "lastName": "Porusingazi",
    "firstName": "Enock",
    "otherNames": "",
    "constituency": "Chipinge South",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 50 */
  {
    "lastName": "Nyamudeza",
    "firstName": "Sibonile",
    "otherNames": "",
    "constituency": "Chipinge West",
    "party": "MDC- Alliance",
    "province": "Manicaland"
  },

  /* 51 */
  {
    "lastName": "Mlambo",
    "firstName": "Mathias",
    "otherNames": "Matewu",
    "constituency": "Chipinge East",
    "party": "MDC- Alliance",
    "province": "Manicaland"
  },

  /* 52 */
  {
    "lastName": "Mutseyami",
    "firstName": "Chapfiwa",
    "otherNames": "Prosper",
    "constituency": "Dangamvura/Chikanga",
    "party": "MDC- Alliance",
    "province": "Manicaland"
  },

  /* 53 */
  {
    "lastName": "Chingosho",
    "firstName": "Christopher",
    "otherNames": "Peter",
    "constituency": "Headlands",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 54 */
  {
    "lastName": "Tekeshe",
    "firstName": "David",
    "otherNames": "",
    "constituency": "Makoni Central",
    "party": "MDC- Alliance",
    "province": "Manicaland"
  },

  /* 55 */
  {
    "lastName": "Munetsi",
    "firstName": "James",
    "otherNames": "",
    "constituency": "Makoni North",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 56 */
  {
    "lastName": "Mataranyika",
    "firstName": "Dudzai",
    "otherNames": "Misheck",
    "constituency": "Makoni South",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 57 */
  {
    "lastName": "Murire",
    "firstName": "Joshua",
    "otherNames": "",
    "constituency": "Musikavanhu",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 58 */
  {
    "lastName": "Muswere",
    "firstName": "Jenfan",
    "otherNames": "",
    "constituency": "Makoni West",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 59 */
  {
    "lastName": "Gonese",
    "firstName": "Innocent",
    "otherNames": "Tinashe",
    "constituency": "Mutare Central",
    "party": "MDC- Alliance",
    "province": "Manicaland"
  },

  /* 60 */
  {
    "lastName": "Madiro",
    "firstName": "Michael",
    "otherNames": "",
    "constituency": "Mutare North",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 61 */
  {
    "lastName": "Saruwaka",
    "firstName": "Trevor",
    "otherNames": "Jones",
    "constituency": "Mutasa Central",
    "party": "MDC- Alliance",
    "province": "Manicaland"
  },

  /* 62 */
  {
    "lastName": "Ngome",
    "firstName": "Jefry",
    "otherNames": "",
    "constituency": "Mutare South",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 63 */
  {
    "lastName": "Muchimwe",
    "firstName": "Percy",
    "otherNames": "Teedzai",
    "constituency": "Mutare West",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 64 */
  {
    "lastName": "Madiwa",
    "firstName": "Chido",
    "otherNames": "",
    "constituency": "Mutasa North",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 65 */
  {
    "lastName": "Tsunga",
    "firstName": "Regai",
    "otherNames": "",
    "constituency": "Mutasa South",
    "party": "MDC- Alliance",
    "province": "Manicaland"
  },

  /* 66 */
  {
    "lastName": "Mandiwanzira",
    "firstName": "Supa",
    "otherNames": "Collins",
    "constituency": "Nyanga South",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 67 */
  {
    "lastName": "Dzepasi",
    "firstName": "Girovah",
    "otherNames": "",
    "constituency": "Guruve North",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 68 */
  {
    "lastName": "Dutiro",
    "firstName": "Patrick",
    "otherNames": "",
    "constituency": "Guruve South",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 69 */
  {
    "lastName": "Musanhi",
    "firstName": "Kenneth.",
    "otherNames": "Shupikai",
    "constituency": "Bindura North",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 70 */
  {
    "lastName": "Sanyatwe",
    "firstName": "Chido",
    "otherNames": "",
    "constituency": "Nyanga North",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 71 */
  {
    "lastName": "Chidamba",
    "firstName": "Sydney",
    "otherNames": "",
    "constituency": "Mazowe Central",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 72 */
  {
    "lastName": "Matangira",
    "firstName": "Toendepi.",
    "otherNames": "Remigious",
    "constituency": "Bindura South",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 73 */
  {
    "lastName": "Mugweni",
    "firstName": "Campion",
    "otherNames": "Takura",
    "constituency": "Mazowe North",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 74 */
  {
    "lastName": "Chasi",
    "firstName": "Fortune",
    "otherNames": "",
    "constituency": "Mazowe South",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 75 */
  {
    "lastName": "Kazembe",
    "firstName": "Kazembe",
    "otherNames": "",
    "constituency": "Mazowe West",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 76 */
  {
    "lastName": "Karoro",
    "firstName": "Douglas",
    "otherNames": "",
    "constituency": "Mbire",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 77 */
  {
    "lastName": "Marikisi",
    "firstName": "Norman",
    "otherNames": "",
    "constituency": "Mt Darwin East",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 78 */
  {
    "lastName": "Muponora",
    "firstName": "Noveti",
    "otherNames": "",
    "constituency": "Mt Darwin North",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 79 */
  {
    "lastName": "Kabozo",
    "firstName": "Stephen",
    "otherNames": "",
    "constituency": "Mt Darwin South",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 80 */
  {
    "lastName": "Seremwe",
    "firstName": "Bannwell",
    "otherNames": "",
    "constituency": "Mt Darwin West",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 81 */
  {
    "lastName": "Tapera",
    "firstName": "Saizi",
    "otherNames": "",
    "constituency": "Muzarabani South",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 82 */
  {
    "lastName": "Zhemu",
    "firstName": "Soda",
    "otherNames": "",
    "constituency": "Muzarabani North",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 83 */
  {
    "lastName": "Nyabani",
    "firstName": "Tendai",
    "otherNames": "",
    "constituency": "Rushinga",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 84 */
  {
    "lastName": "Bushu",
    "firstName": "Bramwell",
    "otherNames": "",
    "constituency": "Shamva South",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 85 */
  {
    "lastName": "Gorerino",
    "firstName": "Oscar",
    "otherNames": "",
    "constituency": "Shamva North",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 86 */
  {
    "lastName": "Kanhutu",
    "firstName": "Irene",
    "otherNames": "Nzenza",
    "constituency": "Chikomba East",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 87 */
  {
    "lastName": "Mhona",
    "firstName": "Felix",
    "otherNames": "Tapiwa",
    "constituency": "Chikomba Central",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 88 */
  {
    "lastName": "Mangwiro",
    "firstName": "John",
    "otherNames": "Chamunorwa",
    "constituency": "Chikomba West",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 89 */
  {
    "lastName": "Bvute",
    "firstName": "Ozias",
    "otherNames": "",
    "constituency": "Goromonzi North",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 90 */
  {
    "lastName": "Chikudo",
    "firstName": "Rueben",
    "otherNames": "",
    "constituency": "Goromonzi South",
    "party": "MDC- Alliance",
    "province": "Mashonaland East"
  },

  /* 91 */
  {
    "lastName": "Karumazondo",
    "firstName": "Makuwi",
    "otherNames": "Tichawona",
    "constituency": "Maramba Pfungwe",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 92 */
  {
    "lastName": "Matewu",
    "firstName": "Caston",
    "otherNames": "",
    "constituency": "Marondera Central",
    "party": "MDC- Alliance",
    "province": "Mashonaland East"
  },

  /* 93 */
  {
    "lastName": "Chidakwa",
    "firstName": "Patrick",
    "otherNames": "",
    "constituency": "Marondera East",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 94 */
  {
    "lastName": "Mukunyaidze",
    "firstName": "Spiwe",
    "otherNames": "Elizabeth",
    "constituency": "Marondera West",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 95 */
  {
    "lastName": "Samukange",
    "firstName": "Jonathan",
    "otherNames": "Tawonana",
    "constituency": "Mudzi South",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 96 */
  {
    "lastName": "Mutodi",
    "firstName": "Energy",
    "otherNames": "",
    "constituency": "Goromonzi West",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 97 */
  {
    "lastName": "Kachepa",
    "firstName": "Newton",
    "otherNames": "",
    "constituency": "Mudzi North",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 98 */
  {
    "lastName": "Garwe",
    "firstName": "Daniel",
    "otherNames": "",
    "constituency": "Murewa North",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 99 */
  {
    "lastName": "Mudyiwa",
    "firstName": "Magna",
    "otherNames": "",
    "constituency": "Mudzi West",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 100 */
  {
    "lastName": "Matiza",
    "firstName": "Biggie",
    "otherNames": "Joel",
    "constituency": "Murewa South",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 101 */
  {
    "lastName": "Sewera",
    "firstName": "Jonah",
    "otherNames": "Nyikadzino",
    "constituency": "Murewa West",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 102 */
  {
    "lastName": "Chinomona",
    "firstName": "Mabel",
    "otherNames": "Memory",
    "constituency": "Mutoko North",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 103 */
  {
    "lastName": "Shumbamhini",
    "firstName": "Hebert",
    "otherNames": "",
    "constituency": "Mutoko South",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 104 */
  {
    "lastName": "Mudarikwa",
    "firstName": "Simbaneuta",
    "otherNames": "",
    "constituency": "Uzumba",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 105 */
  {
    "lastName": "Musiyiwa",
    "firstName": "Richard",
    "otherNames": "",
    "constituency": "Mutoko East",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 106 */
  {
    "lastName": "Musabayana",
    "firstName": "David",
    "otherNames": "",
    "constituency": "Wedza North",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 107 */
  {
    "lastName": "Machakarika",
    "firstName": "Tinoda",
    "otherNames": "",
    "constituency": "Wedza South",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 108 */
  {
    "lastName": "Nkani",
    "firstName": "Andrew",
    "otherNames": "",
    "constituency": "Chakari",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 109 */
  {
    "lastName": "Kashambe",
    "firstName": "Munyaradzi",
    "otherNames": "Tobias",
    "constituency": "Seke",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 110 */
  {
    "lastName": "Shamu",
    "firstName": "Webster",
    "otherNames": "Kotiwani",
    "constituency": "Chegutu East",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 111 */
  {
    "lastName": "Nduna",
    "firstName": "Dexter",
    "otherNames": "",
    "constituency": "Chegutu West",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 112 */
  {
    "lastName": "Mataruse",
    "firstName": "Peter",
    "otherNames": "",
    "constituency": "Chinhoyi",
    "party": "MDC- Alliance",
    "province": "Mashonaland West"
  },

  /* 113 */
  {
    "lastName": "Ndiweni",
    "firstName": "Doubt",
    "otherNames": "",
    "constituency": "Hurungwe Central",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 114 */
  {
    "lastName": "Masenda",
    "firstName": "Ngoni",
    "otherNames": "T",
    "constituency": "Hurungwe East",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 115 */
  {
    "lastName": "Gandawa",
    "firstName": "Musavaya",
    "otherNames": "Ability",
    "constituency": "Hurungwe North",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 116 */
  {
    "lastName": "Mliswa",
    "firstName": "Mary",
    "otherNames": "T",
    "constituency": "Hurungwe West",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 117 */
  {
    "lastName": "Houghton",
    "firstName": "John",
    "otherNames": "Roland",
    "constituency": "Kariba",
    "party": "MDC- Alliance",
    "province": "Mashonaland West"
  },

  /* 118 */
  {
    "lastName": "Chinyanganya",
    "firstName": "Muchineripi",
    "otherNames": "",
    "constituency": "Kadoma Central",
    "party": "MDC- Alliance",
    "province": "Mashonaland West"
  },

  /* 119 */
  {
    "lastName": "Paradza",
    "firstName": "Kindness",
    "otherNames": "",
    "constituency": "Makonde",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 120 */
  {
    "lastName": "Kashiri",
    "firstName": "Cecil",
    "otherNames": "",
    "constituency": "Magunje",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 121 */
  {
    "lastName": "Masango",
    "firstName": "Chinhamo",
    "otherNames": "Precious",
    "constituency": "Mhangura",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 122 */
  {
    "lastName": "Mukuhlani",
    "firstName": "Tavengwa",
    "otherNames": "",
    "constituency": "Mhondoro-Ngezi",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 123 */
  {
    "lastName": "Kapuya",
    "firstName": "Freddy",
    "otherNames": "",
    "constituency": "Mhondoro Mubaira",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 124 */
  {
    "lastName": "Haritatos",
    "firstName": "Vangelis",
    "otherNames": "Peter",
    "constituency": "Muzvezve",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 125 */
  {
    "lastName": "Kambamwa",
    "firstName": "Polite",
    "otherNames": "",
    "constituency": "Sanyati",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 126 */
  {
    "lastName": "Chiyangwa",
    "firstName": "Philip",
    "otherNames": "",
    "constituency": "Zvimba South",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 127 */
  {
    "lastName": "Ziyambi",
    "firstName": "Ziyambi",
    "otherNames": "",
    "constituency": "Zvimba West",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 128 */
  {
    "lastName": "Tungamirayi",
    "firstName": "Tawanda",
    "otherNames": "",
    "constituency": "Zvimba East",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 129 */
  {
    "lastName": "Sithole",
    "firstName": "Josiah",
    "otherNames": "",
    "constituency": "Bikita South",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 130 */
  {
    "lastName": "Musakwa",
    "firstName": "Elia",
    "otherNames": "",
    "constituency": "Bikita West",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 131 */
  {
    "lastName": "Masiya",
    "firstName": "Denford",
    "otherNames": "",
    "constituency": "Chiredzi East",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 132 */
  {
    "lastName": "Madhuku",
    "firstName": "Johnson",
    "otherNames": "",
    "constituency": "Bikita East",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 133 */
  {
    "lastName": "Billah",
    "firstName": "Royi",
    "otherNames": "",
    "constituency": "Chiredzi North",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 134 */
  {
    "lastName": "Gwanetsa",
    "firstName": "Kalisto",
    "otherNames": "Killion",
    "constituency": "Chiredzi South",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 135 */
  {
    "lastName": "Chombo",
    "firstName": "Marrian",
    "otherNames": "",
    "constituency": "Zvimba North",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 136 */
  {
    "lastName": "Tongofa",
    "firstName": "Mathias",
    "otherNames": "",
    "constituency": "Chivi North",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 137 */
  {
    "lastName": "Zivhu",
    "firstName": "Killer",
    "otherNames": "",
    "constituency": "Chivi South",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 138 */
  {
    "lastName": "Chitando",
    "firstName": "Winston",
    "otherNames": "",
    "constituency": "Gutu Central",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 139 */
  {
    "lastName": "Chikwama",
    "firstName": "Berta",
    "otherNames": "",
    "constituency": "Gutu East",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 140 */
  {
    "lastName": "Simbanegavi",
    "firstName": "Yeukai",
    "otherNames": "",
    "constituency": "Gutu North",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 141 */
  {
    "lastName": "Togarepi",
    "firstName": "Pupurai",
    "otherNames": "",
    "constituency": "Gutu South",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 142 */
  {
    "lastName": "Paradza",
    "firstName": "John",
    "otherNames": "",
    "constituency": "Gutu West",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 143 */
  {
    "lastName": "Mhere",
    "firstName": "Edmond",
    "otherNames": "",
    "constituency": "Masvingo Central",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 144 */
  {
    "lastName": "Marapira",
    "firstName": "Davison",
    "otherNames": "",
    "constituency": "Masvingo North",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 145 */
  {
    "lastName": "Maronge",
    "firstName": "Cladious",
    "otherNames": "",
    "constituency": "Masvingo South",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 146 */
  {
    "lastName": "Nyokanhete",
    "firstName": "Jacob",
    "otherNames": "",
    "constituency": "Masvingo Urban",
    "party": "MDC- Alliance",
    "province": "Masvingo"
  },

  /* 147 */
  {
    "lastName": "Chadzamira",
    "firstName": "Ruvai",
    "otherNames": "Ezra",
    "constituency": "Masvingo West",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 148 */
  {
    "lastName": "Omar",
    "firstName": "Joosbi",
    "otherNames": "",
    "constituency": "Mwenezi East",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 149 */
  {
    "lastName": "Moyo",
    "firstName": "Priscilla",
    "otherNames": "",
    "constituency": "Mwenezi West",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 150 */
  {
    "lastName": "Svuure",
    "firstName": "Davison",
    "otherNames": "",
    "constituency": "Zaka Central",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 151 */
  {
    "lastName": "Gumbwanda",
    "firstName": "Kaston",
    "otherNames": "Ringirisai",
    "constituency": "Zaka East",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 152 */
  {
    "lastName": "Mavenyengwa",
    "firstName": "Robson",
    "otherNames": "",
    "constituency": "Zaka North",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 153 */
  {
    "lastName": "Gwanongodza",
    "firstName": "Ephraim",
    "otherNames": "",
    "constituency": "Chivi Central",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 154 */
  {
    "lastName": "Mliswa",
    "firstName": "Temba",
    "otherNames": "Peter",
    "constituency": "Norton",
    "party": "Independent",
    "province": "Mashonaland West"
  },

  /* 155 */
  {
    "lastName": "Murambiwa",
    "firstName": "Ophias",
    "otherNames": "",
    "constituency": "Zaka West",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 156 */
  {
    "lastName": "Sibanda",
    "firstName": "Dubeko",
    "otherNames": "Prince",
    "constituency": "Binga North",
    "party": "MDC- Alliance",
    "province": "Matabeleland North"
  },

  /* 157 */
  {
    "lastName": "Gabbuza",
    "firstName": "Joel",
    "otherNames": "Gabuza",
    "constituency": "Binga South",
    "party": "MDC- Alliance",
    "province": "Matabeleland North"
  },

  /* 158 */
  {
    "lastName": "Musikavanhu",
    "firstName": "Dumo",
    "otherNames": "Augustine",
    "constituency": "Chiredzi West",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 159 */
  {
    "lastName": "Mguni",
    "firstName": "Sonny",
    "otherNames": "Key",
    "constituency": "Bubi",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 160 */
  {
    "lastName": "Molokela-Tsiye",
    "firstName": "Fortune",
    "otherNames": "Daniel",
    "constituency": "Hwange Central",
    "party": "MDC- Alliance",
    "province": "Matabeleland North"
  },

  /* 161 */
  {
    "lastName": "Sansole",
    "firstName": "Tose",
    "otherNames": "Wesley",
    "constituency": "Hwange East",
    "party": "MDC- Alliance",
    "province": "Matabeleland North"
  },

  /* 162 */
  {
    "lastName": "Dube",
    "firstName": "Godfrey",
    "otherNames": "",
    "constituency": "Hwange West",
    "party": "MDC- Alliance",
    "province": "Matabeleland North"
  },

  /* 163 */
  {
    "lastName": "Gumbo",
    "firstName": "Sithembile",
    "otherNames": "",
    "constituency": "Lupane East",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 164 */
  {
    "lastName": "Nyoni",
    "firstName": "Sithembiso",
    "otherNames": "G.",
    "constituency": "Nkayi North",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 165 */
  {
    "lastName": "Sibanda",
    "firstName": "Zenzo",
    "otherNames": "",
    "constituency": "Tsholotsho South",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 166 */
  {
    "lastName": "Moyo",
    "firstName": "Richard",
    "otherNames": "",
    "constituency": "Umguza",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 167 */
  {
    "lastName": "Mathe",
    "firstName": "Stars",
    "otherNames": "",
    "constituency": "Nkayi South",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 168 */
  {
    "lastName": "Khumalo",
    "firstName": "Martin",
    "otherNames": "",
    "constituency": "Lupane West",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 169 */
  {
    "lastName": "Maboyi",
    "firstName": "Ruth",
    "otherNames": "Mavhungu",
    "constituency": "Beitbridge West",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 170 */
  {
    "lastName": "Khumalo",
    "firstName": "Sibangumuzi",
    "otherNames": "Sixtone",
    "constituency": "Tsholotsho North",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 171 */
  {
    "lastName": "Nguluvhe",
    "firstName": "Albert",
    "otherNames": "",
    "constituency": "Beitbridge East",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 172 */
  {
    "lastName": "Ndlovu",
    "firstName": "Nqobizitha",
    "otherNames": "Mangaliso",
    "constituency": "Bulilima East",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 173 */
  {
    "lastName": "Ncube",
    "firstName": "Abedinico",
    "otherNames": "",
    "constituency": "Gwanda South",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 174 */
  {
    "lastName": "Phuti",
    "firstName": "Dingumuzi",
    "otherNames": "",
    "constituency": "Bulilima West",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 175 */
  {
    "lastName": "Taruvinga",
    "firstName": "Farai",
    "otherNames": "",
    "constituency": "Insiza North",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 176 */
  {
    "lastName": "Sibanda",
    "firstName": "Madodana",
    "otherNames": "",
    "constituency": "Gwanda North",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 177 */
  {
    "lastName": "Sithole",
    "firstName": "Spare",
    "otherNames": "",
    "constituency": "Insiza South",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 178 */
  {
    "lastName": "Dube",
    "firstName": "Patrick",
    "otherNames": "",
    "constituency": "Gwanda Central",
    "party": "MDC- Alliance",
    "province": "Matabeleland South"
  },

  /* 179 */
  {
    "lastName": "Mguni",
    "firstName": "Obedingwa",
    "otherNames": "",
    "constituency": "Mangwe",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 180 */
  {
    "lastName": "Moyo",
    "firstName": "Edgar",
    "otherNames": "",
    "constituency": "Matobo North",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 181 */
  {
    "lastName": "Rwodzi",
    "firstName": "Barbara",
    "otherNames": "",
    "constituency": "Chirumanzu",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 182 */
  {
    "lastName": "Ncube",
    "firstName": "Soul",
    "otherNames": "",
    "constituency": "Matobo South",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 183 */
  {
    "lastName": "Chimina",
    "firstName": "Livingstone",
    "otherNames": "",
    "constituency": "Chiwundura",
    "party": "MDC- Alliance",
    "province": "Midlands"
  },

  /* 184 */
  {
    "lastName": "Mayihlome",
    "firstName": "Levi",
    "otherNames": "",
    "constituency": "Umzingwane",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 185 */
  {
    "lastName": "Moyo",
    "firstName": "Tonderayi",
    "otherNames": "",
    "constituency": "Gokwe-Chireya",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 186 */
  {
    "lastName": "Matemadanda",
    "firstName": "Victor",
    "otherNames": "",
    "constituency": "Gokwe Central",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 187 */
  {
    "lastName": "Ngwenya",
    "firstName": "Stephen",
    "otherNames": "",
    "constituency": "Gokwe-Gumunyu",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 188 */
  {
    "lastName": "Chikomba",
    "firstName": "Leonard",
    "otherNames": "",
    "constituency": "Gokwe-Kabuyuni",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 189 */
  {
    "lastName": "Ncube",
    "firstName": "Owen",
    "otherNames": "",
    "constituency": "Gokwe Kana",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 190 */
  {
    "lastName": "Karikoga",
    "firstName": "Tawanda",
    "otherNames": "",
    "constituency": "Gokwe Mapfungautsi",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 191 */
  {
    "lastName": "Wadyajena",
    "firstName": "Justice",
    "otherNames": "Mayor",
    "constituency": "Gokwe-Nembudziya",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 192 */
  {
    "lastName": "Mavima",
    "firstName": "Paul",
    "otherNames": "",
    "constituency": "Gokwe Sengwa",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 193 */
  {
    "lastName": "Matambanadzo",
    "firstName": "Masango",
    "otherNames": "",
    "constituency": "Kwekwe Central",
    "party": "NPF",
    "province": "Midlands"
  },

  /* 194 */
  {
    "lastName": "Machando",
    "firstName": "Prosper",
    "otherNames": "",
    "constituency": "Chirumanzu/Zibagwe",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 195 */
  {
    "lastName": "Raidza",
    "firstName": "Marko",
    "otherNames": "",
    "constituency": "Mberengwa East",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 196 */
  {
    "lastName": "Chanda",
    "firstName": "Gorden",
    "otherNames": "",
    "constituency": "Gokwe Sesame",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 197 */
  {
    "lastName": "Dube",
    "firstName": "Brian",
    "otherNames": "",
    "constituency": "Gweru Urban",
    "party": "MDC- Alliance",
    "province": "Midlands"
  },

  /* 198 */
  {
    "lastName": "Zhou",
    "firstName": "Tafanana",
    "otherNames": "",
    "constituency": "Mberengwa North",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 199 */
  {
    "lastName": "Chikwinya",
    "firstName": "Settlement",
    "otherNames": "",
    "constituency": "Mbizo",
    "party": "MDC- Alliance",
    "province": "Midlands"
  },

  /* 200 */
  {
    "lastName": "Mukapiko",
    "firstName": "Dzikamai",
    "otherNames": "Lloyd",
    "constituency": "Redcliff",
    "party": "MDC- Alliance",
    "province": "Midlands"
  },

  /* 201 */
  {
    "lastName": "Nyathi",
    "firstName": "Ronald",
    "otherNames": "Robson",
    "constituency": "Shurugwi North",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 202 */
  {
    "lastName": "Mpofu",
    "firstName": "Alum",
    "otherNames": "",
    "constituency": "Mberengwa South",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 203 */
  {
    "lastName": "Mkaratigwa",
    "firstName": "Edmond",
    "otherNames": "",
    "constituency": "Shurugwi South",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 204 */
  {
    "lastName": "Mpofu",
    "firstName": "Mtokozisi",
    "otherNames": "Manoki",
    "constituency": "Silobela",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 205 */
  {
    "lastName": "Gumbo",
    "firstName": "Joram",
    "otherNames": "Macdonald",
    "constituency": "Mberengwa West",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 206 */
  {
    "lastName": "Chibaya",
    "firstName": "Amos",
    "otherNames": "",
    "constituency": "Mkoba",
    "party": "MDC- Alliance",
    "province": "Midlands"
  },

  /* 207 */
  {
    "lastName": "Mpame",
    "firstName": "Cuthbert",
    "otherNames": "",
    "constituency": "Zvishavane Runde",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 208 */
  {
    "lastName": "Samambwa",
    "firstName": "Edmore",
    "otherNames": "",
    "constituency": "Zhombe",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 209 */
  {
    "lastName": "Mawite",
    "firstName": "Dumezweni",
    "otherNames": "",
    "constituency": "Zvishavane Ngezi",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 210 */
  {
    "lastName": "Sibanda",
    "firstName": "Omega",
    "otherNames": "",
    "constituency": "Vungu",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 211 */
  {
    "lastName": "Sibanda",
    "firstName": "Dorcas",
    "otherNames": "Staff",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Bulawayo"
  },

  /* 212 */
  {
    "lastName": "Khumalo",
    "firstName": "Thabitha",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Bulawayo"
  },

  /* 213 */
  {
    "lastName": "Mushonga",
    "firstName": "Priscilla",
    "otherNames": "Misihairambwi",
    "constituency": "Proportional Representation",
    "party": "MDC-T",
    "province": "Bulawayo"
  },

  /* 214 */
  {
    "lastName": "Toffa",
    "firstName": "Jasmine",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Bulawayo"
  },

  /* 215 */
  {
    "lastName": "Mpariwa",
    "firstName": "Paurina",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC - Alliance",
    "province": "Harare"
  },

  /* 216 */
  {
    "lastName": "Myambo",
    "firstName": "Annah",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC - Alliance",
    "province": "Harare"
  },

  /* 217 */
  {
    "lastName": "Mkwanda",
    "firstName": "Judith",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Bulawayo"
  },

  /* 218 */
  {
    "lastName": "Madziwa",
    "firstName": "Susan",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU - PF",
    "province": "Harare"
  },

  /* 219 */
  {
    "lastName": "Jaja",
    "firstName": "Joyce",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC - Alliance",
    "province": "Harare"
  },

  /* 220 */
  {
    "lastName": "Ncube",
    "firstName": "Ophar",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Bulawayo"
  },

  /* 221 */
  {
    "lastName": "Zengeya",
    "firstName": "Virginia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC - Alliance",
    "province": "Harare"
  },

  /* 222 */
  {
    "lastName": "Chikukwa",
    "firstName": "Miriam",
    "otherNames": "Rutendo",
    "constituency": "Proportional Representation",
    "party": "ZANU - PF",
    "province": "Harare"
  },

  /* 223 */
  {
    "lastName": "Karenyi",
    "firstName": "Lynette",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Manicaland"
  },

  /* 224 */
  {
    "lastName": "Chikuni",
    "firstName": "Esther",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 225 */
  {
    "lastName": "Chitura",
    "firstName": "Lucia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 226 */
  {
    "lastName": "Majaya",
    "firstName": "Bacillia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland Central"
  },

  /* 227 */
  {
    "lastName": "Shongedza",
    "firstName": "Elizabeth",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 228 */
  {
    "lastName": "Chihururu",
    "firstName": "Constance",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Manicaland"
  },

  /* 229 */
  {
    "lastName": "Muchinguri",
    "firstName": "Oppah",
    "otherNames": "Chamu",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Manicaland"
  },

  /* 230 */
  {
    "lastName": "Mashonganyika",
    "firstName": "Dorothy",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 231 */
  {
    "lastName": "Nhambo",
    "firstName": "Ferescah",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 232 */
  {
    "lastName": "Makonya",
    "firstName": "Joyce",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Manicaland"
  },

  /* 233 */
  {
    "lastName": "Gezi",
    "firstName": "Tsitsi",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 234 */
  {
    "lastName": "Mangora",
    "firstName": "Brightness",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland East"
  },

  /* 235 */
  {
    "lastName": "Mchenje",
    "firstName": "Sipiwe",
    "otherNames": "Muchaneta",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland East"
  },

  /* 236 */
  {
    "lastName": "Chibagu",
    "firstName": "Getrude",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland Central"
  },

  /* 237 */
  {
    "lastName": "Zimura",
    "firstName": "Lilian",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 238 */
  {
    "lastName": "Tsuura",
    "firstName": "Nyarai",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 239 */
  {
    "lastName": "Mafuta",
    "firstName": "Senzeni",
    "otherNames": "V.",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland West"
  },

  /* 240 */
  {
    "lastName": "Mhlanga",
    "firstName": "Jennifer",
    "otherNames": "N.",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 241 */
  {
    "lastName": "Kwaramba",
    "firstName": "Goodluck",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 242 */
  {
    "lastName": "Shava",
    "firstName": "Josephine",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 243 */
  {
    "lastName": "Nyere",
    "firstName": "Christina",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland West"
  },

  /* 244 */
  {
    "lastName": "Mugidho",
    "firstName": "Machirairwa",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC-ALLIANCE",
    "province": "Masvingo"
  },

  /* 245 */
  {
    "lastName": "Mago",
    "firstName": "Nyaradza",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC-ALLIANCE",
    "province": "Masvingo"
  },

  /* 246 */
  {
    "lastName": "Rungani",
    "firstName": "Annah",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 247 */
  {
    "lastName": "Chipato",
    "firstName": "Angelline",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 248 */
  {
    "lastName": "Samson",
    "firstName": "Aliginia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 249 */
  {
    "lastName": "Ncube",
    "firstName": "Emma",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Masvingo"
  },

  /* 250 */
  {
    "lastName": "Bhuda",
    "firstName": "Sibusisiwe",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Matabeleland North"
  },

  /* 251 */
  {
    "lastName": "Labode",
    "firstName": "Mafoko",
    "otherNames": "Ruth",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Matabeleland North"
  },

  /* 252 */
  {
    "lastName": "Ncube",
    "firstName": "Francisca",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Matabeleland North"
  },

  /* 253 */
  {
    "lastName": "Nkomo",
    "firstName": "Male",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 254 */
  {
    "lastName": "Masuku",
    "firstName": "Elizabeth",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 255 */
  {
    "lastName": "Mnkandla",
    "firstName": "Moli",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland North"
  },

  /* 256 */
  {
    "lastName": "Chinanzvavana",
    "firstName": "Consilia",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Mashonaland West"
  },

  /* 257 */
  {
    "lastName": "Ndlovu",
    "firstName": "Nomathemba",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC- Alliance",
    "province": "Matabeleland South"
  },

  /* 258 */
  {
    "lastName": "Maphosa",
    "firstName": "Lindiwe",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC-Alliance",
    "province": "Matabeleland South"
  },

  /* 259 */
  {
    "lastName": "Mpofu",
    "firstName": "Rossy",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 260 */
  {
    "lastName": "Ndlovu",
    "firstName": "Alice",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 261 */
  {
    "lastName": "Ndlovu",
    "firstName": "Evelyn",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 262 */
  {
    "lastName": "Gozho",
    "firstName": "Cathrine",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Midlands"
  },

  /* 263 */
  {
    "lastName": "Mbondiya",
    "firstName": "Memory",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "MDC Alliance",
    "province": "Midlands"
  },

  /* 264 */
  {
    "lastName": "Mutambisi",
    "firstName": "Colleta",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 265 */
  {
    "lastName": "Makoni",
    "firstName": "Reselyn",
    "otherNames": "Roseweater",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 266 */
  {
    "lastName": "Zhou",
    "firstName": "Perseverence",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 267 */
  {
    "lastName": "Maveta",
    "firstName": "Tatenda",
    "otherNames": "Annastacia",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Mashonaland East"
  },

  /* 268 */
  {
    "lastName": "Singo",
    "firstName": "Lisa",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Matabeleland South"
  },

  /* 269 */
  {
    "lastName": "Shirichena",
    "firstName": "Ellina",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Midlands"
  },

  /* 270 */
  {
    "lastName": "Nhari",
    "firstName": "Vairet",
    "otherNames": "",
    "constituency": "Proportional Representation",
    "party": "ZANU PF",
    "province": "Midlands"
  },
]

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
