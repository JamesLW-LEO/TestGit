from dao.jobdao import JobDAO


class JobService():
    '''def __init__(self):
        self.__jobDAO = JobDAO()  # 不是线程安全的__jobDAO 这对象没有加锁
    '''
    def getJobXqInfo(self):
        return JobDAO().getJobXq()

    def getJobCpInfo(self):
        return JobDAO().getJobCp()

    def getJobXsInfo(self):
        return JobDAO().getJobXs()

    def getJobKfInfo(self):
        return JobDAO().getJobKf()

    def getJobCsInfo(self):
        return JobDAO().getJobCs()

    def getJobYwInfo(self):
        return JobDAO().getJobYw()

    def getJobNumInfo(self):
        return JobDAO().getJobAllNum()

    def getJobCInfo(self):
        return JobDAO().getJobC()  # C语言

    def getJobJavaInfo(self):
        return JobDAO().getJobJava()  # Java

    def getJobAIInfo(self):
        return JobDAO().getJobAI()  # AI

    def getJobPyInfo(self):
        return JobDAO().getJobPy()  # Python

    def getJobWebInfo(self):
        return JobDAO().getJobWeb()  # Web

    def getCountInfo(self):
        return JobDAO().getJobCount()  # 五种语言的职位数
