package se.frostkin.kotlinapp

import javafx.fxml.FXML
import javafx.scene.control.Label

class QuoteController {
    @FXML
    private lateinit var quote: Label

    @FXML
    private fun initialize() {
        val service = QuoteService()
        val quote = service.getQuote()
        this.quote.text = quote;
    }
}