//封装获取id的函数
function getId(id) {
    return document.getElementById(id)
}

//需求分析
var jobXq = echarts.init(getId('job_xq'))

function setJobXq() {
    $.ajax({
        type: 'post',
        url: '/getxqinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "xqData"
        }),
        error: function (xhr, err) {
            console.log('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)
            var optionXq = {
                title: {
                    text: '需求类职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#ddd', fontWeight: 'normal'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '22', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            jobXq.setOption(optionXq);
        }
    })
}

setJobXq()

//产品分析
var jobCp = echarts.init(getId('job_cp'))

function setJobCp() {
    $.ajax({
        type: 'post',
        url: '/getcpinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "cpData"
        }),
        error: function (xhr, err) {
            console.log('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)
            var optionCp = {
                title: {
                    text: '产品类职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#ddd', fontWeight: 'normal'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '22', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            jobCp.setOption(optionCp);
        }
    })
}

setJobCp()

//销售分析
var jobXs = echarts.init(getId('job_xs'))

function setJobXs() {
    $.ajax({
        type: 'post',
        url: '/getxsinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "xsData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)

            var optionXs = {
                title: {
                    text: '销售类职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#ddd', fontWeight: 'normal'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '22', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            jobXs.setOption(optionXs);
        }
    })
}

setJobXs()

//开发分析
var jobKf = echarts.init(getId('job_kf'))

function setJobKf() {
    $.ajax({
        type: 'post',
        url: '/getkfinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "kfData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)

            var optionKf = {
                title: {
                    text: '开发类职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#ddd', fontWeight: 'normal'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '22', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            jobKf.setOption(optionKf);
        }
    })
}

setJobKf()

//测试分析
var jobCs = echarts.init(getId('job_cs'))

function setJobCs() {
    $.ajax({
        type: 'post',
        url: '/getcsinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "csData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)
            var optionCs = {
                title: {
                    text: '测试类职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#ddd', fontWeight: 'normal'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '22', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            jobCs.setOption(optionCs);
        }
    })
}

setJobCs()

//运维分析
var jobYw = echarts.init(getId('job_yw'))

function setJobYw() {
    $.ajax({
        type: 'post',
        url: '/getywinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "ywData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)
            var optionYw = {
                title: {
                    text: '运维类职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#ddd', fontWeight: 'normal'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '22', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            //setResize(jobYw);
            jobYw.setOption(optionYw);
        }
    })
}

setJobYw()

//饼图分析各个城市工作比例
var jobCon = echarts.init(getId('job_content'))

function setJobCon() {
    $.ajax({
        type: 'post',
        url: '/getconinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "conData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)
            console.log(data.jobcount)
            var optionCon = {
                title: {
                    text: '5大城市IT职位占有率',
                    x: 'center',
                    y: '20',
                    textStyle: {color: '#ddd'}
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x: '20',
                    y: '20',
                    data: [
                        {name: data.city[0], textStyle: {color: "#c23531"}},
                        {name: data.city[1], textStyle: {color: "#2f4554"}},
                        {name: data.city[2], textStyle: {color: "#61a0a8"}},
                        {name: data.city[3], textStyle: {color: "#d48265"}},
                        {name: data.city[4], textStyle: {color: "#91c7ae"}}
                    ],
                    orient: 'vertical'
                },
                calculable: true,
                series: [
                    {
                        name: '所占百分比',
                        type: 'pie',
                        radius: [30, 110],
                        roseType: 'area',
                        x: '50%',               // for funnel
                        max: 40,                // for funnel
                        sort: 'ascending',     // for funnel
                        data: [
                            {value: data.jobcount[0], name: data['city'][0]},
                            {value: data.jobcount[1], name: data['city'][1]},
                            {value: data.jobcount[2], name: data['city'][2]},
                            {value: data.jobcount[3], name: data['city'][3]},
                            {value: data.jobcount[4], name: data['city'][4]},
                        ]
                    }
                ]
            };
            //setResize(jobCon)
            jobCon.setOption(optionCon)
        }
    })
}

setJobCon()

//柱形图分析各个城市工作类型
var jobZb = echarts.init(getId('job_zb'))

function setJobZb() {
    $.ajax({
        type: 'post',
        url: '/getbarinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "conData"
        }),
        error: function (xhr, err) {
            // alert(xhr.readyState)
            // alert(xhr.statusText)
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            optionZb = {
                title: {
                    text: '各大城市各种类型职位的数量',
                    x: 'center',
                    textStyle: {color: '#ddd'}
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: data.jobtype,
                    y: '22',
                    // orient:'vertical'
                    textStyle: {color: '#ccc'}
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',
                    feature: {
                        magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore: {show: true},
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: data.city,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '需求',
                        type: 'bar',
                        data: data.jobxq
                    },
                    {
                        name: '产品',
                        type: 'bar',
                        data: data.jobcp
                    },
                    {
                        name: '销售',
                        type: 'bar',
                        data: data.jobxs
                    },
                    {
                        name: '开发',
                        type: 'bar',
                        data: data.jobkf,
                        markLine: {
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed', color: "#ff6"
                                    },
                                }
                            },
                            data: [
                                [{type: 'min'}, {type: 'max'}]
                            ]
                        }
                    },
                    {
                        name: '测试',
                        type: 'bar',
                        data: data.jobcs,
                    },
                    {
                        name: '运维',
                        type: 'bar',
                        data: data.jobyw
                    },
                ]
            };
            // setResize(jobZb);
            jobZb.setOption(optionZb);
        }
    })
}

