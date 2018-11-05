from flask import Blueprint, render_template, redirect, url_for, request, session, g, jsonify
import hashlib
from service.jobservice import JobService

jobcontroller = Blueprint('jobcontroller', __name__)
jobService = JobService()

city = ['北京', '上海', '广州', '深圳', '武汉']


@jobcontroller.route('/getxqinfo', methods=['GET', 'POST'])
def getxqinfo():
    result = jobService.getJobXqInfo()
    # print(result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print(minsalary,maxsalary,avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    return jsonify(dictData)


@jobcontroller.route('/getcpinfo', methods=['GET', 'POST'])
def getcpinfo():
    result = jobService.getJobCpInfo()
    # print(result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print(minsalary,maxsalary,avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    return jsonify(dictData)


@jobcontroller.route('/getxsinfo', methods=['GET', 'POST'])
def getxsinfo():
    result = jobService.getJobXsInfo()
    # print(result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print(minsalary,maxsalary,avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    return jsonify(dictData)


@jobcontroller.route('/getkfinfo', methods=['GET', 'POST'])
def getkfinfo():
    result = jobService.getJobKfInfo()
    # print(result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print(minsalary,maxsalary,avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    return jsonify(dictData)


@jobcontroller.route('/getcsinfo', methods=['GET', 'POST'])
def getcsinfo():
    result = jobService.getJobCsInfo()
    # print(result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print(minsalary,maxsalary,avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    return jsonify(dictData)


@jobcontroller.route('/getywinfo', methods=['GET', 'POST'])
def getywinfo():
    result = jobService.getJobYwInfo()
    # print(result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print(minsalary,maxsalary,avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    return jsonify(dictData)


@jobcontroller.route('/getconinfo', methods=['GET', 'POST'])
def getconinfo():
    result = jobService.getJobNumInfo()
    # print(result)
    jobcount = []
    for i in range(len(result)):
        jobcount.append(result[i][2])
    dictData = {
        'jobcount': jobcount,
        "city": city
    }
    return jsonify(dictData)
    pass


@jobcontroller.route('/getbarinfo', methods=['GET', 'POST'])
def getbarinfo():
    rs1 = jobService.getJobXqInfo()
    rs2 = jobService.getJobCpInfo()
    rs3 = jobService.getJobXsInfo()
    rs4 = jobService.getJobKfInfo()
    rs5 = jobService.getJobCsInfo()
    rs6 = jobService.getJobYwInfo()
    # print(rs1, '\n', rs2, '\n', rs3, '\n', rs4, '\n', rs5, '\n', rs6)
    jobxq = []
    for i in range(len(rs1)):
        jobxq.append(rs1[i][3])
    jobcp =[]
    for i in range(len(rs1)):
        jobcp.append(rs2[i][3])
    jobxs= []
    for i in range(len(rs1)):
        jobxs.append(rs3[i][3])
    jobkf = []
    for i in range(len(rs1)):
        jobkf.append(rs4[i][3])
    jobcs = []
    for i in range(len(rs1)):
        jobcs.append(rs5[i][3])
    jobyw = []
    for i in range(len(rs1)):
        jobyw.append(rs6[i][3])
    dictData = {
        'jobtype': ['需求', '产品', '销售', '开发', '测试', '运维'],
        'jobxq': jobxq,
        'jobxs': jobxs,
        'jobcp': jobcp,
        'jobkf': jobkf,
        'jobcs': jobcs,
        'jobyw': jobyw,
        "city": city
    }
    return jsonify(dictData)
    pass


# C语言
@jobcontroller.route('/getcinfo', methods=['GET', 'POST'])
def getcinfo():
    result = jobService.getJobCInfo()
    # print('c---result:--------', result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print('c---salary:--------', minsalary, maxsalary, avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    return jsonify(dictData)


# Java
@jobcontroller.route('/getjavainfo', methods=['GET', 'POST'])
def getjavainfo():
    result = jobService.getJobJavaInfo()
    # print('java---result:--------', result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print('java---salary:--------', minsalary, maxsalary, avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    # print dictData
    return jsonify(dictData)


# AI
@jobcontroller.route('/getaiinfo', methods=['GET', 'POST'])
def getaiinfo():
    result = jobService.getJobAIInfo()
    # print('ai---result:--------', result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print('ai---salary:--------', minsalary, maxsalary, avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    # print dictData
    return jsonify(dictData)


# Python
@jobcontroller.route('/getpyinfo', methods=['GET', 'POST'])
def getpyinfo():
    result = jobService.getJobPyInfo()
    # print('python---result:--------', result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print('python---salary:--------', minsalary, maxsalary, avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    # print dictData
    return jsonify(dictData)


# 前端
@jobcontroller.route('/getwebinfo', methods=['GET', 'POST'])
def getwebinfo():
    result = jobService.getJobWebInfo()
    # print('web---result:--------', result)
    minsalary = []
    maxsalary = []
    avgsalary = []
    for i in range(len(result)):
        maxsalary.append(result[i][0])
    for i in range(len(result)):
        minsalary.append(result[i][1])
    for i in range(len(result)):
        avgsalary.append(result[i][2])
    # print('web---salary:--------', minsalary, maxsalary, avgsalary)
    dictData = {
        "minsalary": minsalary,
        "maxsalary": maxsalary,
        "avgsalary": avgsalary,
        "city": city
    }
    # print dictData
    return jsonify(dictData)


