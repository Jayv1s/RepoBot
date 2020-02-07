function sortByLanguage(data, language) {
    const values = [];

    data.map(function(index, item) {
        if(index.language === language) {
            const { full_name, description } = index;
            const { avatar_url } = index.owner;
            
            const value =  {
                id: item,
                title: full_name,
                sub_title: description,
                avatar_url: avatar_url
            }
            values.push(value);
        };
    });

    return values.slice(0,5);
};

module.exports = sortByLanguage;