setJobZb()

//3-top-1-C-----------------------------------------------------------------------------------------------------------
var devC = echarts.init(getId('dev_c'))

function setDevC() {
    $.ajax({
        type: 'post',
        url: '/getcinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "cData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)
            var optionC = {
                title: {
                    text: 'C语言职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#fff', fontWeight: 'normal', fontSize: '12px'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '20', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            devC.setOption(optionC, true);
        }
    })
}

setDevC()
//3-top-2-Java---------------------------------------------------------------------------------------------------------
var devJ = echarts.init(getId('dev_java'))

function setDevJ() {
    $.ajax({
        type: 'post',
        url: '/getjavainfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "cData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)

            var optionJ = {
                title: {
                    text: 'Java职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#fff', fontWeight: 'normal', fontSize: '12px'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '20', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            devJ.setOption(optionJ, true);
        }
    })
}

setDevJ()


//3-top-3-Python---------------------------------------------------------------------------------------------------------
var devPy = echarts.init(getId('dev_py'))

function setDevPy() {
    $.ajax({
        type: 'post',
        url: '/getpyinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "PythonData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)
            var optionPy = {
                title: {
                    text: 'Python职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#fff', fontWeight: 'normal', fontSize: '12px'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '20', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            devPy.setOption(optionPy, true);
        }
    })
}

setDevPy()

//3-top-4-AI---------------------------------------------------------------------------------------------------------
var devAI = echarts.init(getId('dev_ai'))

function setDevAI() {
    $.ajax({
        type: 'post',
        url: '/getaiinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "AIData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)
            var optionAI = {
                title: {
                    text: 'AI职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#fff', fontWeight: 'normal', fontSize: '12px'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '20', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            devAI.setOption(optionAI, true);
        }
    })
}

setDevAI()


//3-top-5-Web---------------------------------------------------------------------------------------------------------
var devWeb = echarts.init(getId('dev_web'))

function setDevWeb() {
    $.ajax({
        type: 'post',
        url: '/getwebinfo',
        dataType: 'json',
        data: JSON.stringify({
            'dataType': "webData"
        }),
        error: function (xhr, err) {
            // alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data)
            var optionWeb = {
                title: {
                    text: 'Web前端职位薪资信息(万/月)',
                    link: '',
                    x: 'center',
                    textStyle: {color: '#fff', fontWeight: 'normal', fontSize: '12px'}
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#19c4db', '#b43f3c', '#ff3'],
                legend: {
                    data: [
                        {name: '最低薪', textStyle: {color: '#19c4db'}},
                        {name: '最高薪', textStyle: {color: '#b43f3c'}},
                        {name: '平均值', textStyle: {color: '#ff3'}}
                    ],
                    x: 'right', // 'center' | 'left' | {number},
                    y: '20', // 'center' | 'bottom' | {number}

                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 8,
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '最低薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#19c4db"},
                            }
                        },
                        data: data['minsalary']
                    },
                    {
                        name: '最高薪',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#b43f3c"},
                            }
                        },
                        data: data['maxsalary']
                    },
                    {
                        name: '平均值',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {color: "#ff3"},
                                // areaStyle: {type: 'default'}
                            }
                        },
                        data: data['avgsalary']
                    }
                ]
            }
            devWeb.setOption(optionWeb, true);
        }
    })
}

setDevWeb()


//3-bottom-2-堆叠柱状图--------------------------------------------------------------------------------------------------
var devBar = echarts.init(getId('dev_bar'))

