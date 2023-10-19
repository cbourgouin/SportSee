import dataMock from '../assets/dataMock';
import Users from '../models/Users';
import DailyActivity from '../models/DailyActivity';
import AverageSessions from "../models/AverageSessions";
import Performance from '../models/Performance';

export function getUserInformation(_userId) {
    switch (process.env.REACT_APP_DEPLOY_MODE) {
        case ("dev"):
            return new Promise((res) => {
                setTimeout(() => {
                    res(dataMock.users.find((user) => user.data.id.toString() === _userId));
                }, 1000);
            })
                .then((response) => {
                    return new Users(
                        response.data.userInfos.firstName,
                        response.data.userInfos.lastName,
                        response.data.userInfos.age,
                        response.data.todayScore ? response.data.todayScore : response.data.score,
                        response.data.keyData.calorieCount,
                        response.data.keyData.proteinCount,
                        response.data.keyData.carbohydrateCount,
                        response.data.keyData.lipidCount
                    )
                })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;

        case ("prod"):
            return fetch('http://localhost:3000/user/' + _userId)
                .then((res) => {
                    return res.json()
                })
                .then((response) => {
                    return new Users(
                        response.data.userInfos.firstName,
                        response.data.userInfos.lastName,
                        response.data.userInfos.age,
                        response.data.todayScore ? response.data.todayScore : response.data.score,
                        response.data.keyData.calorieCount,
                        response.data.keyData.proteinCount,
                        response.data.keyData.carbohydrateCount,
                        response.data.keyData.lipidCount
                    )
                })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;
    }
}

export function getUserDailyActivity(_userId) {
    switch (process.env.REACT_APP_DEPLOY_MODE) {
        case ("dev"):
            return new Promise((res) => {
                setTimeout(() => {
                    res(dataMock.activitys.find((activity) => activity.data.userId.toString() === _userId))
                }, 1000);
            })
                .then((response) => {
                    let arrayData = [];
                    response.data.sessions.forEach(session => {
                        arrayData.push(
                            new DailyActivity(session.day, session.kilogram, session.calories)
                        )
                    });
                    return arrayData;
                })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;

        case ("prod"):
            return fetch('http://localhost:3000/user/' + _userId + '/activity')
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    let arrayData = [];
                    response.data.sessions.forEach(session => {
                        arrayData.push(
                            new DailyActivity(session.day, session.kilogram, session.calories)
                        )
                    });
                    return arrayData;
                })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;
    }
}

export function getUserAverageSessions(_userId) {
    switch (process.env.REACT_APP_DEPLOY_MODE) {
        case ("dev"):
            return new Promise((res) => {
                setTimeout(() => {
                    res(dataMock.averageSessions.find((session) => session.data.userId.toString() === _userId))
                }, 1000);
            })
                .then((response) => {
                    const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];
                    let arrayData = [];
                    response.data.sessions.forEach(session => {
                        arrayData.push(
                            new AverageSessions(session.sessionLength, dayLetter[session.day-1])
                        )
                    });
                    console.log(arrayData)
                    return arrayData;
                })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;

        case ("prod"):
            return fetch('http://localhost:3000/user/' + _userId + '/average-sessions')
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];
                    let arrayData = [];
                    response.data.sessions.forEach(session => {
                        arrayData.push(
                            new AverageSessions(session.sessionLength, dayLetter[session.day-1])
                        )
                    });
                    return arrayData;
                })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;
    }
}

export function getUserPerformance(_userId) {
    switch (process.env.REACT_APP_DEPLOY_MODE) {
        case ("dev"):
            return new Promise((res) => {
                setTimeout(() => {
                    res(dataMock.performance.find((session) => session.data.userId.toString() === _userId))
                }, 1000);
            })  
                .then((response) => {
                    let dataArray = response.data.data
                    dataArray.sort((a, b) => {
                        return b.kind - a.kind
                    })
                    response.data.data = dataArray;
                    return response;
                })
                .then((response) => {
                    const kinfFr = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
                    let arrayData = [];
                    response.data.data.forEach(dat => {
                        arrayData.push(
                            new Performance(kinfFr[dat.kind - 1], dat.value)
                        )
                    });
                    return arrayData;
                })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;

        case ("prod"):
            return fetch('http://localhost:3000/user/' + _userId + '/performance')
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    let dataArray = response.data.data
                    dataArray.sort((a, b) => {
                        return b.kind - a.kind
                    })
                    response.data.data = dataArray;
                    return response;
                })
                .then((response) => {
                    const kinfFr = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
                    let arrayData = [];
                    response.data.data.forEach(dat => {
                        arrayData.push(
                            new Performance(kinfFr[dat.kind - 1], dat.value)
                        )
                    });
                    return arrayData;
                })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;
    }
}