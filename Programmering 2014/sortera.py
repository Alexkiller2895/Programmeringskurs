def sortera(l):
	for i in range(0,len(l)):
		for j in range(1,len(l)-1):
			if (l[i] > l[i+j]):
				l[i] = l[i]
			else:
				if(l[i] < l[i+j]):
					l[i] = l[j]

	print l


sortera([1,3,2,6,5])
#        0,1,2,3,4




