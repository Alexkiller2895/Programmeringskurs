readfile = open('ninestimetable.txt', 'r')
while 1:
	s = readfile.readline()
	if s =='':
		break
	m = int(s)
	print m*5
readfile.close()
