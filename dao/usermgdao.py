from entity.user import User
from logger.syslogger import logger
from .basedao import BaseDAO


class UserMgDAO(BaseDAO):
    def getOneUserByName(self, user):
        try:
            super().getConnection()
            sql = "select * from t_user where username = %s"
            params = (user.username,)
            result = super().fetchone(sql, params)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + params + " " + str(e))
        finally:
            super().close()

    pass

    def getJobCounts(self):
        try:
            super().getConnection()
            sql = "select count(*) from t_job_info"
            result = super().fetchall(sql)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()

    def getJObLimit(self, currentPage, pageNO):
        try:
            super().getConnection()
            sql = "select * from t_job_info order by jobMinsalary asc limit %s,%s"
            params = ((currentPage - 1) * pageNO, pageNO)
            result = super().fetchall(sql, params)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + params + " " + str(e))
        finally:
            super().close()

    def getJobNumPosition(self, position):
        try:
            super().getConnection()
            sql = "select count(*) from t_job_info where jobPosition like '%{0}%'".format(position)
            result = super().fetchall(sql)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()

    def getLimitJobPosition(self, position, currentPage, pageNO):
        try:
            super().getConnection()
            sql = "select * from t_job_info where jobPosition like '%{0}%' limit {1},{2}".format(position, (
                    currentPage - 1) * pageNO, pageNO)
            result = super().fetchall(sql)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()

    def getJobNumCity(self, city):
        try:
            super().getConnection()
            sql = "select count(*) from t_job_info where jobCity = %s"
            params = (city,)
            result = super().fetchall(sql, params)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()

    def getLimitJobCitys(self, city, currentPage, pageNO):
        try:
            super().getConnection()
            sql = "select * from t_job_info where jobCity = %s limit %s,%s"
            params = (city, (currentPage - 1) * pageNO, pageNO)
            result = super().fetchall(sql, params)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()

    def getJobNumCPs(self, position, city):
        try:
            super().getConnection()
            sql = "select count(*) from t_job_info where jobPosition like '%{0}%'and jobCity = '{1}'".format(position,
                                                                                                             city)
            result = super().fetchall(sql)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()

    def getLimitJobPCs(self, position, city, currentPage, pageNO):
        try:
            super().getConnection()
            sql = "select * from t_job_info where jobPosition like '%{0}%' and jobCity ='{1}' limit {2},{3}".format(
                position, city, (currentPage - 1) * pageNO, pageNO)
            result = super().fetchall(sql)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()

    def getLimitJobByMinSalary(self, currentPage, pageNO):
        try:
            super().getConnection()
            sql = "select * from t_job_info order by jobMinsalary desc limit %s,%s"
            params = (currentPage, pageNO)
            result = super().fetchall(sql, params)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()

    def getLimitJobByMaxSalary(self, currentPage, pageNO):
        try:
            super().getConnection()
            sql = "select * from t_job_info order by jobMaxsalary desc limit %s,%s"
            params = (currentPage, pageNO)
            result = super().fetchall(sql, params)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()

    def setUserPwdByName(self, user,pwdvalue):
        try:
            super().getConnection()
            sql = "update t_user set userpwd = '{0}' where username = '{1}'".format(pwdvalue,user.username)
            result = super().execute(sql)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()
    def setUserTelByName(self,user,telvalue):
        try:
            super().getConnection()
            sql = "update t_user set usertel = '{0}' where username = '{1}'".format(telvalue,user.username)
            result = super().execute(sql)
            super().commit()
            # print(result)
            return result
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常，params:" + " " + str(e))
        finally:
            super().close()