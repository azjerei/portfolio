package se.frostkin.kotlinapp

import javafx.application.Application
import javafx.fxml.FXMLLoader
import javafx.scene.Scene
import javafx.stage.Stage

class QuoteApplication : Application() {
    override fun start(stage: Stage) {
        val fxmlLoader = FXMLLoader(QuoteApplication::class.java.getResource("quote-view.fxml"))
        val scene = Scene(fxmlLoader.load(), 1024.0, 768.0)
        stage.title = "Buddhist Quote"
        stage.scene = scene
        stage.show()
    }
}

fun main() {
    Application.launch(QuoteApplication::class.java)
}