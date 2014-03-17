# coding=utf-8

prisperglass2 = 12
utgiftperglass2 = 4
sold2 = 0
lager2 = 500
lagerinthebeginning2 = lager2
vinst2 = 0
utgiften2 = 0




#__________________________________________________________________________________________________________
# CLASS


class Glasskiosk(object):

	prisperglass = prisperglass2
	utgiftperglass = utgiftperglass2
	sold = sold2
	lager = lager2
	lagerinthebeginning = lager2
	vinst = vinst2
	utgiften = utgiften2
	
	def __init__(self, antalglassar):
		self.sold = antalglassar
		self.profit(antalglassar)
		self.nuvarandelager(antalglassar)
		self.vinsten(antalglassar)
		self.utgift(antalglassar)
		self.info()

	def profit(self, sold):
		self.profit2 = sold * self.prisperglass
	def utgift(self, sold):
		self.utgiften = self.utgiftperglass*sold
	
	def nuvarandelager(self, sold):
		self.lager = self.lager - sold

	def vinsten(self, sold):
		self.vinst = self.prisperglass*sold - self.utgiftperglass*sold

	def info(self):
		if min_glasskiosk < 500:
			print "____________________________________________________________________________"
			print ""
			print "------------------Glasskioskens information efter en affär------------------"
			print "____________________________________________________________________________"
			print "Totala Intäkten = %s kronor" % self.profit2
			print "Totala Utgiften = %s kronor" % self.utgiften
			print "Vinsten = %s kronor" % self.vinst
			print "Antal sålda glassar = %s glassar" % self.sold
			print "Antal glassar kvar i lagret = %s glassar" % self.lager
			print "____________________________________________________________________________"
			print ""
			print ""
			print ""
			print ""
			print ""
			print ""
		else:
			if min_glasskiosk > 500:
				print "____________________________________________________________________________"
				print ""
				print "---------------------------------OBSERVERA!---------------------------------"
				print "____________________________________________________________________________"
				print "Du kan inte sälja mer än 500 glassar!!!!!"
		

while True:
	print "____________________________________________________________________________"
	print ""
	print "---------------------------Glasskioskens information------------------------"
	print "____________________________________________________________________________"
	print ""
	print "Intäkten per glass = %s kr per glass" % prisperglass2
	print "Utgift per glass = %s kr per glass" % utgiftperglass2
	print "Lager = %s glassar" % lagerinthebeginning2
	print "____________________________________________________________________________"
	print ""
	min_glasskiosk = str(raw_input('Antal sålda glassar = '))
	if min_glasskiosk == '':
		break
	min_glasskiosk = int(min_glasskiosk)
	min_glasskiosk = Glasskiosk(min_glasskiosk)
	

