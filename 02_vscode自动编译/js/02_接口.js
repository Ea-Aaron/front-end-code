(() => {
    function getter(person) {
        return 'hello,' + person.firstName + '' + person.lastName;
    }
    let user = {
        firstName: '诸葛',
        lastName: '孔明'
    };
    console.log(getter(user));
})();
