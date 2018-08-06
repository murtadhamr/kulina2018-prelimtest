# -*- coding: utf-8 -*-
"""
Created on Mon Aug  6 14:16:26 2018

@author: Lenovo
"""
#question no.1
number = int(input())

if number > 1:
    for i in range(2, number):
        if(number % i) == 0:
            print(number, ' is not a prime number')
            break
        else:
            print(number, ' is a prime number')
            break
else:
    print(number, ' is not a prime number')




    
    

