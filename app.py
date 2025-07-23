import torch
from flask import Flask, request, jsonify, render_template
from transformers import pipeline

app = Flask(__name__)
summarizer = pipeline("summarization")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data.get("text", "")  
    if not text.strip():
        return jsonify({"summary": "Please enter valid text to summarize."})
    summary = summarizer(text, max_length=60, min_length=20, do_sample=False)
    return jsonify({"summary": summary[0]['summary_text']})

if __name__ == '__main__':
    app.run(debug=True)


