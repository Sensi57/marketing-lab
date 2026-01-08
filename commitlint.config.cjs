const matchTicket = /^(feat|fix|refactor|chore)-\d+: .+$/;

module.exports = {
    parserPreset: {
        parserOpts: {
            headerPattern: new RegExp('^' + matchTicket.source + '$'),
            headerCorrespondence: ['header'],
        },
    },

    plugins: [
        {
            rules: {
                'header-match-team-pattern': (parsed) => {
                    const { header } = parsed;

                    if (header.includes('Release')) {
                        return [true, ''];
                    }

                    if (!matchTicket.test(header)) {
                        return [
                            false,
                            'Коммит должен быть в формате: feat-123: message | fix-123: message | refactor-123: message',
                        ];
                    }

                    return [true, ''];
                },
            },
        },
    ],

    rules: {
        'header-match-team-pattern': [2, 'always'],
    },
};