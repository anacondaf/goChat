const USER_DATA = {
    name: "19521658@gm.uit.edu.vn",
    password: "123",
};

module.exports.authUser = (req, res) => {
    const { name, password } = req.body.data;

    if (name === USER_DATA["name"] && password === USER_DATA["password"]) {
        res.status(200).json({ message: "ok" });
    } else {
        res.json({ message: "error" });
    }
};
