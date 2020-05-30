export default {
    trips: [
        {
            trip_id: 1,
            user_id: 1,
            name: 'weekend trip',
            location: 'Atlanta, Ga',
            days: [
                {
                    day_id: 1,
                    details: [
                        {
                            detail_id: 1,
                            start_time: '8',
                            meridiem: 'am',
                            task: 'wake up',
                        },
                        {
                            detail_id: 2,
                            start_time: '9',
                            meridiem: 'am',
                            task: 'breakfast at cafe',
                        },
                    ] 
                },
                {
                    day_id: 2,
                    details: [
                        {
                            detail_id: 1,
                            start_time: '8',
                            meridiem: 'am',
                            task: 'wake up',
                        },
                        {
                            detail_id: 2,
                            start_time: '9',
                            meridiem: 'am',
                            task: 'breakfast at restaurant',
                        },
                    ] 
                },
            ]
        },
        {
            trip_id: 1,
            user_id: 1,
            name: 'girls trip',
            location: 'Savannah, Ga',
            days: [
                {
                    day_id: 1,
                    details: [
                        {
                            detail_id: 1,
                            start_time: '9',
                            meridiem: 'am',
                            task: 'wake up',
                        },
                        {
                            detail_id: 2,
                            start_time: '10',
                            meridiem: 'am',
                            task: 'breakfast on beach',
                        },
                    ] 
                },
                {
                    day_id: 2,
                    details: [
                        {
                            detail_id: 1,
                            start_time: '7',
                            meridiem: 'am',
                            task: 'morning walk',
                        },
                        {
                            detail_id: 2,
                            start_time: '8',
                            meridiem: 'am',
                            task: 'breakfast at cafe',
                        },
                    ] 
                },
            ]
        },
    ],
}