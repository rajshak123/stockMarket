/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const LOAD_REPOS = 'boilerplate/Home/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/Home/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/Home/LOAD_REPOS_ERROR';

export const stockIndexMappingMoneyControl = {
  1: {
    ADG01: {
      label: 'Adani Gas Ltd',
      baseId: '542066',
    },
    AL9: {
      label: 'Aegis Logistics Ltd',
      baseId: '500003',
    },
    BPC: {
      label: 'Bharat Petroleum Corp Ltd',
      baseId: '500547',
    },
    ONG: {
      label: 'Oil & Natural Gas Corp Ltd',
      baseId: '500312',
    },
    CI11: {
      label: 'Coal India Ltd',
      baseId: '533278',
    },
  },
  2: {
    IOC: {
      label: 'Indian Oil Corp Ltd',
      baseId: '530965',
    },
    PLN: {
      label: 'Petronet LNG Ltd',
      baseId: '532522',
    },
    HPC: {
      label: 'Hindustan Petroleum Corp Ltd',
      baseId: '500104',
    },
    CI01: {
      label: 'Castrol India Ltd',
      baseId: '500870',
    },
    GGC: {
      label: 'Gujarat Gas Ltd',
      baseId: '539336',
    },
  },
  3: {
    AO04: {
      label: 'Aban Offshore Ltd',
      baseId: '523204',
    },
    AI10: {
      label: 'Alphageo (India) Ltd',
      baseId: '526397',
    },
    SET: {
      label: 'Selan Exploration Technology Ltd',
      baseId: '530075',
    },
    PP02: {
      label: 'Panama Petrochem Ltd',
      baseId: '524820',
    },
    OI13: {
      label: 'Oil India Ltd',
      baseId: '533106',
    },
  },
  4: {
    MRP: {
      label: 'Mangalore Refinery & Petrochemicals Ltd',
      baseId: '500109',
    },
    HOE01: {
      label: 'Hindustan Oil Exploration Co Ltd',
      baseId: '500186',
    },
    GOL01: {
      label: 'Gulf Oil Lubricants India Ltd',
      baseId: '538567',
    },
    GMD: {
      label: 'Gujarat Mineral Development Corp Ltd',
      baseId: '532181',
    },
    GC04: {
      label: 'Goa Carbon Ltd',
      baseId: '509567',
    },
  },
  5: {
    CP10: {
      label: 'Confidence Petroleum India Ltd',
      baseId: '526829',
    },
    CPC02: {
      label: 'Chennai Petroleum Corp Ltd',
      baseId: '500110',
    },
  },
};

