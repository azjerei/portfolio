package models

type Quote struct {
	Quote string `json:"quote"`
}

func NewQuote(quote string) *Quote {
	return &Quote{Quote: quote}
}
