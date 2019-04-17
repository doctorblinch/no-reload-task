Semantic afficiency test.
=====================
### Purpose
Made as the the test task, can be used to sort sentences of the text in proximity to the given sentence.
### Requirements
Python3 (Tested on python 3.7.0 version)

And installed python3 libraries:
* flask
* flask-socketio
* gensim
### How to use it?
First you need to download main.py, models.py files and templates, static folders. Activate your virtual environmet and install all the libraries
above,using comand:

> python -m venv venv
>
> . venv/bin/activate
>
> pip install -r requirements.txt
>
> python3 main.py

After that the website will be activated and you will need to go over the link **http://127.0.0.1:5000/** where you will
be able to see the app. There will be text area field in witch you input your text, after that you pres submit button and get all the sentences separately, now you are required to choose the base (main) sentence. After you choose - click on it, wait for a while, THE ALGORITHM IS SLOW! And finally you will get an ordered list of sorted sentences.
