package main

import (
	"buddhist/api/controllers"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/quote", controllers.GetQuote)

	controllers.InitQuotes()

	fmt.Println("Ready to serve Buddhist Quotes at port 4001")

	http.ListenAndServe(":4001", router)
}
