from dao.userdao import UserDAO
class UserService():
    def __init__(self):
        self.__uerDAO = UserDAO()
    def getUserByNamePwd(self,user):
        return UserDAO().getUserByNameAndPwd(user)
    def getAllUserByName(self,user):
        return UserDAO().getAllUserName(user)
    def getInsertUser(self,user):
        return UserDAO().getInsertOneUser(user)