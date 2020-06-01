export default {
    trips: [
        {
            trip_id: 1,
            user_id: 1,
            name: 'Weekend Trip',
            location: {
                city: 'Bangkok',
                country: 'Thailand',
            },
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
            trip_id: 2,
            user_id: 1,
            name: 'Girls Trip',
            location: {
                city: 'Savannah',
                country: 'USA',
            },
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
        {
            trip_id: 3,
            user_id: 1,
            name: 'Family Vacation',
            location: {
                city: 'Mostar',
                country: 'Bosnia & Herzegovina',
            },
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
    ],
    ratings: [
        {
            rating_id: 1,
            user_id: 1,
            name: 'Mad Panda Hostel',
            images: {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgH7HiQ02_-Fv8erSYt_wCqFPxFXdEHoMR-jUgRXP9G939MZmM&usqp=CAU',
                atlText: 'mad panda hostel logo',
            },
            location: {
                city: 'Hua Hin',
                country: 'Thailand',
                address: '76/2 Hua Hin 72/1 Alley, Hua Hin, Hua Hin District, Prachuap Khiri Khan 77110, Thailand',
            },
            rating: 5,
            category: 'lodging',
            comments: 'Best place on earth!! Everyone is so friendly and the food is amazing!',
        },
        {
            rating_id: 2,
            user_id: 2,
            name: 'Crystal Beer Parlor',
            images: {
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/a5/a3/39/classic-crystal-burger.jpg',
                atlText: 'burger, onion rings, and beer',
            },
            location: {
                city: 'Savannah',
                country: 'USA',
                address: '301 W Jones St, Savannah, GA 31401',
            },
            rating: 4,
            category: 'bar/coffee',
            comments: 'Great drinks! A little loud, but a nice place to start the night',
        },
        {
            rating_id: 3,
            user_id: 1,
            name: 'Stari Most Tour',
            images: {
                image: 'https://www.wonders-of-the-world.net/Bridge-of-Mostar/images/Vignettes/Photos/Pont-de-Mostar-002-V.jpg',
                atlText: 'old bridge with blue water',
            },
            location: {
                city: 'Mostar',
                country: 'Bosnia & Herzegovina',
                address: 'Stari Most, Mostar 88000, Bosnia & Herzegovina',
            },
            rating: 5,
            category: 'activity',
            comments: 'Beautiful views! Go early though, it gets crowded quickly.',
        }
    ],
}