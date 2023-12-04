from flask import Flask, jsonify, request
from test import get_direction

app = Flask(__name__)

@app.route('/', methods= ['GET'])
def hello():
    response = {
        'status': 'ok',
        'data': 'hello world'
    }
    return jsonify(response)

@app.route('/api', methods= ['GET'])
def get_bus():
    # obtenir les valeurs d'url
    depart = request.args.get('depart', '')
    fin = request.args.get('fin', '')
    print(depart, fin)
    # obtenir la sequence d'une liste cible
    response = get_direction(depart, fin)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=3000)