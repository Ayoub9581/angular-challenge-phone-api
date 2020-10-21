import requests
import json


class Solution:
	ENDPOIN = "https://raw.githubusercontent.com/openfootball/football.json/master/2014-15/en.1.json"
	def run(self, teamKey):
		r = requests.get(self.ENDPOIN)
		return r.json()