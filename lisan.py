# -*- coding:utf-8 -*-

# readme
# Python语发实现输入逻辑表达式输出主析取范式，主合取范式
# 包括了第一题的合取范式

# 初始化
sInput = ''  # 输入的命题公式字符串
sParse = ''  # 解析后的sInput
variable = []  # 保存公式中的变量
ornl = []  # 主析取范式^最小项
andnl = []  # 主合取范式\/最大项
fore = ''  # 符号前面的部分
back = ''  # 符号后面的部分


def myinput():
    global sInput
    print("请输入一个任意命题公式(原子命题用字母表示,'-'表示非 '&'表示合取 '|'表示析取 '>'表示蕴含 ':'表示等价 '@'表示异或,可用括号'()'):")
    sInput = input()


def getVariale():  # 寻找原子命题
    global sInput, variable  # 全局一下
    for c in sInput:
        if c >= 'A' and c <= 'Z' or c >= 'a' and c <= 'z':
            if c not in variable:
                variable.append(c)
        elif c != '-' and c != '&' and c != '|' and c != '(' and c != ')' and c != '>' and c != ':' and c != '@':
            print('输入有误！')
    variable = sorted(variable)


def getStd(c):  # 非基本连接词转换为基本连接词
    global sInput, sParse, fore, back  # 再全局一下
    slen = len(sParse)
    for i in range(0, slen):  # 遍历sParse中所有字符
        if sParse[i] is c:
            if sParse[i - 1] is not ')':  # 存在括号，将括号内整个式子作为命题
                fore = sParse[i - 1]
            else:
                flag = 1
                j = i - 2
                while flag is not 0:
                    if sParse[j] is '-':
                        j -= 1
                    if sParse[j] is '(':
                        flag -= 1
                    if sParse[j] is ')':
                        flag += 1
                    j -= 1
                fore = sParse[j + 1:i]
            if sParse[i + 1] is not '(':  # 存在括号，将括号内整个式子作为命题
                back = sParse[i + 1]
            else:
                flag = 1
                j = i + 2
                while flag is not 0:
                    if sParse[j] is '-':
                        j += 1
                    if sParse[j] is ')':
                        flag -= 1
                    if sParse[j] is '(':
                        flag += 1
                    j += 1
                back = sParse[i + 1:j]
            if c is '>':  # 转换蕴含连接词
                sParse = sParse.replace(fore + '>' + back, '(' + '-' + fore + '|' + back + ')')
            elif c is ':':  # 转换等价连接词
                sParse = sParse.replace(fore + ':' + back, '(' + fore + '&' + back + ')|(-' + fore + '&-' + back + ')')
            elif c is '@':  # 转换异或连接词
                sParse = sParse.replace(fore + '@' + back,
                                        '-(' + '(' + fore + '&' + back + ')|(-' + fore + '&-' + back + ')' + ')')


def parseInput():  # 解析连接词
    global sInput, sParse
    sParse = sInput
    getStd('>')
    getStd(':')
    getStd('@')


def cal():  # 获取真值表
    global sInput, sParse, variable, ornl, andnl, orResult, andResult
    vlen = len(variable)  # 变量个数
    n = 2 ** vlen  # 所有情况个数
    print('真值表如下：')
    print(variable, sInput + '即', sParse)
    for nl in range(0, n):
        value = []  # 数值
        j = nl  # 真值表当前行
        for i in range(0, vlen):
            value.append(0)
        i = 0
        while j != 0:
            value[i] = j % 2
            j = j // 2
            i += 1
        value.reverse()
        value = list(map(str, value))
        s = sParse
        for x in range(0, vlen):
            s = s.replace(variable[x], value[x])
        result = eval(s) & 1
        if result is 1:
            ornl.append(nl)
        else:
            andnl.append(nl)
        print(value, result)


def outprint():
    print('主析取范式：')
    print('∑', ornl, sep='')
    print('主合取范式：')
    print('∏', andnl, sep='')


def main():
    myinput()
    getVariale()
    parseInput()
    cal()
    outprint()


if __name__ == '__main__':
    main()