export const healthCareMarket = {
  1: {
    AD: { label: 'Aarti Drugs Ltd', bseID: '524348' },
    AI51: { label: 'Abbott India Ltd', bseID: '500488' },
    AP22: { label: 'Ajanta Pharma Ltd', bseID: '532331' },
    AD01: { label: 'Albert David Ltd', bseID: '524075' },
    A08: { label: 'Alembic Ltd', bseID: '506235' },
  },
  2: {
    AP35: { label: 'Alembic Pharmaceuticals Ltd', bseID: '533573' },
    AL05: { label: 'Alkem Laboratories Ltd', bseID: '539523' },
    AHE: { label: 'Apollo Hospitals Enterprise Ltd', bseID: '508869' },
    ADH: { label: 'Aster DM Healthcare Ltd', bseID: '540975' },
    AZP: { label: 'AstraZeneca Pharm India', bseID: '506820' },
  },
  3: {
    AP: { label: 'Aurobindo Pharma Ltd', bseID: '524804' },
    BL03: { label: 'Biocon Ltd', bseID: '532523' },
    BGV: { label: 'Bliss Gvs Pharma Ltd', bseID: '506197' },
    CHC: { label: 'Cadila Healthcare Ltd', bseID: '532321' },
    CPL: { label: 'Caplin Point Laboratories Ltd', bseID: '524742' },
  },
  4: {
    C: { label: 'Cipla Ltd/India', bseID: '500087' },
    DCA: { label: 'Dishman Carbogen Amics Ltd', bseID: '540701' },
    DL03: { label: "Divi's Laboratories Ltd", bseID: '532488' },
    DRL: { label: "Dr Reddy's Laboratories Ltd", bseID: '500124' },
    DLP01: { label: 'Dr. Lal PathLabs Ltd', bseID: '539524' },
  },
  5: {
    EL01: { label: 'Eris Lifesciences Ltd', bseID: '540596' },
    FDC: { label: 'FDC Ltd', bseID: '531599' },
    DIL03: { label: 'Fermenta Biotech Limited', bseID: '506414' },
    FH: { label: 'Fortis Healthcare Ltd.', bseID: '532843' },
    GSK: { label: 'GlaxoSmithKline Pharmaceuticals Ltd', bseID: '500660' },
  },
  6: {
    GP08: { label: 'Glenmark Pharmaceuticals Ltd', bseID: '532296' },
    GI25: { label: 'Granules India Ltd', bseID: '532482' },
    GB04: { label: 'Gufic BioSciences Ltd', bseID: '509079' },
    HB01: { label: 'HESTER PHARM', bseID: '524669' },
    H05: { label: 'Hikal Ltd.', bseID: '524735' },
  },
  7: {
    IR05: { label: 'Indoco Remedies Ltd.', bseID: '532612' },
    IOL01: { label: 'IOL Chemicals and Pharmaceuticals Ltd', bseID: '524164' },
    IL: { label: 'Ipca Laboratories Ltd', bseID: '524494' },
    JBC01: { label: 'J.B.Chemicals & Pharmaceuticals Ltd.', bseID: '506943' },
    JO03: { label: 'Jubilant Life Sciences Ltd', bseID: '530019' },
  },
  8: {
    KDI: { label: 'Kilitch Drugs (India) Ltd', bseID: '524500' },
    LL05: { label: 'Laurus Labs Ltd', bseID: '540222' },
    LP06: { label: 'Lincoln Pharmaceuticals ltd', bseID: '531633' },
    L: { label: 'Lupin Ltd', bseID: '500257' },
    MP21: { label: 'Marksans Pharma Ltd', bseID: '524404' },
  },
  9: {
    MB: { label: 'Medicamen Biotech Ltd', bseID: '531146' },
    MH06: { label: 'Metropolis Healthcare Ltd', bseID: '542650' },
    ML06: { label: 'Morepen Laboratories Ltd', bseID: '500288' },
    NH: { label: 'Narayana Hrudayalaya Ltd', bseID: '539551' },
    NP07: { label: 'Natco Pharma Ltd', bseID: '524816' },
  },
  10: {
    NL01: { label: 'Nectar Lifesciences Ltd', bseID: '532649' },
    NL: { label: 'Neuland Laboratories Ltd', bseID: '524558' },
    NI01: { label: 'Novartis India Ltd', bseID: '500672' },
  },
};
export const moreHealthCare = {
  OCI01: { label: 'Opto Circuits India Ltd', bseID: '532391' },
  PB02: { label: 'Panacea Biotec Ltd', bseID: '531349' },
  P: { label: 'Pfizer Ltd (India)', bseID: '500680' },
  PH05: { label: 'Piramal Enterprises Ltd', bseID: '500302' },
  M12: { label: 'Procter & Gamble Health Limited', bseID: '500126' },
  RPG05: { label: 'RPG Life Sciences Ltd', bseID: '532983' },
  AP26: { label: 'Sanofi India Ltd', bseID: '500674' },
  PID01: { label: 'Sequent Scientific Ltd', bseID: '512529' },
  SL18: { label: 'Shalby Ltd', bseID: '540797' },
  SM19: { label: 'Shilpa Medicare Ltd', bseID: '530549' },
  SOLAR54154: { label: 'Solara Active Pharma Sciences Ltd', bseID: '541540' },
  SA10: { label: 'Strides Pharma Science Ltd', bseID: '532531' },
  SPA: { label: 'Sun Pharma Advanced Research Co Ltd', bseID: '532872' },
  SPI: { label: 'Sun Pharmaceutical Industries Ltd', bseID: '524715' },
  SLS01: { label: 'Suven Life Sciences Ltd', bseID: '530239' },
  SP19: { label: 'Suven Pharmaceuticals Limited', bseID: '543064' },
  SI10: { label: 'Syngene International Ltd', bseID: '539268' },
  TS09: { label: 'Take Solutions Ltd', bseID: '532890' },
  TT16: { label: 'Thyrocare Technologies Ltd', bseID: '539871' },
  TP06: { label: 'Torrent Pharmaceuticals Ltd', bseID: '500420' },
  UL02: { label: 'Unichem Laboratories Ltd', bseID: '506690' },
  VL04: { label: 'Vimta Labs Ltd.', bseID: '524394' },
  VL07: { label: 'Vivimed Labs Ltd', bseID: '532660' },
  W05: { label: 'Wockhardt Ltd', bseID: '532300' },
};
const myDateFormat = '%e/%m/%y';
// Create graph options
export const timeSeriesChartOption = {
  chart: {
    type: 'line', // line, bar, column, etc
    // renderTo: 'graph-container', // div where my graph will be drawn
    // zoomType: 'x', // Making x-axis zoomable/scrollable
  },
  title: {
    text: '',
  },
  //   subtitle: {
  //     text:
  //       document.ontouchstart === undefined
  //         ? 'Click and drag in the plot area to zoom in'
  //         : 'Pinch the chart to zoom in',
  //   },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      millisecond: myDateFormat,
      second: myDateFormat,
      minute: myDateFormat,
      hour: myDateFormat,
      day: myDateFormat,
      week: myDateFormat,
      month: myDateFormat,
      year: myDateFormat,
    },
  },
  yAxis: {
    title: {
      text: null,
    },
  },
  scrollbar: {
    enabled: true,
  },
  series: [
    {
      name: 'Prices', // Name of the series
      // data: dataArray
    },
  ],
  exporting: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
};

export const buttonTime = [
  {
    label: 'prev 1 mnth',
    id: 1,
  },
  {
    label: 'prev 6 mnth',
    id: 6,
  },
  {
    label: 'prev 9 mnth',
    id: 9,
  },
  {
    label: 'prev 1 yr',
    id: 12,
  },
  {
    label: 'prev 2 yr',
    id: 24,
  },
  {
    label: 'prev 5 yr',
    id: 60,
  },
  {
    label: 'Max',
    id: 'max',
  },
];
