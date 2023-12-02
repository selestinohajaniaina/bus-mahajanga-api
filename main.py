from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/', methods= ['GET'])
def hello():
    response = {
        'status': 'ok',
        'data': 'hello world'
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=3000)