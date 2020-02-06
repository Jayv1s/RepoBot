function sortByLanguage(data) {
    const values = [];

    data.map(function(index) {
        if(index.language === 'C#') {
            const { full_name, description, created_at, language } = index;
            const { avatar_url } = index.owner;
            
            const value =  {
                title: full_name,
                sub_title: description,
                origin_date: created_at,
                language: language,
                avatar_url: avatar_url
            }
            values.push(value);
        };
    });

    return values;
};

module.exports = sortByLanguage;