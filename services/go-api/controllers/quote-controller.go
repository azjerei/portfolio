package controllers

import (
	"buddhist/api/models"
	"encoding/json"
	"math/rand"
	"net/http"
)

var quotes [7]string

func InitQuotes() {
	quotes = [...]string{
		"Ceasing to do evil, Cultivating the good, Purifying the heart: This is the teaching of the Buddhas.",
		"If with a pure mind a person speaks or acts, happiness follows them like a never-departing shadow.",
		"All that we are is the result of what we have thought: it is founded on our thoughts and made up of our thoughts.",
		"Quiet the mind and the soul will speak.",
		"What you think, you become. What you feel, you attract. What you imagine, you create.",
		"Happiness will never come to those who fail to appreciate what they already have.",
		"You don't have a soul. You are a soul. You have a body.",
	}
}

func GetQuote(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	quote := quotes[rand.Intn(len(quotes))]
	json.NewEncoder(w).Encode(models.NewQuote(quote))
}
