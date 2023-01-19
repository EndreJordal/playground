def dig_pow(n, p):
    i = 0
    count = 0
    strange = 0
    for x in str(n):
        count += int(x)**(p+i)
        i += 1
    for x in range(1,200):
        if count % x == 0:
            strange = x
    return strange

print(dig_pow(695, 2))