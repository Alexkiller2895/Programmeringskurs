Calculator2 = open('ninestimetable.txt', 'w')
for C in range(-10,10):
	cal = '%d\n' %(C*9)
	Calculator2.write(cal)
Calculator2.close()
print ('Write = Successful')


