import React, { Component } from "react";
import * as US from "./States";
import AnswersBox from "./answersBox";
import ScoreBox from "./ScoreBox";
import Reset from "./Reset";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberAnswered: 0,
      selectedCity: null,
      selectedState: null,
      al: {
        name: "Alabama",
        capital: "Montgomery",
        played: false
      },
      ak: {
        name: "Alaska",
        capital: "Juneau",
        played: false
      },
      az: {
        name: "Arizona",
        capital: "Phoenix",
        played: false
      },
      ar: {
        name: "Arkansas",
        capital: "Little Rock",
        played: false
      },
      ca: {
        name: "California",
        capital: "Sacramento",
        played: false
      },
      co: {
        name: "Colorado",
        capital: "Denver",
        played: false
      },
      ct: {
        name: "Connecticut",
        capital: "Hartford",
        played: false
      },
      dc: {
        name: "District of Columbia",
        capital: "US Capital",
        played: false
      },
      de: {
        name: "Delaware",
        capital: "Dover",
        played: false
      },
      fl: {
        name: "Florida",
        capital: "Tallahassee",
        played: false
      },
      ga: {
        name: "Georgia",
        capital: "Atlanta",
        played: false
      },
      hi: {
        name: "Hawaii",
        capital: "Honolulu",
        played: false
      },
      id: {
        name: "Idaho",
        capital: "Boise",
        played: false
      },
      il: {
        name: "Illinois",
        capital: "Springfield",
        played: false
      },
      in: {
        name: "Indiana",
        capital: "Indianapolis",
        played: false
      },
      ia: {
        name: "Iowa",
        capital: "Des Moines",
        played: false
      },
      ks: {
        name: "Kansas",
        capital: "Topeka",
        played: false
      },
      ky: {
        name: "Kentucky",
        capital: "Frankfort",
        played: false
      },
      la: {
        name: "Louisiana",
        capital: "Baton Rouge",
        played: false
      },
      me: {
        name: "Maine",
        capital: "Augusta",
        played: false
      },
      md: {
        name: "Maryland",
        capital: "Annapolis",
        played: false
      },
      ma: {
        name: "Massachusetts",
        capital: "Boston",
        played: false
      },
      mi: {
        name: "Michigan",
        capital: "Lansing",
        played: false
      },
      mn: {
        name: "Minnesota",
        capital: "St. Paul",
        played: false
      },
      ms: {
        name: "Mississippi",
        capital: "Jackson",
        played: false
      },
      mo: {
        name: "Missouri",
        capital: "Jefferson City",
        played: false
      },
      mt: {
        name: "Montana",
        capital: "Helena",
        played: false
      },
      ne: {
        name: "Nebraska",
        capital: "Lincoln",
        played: false
      },
      nv: {
        name: "Nevada",
        capital: "Carson City",
        played: false
      },
      nh: {
        name: "New Hampshire",
        capital: "Concord",
        played: false
      },
      nj: {
        name: "New Jersey",
        capital: "Trenton",
        played: false
      },
      nm: {
        name: "New Mexico",
        capital: "Santa Fe",
        played: false
      },
      ny: {
        name: "New York",
        capital: "Albany",
        played: false
      },
      nc: {
        name: "North Carolina",
        capital: "Raleigh",
        played: false
      },
      nd: {
        name: "North Dakota",
        capital: "Bismarck",
        played: false
      },
      oh: {
        name: "Ohio",
        capital: "Columbus",
        played: false
      },
      ok: {
        name: "Oklahoma",
        capital: "Oklahoma City",
        played: false
      },
      or: {
        name: "Oregon",
        capital: "Salem",
        played: false
      },
      pa: {
        name: "Pennsylvania",
        capital: "Harrisburg",
        played: false
      },
      ri: {
        name: "Rhode Island",
        capital: "Providence",
        played: false
      },
      sc: {
        name: "South Carolina",
        capital: "Columbia",
        played: false
      },
      sd: {
        name: "South Dakota",
        capital: "Pierre",
        played: false
      },
      tn: {
        name: "Tennessee",
        capital: "Nashville",
        played: false
      },
      tx: {
        name: "Texas",
        capital: "Austin",
        played: false
      },
      ut: {
        name: "Utah",
        capital: "Salt Lake City",
        played: false
      },
      vt: {
        name: "Vermont",
        capital: "Montpelier",
        played: false
      },
      va: {
        name: "Virginia",
        capital: "Richmond",
        played: false
      },
      wa: {
        name: "Washington",
        capital: "Olympia",
        played: false
      },
      wv: {
        name: "West Virginia",
        capital: "Charleston",
        played: false
      },
      wi: {
        name: "Wisconsin",
        capital: "Madison",
        played: false
      },
      wy: {
        name: "Wyoming",
        capital: "Cheyenne",
        played: false
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    // this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    let initState = {};
    Object.assign(initState, this.state);
    for (const key in initState) {
      console.log(key);
      switch (key) {
        case "score":
          initState[key] = 0;
          break;
        case "numberAnswered":
          initState[key] = 0;
          break;
        case "selectedState":
          initState[key] = null;
          break;
        case "selectedCity":
          initState[key] = null;
          break;
        case "correct":
          initState[key] = null;
          break;
        case "answers":
          initState[key] = null;
          break;
        default:
          console.log(key, initState[key]);
          initState[key].played = false;
          document.getElementById(key).style.fill = "#D3D3D3";
      }
    }
    this.setState(initState);
  }

  handleRadioClick(radioValue) {
    // alert(radioValue);

    this.setState((prevState, props) => {
      return { selectedCity: radioValue };
    });
  }

  // #c95c5c incorrect
  // a3a correct
  // d3d

  handleSubmit(event) {
    event.preventDefault();
    let color;
    const correctAnswer = this.state[this.state.selectedState].capital;
    const selectedCity = this.state.selectedCity;
    const { selectedState } = this.state;
    let newState = {};
    Object.assign(newState, this.state);
    newState[selectedState].played = true;
    newState.selectedCity = null;
    newState.score =
      correctAnswer === selectedCity ? this.state.score + 1 : this.state.score;
    newState.numberAnswered = this.state.numberAnswered + 1;
    color = correctAnswer === selectedCity ? "#28aec9" : "#c95c5c";
    document.getElementById(this.state.selectedState).style.fill = color;
    this.setState(newState);
  }

  handleClick(stateAbbr) {
    if (this.state[stateAbbr].played) {
      alert("already guessed this one");
    }
    else if (this.state.selectedState === stateAbbr && !this.state[stateAbbr].played){
      alert("Pick an answer")
    } 
    else {
      const correctIndex = Math.floor(Math.random() * 4);
      // console.log(correctIndex);
      const listOfCities = [
        "Minneapolis",
        "Syracuse",
        "Pittsburg",
        "Sioux Falls",
        "Durham",
        "Asheville",
        "Kansas City",
        "San Fransisco",
        "Los Angeles", 
        "Oakland",
        "Bend",
        "Houston",
        "Galveston",
        "El Paso",
        "Tucson",
        "Wilmington",
        "Scranton",
        "Las Vegas",
        "Tulsa",
        "Missoula",
        "Anchorage",
        "New York City",
        "Seattle",
        "Eugene",
        "Philadelphia",
        "Cambridge",
        "Jersey City",
        "Miami"
      ];

      let answers = new Array(4).fill(null);
      let randomCity;
      let randIndex;

      for (
        let currentIndex = 0;
        currentIndex < answers.length;
        currentIndex++
      ) {
        do {
          randIndex = Math.floor(listOfCities.length * Math.random());
          randomCity = listOfCities[randIndex];
        } while (answers.includes(randomCity));
        answers[currentIndex] = randomCity;
      }

      answers[correctIndex] = this.state[stateAbbr].capital;

      this.setState((prevState, props) => {
        return {
          selectedState: stateAbbr,
          answers: answers,
          correct: answers[correctIndex]
        };
      });
    }
  }

  render() {
    const abbr = this.state.selectedState;
    const st = abbr ? [abbr, this.state[abbr].name] : null;
    const ans = this.state.answers || null;
    const correct = this.state.correct || null;
    const selectedCity = this.state.selectedCity || null;

    return (
      <div style={{ width: "70%" }} display="block">
        <ScoreBox
          numberAnswered={this.state.numberAnswered}
          score={this.state.score}
        />
        <AnswersBox
          onSubmit={this.handleSubmit}
          onButtonClick={this.handleButtonClick}
          onRadioClick={this.handleRadioClick}
          selectedState={st}
          selectedCity={selectedCity}
          played={abbr ? this.state[abbr].played : false}
          answers={ans}
          correct={correct}
        />
        {/* <ttip.StateName selectedState={this.state.name} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 959 593"
          preserveAspectRatio="xMidYMin slice"
        >
          <g id="outlines" className="state" style={{ fill: "#D3D3D3" }}>
            {/* replace with .map() */}
            <US.Alabama
              onClick={this.handleClick}
              id="al"
              played={this.state.al.played}
            />
            <US.Alaska
              onClick={this.handleClick}
              id="ak"
              played={this.state.ak.played}
            />
            <US.Arizona
              onClick={this.handleClick}
              id="az"
              played={this.state.az.played}
            />
            <US.Arkansas
              onClick={this.handleClick}
              id="ar"
              played={this.state.ar.played}
            />
            <US.California
              onClick={this.handleClick}
              id="ca"
              played={this.state.ca.played}
            />
            <US.Colorado
              onClick={this.handleClick}
              id="co"
              played={this.state.co.played}
            />
            <US.Connecticut
              onClick={this.handleClick}
              id="ct"
              played={this.state.ct.played}
            />
            <US.Delaware
              onClick={this.handleClick}
              id="de"
              played={this.state.de.played}
            />
            <US.Florida
              onClick={this.handleClick}
              id="fl"
              played={this.state.fl.played}
            />
            <US.Georgia
              onClick={this.handleClick}
              id="ga"
              played={this.state.ga.played}
            />
            <US.Hawaii
              onClick={this.handleClick}
              id="hi"
              played={this.state.hi.played}
            />
            <US.Idaho
              onClick={this.handleClick}
              id="id"
              played={this.state.id.played}
            />
            <US.Illinois
              onClick={this.handleClick}
              id="il"
              played={this.state.il.played}
            />
            <US.Indiana
              onClick={this.handleClick}
              id="in"
              played={this.state.in.played}
            />
            <US.Iowa
              onClick={this.handleClick}
              id="ia"
              played={this.state.ia.played}
            />
            <US.Kansas
              onClick={this.handleClick}
              id="ks"
              played={this.state.ks.played}
            />
            <US.Kentucky
              onClick={this.handleClick}
              id="ky"
              played={this.state.ky.played}
            />
            <US.Louisiana
              onClick={this.handleClick}
              id="la"
              played={this.state.la.played}
            />
            <US.Maine
              onClick={this.handleClick}
              id="me"
              played={this.state.me.played}
            />
            <US.Maryland
              onClick={this.handleClick}
              id="md"
              played={this.state.md.played}
            />
            <US.Massachusetts
              onClick={this.handleClick}
              id="ma"
              played={this.state.ma.played}
            />
            <US.Michigan
              onClick={this.handleClick}
              id="mi"
              played={this.state.mi.played}
            />
            <US.Minnesota
              onClick={this.handleClick}
              id="mn"
              played={this.state.mn.played}
            />
            <US.Mississippi
              onClick={this.handleClick}
              id="ms"
              played={this.state.ms.played}
            />
            <US.Missouri
              onClick={this.handleClick}
              id="mo"
              played={this.state.mo.played}
            />
            <US.Montana
              onClick={this.handleClick}
              id="mt"
              played={this.state.mt.played}
            />
            <US.Nebraska
              onClick={this.handleClick}
              id="ne"
              played={this.state.ne.played}
            />
            <US.Nevada
              onClick={this.handleClick}
              id="nv"
              played={this.state.nv.played}
            />
            <US.Newhampshire
              onClick={this.handleClick}
              id="nh"
              played={this.state.nh.played}
            />
            <US.Newjersey
              onClick={this.handleClick}
              id="nj"
              played={this.state.nj.played}
            />
            <US.Newmexico
              onClick={this.handleClick}
              id="nm"
              played={this.state.nm.played}
            />
            <US.Newyork
              onClick={this.handleClick}
              id="ny"
              played={this.state.ny.played}
            />
            <US.Northcarolina
              onClick={this.handleClick}
              id="nc"
              played={this.state.nc.played}
            />
            <US.Northdakota
              onClick={this.handleClick}
              id="nd"
              played={this.state.nd.played}
            />
            <US.Ohio
              onClick={this.handleClick}
              id="oh"
              played={this.state.oh.played}
            />
            <US.Oklahoma
              onClick={this.handleClick}
              id="ok"
              played={this.state.ok.played}
            />
            <US.Oregon
              onClick={this.handleClick}
              id="or"
              played={this.state.or.played}
            />
            <US.Pennsylvania
              onClick={this.handleClick}
              id="pa"
              played={this.state.pa.played}
            />
            <US.Rhodeisland
              onClick={this.handleClick}
              id="ri"
              played={this.state.ri.played}
            />
            <US.Southcarolina
              onClick={this.handleClick}
              id="sc"
              played={this.state.sc.played}
            />
            <US.Southdakota
              onClick={this.handleClick}
              id="sd"
              played={this.state.sd.played}
            />
            <US.Tennessee
              onClick={this.handleClick}
              id="tn"
              played={this.state.tn.played}
            />
            <US.Texas
              onClick={this.handleClick}
              id="tx"
              played={this.state.tx.played}
            />
            <US.Utah
              onClick={this.handleClick}
              id="ut"
              played={this.state.ut.played}
            />
            <US.Vermont
              onClick={this.handleClick}
              id="vt"
              played={this.state.vt.played}
            />
            <US.Virginia
              onClick={this.handleClick}
              id="va"
              played={this.state.va.played}
            />
            <US.Washington
              onClick={this.handleClick}
              id="wa"
              played={this.state.wa.played}
            />
            <US.Westvirginia
              onClick={this.handleClick}
              id="wv"
              played={this.state.wv.played}
            />
            <US.Wisconsin
              onClick={this.handleClick}
              id="wi"
              played={this.state.wi.played}
            />
            <US.Wyoming
              onClick={this.handleClick}
              id="wy"
              played={this.state.wy.played}
            />
            <US.Dc
              onClick={this.handleClick}
              id="dc"
              played={this.state.dc.played}
            />
          </g>
        </svg>
        <h1>Reset</h1>
        <Reset onReset={this.handleReset} />
      </div>
    );
  }
}
