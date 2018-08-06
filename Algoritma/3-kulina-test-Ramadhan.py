# -*- coding: utf-8 -*-
"""
Created on Tue Aug  7 05:43:13 2018

@author: Lenovo
"""

#question no.3
number = input()

number_in_string = str(number)

length = len(number_in_string)

j = length

for i in range(length):
    temp = int(number_in_string[i])
    temp = temp * (10 ** (j-1))
    print(temp)
    j = j - 1