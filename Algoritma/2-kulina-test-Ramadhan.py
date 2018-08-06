# -*- coding: utf-8 -*-
"""
Created on Tue Aug  7 05:43:11 2018

@author: Lenovo
"""
#question no.2
n1 = 0
n2 = 1
n_input = int(input())

count = 0

while count < n_input:
    print(n1, end = ' ')
    n3 = n1 + n2
    n1 = n2
    n2 = n3
    
    count += 1