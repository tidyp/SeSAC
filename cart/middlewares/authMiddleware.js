const checkLoginMW = (req, res, next) => {
  const user = req.session.user;
  if (user) {
    next();
  } else {
    res.status(401).json({ message: "로그인이 필요합니다." });
    next();
  }
};

export default checkLoginMW
