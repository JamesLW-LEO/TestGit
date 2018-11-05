from entity.user import User
from logger.syslogger import logger
from .basedao import BaseDAO
class UserDAO(BaseDAO):
    def getUserByNameAndPwd(self,user):
        try:
            super().getConnection()
            sql = "select * from t_user where username = %s and userpwd=%s"
            params = (user.username,user.userpwd)
            result = super().fetchone(sql,params)
            super().commit()
            print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + params + " " + str(e))
        finally:
            super().close()
    pass
    def getAllUserName(self,user):
        try:
            super().getConnection()
            sql = "select * from t_user where username = %s"
            params = (user.username)
            result = super().execute(sql,params)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + params + " " + str(e))
        finally:
            super().close()
    pass
    def getInsertOneUser(self,user):
        try:
            super().getConnection()
            sql = "insert into t_user (username,userpwd,usertel) value (%s,%s,%s)"
            params = (user.username,user.userpwd,user.usertel)
            result = super().execute(sql, params)
            super().commit()
            print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + params + " " + str(e))
        finally:
            super().close()

    pass