function setDevBar() {
    $.ajax({
        type: 'post',
        url: '/getcountinfo',
        dataType: 'json',
        data: JSON.stringify({
            dataType: 'barData'
        }),
        error: function (xhr, err) {
            console.log('请求失败，请检查，' + err + '!')
        },
        success: function (data) {
            console.log(data['cCount'])
            var optionBar = {
                title: {
                    text: '开发岗职位信息对比',
                    x: 'center',
                    y: '10',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['C', 'Java', 'Python', 'AI', 'Web'],
                    orient: 'vertical',
                    x: 'right',
                    y: '22',
                    textStyle: {
                        color: '#ccc'
                    }
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',
                    feature: {
                        magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore: {show: true},
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: data['city'],
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            textStyle: {
                                color: '#ccc',
                                fontFamily: 'sans-serif',
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: 'C',
                        type: 'bar',
                        data: data['cCount']
                    },
                    {
                        name: 'Java',
                        type: 'bar',
                        data: data['javaCount'],
                        markLine: {
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: 'dashed',
                                        color: '#ff5'
                                    }
                                }
                            },
                            data: [
                                [{type: 'min'}, {type: 'max'}]
                            ]
                        }
                    },
                    {
                        name: 'Python',
                        type: 'bar',
                        data: data['pyCount']
                    },
                    {
                        name: 'AI',
                        type: 'bar',
                        data: data['aiCount']
                    },
                    {
                        name: 'Web',
                        type: 'bar',
                        data: data['webCount']
                    }
                ]
            };
            devBar.setOption(optionBar);
        }
    })
}

setDevBar()

var devld = echarts.init(getId('dev_ld'))

function setDevld() {
    optionld = {
        title: {
            text: '开发岗主要职位要求',
            x: 'center',
            y: '10',
            textStyle: {
                color: '#fff'
            },
        },
        tooltip: {
            <!--trigger: 'axis'-->
        },
        legend: {
            x: 'center',
            y: '40',
            data: ['Java', 'Python', 'C', 'AI', 'Web'],
            textStyle: {
                color: '#ddd'
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                restore: {show: true},
            }
        },
        calculable: true,
        radar: [
            {
                indicator: [
                    {text: '数据库', max: 200},
                    {text: '算法', max: 150},
                    {text: '测试', max: 220},
                    {text: '数据结构', max: 50},
                    {text: '产品', max: 300},
                    {text: '前端', max: 200}
                ],
                radius: 130
            }
        ],
        series: [
            {
                name: '开发岗主要职位要求',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [
                    {
                        value: [200, 20, 52, 23, 112, 41],
                        name: 'Java'
                    },
                    {
                        value: [158, 115, 208, 27, 155, 24],
                        name: 'Python'
                    },
                    {
                        value: [101, 67, 62, 41, 116, 11],
                        name: 'C'
                    },
                    {
                        value: [15, 132, 21, 8, 295, 16],
                        name: 'AI'
                    },
                    {
                        value: [15, 9, 18, 8, 211, 200],
                        name: 'Web'
                    }
                ]
            }
        ]
    };
    devld.setOption(optionld);
}

setDevld()


var wordCloud2_1 = echarts.init(document.getElementById("dev_wordc"))
wordCloud2_1.showLoading({
    text: 'loading',
    effect: 'whirling',
    textColor: '#fff',
    // effectOption: {backgroundColor: 'rgba(0, 0, 0, 0.5)'}
    maskColor: 'rgba(0, 0, 0, 0.5)'
});

function setDevwordc() {
    $(document).ready(function () {
        $.ajax({
            type: 'post',
            url: '/jieba_test',
            dataType: 'json',
            data: JSON.stringify({
                dataType: 'barData'
            }),
            error: function (xhr, err) {
                // alert('请求失败，请检查，' + err + '!')
            },
            success: function (data) {

                var option = {
                    title: {
                        text: "开发技术词云展示",
                        subtext: "数据来源:51job",
                        x: 'center',
                        y: '10',
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    tooltip: {},
                    series: [{
                        type: 'wordCloud',
                        gridSize: 2,
                        sizeRange: [12, 50],
                        rotationRange: [-90, 90],
                        shape: 'pentagon',
                        <!--width: 800,-->
                        <!--height: 380,-->
                        drawOutOfBound: true,  //当图较大时是否允许超出所在页面
                        textStyle: {
                            normal: {
                                color: function () {
                                    return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        data: data['data']
                    }]
                };
                wordCloud2_1.setOption(option);
                wordCloud2_1.hideLoading()
            }
        })
    })

}

setDevwordc()
//自适应
window.addEventListener('resize', function () {
    jobXq.resize();
    jobCp.resize();
    jobXs.resize();
    jobKf.resize();
    jobCs.resize();
    jobYw.resize();
    jobCon.resize();
    jobZb.resize();
    devC.resize();
    devJ.resize();
    devAI.resize();
    devPy.resize();
    devWeb.resize();
    devBar.resize();
    devld.resize();
    wordCloud2_1.resize();
    devld.resize();
});