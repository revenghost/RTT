

init();


async function init() {
    // let test = {userName:"hi"}
    // const getUsers = await API.createUser();
    // console.log(JSON.stringify(getUsers)+" some identifer in der");
    let userData = {};
    userData.punchType = 0;
    userData.userName = "UserNameTest2";
    userData.pin = 2222;

    const jsonresp = await API.createUser(userData);
    // console.log(JSON.stringify(jsonresp)+" in der");
    
};
