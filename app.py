import numpy as np
import pickle
from flask import Flask, request, render_template, redirect

app = Flask(__name__)
model = pickle.load(open('model/model.sav', 'rb'))

@app.route('/', methods=['GET', 'POST'])
def home():
	if request.method == "GET":
		return render_template('index.html')
	else:
		predict()
	
@app.route('/predict', methods=['POST'])
def predict():
	flag = False
	if request.method == "POST":
		try:
			bedroom = int(request.form.get('bedroom'))
			bathroom = int(request.form.get('bathroom'))
			surface = float(request.form.get('surface'))
			longitude = float(request.form.get('longitude'))
			latitude = float(request.form.get('latitude'))
			ptype = int(request.form.get('ptype'))
		except ValueError:
			return render_template("index.html", flag=True, prediction_text="Please Enter Valid Inputs!")			

		raw_features = [bathroom, bedroom, surface, longitude, latitude, ptype]
		features = [np.array(raw_features)]
		prediction = model.predict(features)
		output = round(prediction[0], 2)
		return render_template('index.html',flag=True, prediction_text=f'Price should be €{output}')


		
