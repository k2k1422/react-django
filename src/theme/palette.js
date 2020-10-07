import { colors } from "@material-ui/core";
import distinctColors from "distinct-colors";
const white = "#FFFFFF";
const black = "#000000";
const gray = "#AAAAAA";
const lightGrey = colors.grey[400];
const deepBlue = "##40529E";
const bGLanding = colors.blueGrey[100];
const backgroundGradiant =
  "linear-gradient( 390deg,  rgba(86,223,223,1) 2.7%, rgba(2,28,186,1) 120.1% )";
const DemandPlanningDashBoardGraph = [
  colors.red[500],
  colors.deepPurple[500],
  colors.green[500],
  colors.blue[500],
  colors.amber[500],
  colors.brown[500],
];
const PieChart = [
  colors.green[500],
  colors.red[500],
  colors.blue[500],
  colors.purple[500],
  colors.amber[500],
];
const GaugeChartGradiant = [
  "linear-gradient( rgba(227,236,62,0.68) 11.2%, rgba(230,29,58,0.78) 91.3% )",
  "#CADBEB",
];

let colorArray = [];
distinctColors({ count: 50, lightMin: 40 }).forEach((color) => {
  colorArray.push(
    `rgba(${color._rgb[0]},${color._rgb[1]},${color._rgb[2]},${color._rgb[3]})`
  );
});

export default {
  black,
  white,
  lightGrey,
  bGLanding,
  amber: colors.amber[700],
  blue: colors.blue[500],
  green: colors.green[100],
  orange: colors.orange[100],
  navbar_color: colors.blue[500],
  GaugeChartGradiant,
  gray,
  deepBlue,
  backgroundGradiant,
  DemandPlanningDashBoardGraph,
  PieChart,
  colorArray,
  primary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[500],
    light: colors.blue[100],
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue["A400"],
    light: colors.blue["A400"],
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  background: {
    default: "#F4F6F8",
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  lightGreen: "#43a047",
};

// import { colors } from "@material-ui/core";

// const blue = colors.blue[400];
// const chat_background = colors.indigo[50];

// const givenBlue = "rgb(83,151,189)";

// export default {
//   blue,
//   givenBlue,
//   primary: {
//     main: "rgb(83,151,189)",
//     accent: "rgb(255,137, 34)",
//   },
//   secondary: {
//     main: "rgb(255,137, 34)",
//   },
//   chat_background,
// };
