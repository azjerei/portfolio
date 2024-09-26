from flask import Flask
from flask import jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
cors = CORS(app)

quotes = [
  "Ceasing to do evil, Cultivating the good, Purifying the heart: This is the teaching of the Buddhas.",
  "If with a pure mind a person speaks or acts, happiness follows them like a never-departing shadow.",
  "All that we are is the result of what we have thought: it is founded on our thoughts and made up of our thoughts.",
  "Quiet the mind and the soul will speak.",
  "What you think, you become. What you feel, you attract. What you imagine, you create.",
  "Happiness will never come to those who fail to appreciate what they already have.",
  "You don't have a soul. You are a soul. You have a body."
]

@app.route("/quote")
def get_quote():
  quote = { "quote": quotes[random.randint(0, len(quotes)-1)] }
  return jsonify(quote)