
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
from models import split_into_sentences, get_sorted_messages

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)

@socketio.on('message')
def handle_message(text):
    print(text)
    sentences = split_into_sentences(text)
    send(sentences, broadcast=True)

@socketio.on('choosen_message')
def choosen_button(id,text):
    sentences = split_into_sentences(text)
    sorted_sentences = get_sorted_messages(sentences=sentences, sent=sentences[int(id)])
    tmp = ['unswer'] + [sentences[int(id)]] + sorted_sentences
    print(tmp)
    send(tmp, broadcast=True)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
	socketio.run(app)
