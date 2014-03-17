# coding=utf-8
while True:#Loopningen börjar
	newC = str(raw_input('Change multiple to '))
	if newC == '':
		break#loopningen stängs av om man inte skriver in en siffra
	newC = int(newC)
	Calculator2 = open('Multipletabell.txt', 'w')
	for C in range(-10000,10001):
		cal = '%d * %d = %3d\n' %(newC,C,C*newC)
		Calculator2.write(cal)
	Calculator2.close()
	print ('Write = Successful')

	choice = raw_input('%d * ' %(newC))
	if choice == '':
		break#loopningen stängs av om man inte skriver in en siffra
	choice = int(choice)

	readfile = open('ninestimetable.txt', 'r')
	lines = readfile.readlines()
	print lines[choice+10000]
	readfile.close()



