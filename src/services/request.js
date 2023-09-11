import dataMock from '../assets/dataMock'

export function getUserInformation(_userId) {
    switch (process.env.REACT_APP_DEPLOY_MODE) {
        case ("dev"):
            return new Promise((res) => {
                setTimeout(() => { 
                    res(dataMock.users.find((user) => user.data.id === _userId))
                }, 1000);
            })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;

        case ("prod"):
            return fetch('http://localhost:3000/user/' + _userId.toString())
                .then((res) => {
                    return res.json()
                })
                .catch((error) => {
                    console.error(error);
                });
            break

    }
}

export function getUserDailyActivity(_userId) {
    switch (process.env.REACT_APP_DEPLOY_MODE) {
        case ("dev"):
            return new Promise((res) => {
                setTimeout(() => { 
                    res(dataMock.activitys.find((activity) => activity.data.userId === _userId))
                }, 1000);
            })
                .catch((error) => {
                    console.error(`Impossible de récupérer les produits : ${error}`);
                });
            break;

        case ("prod"):
            return fetch('http://localhost:3000/user/12/activity')
            .then((response) => {
              return response.json();
            })
            .catch((error) => {
              console.error(error);
            });
            break

    }
}