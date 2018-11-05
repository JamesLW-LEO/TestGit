class User():
    def __init__(self):
        self.__username = None
        self.__userpwd = None
        self.__usertel = None

    @property
    def username(self):
        return self.__username

    @username.setter
    def username(self, username):
        self.__username = username

    @property
    def userpwd(self):
        return self.__userpwd

    @userpwd.setter
    def userpwd(self, userpwd):
        self.__userpwd = userpwd

    @property
    def usertel(self):
        return self.__usertel

    @usertel.setter
    def usertel(self, usertel):
        self.__usertel = usertel
