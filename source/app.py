from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# # Разрешаем запросы от любых доменов
# @app.after_request
# def add_cors_headers(response):
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     response.headers['Access-Control-Allow-Credentials'] = 'true'
#     response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
#     response.headers['Access-Control-Max-Age'] = '86400'
#     return response


@app.route('/hello', methods=["POST"])
def mainfunc():
    print('1')
    if request.method == 'POST':
        print('2')
        try:
            data = request.get_json()
            print(data)
            return (f'Тема1: {data}')
        except Exception as e:
            print(e)
            return 'ok'




if __name__ == '__main__':
    app.run(debug=True)