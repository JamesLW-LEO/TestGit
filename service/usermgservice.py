from dao.usermgdao import UserMgDAO
class UserMgService():
    def getUserByName(self,user):
        return UserMgDAO().getOneUserByName(user)
    pass
    def getAllJobInfo(self):
        return UserMgDAO().getAllJobsInfo()
    def getJobNum(self):
        return UserMgDAO().getJobCounts()
    def getLimitJob(self,currentPage,pageNO):
        return UserMgDAO().getJObLimit(currentPage,pageNO)
    def getJobNumPos(self,position):
        return UserMgDAO().getJobNumPosition(position)
    def getLimitJobPos(self,position,currentPage, pageNO):
        return UserMgDAO().getLimitJobPosition(position,currentPage, pageNO)
    def getJobNumCity(self,city):
        return UserMgDAO().getJobNumCity(city)
    def getLimitJobCity(self,city,currentPage, pageNO):
        return UserMgDAO().getLimitJobCitys(city,currentPage, pageNO)
    def getJobNumCP(self,position,city):
        return UserMgDAO().getJobNumCPs(position,city)
    def getLimitJobPC(self,position,city,currentPage, pageNO):
        return UserMgDAO().getLimitJobPCs(position, city, currentPage, pageNO)
    def getLimitJobByMin(self,currentPage, pageNO):
        return UserMgDAO().getLimitJobByMinSalary(currentPage, pageNO)
    def getLimitJobByMax(self,currentPage, pageNO):
        return UserMgDAO().getLimitJobByMaxSalary(currentPage, pageNO)
    def setUserPwd(self,user,pwdvalue):
        return UserMgDAO().setUserPwdByName(user,pwdvalue)
    def setUserTel(self,user, telvalue):
        return UserMgDAO().setUserTelByName(user, telvalue)