# 堆叠柱状图(五种语言的职位数)
@jobcontroller.route('/getcountinfo', methods=['GET', 'POST'])
def getcountinfo():
    result = jobService.getCountInfo()
    # print('result:', result)
    cCount = []
    javaCount = []
    pyCount = []
    aiCount = []
    webCount = []

    for i in range(len(result)):
        cCount.append(result[0][i][0])
    # print('c---count--------', cCount)
    for i in range(len(result)):
        javaCount.append(result[1][i][0])
    # print('java---count--------', javaCount)
    for i in range(len(result)):
        pyCount.append(result[2][i][0])
    # print('python---count--------', pyCount)
    for i in range(len(result)):
        aiCount.append(result[3][i][0])
    # print('ai---count--------', aiCount)
    for i in range(len(result)):
        webCount.append(result[4][i][0])
    # print('web---count--------', webCount)

    dictData = {
        "cCount": cCount,
        "javaCount": javaCount,
        "pyCount": pyCount,
        "aiCount": aiCount,
        "webCount": webCount,
        "city": city
    }
    # print 'dictData:', dictData
    return jsonify(dictData)
    pass
# 词云图
import os, codecs
import jieba
from collections import Counter
@jobcontroller.route('/jieba_test', methods=['POST'])
def jieba_test():
    with codecs.open('static/text/jobRequests.txt', 'r', 'utf8') as f:
        txt = f.read()
    seg_list = jieba.cut(txt)
    c = Counter()
    remove_words = [u'的', u'，', u'和', u'是', u'随着', u'对于', u'对', u'等', u'能', u'都', u'。', u' ', u'、', u'中', u'在', u'了',
                    u'通常', u'如果', u'我们', u'需要', u'工作', u'相关', u'负责', u'发布', u'北京', u'11', u'以上',
                    u'良好', u'团队', u'使用', u'进行', u'了解', u'具备', u'以上学历', u'应用', u'问题', u'语言', u'一种',
                    u'能够', u'参与', u'公司', u'至少', u'实现', u'掌握', u'熟练掌握', u'性能', u'完成', u'常用', u'描述',
                    u'包括', u'理解', u'流程', u'用户', u'一定', u'以及', u'环境', u'独立', u'基础', u'处理', u'01', u'10',
                    u'熟悉', u'熟悉', u'有先', u'根据', u'优化', u'熟练', u'具有', u'职位', u'精通', u'研发', u'任职', u'编写',
                    u'岗位职责', u'研究', u'解决', u'合作', u'深度', u'and', u'根据', u'提供', u'若干', u'扎实', u'领域', u'精神',
                    u'较强', u'朝阳区', u'主流', u'岗位', u'跟踪', u'深入', u'意识', u'考虑', u'开源', u'优先', u'海淀区', u'提升',
                    u'实际', u'资格', u'支持', u'或者', u'各种', u'制定', u'善于', u'改进']  # 自定义去除词库'
    consider_words = [u'HTML5', u'Matlab', u'数据结构', u'redis', u'WEB', u'Javascript', u'实践经验', u'Hive',
                      u'Golang', u'oracle', u'HTML', u'Spring', u'图像处理', u'hadoop', u'RNN', u'JAVA', u'PHP', u'TCP',
                      u'JS',
                      u'Mysql', u'Unix', u'数据仓库', u'Caffe', u'Python', u'C++', u'数据处理',
                      u'Shell', u'MongoDB', u'Hadoop', u'C#', u'多线程', u'web', u'HTTP', u'J2EE', u'Hbase',
                      u'数据库', u'数据挖掘', u'Kafka', u'Redis', u'CNN', u'c++', u'Docker',
                      u'需求', u'torm', u'Theano', u'Ajax', u'spark', u'MySQL', u'JavaScript', u'功能测试',
                      u'分布式系统', u'Perl', u'神经网络', u'linux', u'AI', u'测试', u'人工智能', u'S', u'Linux',
                      u'shell', u'操作系统', u'Spark', u'自然语言', u'Web', u'Oracle', u'CSS', u'单元测试']

    for x in seg_list:
        if x in consider_words and x not in remove_words:
            if len(x) > 1 and x != '\r\n':
                c[x] += 1
    print('常用词频度统计结果:')
    key = []
    value = []
    for (k, v) in c.most_common(100):  # k为关键词，v为关键词对应的频数
        print('%s%s %s  %d' % ('  ' * (5 - len(k)), k, '*' * int(v / 3), v))
        key.append(k)
        value.append(v)
    print('key:', key)
    print('value:', value)


    list = []
    for i in range(1, len(key) + 1):
        dict = {}
        dict["name"] = key[i - 1]
        dict["value"] = value[i - 1]
        # print(dict)
        list.append(dict)
    print(list)

    dictData = {
        'status': 'success',
        # 'key': key,
        # 'value': value
        'data': list
    }
    return jsonify(dictData)