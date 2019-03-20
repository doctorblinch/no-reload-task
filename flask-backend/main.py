from flask import Flask, render_template, request, jsonify
from models import split_into_sentences, get_sorted_messages

app = Flask('__main__')

@app.route('/')
def index():
    return render_template('index.html', token='test token')

@app.route('/process', methods=['POST'])
def process():
    text = request.form['text']

    if text:
        sentences = split_into_sentences(text);
        return jsonify(sentences)
    return jsonify({'error' : 'Text not available!'})


@app.route('/sort_sentenses', methods=['POST'])
def sort_sentences():
    text = request.form['text']
    main_sentence = request.form['sentence']

    if text and main_sentence:
        sentences = split_into_sentences(text);
        sorted_sentences = get_sorted_messages(sentences, main_sentence)
        return jsonify(sorted_sentences)
    return jsonify({'error': 'Could not sort the sentences!'})


app.run(debug=True)
