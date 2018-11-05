from logger.syslogger import logger
from dao.basedao import BaseDAO


class JobDAO(BaseDAO):
    def getJobXq(self):
        try:
            super().getConnection()
            sql = "select maxsalary,minsalary,avgsalary,jobcount from t_xq"
            result = super().fetchall(sql)
            super().commit()
            # print(result)
            return result
            pass
        except Exception as e:
            logger.error("执行sql", sql, "出现异常", str(e))
        finally:
            super().close()

    pass

    def getJobCp(self):
        try:
            super().getConnection()
            sql = "select maxsalary,minsalary,avgsalary,jobcount from t_cp;"
            result = super().fetchall(sql)
            super().commit()
            return result
            pass
        except Exception as e:
            logger.error()
        finally:
            super().close()

    # 销售
    def getJobXs(self):
        try:
            super().getConnection()
            sql = "select maxsalary,minsalary,avgsalary,jobcount from t_xs"
            result = super().fetchall(sql)
            super().commit()
            return result
            pass
        except Exception as e:
            logger.error()
        finally:
            super().close()

    pass

    # 开发
    def getJobKf(self):
        try:
            super().getConnection()
            sql = "select maxsalary,minsalary,avgsalary,jobcount from t_kf"
            result = super().fetchall(sql)
            super().commit()
            return result
            pass
        except Exception as e:
            logger.error()
        finally:
            super().close()

    pass

    # 测试
    def getJobCs(self):
        try:
            super().getConnection()
            sql = "select maxsalary,minsalary,avgsalary,jobcount from t_cs"
            result = super().fetchall(sql)
            super().commit()
            return result
            pass
        except Exception as e:
            logger.error()
        finally:
            super().close()

    pass

    # 运维
    def getJobYw(self):
        try:
            super().getConnection()
            sql = "select maxsalary,minsalary,avgsalary,jobcount from t_yw"
            result = super().fetchall(sql)
            super().commit()
            return result
            pass
        except Exception as e:
            logger.error()
        finally:
            super().close()

    pass

    def getJobAllNum(self):
        try:
            super().getConnection()
            sql = "select * from t_job_count"
            result = super().fetchall(sql)
            super().commit()
            # print(result)
            return result
            pass
        except Exception as e:
            logger.error("执行sql", sql, "出现异常", str(e))
        finally:
            super().close()

    # C语言
    def getJobC(self):
        try:
            super(JobDAO, self).getConnection()
            sql = "select max,min,avg from t_c_job"
            result = super(JobDAO, self).fetchall(sql)
            super(JobDAO, self).commit()
            return result
            pass
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常:" + str(e))
        finally:
            super(JobDAO, self).close()

    pass

    # Java
    def getJobJava(self):
        try:
            super(JobDAO, self).getConnection()
            sql = "select max,min,avg from t_java_job"
            result = super(JobDAO, self).fetchall(sql)
            super(JobDAO, self).commit()
            return result
            pass
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常:" + str(e))
        finally:
            super(JobDAO, self).close()

    pass

    # AI
    def getJobAI(self):
        try:
            super(JobDAO, self).getConnection()
            sql = "select max,min,avg from t_ai_job"
            result = super(JobDAO, self).fetchall(sql)
            super(JobDAO, self).commit()
            return result
            pass
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常:" + str(e))
        finally:
            super(JobDAO, self).close()

    pass

    # Python
    def getJobPy(self):
        try:
            super(JobDAO, self).getConnection()
            sql = "select max,min,avg from t_py_job"
            result = super(JobDAO, self).fetchall(sql)
            super(JobDAO, self).commit()
            return result
            pass
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常:" + str(e))
        finally:
            super(JobDAO, self).close()

    pass

    # Web
    def getJobWeb(self):
        try:
            super(JobDAO, self).getConnection()
            sql = "select max,min,avg from t_qd_job"
            result = super(JobDAO, self).fetchall(sql)
            super(JobDAO, self).commit()
            return result
            pass
        except Exception as e:
            logger.error("执行SQL：" + sql + " 出现异常:" + str(e))
        finally:
            super(JobDAO, self).close()

    pass

    # 五种语言的职位数
    def getJobCount(self):
        try:
            super(JobDAO, self).getConnection()
            sql_c = "select count from t_c_job"
            result_c = super(JobDAO, self).fetchall(sql_c)

            sql_java = "select count from t_java_job"
            result_java = super(JobDAO, self).fetchall(sql_java)

            sql_py = "select count from t_py_job"
            result_py = super(JobDAO, self).fetchall(sql_py)

            sql_ai = "select count from t_ai_job"
            result_ai = super(JobDAO, self).fetchall(sql_ai)

            sql_web = "select count from t_qd_job"
            result_web = super(JobDAO, self).fetchall(sql_web)

            super(JobDAO, self).commit()
            return result_c, result_java, result_py, result_ai, result_web
            pass
        except Exception as e:
            logger.error("执行SQL：" + sql_c + "出现异常：" + str(e))
            pass
        finally:
            pass
