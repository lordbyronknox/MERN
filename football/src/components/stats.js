import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Stats = () => {
    const [selectedStats, setSelectedStats] = useState("eng.1");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setData([]);
        axios
          .get(
            `https://api-football-standings.azharimm.site/leagues/${selectedTeam}/standings?season=${selectedYear}`
          )
          .then((res) => {
            console.log(res.data.data.standings.Stats);
            setData(res.data.data.standings);
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, [selectedYear, selectedLeague]);

      

    return (
        <div className="stats-container">
            <div className="select-fields">
                <select name="select-stats" id="select-stat" defaultValue={selectedStats}
                    onChange={(e) => setSelectedStats(e.target.value)} >

                    <option value="arg.1">Argentine Liga Profesional de Fútbol</option>
                    <option value="aus.1">Australian A-League</option>
                </select>
            </div>
        </div>
    )


    export default Stats;



    [
        {
            "team": {
                "id": "382",
                "uid": "s:600~t:382",
                "location": "Manchester City",
                "name": "Manchester City",
                "abbreviation": "MNC",
                "displayName": "Manchester City",
                "shortDisplayName": "Man City",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/382.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#81D6AC",
                "description": "Champions League",
                "rank": 1
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 28,
                    "displayValue": "28"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 3,
                    "displayValue": "3"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 6,
                    "displayValue": "6"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 96,
                    "displayValue": "96"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 24,
                    "displayValue": "24"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 90,
                    "displayValue": "90"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 1,
                    "displayValue": "1"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": 72,
                    "displayValue": "+72"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "28-6-3",
                    "displayValue": "28-6-3"
                }
            ]
        },
        {
            "team": {
                "id": "364",
                "uid": "s:600~t:364",
                "location": "Liverpool",
                "name": "Liverpool",
                "abbreviation": "LIV",
                "displayName": "Liverpool",
                "shortDisplayName": "Liverpool",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/364.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#81D6AC",
                "description": "Champions League",
                "rank": 2
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 27,
                    "displayValue": "27"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 2,
                    "displayValue": "2"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 8,
                    "displayValue": "8"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 91,
                    "displayValue": "91"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 25,
                    "displayValue": "25"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 89,
                    "displayValue": "89"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 2,
                    "displayValue": "2"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": 66,
                    "displayValue": "+66"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "27-8-2",
                    "displayValue": "27-8-2"
                }
            ]
        },
        {
            "team": {
                "id": "363",
                "uid": "s:600~t:363",
                "location": "Chelsea",
                "name": "Chelsea",
                "abbreviation": "CHE",
                "displayName": "Chelsea",
                "shortDisplayName": "Chelsea",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/363.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#81D6AC",
                "description": "Champions League",
                "rank": 3
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 20,
                    "displayValue": "20"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 6,
                    "displayValue": "6"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 10,
                    "displayValue": "10"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 36,
                    "displayValue": "36"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 73,
                    "displayValue": "73"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 31,
                    "displayValue": "31"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 70,
                    "displayValue": "70"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 3,
                    "displayValue": "3"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": 42,
                    "displayValue": "+42"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "20-10-6",
                    "displayValue": "20-10-6"
                }
            ]
        },
        {
            "team": {
                "id": "367",
                "uid": "s:600~t:367",
                "location": "Tottenham Hotspur",
                "name": "Tottenham Hotspur",
                "abbreviation": "TOT",
                "displayName": "Tottenham Hotspur",
                "shortDisplayName": "Tottenham",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/367.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#81D6AC",
                "description": "Champions League",
                "rank": 4
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 21,
                    "displayValue": "21"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 11,
                    "displayValue": "11"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 5,
                    "displayValue": "5"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 64,
                    "displayValue": "64"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 40,
                    "displayValue": "40"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 68,
                    "displayValue": "68"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 4,
                    "displayValue": "4"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": 24,
                    "displayValue": "+24"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "21-5-11",
                    "displayValue": "21-5-11"
                }
            ]
        },
        {
            "team": {
                "id": "359",
                "uid": "s:600~t:359",
                "location": "Arsenal",
                "name": "Arsenal",
                "abbreviation": "ARS",
                "displayName": "Arsenal",
                "shortDisplayName": "Arsenal",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/359.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#B2BFD0",
                "description": "Europa League",
                "rank": 5
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 21,
                    "displayValue": "21"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 13,
                    "displayValue": "13"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 3,
                    "displayValue": "3"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 56,
                    "displayValue": "56"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 47,
                    "displayValue": "47"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 66,
                    "displayValue": "66"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 5,
                    "displayValue": "5"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": 9,
                    "displayValue": "+9"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "21-3-13",
                    "displayValue": "21-3-13"
                }
            ]
        },
        {
            "team": {
                "id": "360",
                "uid": "s:600~t:360",
                "location": "Manchester United",
                "name": "Manchester United",
                "abbreviation": "MAN",
                "displayName": "Manchester United",
                "shortDisplayName": "Man United",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/360.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#B2BFD0",
                "description": "Europa League",
                "rank": 6
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 16,
                    "displayValue": "16"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 11,
                    "displayValue": "11"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 10,
                    "displayValue": "10"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 57,
                    "displayValue": "57"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 56,
                    "displayValue": "56"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 58,
                    "displayValue": "58"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 6,
                    "displayValue": "6"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": 1,
                    "displayValue": "+1"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "16-10-11",
                    "displayValue": "16-10-11"
                }
            ]
        },
        {
            "team": {
                "id": "371",
                "uid": "s:600~t:371",
                "location": "West Ham United",
                "name": "West Ham United",
                "abbreviation": "WHU",
                "displayName": "West Ham United",
                "shortDisplayName": "West Ham",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/371.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#c6d1e0",
                "description": "Europa Conference League qualifying",
                "rank": 7
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 16,
                    "displayValue": "16"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 13,
                    "displayValue": "13"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 8,
                    "displayValue": "8"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 59,
                    "displayValue": "59"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 48,
                    "displayValue": "48"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 56,
                    "displayValue": "56"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 7,
                    "displayValue": "7"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": 11,
                    "displayValue": "+11"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "16-8-13",
                    "displayValue": "16-8-13"
                }
            ]
        },
        {
            "team": {
                "id": "380",
                "uid": "s:600~t:380",
                "location": "Wolverhampton Wanderers",
                "name": "Wolverhampton Wanderers",
                "abbreviation": "WOL",
                "displayName": "Wolverhampton Wanderers",
                "shortDisplayName": "Wolves",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/380.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 15,
                    "displayValue": "15"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 16,
                    "displayValue": "16"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 6,
                    "displayValue": "6"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 40,
                    "displayValue": "40"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 51,
                    "displayValue": "51"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 8,
                    "displayValue": "8"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -3,
                    "displayValue": "-3"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "15-6-16",
                    "displayValue": "15-6-16"
                }
            ]
        },
        {
            "team": {
                "id": "375",
                "uid": "s:600~t:375",
                "location": "Leicester City",
                "name": "Leicester City",
                "abbreviation": "LEI",
                "displayName": "Leicester City",
                "shortDisplayName": "Leicester",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/375.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 13,
                    "displayValue": "13"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 14,
                    "displayValue": "14"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 9,
                    "displayValue": "9"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 36,
                    "displayValue": "36"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 57,
                    "displayValue": "57"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 57,
                    "displayValue": "57"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 48,
                    "displayValue": "48"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 9,
                    "displayValue": "9"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "13-9-14",
                    "displayValue": "13-9-14"
                }
            ]
        },
        {
            "team": {
                "id": "331",
                "uid": "s:600~t:331",
                "location": "Brighton & Hove Albion",
                "name": "Brighton & Hove Albion",
                "abbreviation": "BHA",
                "displayName": "Brighton & Hove Albion",
                "shortDisplayName": "Brighton",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/331.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 11,
                    "displayValue": "11"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 11,
                    "displayValue": "11"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 15,
                    "displayValue": "15"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 39,
                    "displayValue": "39"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 43,
                    "displayValue": "43"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 48,
                    "displayValue": "48"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 10,
                    "displayValue": "10"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -4,
                    "displayValue": "-4"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "11-15-11",
                    "displayValue": "11-15-11"
                }
            ]
        },
        {
            "team": {
                "id": "337",
                "uid": "s:600~t:337",
                "location": "Brentford",
                "name": "Brentford",
                "abbreviation": "BRE",
                "displayName": "Brentford",
                "shortDisplayName": "Brentford",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/337.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2020-07-16T16:13Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 13,
                    "displayValue": "13"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 17,
                    "displayValue": "17"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 7,
                    "displayValue": "7"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 47,
                    "displayValue": "47"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 54,
                    "displayValue": "54"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 46,
                    "displayValue": "46"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 11,
                    "displayValue": "11"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -7,
                    "displayValue": "-7"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "13-7-17",
                    "displayValue": "13-7-17"
                }
            ]
        },
        {
            "team": {
                "id": "361",
                "uid": "s:600~t:361",
                "location": "Newcastle United",
                "name": "Newcastle United",
                "abbreviation": "NEW",
                "displayName": "Newcastle United",
                "shortDisplayName": "Newcastle",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/361.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 12,
                    "displayValue": "12"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 15,
                    "displayValue": "15"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 10,
                    "displayValue": "10"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 42,
                    "displayValue": "42"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 61,
                    "displayValue": "61"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 46,
                    "displayValue": "46"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 12,
                    "displayValue": "12"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -19,
                    "displayValue": "-19"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "12-10-15",
                    "displayValue": "12-10-15"
                }
            ]
        },
        {
            "team": {
                "id": "384",
                "uid": "s:600~t:384",
                "location": "Crystal Palace",
                "name": "Crystal Palace",
                "abbreviation": "CRY",
                "displayName": "Crystal Palace",
                "shortDisplayName": "C Palace",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/384.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 10,
                    "displayValue": "10"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 11,
                    "displayValue": "11"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 15,
                    "displayValue": "15"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 36,
                    "displayValue": "36"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 47,
                    "displayValue": "47"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 43,
                    "displayValue": "43"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 45,
                    "displayValue": "45"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 13,
                    "displayValue": "13"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": 4,
                    "displayValue": "+4"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "10-15-11",
                    "displayValue": "10-15-11"
                }
            ]
        },
        {
            "team": {
                "id": "362",
                "uid": "s:600~t:362",
                "location": "Aston Villa",
                "name": "Aston Villa",
                "abbreviation": "AVL",
                "displayName": "Aston Villa",
                "shortDisplayName": "Aston Villa",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/362.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 13,
                    "displayValue": "13"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 18,
                    "displayValue": "18"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 5,
                    "displayValue": "5"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 36,
                    "displayValue": "36"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 49,
                    "displayValue": "49"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 50,
                    "displayValue": "50"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 44,
                    "displayValue": "44"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 14,
                    "displayValue": "14"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -1,
                    "displayValue": "-1"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "13-5-18",
                    "displayValue": "13-5-18"
                }
            ]
        },
        {
            "team": {
                "id": "376",
                "uid": "s:600~t:376",
                "location": "Southampton",
                "name": "Southampton",
                "abbreviation": "SOU",
                "displayName": "Southampton",
                "shortDisplayName": "Southampton",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/376.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 9,
                    "displayValue": "9"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 15,
                    "displayValue": "15"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 13,
                    "displayValue": "13"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 42,
                    "displayValue": "42"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 63,
                    "displayValue": "63"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 40,
                    "displayValue": "40"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 15,
                    "displayValue": "15"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -21,
                    "displayValue": "-21"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "9-13-15",
                    "displayValue": "9-13-15"
                }
            ]
        },
        {
            "team": {
                "id": "368",
                "uid": "s:600~t:368",
                "location": "Everton",
                "name": "Everton",
                "abbreviation": "EVE",
                "displayName": "Everton",
                "shortDisplayName": "Everton",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/368.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 10,
                    "displayValue": "10"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 20,
                    "displayValue": "20"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 6,
                    "displayValue": "6"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 36,
                    "displayValue": "36"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 39,
                    "displayValue": "39"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 59,
                    "displayValue": "59"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 36,
                    "displayValue": "36"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 16,
                    "displayValue": "16"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -20,
                    "displayValue": "-20"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "10-6-20",
                    "displayValue": "10-6-20"
                }
            ]
        },
        {
            "team": {
                "id": "357",
                "uid": "s:600~t:357",
                "location": "Leeds United",
                "name": "Leeds United",
                "abbreviation": "LEE",
                "displayName": "Leeds United",
                "shortDisplayName": "Leeds",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/357.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 8,
                    "displayValue": "8"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 18,
                    "displayValue": "18"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 11,
                    "displayValue": "11"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 40,
                    "displayValue": "40"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 78,
                    "displayValue": "78"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 35,
                    "displayValue": "35"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 17,
                    "displayValue": "17"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -38,
                    "displayValue": "-38"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "8-11-18",
                    "displayValue": "8-11-18"
                }
            ]
        },
        {
            "team": {
                "id": "379",
                "uid": "s:600~t:379",
                "location": "Burnley",
                "name": "Burnley",
                "abbreviation": "BUR",
                "displayName": "Burnley",
                "shortDisplayName": "Burnley",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/379.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#FF7F84",
                "description": "Relegation",
                "rank": 18
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 7,
                    "displayValue": "7"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 16,
                    "displayValue": "16"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 13,
                    "displayValue": "13"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 36,
                    "displayValue": "36"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 32,
                    "displayValue": "32"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 50,
                    "displayValue": "50"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 34,
                    "displayValue": "34"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 18,
                    "displayValue": "18"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -18,
                    "displayValue": "-18"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "7-13-16",
                    "displayValue": "7-13-16"
                }
            ]
        },
        {
            "team": {
                "id": "395",
                "uid": "s:600~t:395",
                "location": "Watford",
                "name": "Watford",
                "abbreviation": "WAT",
                "displayName": "Watford",
                "shortDisplayName": "Watford",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/395.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#FF7F84",
                "description": "Relegation",
                "rank": 19
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 6,
                    "displayValue": "6"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 26,
                    "displayValue": "26"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 5,
                    "displayValue": "5"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 33,
                    "displayValue": "33"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 75,
                    "displayValue": "75"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 23,
                    "displayValue": "23"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 19,
                    "displayValue": "19"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -42,
                    "displayValue": "-42"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "6-5-26",
                    "displayValue": "6-5-26"
                }
            ]
        },
        {
            "team": {
                "id": "381",
                "uid": "s:600~t:381",
                "location": "Norwich City",
                "name": "Norwich City",
                "abbreviation": "NOR",
                "displayName": "Norwich City",
                "shortDisplayName": "Norwich",
                "isActive": true,
                "logos": [
                    {
                        "href": "https://a.espncdn.com/i/teamlogos/soccer/500/381.png",
                        "width": 500,
                        "height": 500,
                        "alt": "",
                        "rel": [
                            "full",
                            "default"
                        ],
                        "lastUpdated": "2019-05-08T16:07Z"
                    }
                ]
            },
            "note": {
                "color": "#FF7F84",
                "description": "Relegation",
                "rank": 20
            },
            "stats": [
                {
                    "name": "wins",
                    "displayName": "Wins",
                    "shortDisplayName": "W",
                    "description": "Team's current Win-Loss record",
                    "abbreviation": "W",
                    "type": "wins",
                    "value": 5,
                    "displayValue": "5"
                },
                {
                    "name": "losses",
                    "displayName": "Losses",
                    "shortDisplayName": "L",
                    "description": "Losses",
                    "abbreviation": "L",
                    "type": "losses",
                    "value": 25,
                    "displayValue": "25"
                },
                {
                    "name": "ties",
                    "displayName": "Draws",
                    "shortDisplayName": "D",
                    "description": "Draws",
                    "abbreviation": "D",
                    "type": "ties",
                    "value": 7,
                    "displayValue": "7"
                },
                {
                    "name": "gamesPlayed",
                    "displayName": "Games Played",
                    "shortDisplayName": "GP",
                    "description": "Games Played",
                    "abbreviation": "GP",
                    "type": "gamesplayed",
                    "value": 37,
                    "displayValue": "37"
                },
                {
                    "name": "pointsFor",
                    "displayName": "Goals For",
                    "shortDisplayName": "F",
                    "description": "Goals For",
                    "abbreviation": "F",
                    "type": "pointsfor",
                    "value": 23,
                    "displayValue": "23"
                },
                {
                    "name": "pointsAgainst",
                    "displayName": "Goals Against",
                    "shortDisplayName": "A",
                    "description": "Goals Against",
                    "abbreviation": "A",
                    "type": "pointsagainst",
                    "value": 79,
                    "displayValue": "79"
                },
                {
                    "name": "points",
                    "displayName": "Points",
                    "shortDisplayName": "P",
                    "description": "Points",
                    "abbreviation": "P",
                    "type": "points",
                    "value": 22,
                    "displayValue": "22"
                },
                {
                    "name": "rankChange",
                    "displayName": "Rank Change",
                    "shortDisplayName": "Rank Change",
                    "description": "Rank Change",
                    "abbreviation": "RC",
                    "type": "rankchange",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "name": "rank",
                    "displayName": "Rank",
                    "shortDisplayName": "Rank",
                    "description": "Rank",
                    "abbreviation": "R",
                    "type": "rank",
                    "value": 20,
                    "displayValue": "20"
                },
                {
                    "name": "pointDifferential",
                    "displayName": "Goal Difference",
                    "shortDisplayName": "GD",
                    "description": "Goal Difference",
                    "abbreviation": "GD",
                    "type": "pointdifferential",
                    "value": -56,
                    "displayValue": "-56"
                },
                {
                    "name": "deductions",
                    "displayName": "Point Deductions",
                    "shortDisplayName": "Deductions",
                    "description": "Point Deductions",
                    "abbreviation": "PD",
                    "type": "deductions",
                    "value": 0,
                    "displayValue": ""
                },
                {
                    "name": "ppg",
                    "displayName": "Points Per Game",
                    "shortDisplayName": "PPG",
                    "description": "Points Per Game",
                    "abbreviation": "PPG",
                    "type": "ppg",
                    "value": 0,
                    "displayValue": "0"
                },
                {
                    "id": "0",
                    "name": "All Splits",
                    "abbreviation": "Total",
                    "displayName": "Overall",
                    "shortDisplayName": "OVER",
                    "description": "Overall Record",
                    "type": "total",
                    "summary": "5-7-25",
                    "displayValue": "5-7-25"
                }
            ]
        }
    ]