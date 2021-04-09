export default {
    User: [{
            user_id: 1,
            name: 'name1',
            created_at: '2021-04-03'
        },
        {
            user_id: 2,
            name: 'name2',
            created_at: '2021-05-03'
        },
        {
            user_id: 3,
            name: 'name3',
            created_at: '2021-06-03'
        },
    ],
    Content: [{
            content_id: 1,
            user_id: 1,
            title: '[Question] hello, question for the meal plan',
            context: 'how much is for the 6 weeks meal plan??',
            created_at: '2021-04-03',
            updated_at: null
        },
        {
            content_id: 2,
            user_id: 2,
            title: '[Review] yoga class',
            context: 'it was a good experience',
            created_at: '2021-05-03',
            updated_at: null
        },
        {
            content_id: 3,
            user_id: 3,
            title: '[Review] 2 weeks meal plan',
            context: 'it helps a lot',
            created_at: '2021-06-03',
            updated_at: null
        }
    ],
    Comment: [{
            comment_id: 1,
            user_id: 1,
            content_id: 3,
            context: 'Thank you for sharing it',
            created_at: '2021-04-06',
            updated_at: null
        },
        {
            comment_id: 2,
            user_id: 3,
            content_id: 3,
            context: 'Thank you !',
            created_at: '2021-04-06',
            updated_at: null
        },
        {
            comment_id: 3,
            user_id: 2,
            content_id: 1,
            context: 'You should order 8 weeks meal plan',
            created_at: '2021-04-06',
            updated_at: null
        },
    ],
}