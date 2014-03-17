# coding=utf-8

prisperglass2 = 12
utgiftperglass2 = 4
sold2 = 0
lager2 = 500
lagerinthebeginning2 = lager2
vinst2 = 0
utgiften2 = 0

#__________________________________________________________________________________________________________
#print färger

#Hur använder man färg i print?
# Print Färg + "Texten" + Slut

#Färg = 'färgens kod'
LILA = '\033[95m'
ROD = '\033[91m' # RöD
GUL = '\033[93m'
GRON = '\033[94m' # Grön
BLA = '\033[92m' # Blå

#Måste avslutas vid varje färgtillägg
Slut = '\033[0m'


#Källa : http://stackoverflow.com/que85stions/8924173/python-print-bold-text
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
		if min_glasskiosk < 500 and min_glasskiosk > 0:
			print "____________________________________________________________________________"
			print ""
			print LILA + "------------------Glasskioskens information efter en affär------------------" + Slut
			print "____________________________________________________________________________"
			print BLA + "Totala Intäkter = %s kronor" % self.profit2
			print "Totala Utgifter = %s kronor" % self.utgiften
			print "Vinsten = %s kronor" % self.vinst
			print "Antal sålda glassar = %s glassar" % self.sold
			print "Antal glassar kvar i lagret = %s glassar" % self.lager + Slut
			print "____________________________________________________________________________"
		elif min_glasskiosk > 500:
			print "____________________________________________________________________________"
			print ROD + "____________________________________________________________________________"
			print ""
			print "---------------------------------OBSERVERA!---------------------------------"
			print "____________________________________________________________________________"
			print "[ERROR]Du kan inte sälja mer än 500 glassar!!!!!" + Slut
		elif min_glasskiosk < 0:
			print "____________________________________________________________________________"
			print ROD + "____________________________________________________________________________"
			print ""
			print "---------------------------------OBSERVERA!---------------------------------"
			print "____________________________________________________________________________"
			print "[ERROR]Du kan inte sälja mindre än 0 glassar!!!!!" + Slut


#__________________________________________________________________________________________________________
#Programmet berarbetar från här neråt.

while True: #Loopar
	print "____________________________________________________________________________"
	print ""
	print LILA + "---------------------------Glasskioskens information------------------------" + Slut
	print "____________________________________________________________________________"
	print ""
	print GUL + "Intäkten per glass = %s kr per glass" % prisperglass2
	print "Utgift per glass = %s kr per glass" % utgiftperglass2
	print "Lager = %s glassar" % lagerinthebeginning2 + Slut
	print "____________________________________________________________________________"
	print ""
	min_glasskiosk = str(raw_input(ROD+'Antal sålda glassar = '+ Slut))
	if min_glasskiosk == '':
		break	
	min_glasskiosk = int(min_glasskiosk)
	min_glasskiosk = Glasskiosk(min_glasskiosk)
